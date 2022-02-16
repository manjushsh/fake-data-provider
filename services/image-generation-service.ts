const IMAGE_GENERATION_SERVICE = {
    textToBase64: ({
        text = 'Placeholder',
        width = 40,
        height = 40,
        fontSize = '14px',
        backgroundColor = '#ACACAC',
        textColor = '#FEFEFF',
    }) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        // Set canvas Background color and apply
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text color and apply
        ctx.fillStyle = textColor;
        ctx.font = `${fontSize} sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Draw text and return base64
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL().replace(/(\r\n|\n|\r)/gm, "");

        // const dataURL = canvas.toDataURL();
        // return dataURL;
    }
};

export default IMAGE_GENERATION_SERVICE;