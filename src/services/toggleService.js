import { interpret } from "xstate";
import { toggleMachine } from "../machines/toggler";

import { useService } from '@xstate/vue'

const service = interpret(toggleMachine).start()

export const useToggleMachine = () => {
  return useService(service)
}
