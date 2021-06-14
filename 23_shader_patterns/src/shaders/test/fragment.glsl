#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}


void main() {
	//gl_FragColor = vec4(vUv, 1.0, 1.0);	
	//gl_FragColor = vec4(vUv.yx, 0.5, 1.0);


	//float strength = vUv.y;
	//float strength = step(0.5, mod(vUv.y * 10.0, 1.0));
	//float strength = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
	
	//float strength = abs(vUv.x - 0.5);
	//float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

	//float strength = floor(vUv.x * 10.0) / 10.0;

	//float strength = random(vUv);

	//vec2 gridUV = vec2(
	//	floor(vUv.x * 10.0) / 10.0,
	//	floor(vUv.y * 10.0) / 10.0
	//);
	//
	//float strength = random(gridUV);

	//float strength = length(vUv - 0.5);
	//float strength = distance(vUv, vec2(0.8, 0.2));
	//float strength = 0.01 / distance(vUv, vec2(0.5));

	//vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
	//float strength = 0.15 / (distance(vec2(rotatedUv.x, (rotatedUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
	//strength *= 0.15 / (distance(vec2(rotatedUv.y, (rotatedUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));	

	//float strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - 0.25));


	// no se puede modificar un varying, hay que crear otro con las mismas propiedades
	// vec2 wavedUv = vec2(
	// 	vUv.x,
	// 	vUv.y + sin(vUv.x * 30.0) * 0.1
	// );

	// float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

	//float strength = cnoise(vUv * 10.0);

	float strength = step(0.9, sin(cnoise(vUv * 10.0) * 20.0));

	// es posible que si el strength sobrepasa el límite 0-1 
	// el color interpolado no sea el esperado
	strength = clamp(strength, 0.0, 1.0);
	
	vec3 black = vec3(0.0);
	vec3 uvColor = vec3(vUv, 1.0);
	vec3 mixedColor = mix(black, uvColor, strength);


	//gl_FragColor = vec4(strength, strength, strength, 1.0);
	gl_FragColor = vec4(mixedColor, 1.0);
}