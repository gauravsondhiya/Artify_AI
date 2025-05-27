import model from '../config/gemini.js';

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Generate image using Gemini API
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const imageData = response.text();

        res.status(200).json({
            success: true,
            data: imageData
        });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate image'
        });
    }
}; 