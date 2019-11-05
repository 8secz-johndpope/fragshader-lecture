#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;

vec3 blend_multiply(vec3 colorA, vec3 colorB) {
    return colorA * colorB;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color0 = texture2D(u_tex0, uv);
    vec4 color1 = texture2D(u_tex1, uv);
    gl_FragColor = vec4(blend_multiply(color0.rgb, color1.rgb), 1.0);
}