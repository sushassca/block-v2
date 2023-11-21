import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as null_to_empty } from './ssr-8d0cd32c.js';
import { io } from 'socket.io-client';

const css = {
  code: ".center.svelte-r9md3{display:grid;align-items:center;justify-items:center}.wrapper.svelte-r9md3{height:100%;width:100%}#map.svelte-r9md3{display:grid}.cell.svelte-r9md3{border:1px solid white;background-color:black;padding:8px;text-align:center;box-sizing:border-box;display:grid;justify-content:center;align-items:center;color:white;text-transform:uppercase;font-family:'Roboto', Times, serif}.f1.svelte-r9md3{background-color:green}.f2.svelte-r9md3{background-color:grey}",
  map: null
};
const height = 500;
const width = 500;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loops;
  let data = null;
  const socket = io();
  socket.on("eventFromServer", (message) => {
    const { row, col, result } = message;
    data[row][col] = result;
  });
  $$result.css.add(css);
  loops = Array.from({ length: 0 }, (_, index) => index);
  return `<div${add_attribute("style", `grid-template-columns: repeat(1, 1fr);`, 0)} class="wrapper center svelte-r9md3"><div id="map"${add_attribute("style", `grid-template-columns: repeat(${data?.length}, 1fr); width: ${width}px; height: ${height}px;`, 0)} class="svelte-r9md3">${each(loops, (row) => {
    return ` ${each(loops, (col) => {
      return ` <div class="${escape(null_to_empty(`cell center ${data[row][col][0]}`), true) + " svelte-r9md3"}">${escape(data[row][col][0])}-${escape(data[row][col][1])}</div>`;
    })}`;
  })}</div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d49d205e.js.map
