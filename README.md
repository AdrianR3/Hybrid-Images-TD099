# Hybrid Images in TouchDesigner

### About Project

This project is my best attempt at implementing the [hybrid image](https://en.wikipedia.org/wiki/Hybrid_image) optical illusion in [TouchDesigner](https://en.wikipedia.org/wiki/TouchDesigner). There is not a lot of documentation in this repository to explain the inner workings of the code itself. However, there are annotations left inside of the project file (`final_hybrid_images.tox`) to explain parts of the network.

### Quick Start

Download and open the latest version of `final_hybrid_images.tox`. Then extract the parts of the network relevant to your project from the <kbd>`project1` COMP</kbd>.

<img src="https://raw.githubusercontent.com/AdrianR3/Hybrid-Images-TD099/c9487ad7e1f3ae9beebac9e7c5873c9b13c1f9d1/sessions/6/progress.png"></img>
This full screenshot of the project is available in `sessions/6/progress.png`. 

More progress screenshots are available in other session folders.

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
