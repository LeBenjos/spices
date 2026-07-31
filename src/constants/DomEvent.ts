export const DomEvent = {
    // Mouse Events
    CLICK: 'click',
    DOUBLE_CLICK: 'dblclick',
    MOUSE_DOWN: 'mousedown',
    MOUSE_UP: 'mouseup',
    MOUSE_MOVE: 'mousemove',
    MOUSE_ENTER: 'mouseenter',
    MOUSE_LEAVE: 'mouseleave',
    MOUSE_OVER: 'mouseover',
    MOUSE_OUT: 'mouseout',
    MOUSE_WHEEL: 'wheel',
    CONTEXT_MENU: 'contextmenu',

    // Pointer Events
    POINTER_DOWN: 'pointerdown',
    POINTER_MOVE: 'pointermove',
    POINTER_UP: 'pointerup',
    POINTER_ENTER: 'pointerenter',
    POINTER_LEAVE: 'pointerleave',
    POINTER_OVER: 'pointerover',
    POINTER_OUT: 'pointerout',
    POINTER_CANCEL: 'pointercancel',

    // Touch Events
    TOUCH_START: 'touchstart',
    TOUCH_MOVE: 'touchmove',
    TOUCH_END: 'touchend',
    TOUCH_CANCEL: 'touchcancel',

    // Keyboard Events
    KEY_DOWN: 'keydown',
    KEY_UP: 'keyup',
    /** @deprecated Legacy in UI Events — use KEY_DOWN with `KeyboardEvent.key` instead. */
    KEY_PRESS: 'keypress',

    // Focus Events
    FOCUS: 'focus',
    BLUR: 'blur',
    FOCUS_IN: 'focusin',
    FOCUS_OUT: 'focusout',

    // Form Events
    CHANGE: 'change',
    INPUT: 'input',
    SUBMIT: 'submit',
    RESET: 'reset',

    // Document Events
    FULLSCREEN_CHANGE: 'fullscreenchange',
    FULLSCREEN_ERROR: 'fullscreenerror',
    VISIBILITY_CHANGE: 'visibilitychange',
    DOM_CONTENT_LOADED: 'DOMContentLoaded',
    READY_STATE_CHANGE: 'readystatechange',

    // Window Events
    ERROR: 'error',
    LOAD: 'load',
    /** @deprecated Unreliable and disables back/forward-cache — use PAGE_HIDE or VISIBILITY_CHANGE instead. */
    UNLOAD: 'unload',
    BEFORE_UNLOAD: 'beforeunload',
    PAGE_HIDE: 'pagehide',
    PAGE_SHOW: 'pageshow',
    RESIZE: 'resize',
    SCROLL: 'scroll',

    // Clipboard Events
    CUT: 'cut',
    COPY: 'copy',
    PASTE: 'paste',

    // Drag and Drop Events
    DRAG: 'drag',
    DRAG_START: 'dragstart',
    DRAG_END: 'dragend',
    DRAG_ENTER: 'dragenter',
    DRAG_LEAVE: 'dragleave',
    DRAG_OVER: 'dragover',
    DROP: 'drop',

    // Media Events
    PLAY: 'play',
    PAUSE: 'pause',
    ENDED: 'ended',
    CAN_PLAY: 'canplay',
    TIME_UPDATE: 'timeupdate',

    // Animation Events
    ANIMATION_START: 'animationstart',
    ANIMATION_END: 'animationend',
    ANIMATION_ITERATION: 'animationiteration',
    ANIMATION_CANCEL: 'animationcancel',

    // Transition Events
    TRANSITION_START: 'transitionstart',
    TRANSITION_END: 'transitionend',
    TRANSITION_CANCEL: 'transitioncancel',

    // Other Events
    BEFORE_PRINT: 'beforeprint',
    AFTER_PRINT: 'afterprint',
    HASH_CHANGE: 'hashchange',
    POP_STATE: 'popstate',
    STORAGE: 'storage',
    ONLINE: 'online',
    OFFLINE: 'offline',
} as const;

export type DomEvent = (typeof DomEvent)[keyof typeof DomEvent];
