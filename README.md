# Hybrid Images in TouchDesigner

## What is a Hybrid Image?

A [hybrid image](https://en.wikipedia.org/wiki/Hybrid_image) is an optical illusion which involves compositing two separate images together into one. Depending on the physical viewing distance, either one or the other image is processed by the viewer's brain.

### Examples
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Southeast_hybrid_image_illusion.svg/500px-Southeast_hybrid_image_illusion.svg.png"></img>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hybrid_image_decomposition.jpg/440px-Hybrid_image_decomposition.jpg" width="300px"></img>

> Bottom Left: Low frequency portion of final image. \
> Bottom Right: High frequency portion of final image. \
> Top Section: Final Hybrid Image

## Making a Hybrid Image

An example hybrid image generator can be found here: https://franciscouzo.github.io/hybrid/

The general process is as follows:

1. Using [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform), calculate the low spatial frequencies of the first image.
2. Using [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform), calculate the high spatial frequencies of the second image.

4. Composite the two images together by either addition, averaging, or overlaying.

## What is TouchDesigner?

TouchDesigner is a node-based visual programming language for real-time interactive multimedia content.[^1]

[^1]: https://en.wikipedia.org/wiki/TouchDesigner
