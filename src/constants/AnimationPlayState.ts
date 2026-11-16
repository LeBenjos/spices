/**
 * Web Animations `playState` values, for `Animation.playState`
 * (CSS animations and transitions included, see `document.getAnimations()`).
 */
export const AnimationPlayState = {
    IDLE: 'idle',
    RUNNING: 'running',
    PAUSED: 'paused',
    FINISHED: 'finished',
} as const;

export type AnimationPlayState = (typeof AnimationPlayState)[keyof typeof AnimationPlayState];
