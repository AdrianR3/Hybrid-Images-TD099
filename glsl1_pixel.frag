
// Gaussian High Pass Pixel Shader

uniform float strength;

// Gaussian kernel
const float kernel[5][5] = {
    { 1.0 / 256.0,  4.0 / 256.0,  6.0 / 256.0,  4.0 / 256.0,  1.0 / 256.0 },
    { 4.0 / 256.0, 16.0 / 256.0, 24.0 / 256.0, 16.0 / 256.0,  4.0 / 256.0 },
    { 6.0 / 256.0, 24.0 / 256.0, 36.0 / 256.0, 24.0 / 256.0,  6.0 / 256.0 },
    { 4.0 / 256.0, 16.0 / 256.0, 24.0 / 256.0, 16.0 / 256.0,  4.0 / 256.0 },
    { 1.0 / 256.0,  4.0 / 256.0,  6.0 / 256.0,  4.0 / 256.0,  1.0 / 256.0 }
};

vec4 gaussianBlur(sampler2D tex, vec2 uv)
{
    vec4 result = vec4(0.0);
    vec2 texelSize = 1.0 / textureSize(tex, 0);

    for (int i = -2; i <= 2; ++i)
    {
        for (int j = -2; j <= 2; ++j)
        {
            result += texture(tex, uv + vec2(i, j) * texelSize) * kernel[i+2][j+2];
        }
    }

    return result;
}

vec4 highPass(sampler2D tex, vec2 uv)
{
    vec4 blurred = gaussianBlur(tex, uv);
    vec4 original = texture(tex, uv);

    // High pass filter result
    vec4 highPassResult = original - blurred;

	highPassResult*=strength;

    return highPassResult;
}

out vec4 fragColor;
void main()
{
	// vec4 color = texture(sTD2DInputs[0], vUV.st);
	//vec4 color = vec4(1);
	//fragColor = TDOutputSwizzle(color);

	vec4 color = highPass(sTD2DInputs[0], vUV.st);
	fragColor = TDOutputSwizzle(color);
}
