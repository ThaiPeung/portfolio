uniform sampler2D uMoonTexture;  
uniform sampler2D uMoonDarkTexture;
uniform vec3 uSunDirection;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun orientation
    float sunOrientation = dot(uSunDirection, normal);

    // Day / Night color
    float moonMix = smoothstep(-0.25, 0.5, sunOrientation);
    vec3 moonColor = texture(uMoonTexture, vUv).rgb;
    vec3 moonDarkColor = texture(uMoonDarkTexture, vUv).rgb;
    color = mix(moonDarkColor, moonColor, moonMix);

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}