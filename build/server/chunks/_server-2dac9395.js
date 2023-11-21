import { JSONPreset } from 'lowdb/node';
import { j as json } from './index-2b68e648.js';
import { io } from 'socket.io-client';

const socket = io("ws://localhost:3000");
const layout = [
  [["f1", null], ["f1", null], ["f1", null], ["f1", null], ["f1", null]],
  [["f1", null], ["f1", null], ["f1", null], ["f1", null], ["f1", null]],
  [["f1", null], ["f1", null], ["f1", null], ["f1", null], ["f1", null]],
  [["f1", null], ["f1", null], ["f1", null], ["f1", null], ["f1", null]],
  [["f1", null], ["f1", null], ["f1", null], ["f1", null], ["f1", null]]
];
const db = await JSONPreset("db.json", { FOREST: layout });
await db.read();
await db.write();
function GET() {
  return json(db.data.FOREST);
}
async function POST({ request, cookies }) {
  const data = await request.json();
  const { type } = data;
  switch (type) {
    case "getBlock":
      return json(db.data.FOREST[data.row][data.col]);
    case "putBlock":
      db.data.FOREST[data.row][data.col] = data.block;
      await db.write();
      socket.emit("action", { row: data.row, col: data.col, result: db.data.FOREST[data.row][data.col] });
      return json(db.data.FOREST[data.row][data.col]);
    default:
      return json(db.data.FOREST);
  }
}

export { GET, POST };
//# sourceMappingURL=_server-2dac9395.js.map
