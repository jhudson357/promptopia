import {Schema, model, models} from 'mongoose'

const PromptSchema = new Schema({
  // specify creator of a prompt
  creator: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
})

// either get the prompt that already exists on the models object
// OR if it doesn't exist, create a new model that's called 'Prompt'
// based on the PromptSchema
const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt