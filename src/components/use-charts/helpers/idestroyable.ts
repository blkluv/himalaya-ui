/**
 * IDESTRØYÅBLE
 * ┌────────────────┐
 * │ ┏━━━━━┓        │
 * │ ┃ ○ ○ ┃        │  ┏━━━━━┓           ┌╲╌╌╱╌┐
 * │ ┃ ○ ○ ┃    x 1 │  ┃ ○ ○ ┃ destroy() ┊ ╲╱  ╵
 * │ ┠─────┨        │  ┃ ○ ○ ┃  ╭───╯╲   ╷ ╱╲  ┊
 * │ ┗━━━━━┛        │  ┠─────┨  ╰───╮╱   ├╱ ╌╲ ┤
 * │ destroy()  x 1 │  ┗━━━━━┛           └ ╌╌ ╌┘
 * └────────────────┘
 */
export interface IDestroyable {
  destroy(): void
}