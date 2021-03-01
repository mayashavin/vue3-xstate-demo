import { Machine, assign } from 'xstate';

// This machine is completely decoupled from Vue
export const toggleMachine = Machine({
  id: 'toggle',
  context: {
    /* some data */    
    background: { backgroundColor: "#dae1e7"},
    indicator: { transform: "translateX(0)" }
  },
  initial: 'inactive',
  states: {
    inactive: {
      on: { 
        TOGGLE: { 
          target: 'active', 
          actions: assign({
            background: () => ({ backgroundColor: "#3490dc"}),
            indicator: () => ({ transform: "translateX(2rem)" })
          })
        }
      }
    },
    active: {
      on: { 
        TOGGLE: { 
          target: 'inactive',
          actions: assign({
            background: () => ({ backgroundColor: "#dae1e7"}),
            indicator: () => ({ transform: "translateX(0)" })
          })
        }
      }
    }
  }
});