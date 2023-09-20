import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export const POST = async (req) => {
  // extract data you pass thru the POST request
  const { userId, prompt, tag } = await req.json()

  try {
    // connect to the db
    await connectToDB()
    // create new prompt
    const newPrompt = new Prompt({ 
      creator: userId, 
      prompt,
      tag,
    })

    // save prompt to the database
    await newPrompt.save()
    // return a new response and specify status for created
    return new Response(JSON.stringify(newPrompt, { status: 201 }))
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 })
  }
}