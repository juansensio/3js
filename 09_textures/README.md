albedo (color)
alpha (opacity)
height maps (vertices displacement)
normal (light)
ambient occlusion (fake shadows)
metalness (reflections)
roughness (light dissipation)
other ...

use textures with power of 2 dimensions (512x512, 1024x1024, ...) because of mip map. If not, threejs will resize and its worse for performance.

png (with transparency) vs 2 jpeg (color + alpha)

jpeg is lighter, png has more quality

textures can be used for masking, using the RGB channels for different things (load one texture to reuse in different parts, for example blue for elevation, red for transparency, green for shadows)
