// vite.config.js
import { defineConfig } from "file:///C:/Users/huan5/OneDrive/M%C3%A1y%20t%C3%ADnh/Nam/admin/FE/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/huan5/OneDrive/M%C3%A1y%20t%C3%ADnh/Nam/admin/FE/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import styleImport from "file:///C:/Users/huan5/OneDrive/M%C3%A1y%20t%C3%ADnh/Nam/admin/FE/node_modules/vite-plugin-style-import/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\huan5\\OneDrive\\M\xE1y t\xEDnh\\Nam\\admin\\FE";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: true
  },
  resolve: {
    alias: {
      "@": path.join(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#224922" }
      }
    },
    modules: {
      localsConvention: "camelCase"
    }
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          }
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxodWFuNVxcXFxPbmVEcml2ZVxcXFxNXHUwMEUxeSB0XHUwMEVEbmhcXFxcTmFtXFxcXGFkbWluXFxcXEZFXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxodWFuNVxcXFxPbmVEcml2ZVxcXFxNXHUwMEUxeSB0XHUwMEVEbmhcXFxcTmFtXFxcXGFkbWluXFxcXEZFXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9odWFuNS9PbmVEcml2ZS9NJUMzJUExeSUyMHQlQzMlQURuaC9OYW0vYWRtaW4vRkUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBzdHlsZUltcG9ydCBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZS1pbXBvcnQnO1xyXG4vLyBpbXBvcnQgdml0ZVN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGguam9pbihfX2Rpcm5hbWUsICdzcmMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgbGVzczoge1xyXG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIG1vZGlmeVZhcnM6IHsgJ0BwcmltYXJ5LWNvbG9yJzogJyMyMjQ5MjInIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIC4uLi5cclxuICAgIH0sXHJcbiAgICBtb2R1bGVzOiB7XHJcbiAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2UnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIC8vIHZpdGVTdmdyKCksXHJcbiAgICByZWFjdCgpLFxyXG4gICAgc3R5bGVJbXBvcnQoe1xyXG4gICAgICBsaWJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGlicmFyeU5hbWU6ICdhbnRkJyxcclxuICAgICAgICAgIGVzTW9kdWxlOiB0cnVlLFxyXG4gICAgICAgICAgcmVzb2x2ZVN0eWxlOiAobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZS9pbmRleGA7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVixTQUFTLG9CQUFvQjtBQUNsWCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8saUJBQWlCO0FBSHhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssS0FBSyxrQ0FBVyxLQUFLO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixtQkFBbUI7QUFBQSxRQUNuQixZQUFZLEVBQUUsa0JBQWtCLFVBQVU7QUFBQSxNQUM1QztBQUFBLElBRUY7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLGtCQUFrQjtBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBRVAsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLFFBQ0o7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxVQUNWLGNBQWMsQ0FBQyxTQUFTO0FBQ3RCLG1CQUFPLFdBQVc7QUFBQSxVQUNwQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
