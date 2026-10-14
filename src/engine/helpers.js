/*
 * MODULE CONTRACT
 * Every module is an object with these properties:
 *
 *   context   - the shared AudioContext, passed in when the module is created
 *
 *   outputs   - jacks that send signal out
 *               { jackName: AudioNode }
 *
 *   inputs    - jacks that receive signal
 *               { jackName: AudioNode }   audio in   (e.g. a filter's "in")
 *               { jackName: AudioParam }  modulation (e.g. a filter's "cutoff")
 *
 *   params    - knobs, set directly with .value
 *               { knobName: AudioParam }
 *
 *   destroy() - stops any sources and disconnects all outputs
 *
 * Any of these lists may be empty ({}), but it must always exist.
 *
 * A cable is always:  moduleA.outputs[jack].connect(moduleB.inputs[jack])
 */

// Disconnect a module's output
export function disconnectOutputs(moduleOutputs) {
    if(moduleOutputs !== null)
    {
        const outputs = Object.values(moduleOutputs)
        for(const node of outputs) {
            console.log(`Disconnect ${node}`)
            node.disconnect()
        }
    }
}