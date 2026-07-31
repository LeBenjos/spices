# @benjos/spices

Collection of TypeScript common constant files for personal projects.

ESM-only. Ships compiled JavaScript with type declarations — works in plain JS projects too, TypeScript is optional.

## Installation

```bash
npm install @benjos/spices
```

## Usage

```ts
import { DomEvent, KeyboardKey, KeyboardCode } from '@benjos/spices';

window.addEventListener(DomEvent.KEY_DOWN, (event) => {
    if (event.key === KeyboardKey.ESCAPE) {
        closeModal();
    }
    // Physical key position, independent of keyboard layout:
    if (event.code === KeyboardCode.KEY_W) {
        moveForward();
    }
});
```

Each constant is also exported as the string-literal union of its values:

```ts
import type { DomEvent, KeyboardKey, KeyboardCode } from '@benjos/spices';

function on(event: DomEvent, handler: EventListener): void { /* ... */ }
const shortcut: KeyboardKey = 'Escape';
```

## Available Constants

### DomEvent

DOM event names: mouse, pointer, touch, keyboard, focus, form, document,
window, clipboard, drag & drop, media, animation, and transition events.

### KeyboardKey

Values of `KeyboardEvent.key` (layout-dependent, US-QWERTY for punctuation):

- Letters: `A`–`Z` hold the unshifted value (`KeyboardKey.A === 'a'`);
  `UPPER_A`–`UPPER_Z` hold the Shift/CapsLock value (`'A'`)
- Digits: `DIGIT_0`–`DIGIT_9`, and their shifted symbols (`EXCLAMATION_MARK`, `AT`, ...)
- Navigation: `ARROW_UP`, `ARROW_DOWN`, `ARROW_LEFT`, `ARROW_RIGHT`, `HOME`, `END`, ...
- Special: `ENTER`, `ESCAPE`, `TAB`, `BACKSPACE`, `SPACE`, ...
- Modifiers: `SHIFT`, `CONTROL`, `ALT`, `META`
- Function keys: `F1`–`F12`

### KeyboardCode

Values of `KeyboardEvent.code` — physical key positions, layout-independent:
`KEY_A`–`KEY_Z`, `DIGIT_0`–`DIGIT_9`, `NUMPAD_0`–`NUMPAD_9` and numpad operators,
left/right modifier variants (`SHIFT_LEFT`, `META_RIGHT`, ...), `F1`–`F12`, punctuation.

## Migrating from 1.x

| 1.x | 2.0 |
| --- | --- |
| `KeyboardConstant.KEYS.*` | `KeyboardKey.*` |
| `KeyboardConstant.CODES.*` | `KeyboardCode.*` |
| `KeyboardConstant.KEYS.A` (`'A'`) | `KeyboardKey.UPPER_A` |
| `KeyboardConstant.KEYS.LOWER_A` (`'a'`) | `KeyboardKey.A` |
| `KeyboardConstant.KEYS.QUOTE_2` | `KeyboardKey.DOUBLE_QUOTE` |
| `KeyboardConstant.KEYS.OPEN_BRACE` / `CLOSE_BRACE` | `KeyboardKey.BRACE_LEFT` / `BRACE_RIGHT` |
| `KeyboardConstant.KEYS.EXCLAMATION` | `KeyboardKey.EXCLAMATION_MARK` |
| `KeyboardConstant.KEYS.SHARP` | `KeyboardKey.HASH` |
| `DomEvent.MOUSE_WHEEL` | `DomEvent.WHEEL` |
| `DomEvent.KEY_PRESS` (deprecated event) | removed — use `DomEvent.KEY_DOWN` |
| `DomEvent.UNLOAD` (deprecated event) | removed — use `DomEvent.PAGE_HIDE` or `DomEvent.VISIBILITY_CHANGE` |
| `DomEventType` | removed — use the `DomEvent` type (same string union) |
| `KeyboardConstantType` | removed — it was the union of the `KEYS`/`CODES` object shapes, not of key strings; use the `KeyboardKey` / `KeyboardCode` types instead |

## License

ISC
