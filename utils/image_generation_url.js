import { OpenAI } from "openai"

// const outputImg = document.getElementById('output-img')

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

// document.getElementById("submit-btn").addEventListener("click", () => {
//     const prompt = document.getElementById("instruction").value
//     generateImage(prompt)
// })

async function generateImage(prompt) {
    const response = await openai.images.generate({
        model: 'dall-e-2', // default dall-e-2
        prompt: prompt, //required
        n: 1, //default 1
        size: '1024x1024', //default 1024x1024
        style: 'vivid', //default vivid (other option: natural)
        response_format: 'url' //default url
    })
    console.log(response)
    // outputImg.innerHTML = `<img src="${response.data[0].url}" alt="The Image API Failed">`
}

//A 16th-century woman with long brown hair standing in front of a green vista with cloudy skies. She's looking at the viewer with a faint smile on her lips.

//{created: 1700237567, data: [{revised_prompt: "A Hispanic woman from the 16th-century with long brown hair stands in front of a sprawling green vista with cloudy skies. Her gaze meets the viewer's, a subtle smile playing on her lips. She embodies the grace and elegance of the era, her attire reflecting the styles prevalent then. This tranquil scene serves as a window into the peaceful simplicity of life during the 16th-century.", url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-hILmMJhWE2V3rB3oGuJuRWMy/user-I0qPVFPrrQZwfgP5K9Y2F5yN/img-INu2UYiVwWiStxqueMwk79WR.png?st=2023-11-17T15%3A12%3A47Z&se=2023-11-17T17%3A12%3A47Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-17T02%3A36%3A47Z&ske=2023-11-18T02%3A36%3A47Z&sks=b&skv=2021-08-06&sig=SuYbsaRv5yLp35j2nBWfDT%2BzB5/Rnya2JoiIr3qUwdE%3D"}]}

//{created: 1700237684, data: [{url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-hILmMJhWE2V3rB3oGuJuRWMy/user-I0qPVFPrrQZwfgP5K9Y2F5yN/img-USthlFzsID539UyW1yfI5oO1.png?st=2023-11-17T15%3A14%3A44Z&se=2023-11-17T17%3A14%3A44Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-17T03%3A52%3A26Z&ske=2023-11-18T03%3A52%3A26Z&sks=b&skv=2021-08-06&sig=rjLdFZcYIvUgGCViMNm3WXoq0pjAYSjj84mZzxFR4gY%3D"}]}

let prompt = `The man in the image is sitting at a desk, with a large stack of cash piled up in front of him. He has a wide smile on his face, with his eyes squinting joyfully. His posture is relaxed, indicating his comfort with the wealth he's surrounded by. He's holding a pen or pencil in his hand, which he's using to write or draw something on a piece of paper.

However, despite his happy expression, there's a hint of concern in his eyes. Maybe there's a subtle furrow in his brow, or a slight downturn at the corners of his mouth. Perhaps his gaze is directed slightly downward, as if he's pondering the consequences of his wealth.

In the background of the image, there could be symbols or imagery that represent the potential downsides of having too much money. This could include things like a crumbling economy, environmental destruction, or social inequality. These elements should be subtle, but still noticeable enough to convey the idea that the man is aware of the complexities of wealth`

generateImage(prompt);
