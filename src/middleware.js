export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/pcbuilder",
    "/pcbuilder/CPU",
    "/pcbuilder/Motherboard",
    "/pcbuilder/Ram",
    "/pcbuilder/Power%20Supply%20Unit",
    "/pcbuilder/Storage%20Device",
    "/pcbuilder/Monitor",
  ],
};
