declare global {
  declare module "*.glsl" {
    const content: string;
    export default content;
  }
}
declare module "*.glsl"
