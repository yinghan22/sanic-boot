const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/c4Diagram-c83219d4.Dc3eiVvE.js","assets/chunks/svgDrawCommon-b86b1483.C3xSiIo5.js","assets/chunks/framework.D4U75H9x.js","assets/chunks/flowDiagram-50d868cf.CNnVa17S.js","assets/chunks/flowDb-c6c81e3f.7QReM05v.js","assets/chunks/graph.CkTK9xy0.js","assets/chunks/layout.DKhFFGJF.js","assets/chunks/styles-d45a18b0.CQNOfFOq.js","assets/chunks/index-5325376f.ChS2Ksug.js","assets/chunks/clone.7aF5-URv.js","assets/chunks/edges-96097737.BiauC_Qu.js","assets/chunks/createText-1719965b.D2G4D5r5.js","assets/chunks/line.CVAfBH6v.js","assets/chunks/channel.pdarXJ1M.js","assets/chunks/flowDiagram-v2-4f6560a1.CU-xdpH7.js","assets/chunks/erDiagram-0228fc6a.Ikn1HGzO.js","assets/chunks/gitGraphDiagram-82fe8481.CefYxlPV.js","assets/chunks/ganttDiagram-a2739b55.CHIKsLFq.js","assets/chunks/linear.D03zgFLz.js","assets/chunks/init.Gi6I4Gst.js","assets/chunks/infoDiagram-8eee0895.Bie638fK.js","assets/chunks/pieDiagram-a8764435.BzyMiozc.js","assets/chunks/arc.CB_kBSMi.js","assets/chunks/ordinal.BYWQX77i.js","assets/chunks/quadrantDiagram-1e28029f.C4Ts-tEQ.js","assets/chunks/xychartDiagram-f5964ef8.xXkkJZ0g.js","assets/chunks/requirementDiagram-08caed73.JrfZnN5J.js","assets/chunks/sequenceDiagram-c5b8d532.Cl64QM-v.js","assets/chunks/classDiagram-beda092f.yJxJFsKn.js","assets/chunks/styles-b4e223ce.BuJOO_4j.js","assets/chunks/classDiagram-v2-2358418a.DERtc8MH.js","assets/chunks/stateDiagram-1ecb1508.DRJgi36E.js","assets/chunks/styles-ca3715f6.DAZZDpbu.js","assets/chunks/stateDiagram-v2-c2b004d7.GKQj9kzw.js","assets/chunks/journeyDiagram-c64418c1.Dy68T_os.js","assets/chunks/flowchart-elk-definition-6af322e1.DeurhFv8.js","assets/chunks/timeline-definition-faaaa080.CEJmUZuL.js","assets/chunks/mindmap-definition-8da855dc.DuJ2g8iH.js","assets/chunks/sankeyDiagram-a04cb91d.HOmtk39d.js","assets/chunks/Tableau10.B-NsZVaP.js","assets/chunks/blockDiagram-c4efeb88.YLmpGgUH.js"])))=>i.map(i=>d[i]);
import{d as Ps,ai as Ho,x as Yt,h as Yn,c as bt,o as Tt,e as ut,j as B,G as Cr,H as Vo,n as vn,a as Cu,t as Je,aj as Zi,ak as us,z as Tr,p as Dl,s as Go,U as Un,al as Ae,am as k_,an as B_,Q as bm,r as N_,ah as O_,J as U_,k as z_}from"./chunks/framework.D4U75H9x.js";const ds=(e,t)=>{if(document){const n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}else console.log("未知环境")};function Fs(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}const H_={class:"toolbar"},V_={class:"toolbar-left"},G_=["onClick"],W_={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},$_={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},q_={class:"toolbar-right"},X_={key:0,class:"control-group"},j_=["title"],Y_={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},K_={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},Z_={key:1,class:"control-group"},J_=["title"],Q_={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},tx={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},ex={class:"content-area"},nx={class:"code-panel"},ix={class:"code-viewer"},rx={class:"code-content"},sx={class:"preview-panel"},ox=["innerHTML"],ax={key:0,class:"empty-state"};var Tm=Ps({__name:"index",props:{content:{type:String,required:!1,default:""},height:{type:String,required:!1,default:"600px"},theme:{type:String,required:!1,default:"light"}},setup(e){Ho(f=>({"0ad12ed4-height":f.height}));const t=e,n=Yt("preview"),i=Yt(t.content),r=Yt(!1),s=[{key:"preview",label:"预览"},{key:"code",label:"代码"}],o=f=>{if(!f)return"";let m=f;return m=m.replace(/\[b\](.*?)\[\/b\]/gi,"<strong>$1</strong>"),m=m.replace(/\[i\](.*?)\[\/i\]/gi,"<em>$1</em>"),m=m.replace(/\[u\](.*?)\[\/u\]/gi,'<span style="text-decoration: underline;">$1</span>'),m=m.replace(/\[s\](.*?)\[\/s\]/gi,'<span style="text-decoration: line-through;">$1</span>'),m=m.replace(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<span style="color: $1;">$2</span>'),m=m.replace(/\[size=(\d+)\](.*?)\[\/size\]/gi,'<span style="font-size: $1px;">$2</span>'),m=m.replace(/\[url=(.*?)\](.*?)\[\/url\]/gi,'<a href="$1" target="_blank" rel="noopener noreferrer">$2</a>'),m=m.replace(/\[url\](.*?)\[\/url\]/gi,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'),m=m.replace(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" alt="BBCode Image" style="max-width: 100%; height: auto;" />'),m=m.replace(/\[img=(.*?)x(.*?)\](.*?)\[\/img\]/gi,'<img src="$3" alt="BBCode Image" style="width: $1px; height: $2px;" />'),m=m.replace(/\[quote\](.*?)\[\/quote\]/gis,'<blockquote class="bbcode-quote">$1</blockquote>'),m=m.replace(/\[quote=(.*?)\](.*?)\[\/quote\]/gis,'<blockquote class="bbcode-quote"><cite>$1 写道：</cite>$2</blockquote>'),m=m.replace(/\[code\](.*?)\[\/code\]/gis,'<pre class="bbcode-code"><code>$1</code></pre>'),m=m.replace(/\[center\](.*?)\[\/center\]/gi,'<div style="text-align: center;">$1</div>'),m=m.replace(/\[list\](.*?)\[\/list\]/gis,(_,g)=>`<ul class="bbcode-list">${g.replace(/\[\*\](.*?)(?=\[\*\]|\[\/list\]|$)/gi,"<li>$1</li>")}</ul>`),m=m.replace(/\[list=1\](.*?)\[\/list\]/gis,(_,g)=>`<ol class="bbcode-list">${g.replace(/\[\*\](.*?)(?=\[\*\]|\[\/list\]|$)/gi,"<li>$1</li>")}</ol>`),m=m.replace(/\[table\](.*?)\[\/table\]/gis,'<table class="bbcode-table">$1</table>'),m=m.replace(/\[tr\](.*?)\[\/tr\]/gi,"<tr>$1</tr>"),m=m.replace(/\[td\](.*?)\[\/td\]/gi,"<td>$1</td>"),m=m.replace(/\[th\](.*?)\[\/th\]/gi,"<th>$1</th>"),m=m.replace(/\n/g,"<br>"),m},a=Yn(()=>o(i.value)),l=async()=>{try{await navigator.clipboard.writeText(i.value)}catch(f){console.error("复制失败:",f)}},c=()=>{const f=new Blob([i.value],{type:"text/plain"});ds(URL.createObjectURL(f),"content.bbcode")},h=()=>{const f=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BBCode 转换结果</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        .bbcode-quote { background: #f4f4f4; border-left: 4px solid #ccc; margin: 10px 0; padding: 10px; }
        .bbcode-quote cite { font-weight: bold; display: block; margin-bottom: 5px; }
        .bbcode-code { background: #f8f8f8; border: 1px solid #ddd; padding: 10px; overflow-x: auto; }
        .bbcode-list { margin: 10px 0; padding-left: 20px; }
        .bbcode-table { border-collapse: collapse; width: 100%; margin: 10px 0; }
        .bbcode-table td, .bbcode-table th { border: 1px solid #ddd; padding: 8px; text-align: left; }
        .bbcode-table th { background-color: #f2f2f2; font-weight: bold; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
        img { max-width: 100%; height: auto; }
    </style>
</head>
<body>
    ${a.value}
</body>
</html>`,m=new Blob([f],{type:"text/html"});ds(URL.createObjectURL(m),"content.html")},d=()=>{r.value=!r.value},u=()=>{r.value=!1};return(f,m)=>(Tt(),bt("div",{class:vn(["bbcode-container",{fullscreen:r.value}])},[ut(" Header Toolbar "),B("div",H_,[B("div",V_,[(Tt(),bt(Cr,null,Vo(s,_=>B("button",{key:_.key,onClick:g=>n.value=_.key,class:vn(["tab-button",{active:n.value===_.key}])},[_.key==="preview"?(Tt(),bt("svg",W_,[...m[0]||(m[0]=[B("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"},null,-1)])])):ut("v-if",!0),_.key==="code"?(Tt(),bt("svg",$_,[...m[1]||(m[1]=[B("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"},null,-1)])])):ut("v-if",!0),Cu(" "+Je(_.label),1)],10,G_)),64))]),B("div",q_,[ut(" 预览模式的工具栏 "),n.value==="preview"?(Tt(),bt("div",X_,[B("button",{onClick:h,class:"control-button",title:"下载HTML"},m[2]||(m[2]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:d,class:"control-button",title:r.value?"退出全屏":"全屏"},[r.value?(Tt(),bt("svg",K_,m[4]||(m[4]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",Y_,m[3]||(m[3]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,j_)])):ut("v-if",!0),ut(" 代码模式的工具栏 "),n.value==="code"?(Tt(),bt("div",Z_,[B("button",{onClick:l,class:"control-button",title:"复制代码"},m[5]||(m[5]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})],-1)])),B("button",{onClick:c,class:"control-button",title:"下载BBCode"},m[6]||(m[6]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:d,class:"control-button",title:r.value?"退出全屏":"全屏"},[r.value?(Tt(),bt("svg",tx,m[8]||(m[8]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",Q_,m[7]||(m[7]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,J_)])):ut("v-if",!0)])]),ut(" Content Area "),B("div",ex,[ut(" Code Viewer "),Zi(B("div",nx,[B("div",ix,[B("pre",rx,Je(i.value),1)])],512),[[us,n.value==="code"]]),ut(" BBCode Preview "),Zi(B("div",sx,[B("div",{class:"bbcode-preview",innerHTML:a.value},null,8,ox),ut(" Empty State "),i.value.trim()?ut("v-if",!0):(Tt(),bt("div",ax,m[9]||(m[9]=[B("div",{class:"empty-icon"},"📝",-1),B("h3",null,"开始预览你的BBCode",-1),B("p",null,"切换到代码模式查看BBCode源码",-1)])))],512),[[us,n.value==="preview"]])]),ut(" Fullscreen Overlay (when in fullscreen mode) "),r.value?(Tt(),bt("div",{key:0,class:"fullscreen-overlay",onClick:u},m[10]||(m[10]=[B("div",{class:"fullscreen-close-hint"},"点击任意位置或按 ESC 退出全屏",-1)]))):ut("v-if",!0)],2))}}),lx=`
.dark .content-area[data-v-0ad12ed4] {\r
  background: #99999980 !important;
}
.dark .code-viewer[data-v-0ad12ed4] {\r
  background: #99999980 !important;
}
.dark .control-button[data-v-0ad12ed4]:hover {\r
  background: #cccccc80 !important;
}
.dark .toolbar[data-v-0ad12ed4] {\r
  background: #1d1d1d !important;
}
.dark .control-group[data-v-0ad12ed4] {\r
  background-color: #000 !important;
}
.dark .toolbar .tab-button.active[data-v-0ad12ed4]{\r
  background-color: #dbeafe80 !important;
}
.dark .toolbar .tab-button[data-v-0ad12ed4]:hover{\r
  background-color: #9299a380 !important;\r
  color: white;
}
.bbcode-container[data-v-0ad12ed4] {\r
  background: white;\r
  border-radius: 8px;\r
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;\r
  overflow: hidden;\r
  height: var(--0ad12ed4-height);\r
  transition: all 0.3s ease;\r
  position: relative;
}
.bbcode-container.fullscreen[data-v-0ad12ed4] {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  z-index: 1000;\r
  border-radius: 0;\r
  height: 100vh !important;\r
  margin: 0;\r
  padding: 0;
}
.bbcode-container.fullscreen .content-area[data-v-0ad12ed4] {\r
  background: white;\r
  height: calc(100vh - 60px);\r
  margin: 0;\r
  padding: 0;
}
.fullscreen-overlay[data-v-0ad12ed4] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.8);\r
  z-index: -1;\r
  cursor: pointer;
}
.fullscreen-close-hint[data-v-0ad12ed4] {\r
  position: absolute;\r
  top: 10px;\r
  right: 20px;\r
  color: white;\r
  font-size: 14px;\r
  padding: 8px 12px;\r
  background: rgba(0, 0, 0, 0.6);\r
  border-radius: 4px;\r
  z-index: 1001;
}
.toolbar[data-v-0ad12ed4] {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 12px 16px;\r
  background: #f9fafb;\r
  border-bottom: 1px solid #e5e7eb;\r
  height: 60px;
}
.toolbar-left[data-v-0ad12ed4] {\r
  display: flex;\r
  gap: 4px;
}
.toolbar-right[data-v-0ad12ed4] {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;
}
.tab-button[data-v-0ad12ed4] {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 16px;\r
  border-radius: 6px;\r
  font-size: 14px;\r
  font-weight: 500;\r
  transition: all 0.2s;\r
  color: #6b7280;\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;
}
.tab-button[data-v-0ad12ed4]:hover {\r
  color: #374151;\r
  background: white;
}
.tab-button.active[data-v-0ad12ed4] {\r
  background: #dbeafe;\r
  color: #1d4ed8;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.control-group[data-v-0ad12ed4] {\r
  display: flex;\r
  align-items: center;\r
  background: white;\r
  border-radius: 6px;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;
}
.control-button[data-v-0ad12ed4] {\r
  padding: 8px;\r
  background: transparent;\r
  border: none;\r
  color: #6b7280;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border-right: 1px solid #e5e7eb;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;
}
.control-button[data-v-0ad12ed4]:last-child {\r
  border-right: none;
}
.control-button[data-v-0ad12ed4]:first-child {\r
  border-top-left-radius: 6px;\r
  border-bottom-left-radius: 6px;
}
.control-button[data-v-0ad12ed4]:last-child {\r
  border-top-right-radius: 6px;\r
  border-bottom-right-radius: 6px;
}
.control-button[data-v-0ad12ed4]:hover {\r
  background: #f9fafb;\r
  color: #374151;
}
.icon[data-v-0ad12ed4] {\r
  width: 16px;\r
  height: 16px;
}
.content-area[data-v-0ad12ed4] {\r
  flex: 1;\r
  position: relative;\r
  height: calc(100% - 60px);
}
.code-panel[data-v-0ad12ed4] {\r
  height: 100%;\r
  overflow: hidden;
}
.code-viewer[data-v-0ad12ed4] {\r
  height: 100%;\r
  overflow: auto;\r
  background: #f9fafb;
}
.code-content[data-v-0ad12ed4] {\r
  width: 100%;\r
  height: 100%;\r
  margin: 0;\r
  padding: 16px;\r
  font-family: "Fira Code", "Monaco", "Consolas", monospace;\r
  font-size: 14px;\r
  color: #374151;\r
  line-height: 1.6;\r
  white-space: pre-wrap;\r
  background: transparent;\r
  border: none;\r
  outline: none;
}
.preview-panel[data-v-0ad12ed4] {\r
  height: 100%;\r
  position: relative;\r
  overflow: auto;
}
.bbcode-preview[data-v-0ad12ed4] {\r
  padding: 20px;\r
  line-height: 1.6;\r
  font-family: Arial, sans-serif;
}
.empty-state[data-v-0ad12ed4] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #6b7280;
}
.empty-icon[data-v-0ad12ed4] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.empty-state h3[data-v-0ad12ed4] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #374151;
}
.empty-state p[data-v-0ad12ed4] {\r
  font-size: 14px;
}\r
\r
/* BBCode preview styles */
[data-v-0ad12ed4] .bbcode-quote {\r
  background: #f4f4f4;\r
  border-left: 4px solid #ccc;\r
  margin: 10px 0;\r
  padding: 10px;\r
  border-radius: 4px;
}
[data-v-0ad12ed4] .bbcode-quote cite {\r
  font-weight: bold;\r
  display: block;\r
  margin-bottom: 5px;\r
  color: #666;
}
[data-v-0ad12ed4] .bbcode-code {\r
  background: #f8f8f8;\r
  border: 1px solid #ddd;\r
  padding: 10px;\r
  overflow-x: auto;\r
  border-radius: 4px;\r
  margin: 10px 0;
}
[data-v-0ad12ed4] .bbcode-code code {\r
  font-family: "Fira Code", "Monaco", "Consolas", monospace;\r
  font-size: 13px;\r
  line-height: 1.4;\r
  background: none;\r
  padding: 0;
}
[data-v-0ad12ed4] .bbcode-list {\r
  margin: 10px 0;\r
  padding-left: 20px;
}
[data-v-0ad12ed4] .bbcode-table {\r
  border-collapse: collapse;\r
  width: 100%;\r
  margin: 10px 0;\r
  border: 1px solid #ddd;
}
[data-v-0ad12ed4] .bbcode-table td,[data-v-0ad12ed4] .bbcode-table th {\r
  border: 1px solid #ddd;\r
  padding: 8px;\r
  text-align: left;
}
[data-v-0ad12ed4] .bbcode-table th {\r
  background-color: #f2f2f2;\r
  font-weight: bold;
}
[data-v-0ad12ed4] .bbcode-preview a {\r
  color: #0066cc;\r
  text-decoration: none;
}
[data-v-0ad12ed4] .bbcode-preview a:hover {\r
  text-decoration: underline;
}
[data-v-0ad12ed4] .bbcode-preview img {\r
  max-width: 100%;\r
  height: auto;\r
  margin: 10px 0;\r
  border-radius: 4px;
}\r
\r
/* Custom scrollbar */
.code-viewer[data-v-0ad12ed4]::-webkit-scrollbar,\r
.preview-panel[data-v-0ad12ed4]::-webkit-scrollbar {\r
  width: 8px;\r
  height: 8px;
}
.code-viewer[data-v-0ad12ed4]::-webkit-scrollbar-track,\r
.preview-panel[data-v-0ad12ed4]::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
  border-radius: 4px;
}
.code-viewer[data-v-0ad12ed4]::-webkit-scrollbar-thumb,\r
.preview-panel[data-v-0ad12ed4]::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 4px;
}
.code-viewer[data-v-0ad12ed4]::-webkit-scrollbar-thumb:hover,\r
.preview-panel[data-v-0ad12ed4]::-webkit-scrollbar-thumb:hover {\r
  background: #a1a1a1;
}\r
\r
/* Responsive adjustments */
@media (max-width: 768px) {
.toolbar[data-v-0ad12ed4] {\r
    flex-direction: column;\r
    gap: 12px;\r
    padding: 16px;\r
    height: auto;
}
.toolbar-left[data-v-0ad12ed4],\r
  .toolbar-right[data-v-0ad12ed4] {\r
    width: 100%;\r
    justify-content: center;
}
.tab-button[data-v-0ad12ed4] {\r
    flex: 1;\r
    justify-content: center;
}
}\r
\r
/* Print styles */
@media print {
.toolbar[data-v-0ad12ed4] {\r
    display: none;
}
.bbcode-container[data-v-0ad12ed4] {\r
    box-shadow: none;\r
    border: none;
}
}\r
`;Fs(lx);Tm.__scopeId="data-v-0ad12ed4";Tm.__file="packages/BBCode/index.vue";var cx={value:()=>{}};function Eu(){for(var e=0,t=arguments.length,n={},i;e<t;++e){if(!(i=arguments[e]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ua(n)}function Ua(e){this._=e}function hx(e,t){return e.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ua.prototype=Eu.prototype={constructor:Ua,on:function(e,t){var n=this._,i=hx(e+"",n),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(e=i[s]).type)&&(r=ux(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(e=i[s]).type)n[r]=Rd(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Rd(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ua(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],i=0,r=s.length;i<r;++i)s[i].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var i=this._[e],r=0,s=i.length;r<s;++r)i[r].value.apply(t,n)}};function ux(e,t){for(var n=0,i=e.length,r;n<i;++n)if((r=e[n]).name===t)return r.value}function Rd(e,t,n){for(var i=0,r=e.length;i<r;++i)if(e[i].name===t){e[i]=cx,e=e.slice(0,i).concat(e.slice(i+1));break}return n!=null&&e.push({name:t,value:n}),e}var ch="http://www.w3.org/1999/xhtml";const Ld={svg:"http://www.w3.org/2000/svg",xhtml:ch,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Pl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Ld.hasOwnProperty(t)?{space:Ld[t],local:e}:e}function dx(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===ch&&t.documentElement.namespaceURI===ch?t.createElement(e):t.createElementNS(n,e)}}function fx(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Sm(e){var t=Pl(e);return(t.local?fx:dx)(t)}function px(){}function wu(e){return e==null?px:function(){return this.querySelector(e)}}function mx(e){typeof e!="function"&&(e=wu(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var s=t[r],o=s.length,a=i[r]=new Array(o),l,c,h=0;h<o;++h)(l=s[h])&&(c=e.call(l,l.__data__,h,s))&&("__data__"in l&&(c.__data__=l.__data__),a[h]=c);return new bn(i,this._parents)}function gx(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function _x(){return[]}function Mm(e){return e==null?_x:function(){return this.querySelectorAll(e)}}function xx(e){return function(){return gx(e.apply(this,arguments))}}function vx(e){typeof e=="function"?e=xx(e):e=Mm(e);for(var t=this._groups,n=t.length,i=[],r=[],s=0;s<n;++s)for(var o=t[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(e.call(l,l.__data__,c,o)),r.push(l));return new bn(i,r)}function Cm(e){return function(){return this.matches(e)}}function Em(e){return function(t){return t.matches(e)}}var yx=Array.prototype.find;function bx(e){return function(){return yx.call(this.children,e)}}function Tx(){return this.firstElementChild}function Sx(e){return this.select(e==null?Tx:bx(typeof e=="function"?e:Em(e)))}var Mx=Array.prototype.filter;function Cx(){return Array.from(this.children)}function Ex(e){return function(){return Mx.call(this.children,e)}}function wx(e){return this.selectAll(e==null?Cx:Ex(typeof e=="function"?e:Em(e)))}function Ax(e){typeof e!="function"&&(e=Cm(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var s=t[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&e.call(l,l.__data__,c,s)&&a.push(l);return new bn(i,this._parents)}function wm(e){return new Array(e.length)}function Rx(){return new bn(this._enter||this._groups.map(wm),this._parents)}function rl(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}rl.prototype={constructor:rl,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Lx(e){return function(){return e}}function Dx(e,t,n,i,r,s){for(var o=0,a,l=t.length,c=s.length;o<c;++o)(a=t[o])?(a.__data__=s[o],i[o]=a):n[o]=new rl(e,s[o]);for(;o<l;++o)(a=t[o])&&(r[o]=a)}function Px(e,t,n,i,r,s,o){var a,l,c=new Map,h=t.length,d=s.length,u=new Array(h),f;for(a=0;a<h;++a)(l=t[a])&&(u[a]=f=o.call(l,l.__data__,a,t)+"",c.has(f)?r[a]=l:c.set(f,l));for(a=0;a<d;++a)f=o.call(e,s[a],a,s)+"",(l=c.get(f))?(i[a]=l,l.__data__=s[a],c.delete(f)):n[a]=new rl(e,s[a]);for(a=0;a<h;++a)(l=t[a])&&c.get(u[a])===l&&(r[a]=l)}function Fx(e){return e.__data__}function Ix(e,t){if(!arguments.length)return Array.from(this,Fx);var n=t?Px:Dx,i=this._parents,r=this._groups;typeof e!="function"&&(e=Lx(e));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var h=i[c],d=r[c],u=d.length,f=kx(e.call(h,h&&h.__data__,c,i)),m=f.length,_=a[c]=new Array(m),g=o[c]=new Array(m),p=l[c]=new Array(u);n(h,d,_,g,p,f,t);for(var b=0,E=0,y,k;b<m;++b)if(y=_[b]){for(b>=E&&(E=b+1);!(k=g[E])&&++E<m;);y._next=k||null}}return o=new bn(o,i),o._enter=a,o._exit=l,o}function kx(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Bx(){return new bn(this._exit||this._groups.map(wm),this._parents)}function Nx(e,t,n){var i=this.enter(),r=this,s=this.exit();return typeof e=="function"?(i=e(i),i&&(i=i.selection())):i=i.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?s.remove():n(s),i&&r?i.merge(r).order():r}function Ox(e){for(var t=e.selection?e.selection():e,n=this._groups,i=t._groups,r=n.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=n[l],h=i[l],d=c.length,u=a[l]=new Array(d),f,m=0;m<d;++m)(f=c[m]||h[m])&&(u[m]=f);for(;l<r;++l)a[l]=n[l];return new bn(a,this._parents)}function Ux(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var i=e[t],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function zx(e){e||(e=Hx);function t(d,u){return d&&u?e(d.__data__,u.__data__):!d-!u}for(var n=this._groups,i=n.length,r=new Array(i),s=0;s<i;++s){for(var o=n[s],a=o.length,l=r[s]=new Array(a),c,h=0;h<a;++h)(c=o[h])&&(l[h]=c);l.sort(t)}return new bn(r,this._parents).order()}function Hx(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Vx(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Gx(){return Array.from(this)}function Wx(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function $x(){let e=0;for(const t of this)++e;return e}function qx(){return!this.node()}function Xx(e){for(var t=this._groups,n=0,i=t.length;n<i;++n)for(var r=t[n],s=0,o=r.length,a;s<o;++s)(a=r[s])&&e.call(a,a.__data__,s,r);return this}function jx(e){return function(){this.removeAttribute(e)}}function Yx(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Kx(e,t){return function(){this.setAttribute(e,t)}}function Zx(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Jx(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Qx(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function tv(e,t){var n=Pl(e);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((t==null?n.local?Yx:jx:typeof t=="function"?n.local?Qx:Jx:n.local?Zx:Kx)(n,t))}function Am(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ev(e){return function(){this.style.removeProperty(e)}}function nv(e,t,n){return function(){this.style.setProperty(e,t,n)}}function iv(e,t,n){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(e):this.style.setProperty(e,i,n)}}function rv(e,t,n){return arguments.length>1?this.each((t==null?ev:typeof t=="function"?iv:nv)(e,t,n??"")):fs(this.node(),e)}function fs(e,t){return e.style.getPropertyValue(t)||Am(e).getComputedStyle(e,null).getPropertyValue(t)}function sv(e){return function(){delete this[e]}}function ov(e,t){return function(){this[e]=t}}function av(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function lv(e,t){return arguments.length>1?this.each((t==null?sv:typeof t=="function"?av:ov)(e,t)):this.node()[e]}function Rm(e){return e.trim().split(/^|\s+/)}function Au(e){return e.classList||new Lm(e)}function Lm(e){this._node=e,this._names=Rm(e.getAttribute("class")||"")}Lm.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Dm(e,t){for(var n=Au(e),i=-1,r=t.length;++i<r;)n.add(t[i])}function Pm(e,t){for(var n=Au(e),i=-1,r=t.length;++i<r;)n.remove(t[i])}function cv(e){return function(){Dm(this,e)}}function hv(e){return function(){Pm(this,e)}}function uv(e,t){return function(){(t.apply(this,arguments)?Dm:Pm)(this,e)}}function dv(e,t){var n=Rm(e+"");if(arguments.length<2){for(var i=Au(this.node()),r=-1,s=n.length;++r<s;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?uv:t?cv:hv)(n,t))}function fv(){this.textContent=""}function pv(e){return function(){this.textContent=e}}function mv(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function gv(e){return arguments.length?this.each(e==null?fv:(typeof e=="function"?mv:pv)(e)):this.node().textContent}function _v(){this.innerHTML=""}function xv(e){return function(){this.innerHTML=e}}function vv(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function yv(e){return arguments.length?this.each(e==null?_v:(typeof e=="function"?vv:xv)(e)):this.node().innerHTML}function bv(){this.nextSibling&&this.parentNode.appendChild(this)}function Tv(){return this.each(bv)}function Sv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Mv(){return this.each(Sv)}function Cv(e){var t=typeof e=="function"?e:Sm(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Ev(){return null}function wv(e,t){var n=typeof e=="function"?e:Sm(e),i=t==null?Ev:typeof t=="function"?t:wu(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function Av(){var e=this.parentNode;e&&e.removeChild(this)}function Rv(){return this.each(Av)}function Lv(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Dv(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Pv(e){return this.select(e?Dv:Lv)}function Fv(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Iv(e){return function(t){e.call(this,t,this.__data__)}}function kv(e){return e.trim().split(/^|\s+/).map(function(t){var n="",i=t.indexOf(".");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{type:t,name:n}})}function Bv(e){return function(){var t=this.__on;if(t){for(var n=0,i=-1,r=t.length,s;n<r;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function Nv(e,t,n){return function(){var i=this.__on,r,s=Iv(t);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),r.value=t;return}}this.addEventListener(e.type,s,n),r={type:e.type,name:e.name,value:t,listener:s,options:n},i?i.push(r):this.__on=[r]}}function Ov(e,t,n){var i=kv(e+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,h;l<c;++l)for(r=0,h=a[l];r<s;++r)if((o=i[r]).type===h.type&&o.name===h.name)return h.value}return}for(a=t?Nv:Bv,r=0;r<s;++r)this.each(a(i[r],t,n));return this}function Fm(e,t,n){var i=Am(e),r=i.CustomEvent;typeof r=="function"?r=new r(t,n):(r=i.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Uv(e,t){return function(){return Fm(this,e,t)}}function zv(e,t){return function(){return Fm(this,e,t.apply(this,arguments))}}function Hv(e,t){return this.each((typeof t=="function"?zv:Uv)(e,t))}function*Vv(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var Im=[null];function bn(e,t){this._groups=e,this._parents=t}function Wo(){return new bn([[document.documentElement]],Im)}function Gv(){return this}bn.prototype=Wo.prototype={constructor:bn,select:mx,selectAll:vx,selectChild:Sx,selectChildren:wx,filter:Ax,data:Ix,enter:Rx,exit:Bx,join:Nx,merge:Ox,selection:Gv,order:Ux,sort:zx,call:Vx,nodes:Gx,node:Wx,size:$x,empty:qx,each:Xx,attr:tv,style:rv,property:lv,classed:dv,text:gv,html:yv,raise:Tv,lower:Mv,append:Cv,insert:wv,remove:Rv,clone:Pv,datum:Fv,on:Ov,dispatch:Hv,[Symbol.iterator]:Vv};function Le(e){return typeof e=="string"?new bn([[document.querySelector(e)]],[document.documentElement]):new bn([[e]],Im)}function Wv(e){let t;for(;t=e.sourceEvent;)e=t;return e}function sr(e,t){if(e=Wv(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=e.clientX,i.y=e.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}const hh={capture:!0,passive:!1};function uh(e){e.preventDefault(),e.stopImmediatePropagation()}function $v(e){var t=e.document.documentElement,n=Le(e).on("dragstart.drag",uh,hh);"onselectstart"in t?n.on("selectstart.drag",uh,hh):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function qv(e,t){var n=e.document.documentElement,i=Le(e).on("dragstart.drag",null);t&&(i.on("click.drag",uh,hh),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Ru(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function km(e,t){var n=Object.create(e.prototype);for(var i in t)n[i]=t[i];return n}function $o(){}var Mo=.7,sl=1/Mo,is="\\s*([+-]?\\d+)\\s*",Co="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Qn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Xv=/^#([0-9a-f]{3,8})$/,jv=new RegExp(`^rgb\\(${is},${is},${is}\\)$`),Yv=new RegExp(`^rgb\\(${Qn},${Qn},${Qn}\\)$`),Kv=new RegExp(`^rgba\\(${is},${is},${is},${Co}\\)$`),Zv=new RegExp(`^rgba\\(${Qn},${Qn},${Qn},${Co}\\)$`),Jv=new RegExp(`^hsl\\(${Co},${Qn},${Qn}\\)$`),Qv=new RegExp(`^hsla\\(${Co},${Qn},${Qn},${Co}\\)$`),Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ru($o,Eo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Pd,formatHex:Pd,formatHex8:ty,formatHsl:ey,formatRgb:Fd,toString:Fd});function Pd(){return this.rgb().formatHex()}function ty(){return this.rgb().formatHex8()}function ey(){return Bm(this).formatHsl()}function Fd(){return this.rgb().formatRgb()}function Eo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Xv.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Id(t):n===3?new dn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ia(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ia(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=jv.exec(e))?new dn(t[1],t[2],t[3],1):(t=Yv.exec(e))?new dn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Kv.exec(e))?ia(t[1],t[2],t[3],t[4]):(t=Zv.exec(e))?ia(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Jv.exec(e))?Nd(t[1],t[2]/100,t[3]/100,1):(t=Qv.exec(e))?Nd(t[1],t[2]/100,t[3]/100,t[4]):Dd.hasOwnProperty(e)?Id(Dd[e]):e==="transparent"?new dn(NaN,NaN,NaN,0):null}function Id(e){return new dn(e>>16&255,e>>8&255,e&255,1)}function ia(e,t,n,i){return i<=0&&(e=t=n=NaN),new dn(e,t,n,i)}function ny(e){return e instanceof $o||(e=Eo(e)),e?(e=e.rgb(),new dn(e.r,e.g,e.b,e.opacity)):new dn}function dh(e,t,n,i){return arguments.length===1?ny(e):new dn(e,t,n,i??1)}function dn(e,t,n,i){this.r=+e,this.g=+t,this.b=+n,this.opacity=+i}Ru(dn,dh,km($o,{brighter(e){return e=e==null?sl:Math.pow(sl,e),new dn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Mo:Math.pow(Mo,e),new dn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new dn(Sr(this.r),Sr(this.g),Sr(this.b),ol(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:kd,formatHex:kd,formatHex8:iy,formatRgb:Bd,toString:Bd}));function kd(){return`#${xr(this.r)}${xr(this.g)}${xr(this.b)}`}function iy(){return`#${xr(this.r)}${xr(this.g)}${xr(this.b)}${xr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Bd(){const e=ol(this.opacity);return`${e===1?"rgb(":"rgba("}${Sr(this.r)}, ${Sr(this.g)}, ${Sr(this.b)}${e===1?")":`, ${e})`}`}function ol(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Sr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function xr(e){return e=Sr(e),(e<16?"0":"")+e.toString(16)}function Nd(e,t,n,i){return i<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Bn(e,t,n,i)}function Bm(e){if(e instanceof Bn)return new Bn(e.h,e.s,e.l,e.opacity);if(e instanceof $o||(e=Eo(e)),!e)return new Bn;if(e instanceof Bn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,i=e.b/255,r=Math.min(t,n,i),s=Math.max(t,n,i),o=NaN,a=s-r,l=(s+r)/2;return a?(t===s?o=(n-i)/a+(n<i)*6:n===s?o=(i-t)/a+2:o=(t-n)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new Bn(o,a,l,e.opacity)}function ry(e,t,n,i){return arguments.length===1?Bm(e):new Bn(e,t,n,i??1)}function Bn(e,t,n,i){this.h=+e,this.s=+t,this.l=+n,this.opacity=+i}Ru(Bn,ry,km($o,{brighter(e){return e=e==null?sl:Math.pow(sl,e),new Bn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Mo:Math.pow(Mo,e),new Bn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*t,r=2*n-i;return new dn(ic(e>=240?e-240:e+120,r,i),ic(e,r,i),ic(e<120?e+240:e-120,r,i),this.opacity)},clamp(){return new Bn(Od(this.h),ra(this.s),ra(this.l),ol(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ol(this.opacity);return`${e===1?"hsl(":"hsla("}${Od(this.h)}, ${ra(this.s)*100}%, ${ra(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Od(e){return e=(e||0)%360,e<0?e+360:e}function ra(e){return Math.max(0,Math.min(1,e||0))}function ic(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Lu=e=>()=>e;function Nm(e,t){return function(n){return e+n*t}}function sy(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(i){return Math.pow(e+i*t,n)}}function _4(e,t){var n=t-e;return n?Nm(e,n>180||n<-180?n-360*Math.round(n/360):n):Lu(isNaN(e)?t:e)}function oy(e){return(e=+e)==1?Om:function(t,n){return n-t?sy(t,n,e):Lu(isNaN(t)?n:t)}}function Om(e,t){var n=t-e;return n?Nm(e,n):Lu(isNaN(e)?t:e)}const Ud=(function e(t){var n=oy(t);function i(r,s){var o=n((r=dh(r)).r,(s=dh(s)).r),a=n(r.g,s.g),l=n(r.b,s.b),c=Om(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=l(h),r.opacity=c(h),r+""}}return i.gamma=e,i})(1);function Vi(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var fh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,rc=new RegExp(fh.source,"g");function ay(e){return function(){return e}}function ly(e){return function(t){return e(t)+""}}function cy(e,t){var n=fh.lastIndex=rc.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(e=e+"",t=t+"";(i=fh.exec(e))&&(r=rc.exec(t));)(s=r.index)>n&&(s=t.slice(n,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:Vi(i,r)})),n=rc.lastIndex;return n<t.length&&(s=t.slice(n),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?ly(l[0].x):ay(t):(t=l.length,function(c){for(var h=0,d;h<t;++h)a[(d=l[h]).i]=d.x(c);return a.join("")})}var zd=180/Math.PI,ph={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Um(e,t,n,i,r,s){var o,a,l;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(l=e*n+t*i)&&(n-=e*l,i-=t*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),e*i<t*n&&(e=-e,t=-t,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(t,e)*zd,skewX:Math.atan(l)*zd,scaleX:o,scaleY:a}}var sa;function hy(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?ph:Um(t.a,t.b,t.c,t.d,t.e,t.f)}function uy(e){return e==null||(sa||(sa=document.createElementNS("http://www.w3.org/2000/svg","g")),sa.setAttribute("transform",e),!(e=sa.transform.baseVal.consolidate()))?ph:(e=e.matrix,Um(e.a,e.b,e.c,e.d,e.e,e.f))}function zm(e,t,n,i){function r(c){return c.length?c.pop()+" ":""}function s(c,h,d,u,f,m){if(c!==d||h!==u){var _=f.push("translate(",null,t,null,n);m.push({i:_-4,x:Vi(c,d)},{i:_-2,x:Vi(h,u)})}else(d||u)&&f.push("translate("+d+t+u+n)}function o(c,h,d,u){c!==h?(c-h>180?h+=360:h-c>180&&(c+=360),u.push({i:d.push(r(d)+"rotate(",null,i)-2,x:Vi(c,h)})):h&&d.push(r(d)+"rotate("+h+i)}function a(c,h,d,u){c!==h?u.push({i:d.push(r(d)+"skewX(",null,i)-2,x:Vi(c,h)}):h&&d.push(r(d)+"skewX("+h+i)}function l(c,h,d,u,f,m){if(c!==d||h!==u){var _=f.push(r(f)+"scale(",null,",",null,")");m.push({i:_-4,x:Vi(c,d)},{i:_-2,x:Vi(h,u)})}else(d!==1||u!==1)&&f.push(r(f)+"scale("+d+","+u+")")}return function(c,h){var d=[],u=[];return c=e(c),h=e(h),s(c.translateX,c.translateY,h.translateX,h.translateY,d,u),o(c.rotate,h.rotate,d,u),a(c.skewX,h.skewX,d,u),l(c.scaleX,c.scaleY,h.scaleX,h.scaleY,d,u),c=h=null,function(f){for(var m=-1,_=u.length,g;++m<_;)d[(g=u[m]).i]=g.x(f);return d.join("")}}}var dy=zm(hy,"px, ","px)","deg)"),fy=zm(uy,", ",")",")"),py=1e-12;function Hd(e){return((e=Math.exp(e))+1/e)/2}function my(e){return((e=Math.exp(e))-1/e)/2}function gy(e){return((e=Math.exp(2*e))-1)/(e+1)}const _y=(function e(t,n,i){function r(s,o){var a=s[0],l=s[1],c=s[2],h=o[0],d=o[1],u=o[2],f=h-a,m=d-l,_=f*f+m*m,g,p;if(_<py)p=Math.log(u/c)/t,g=function(P){return[a+P*f,l+P*m,c*Math.exp(t*P*p)]};else{var b=Math.sqrt(_),E=(u*u-c*c+i*_)/(2*c*n*b),y=(u*u-c*c-i*_)/(2*u*n*b),k=Math.log(Math.sqrt(E*E+1)-E),R=Math.log(Math.sqrt(y*y+1)-y);p=(R-k)/t,g=function(P){var U=P*p,w=Hd(k),S=c/(n*b)*(w*gy(t*U+k)-my(k));return[a+S*f,l+S*m,c*w/Hd(t*U+k)]}}return g.duration=p*1e3*t/Math.SQRT2,g}return r.rho=function(s){var o=Math.max(.001,+s),a=o*o,l=a*a;return e(o,a,l)},r})(Math.SQRT2,2,4);var ps=0,co=0,qs=0,Hm=1e3,al,ho,ll=0,Er=0,Fl=0,wo=typeof performance=="object"&&performance.now?performance:Date,Vm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Du(){return Er||(Vm(xy),Er=wo.now()+Fl)}function xy(){Er=0}function cl(){this._call=this._time=this._next=null}cl.prototype=Gm.prototype={constructor:cl,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Du():+n)+(t==null?0:+t),!this._next&&ho!==this&&(ho?ho._next=this:al=this,ho=this),this._call=e,this._time=n,mh()},stop:function(){this._call&&(this._call=null,this._time=1/0,mh())}};function Gm(e,t,n){var i=new cl;return i.restart(e,t,n),i}function vy(){Du(),++ps;for(var e=al,t;e;)(t=Er-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ps}function Vd(){Er=(ll=wo.now())+Fl,ps=co=0;try{vy()}finally{ps=0,by(),Er=0}}function yy(){var e=wo.now(),t=e-ll;t>Hm&&(Fl-=t,ll=e)}function by(){for(var e,t=al,n,i=1/0;t;)t._call?(i>t._time&&(i=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:al=n);ho=e,mh(i)}function mh(e){if(!ps){co&&(co=clearTimeout(co));var t=e-Er;t>24?(e<1/0&&(co=setTimeout(Vd,e-wo.now()-Fl)),qs&&(qs=clearInterval(qs))):(qs||(ll=wo.now(),qs=setInterval(yy,Hm)),ps=1,Vm(Vd))}}function Gd(e,t,n){var i=new cl;return t=t==null?0:+t,i.restart(r=>{i.stop(),e(r+t)},t,n),i}var Ty=Eu("start","end","cancel","interrupt"),Sy=[],Wm=0,Wd=1,gh=2,za=3,$d=4,_h=5,Ha=6;function Il(e,t,n,i,r,s){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;My(e,n,{name:t,index:i,group:r,on:Ty,tween:Sy,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Wm})}function Pu(e,t){var n=$n(e,t);if(n.state>Wm)throw new Error("too late; already scheduled");return n}function ai(e,t){var n=$n(e,t);if(n.state>za)throw new Error("too late; already running");return n}function $n(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function My(e,t,n){var i=e.__transition,r;i[t]=n,n.timer=Gm(s,0,n.time);function s(c){n.state=Wd,n.timer.restart(o,n.delay,n.time),n.delay<=c&&o(c-n.delay)}function o(c){var h,d,u,f;if(n.state!==Wd)return l();for(h in i)if(f=i[h],f.name===n.name){if(f.state===za)return Gd(o);f.state===$d?(f.state=Ha,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete i[h]):+h<t&&(f.state=Ha,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete i[h])}if(Gd(function(){n.state===za&&(n.state=$d,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=gh,n.on.call("start",e,e.__data__,n.index,n.group),n.state===gh){for(n.state=za,r=new Array(u=n.tween.length),h=0,d=-1;h<u;++h)(f=n.tween[h].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=f);r.length=d+1}}function a(c){for(var h=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=_h,1),d=-1,u=r.length;++d<u;)r[d].call(e,h);n.state===_h&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Ha,n.timer.stop(),delete i[t];for(var c in i)return;delete e.__transition}}function Va(e,t){var n=e.__transition,i,r,s=!0,o;if(n){t=t==null?null:t+"";for(o in n){if((i=n[o]).name!==t){s=!1;continue}r=i.state>gh&&i.state<_h,i.state=Ha,i.timer.stop(),i.on.call(r?"interrupt":"cancel",e,e.__data__,i.index,i.group),delete n[o]}s&&delete e.__transition}}function Cy(e){return this.each(function(){Va(this,e)})}function Ey(e,t){var n,i;return function(){var r=ai(this,e),s=r.tween;if(s!==n){i=n=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===t){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function wy(e,t,n){var i,r;if(typeof n!="function")throw new Error;return function(){var s=ai(this,e),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:t,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function Ay(e,t){var n=this._id;if(e+="",arguments.length<2){for(var i=$n(this.node(),n).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===e)return o.value;return null}return this.each((t==null?Ey:wy)(n,e,t))}function Fu(e,t,n){var i=e._id;return e.each(function(){var r=ai(this,i);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return $n(r,i).value[t]}}function $m(e,t){var n;return(typeof t=="number"?Vi:t instanceof Eo?Ud:(n=Eo(t))?(t=n,Ud):cy)(e,t)}function Ry(e){return function(){this.removeAttribute(e)}}function Ly(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Dy(e,t,n){var i,r=n+"",s;return function(){var o=this.getAttribute(e);return o===r?null:o===i?s:s=t(i=o,n)}}function Py(e,t,n){var i,r=n+"",s;return function(){var o=this.getAttributeNS(e.space,e.local);return o===r?null:o===i?s:s=t(i=o,n)}}function Fy(e,t,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttribute(e):(o=this.getAttribute(e),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a)))}}function Iy(e,t,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a)))}}function ky(e,t){var n=Pl(e),i=n==="transform"?fy:$m;return this.attrTween(e,typeof t=="function"?(n.local?Iy:Fy)(n,i,Fu(this,"attr."+e,t)):t==null?(n.local?Ly:Ry)(n):(n.local?Py:Dy)(n,i,t))}function By(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Ny(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Oy(e,t){var n,i;function r(){var s=t.apply(this,arguments);return s!==i&&(n=(i=s)&&Ny(e,s)),n}return r._value=t,r}function Uy(e,t){var n,i;function r(){var s=t.apply(this,arguments);return s!==i&&(n=(i=s)&&By(e,s)),n}return r._value=t,r}function zy(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var i=Pl(e);return this.tween(n,(i.local?Oy:Uy)(i,t))}function Hy(e,t){return function(){Pu(this,e).delay=+t.apply(this,arguments)}}function Vy(e,t){return t=+t,function(){Pu(this,e).delay=t}}function Gy(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Hy:Vy)(t,e)):$n(this.node(),t).delay}function Wy(e,t){return function(){ai(this,e).duration=+t.apply(this,arguments)}}function $y(e,t){return t=+t,function(){ai(this,e).duration=t}}function qy(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Wy:$y)(t,e)):$n(this.node(),t).duration}function Xy(e,t){if(typeof t!="function")throw new Error;return function(){ai(this,e).ease=t}}function jy(e){var t=this._id;return arguments.length?this.each(Xy(t,e)):$n(this.node(),t).ease}function Yy(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ai(this,e).ease=n}}function Ky(e){if(typeof e!="function")throw new Error;return this.each(Yy(this._id,e))}function Zy(e){typeof e!="function"&&(e=Cm(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var s=t[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&e.call(l,l.__data__,c,s)&&a.push(l);return new Di(i,this._parents,this._name,this._id)}function Jy(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,i=t.length,r=n.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=t[a],c=n[a],h=l.length,d=o[a]=new Array(h),u,f=0;f<h;++f)(u=l[f]||c[f])&&(d[f]=u);for(;a<i;++a)o[a]=t[a];return new Di(o,this._parents,this._name,this._id)}function Qy(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function tb(e,t,n){var i,r,s=Qy(t)?Pu:ai;return function(){var o=s(this,e),a=o.on;a!==i&&(r=(i=a).copy()).on(t,n),o.on=r}}function eb(e,t){var n=this._id;return arguments.length<2?$n(this.node(),n).on.on(e):this.each(tb(n,e,t))}function nb(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ib(){return this.on("end.remove",nb(this._id))}function rb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=wu(e));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),h,d,u=0;u<l;++u)(h=a[u])&&(d=e.call(h,h.__data__,u,a))&&("__data__"in h&&(d.__data__=h.__data__),c[u]=d,Il(c[u],t,n,u,c,$n(h,n)));return new Di(s,this._parents,t,n)}function sb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Mm(e));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,h,d=0;d<c;++d)if(h=l[d]){for(var u=e.call(h,h.__data__,d,l),f,m=$n(h,n),_=0,g=u.length;_<g;++_)(f=u[_])&&Il(f,t,n,_,u,m);s.push(u),o.push(h)}return new Di(s,o,t,n)}var ob=Wo.prototype.constructor;function ab(){return new ob(this._groups,this._parents)}function lb(e,t){var n,i,r;return function(){var s=fs(this,e),o=(this.style.removeProperty(e),fs(this,e));return s===o?null:s===n&&o===i?r:r=t(n=s,i=o)}}function qm(e){return function(){this.style.removeProperty(e)}}function cb(e,t,n){var i,r=n+"",s;return function(){var o=fs(this,e);return o===r?null:o===i?s:s=t(i=o,n)}}function hb(e,t,n){var i,r,s;return function(){var o=fs(this,e),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),fs(this,e))),o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a))}}function ub(e,t){var n,i,r,s="style."+t,o="end."+s,a;return function(){var l=ai(this,e),c=l.on,h=l.value[s]==null?a||(a=qm(t)):void 0;(c!==n||r!==h)&&(i=(n=c).copy()).on(o,r=h),l.on=i}}function db(e,t,n){var i=(e+="")=="transform"?dy:$m;return t==null?this.styleTween(e,lb(e,i)).on("end.style."+e,qm(e)):typeof t=="function"?this.styleTween(e,hb(e,i,Fu(this,"style."+e,t))).each(ub(this._id,e)):this.styleTween(e,cb(e,i,t),n).on("end.style."+e,null)}function fb(e,t,n){return function(i){this.style.setProperty(e,t.call(this,i),n)}}function pb(e,t,n){var i,r;function s(){var o=t.apply(this,arguments);return o!==r&&(i=(r=o)&&fb(e,o,n)),i}return s._value=t,s}function mb(e,t,n){var i="style."+(e+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,pb(e,t,n??""))}function gb(e){return function(){this.textContent=e}}function _b(e){return function(){var t=e(this);this.textContent=t??""}}function xb(e){return this.tween("text",typeof e=="function"?_b(Fu(this,"text",e)):gb(e==null?"":e+""))}function vb(e){return function(t){this.textContent=e.call(this,t)}}function yb(e){var t,n;function i(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&vb(r)),t}return i._value=e,i}function bb(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,yb(e))}function Tb(){for(var e=this._name,t=this._id,n=Xm(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var h=$n(l,t);Il(l,e,n,c,o,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new Di(i,this._parents,e,n)}function Sb(){var e,t,n=this,i=n._id,r=n.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};n.each(function(){var c=ai(this,i),h=c.on;h!==e&&(t=(e=h).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),r===0&&s()})}var Mb=0;function Di(e,t,n,i){this._groups=e,this._parents=t,this._name=n,this._id=i}function Xm(){return++Mb}var fi=Wo.prototype;Di.prototype={constructor:Di,select:rb,selectAll:sb,selectChild:fi.selectChild,selectChildren:fi.selectChildren,filter:Zy,merge:Jy,selection:ab,transition:Tb,call:fi.call,nodes:fi.nodes,node:fi.node,size:fi.size,empty:fi.empty,each:fi.each,on:eb,attr:ky,attrTween:zy,style:db,styleTween:mb,text:xb,textTween:bb,remove:ib,tween:Ay,delay:Gy,duration:qy,ease:jy,easeVarying:Ky,end:Sb,[Symbol.iterator]:fi[Symbol.iterator]};function Cb(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Eb={time:null,delay:0,duration:250,ease:Cb};function wb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Ab(e){var t,n;e instanceof Di?(t=e._id,e=e._name):(t=Xm(),(n=Eb).time=Du(),e=e==null?null:e+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&Il(l,e,t,c,o,n||wb(l,t));return new Di(i,this._parents,e,t)}Wo.prototype.interrupt=Cy;Wo.prototype.transition=Ab;const xh=Math.PI,vh=2*xh,fr=1e-6,Rb=vh-fr;function jm(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Lb(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return jm;const n=10**t;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*n)/n+i[r]}}class Db{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?jm:Lb(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,i,r){this._append`Q${+t},${+n},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(t,n,i,r,s,o){this._append`C${+t},${+n},${+i},${+r},${this._x1=+s},${this._y1=+o}`}arcTo(t,n,i,r,s){if(t=+t,n=+n,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,l=i-t,c=r-n,h=o-t,d=a-n,u=h*h+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(u>fr)if(!(Math.abs(d*l-c*h)>fr)||!s)this._append`L${this._x1=t},${this._y1=n}`;else{let f=i-o,m=r-a,_=l*l+c*c,g=f*f+m*m,p=Math.sqrt(_),b=Math.sqrt(u),E=s*Math.tan((xh-Math.acos((_+u-g)/(2*p*b)))/2),y=E/b,k=E/p;Math.abs(y-1)>fr&&this._append`L${t+y*h},${n+y*d}`,this._append`A${s},${s},0,0,${+(d*f>h*m)},${this._x1=t+k*l},${this._y1=n+k*c}`}}arc(t,n,i,r,s,o){if(t=+t,n=+n,i=+i,o=!!o,i<0)throw new Error(`negative radius: ${i}`);let a=i*Math.cos(r),l=i*Math.sin(r),c=t+a,h=n+l,d=1^o,u=o?r-s:s-r;this._x1===null?this._append`M${c},${h}`:(Math.abs(this._x1-c)>fr||Math.abs(this._y1-h)>fr)&&this._append`L${c},${h}`,i&&(u<0&&(u=u%vh+vh),u>Rb?this._append`A${i},${i},0,1,${d},${t-a},${n-l}A${i},${i},0,1,${d},${this._x1=c},${this._y1=h}`:u>fr&&this._append`A${i},${i},0,${+(u>=xh)},${d},${this._x1=t+i*Math.cos(s)},${this._y1=n+i*Math.sin(s)}`)}rect(t,n,i,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}function Pb(e){var t=0,n=e.children,i=n&&n.length;if(!i)t=1;else for(;--i>=0;)t+=n[i].value;e.value=t}function Fb(){return this.eachAfter(Pb)}function Ib(e,t){let n=-1;for(const i of this)e.call(t,i,++n,this);return this}function kb(e,t){for(var n=this,i=[n],r,s,o=-1;n=i.pop();)if(e.call(t,n,++o,this),r=n.children)for(s=r.length-1;s>=0;--s)i.push(r[s]);return this}function Bb(e,t){for(var n=this,i=[n],r=[],s,o,a,l=-1;n=i.pop();)if(r.push(n),s=n.children)for(o=0,a=s.length;o<a;++o)i.push(s[o]);for(;n=r.pop();)e.call(t,n,++l,this);return this}function Nb(e,t){let n=-1;for(const i of this)if(e.call(t,i,++n,this))return i}function Ob(e){return this.eachAfter(function(t){for(var n=+e(t.data)||0,i=t.children,r=i&&i.length;--r>=0;)n+=i[r].value;t.value=n})}function Ub(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function zb(e){for(var t=this,n=Hb(t,e),i=[t];t!==n;)t=t.parent,i.push(t);for(var r=i.length;e!==n;)i.splice(r,0,e),e=e.parent;return i}function Hb(e,t){if(e===t)return e;var n=e.ancestors(),i=t.ancestors(),r=null;for(e=n.pop(),t=i.pop();e===t;)r=e,e=n.pop(),t=i.pop();return r}function Vb(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function Gb(){return Array.from(this)}function Wb(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function $b(){var e=this,t=[];return e.each(function(n){n!==e&&t.push({source:n.parent,target:n})}),t}function*qb(){var e=this,t,n=[e],i,r,s;do for(t=n.reverse(),n=[];e=t.pop();)if(yield e,i=e.children)for(r=0,s=i.length;r<s;++r)n.push(i[r]);while(n.length)}function Iu(e,t){e instanceof Map?(e=[void 0,e],t===void 0&&(t=Yb)):t===void 0&&(t=jb);for(var n=new Ao(e),i,r=[n],s,o,a,l;i=r.pop();)if((o=t(i.data))&&(l=(o=Array.from(o)).length))for(i.children=o,a=l-1;a>=0;--a)r.push(s=o[a]=new Ao(o[a])),s.parent=i,s.depth=i.depth+1;return n.eachBefore(Zb)}function Xb(){return Iu(this).eachBefore(Kb)}function jb(e){return e.children}function Yb(e){return Array.isArray(e)?e[1]:null}function Kb(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function Zb(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function Ao(e){this.data=e,this.depth=this.height=0,this.parent=null}Ao.prototype=Iu.prototype={constructor:Ao,count:Fb,each:Ib,eachAfter:Bb,eachBefore:kb,find:Nb,sum:Ob,sort:Ub,path:zb,ancestors:Vb,descendants:Gb,leaves:Wb,links:$b,copy:Xb,[Symbol.iterator]:qb};function Jb(e,t){return e.parent===t.parent?1:2}function sc(e){var t=e.children;return t?t[0]:e.t}function oc(e){var t=e.children;return t?t[t.length-1]:e.t}function Qb(e,t,n){var i=n/(t.i-e.i);t.c-=i,t.s+=n,e.c+=i,t.z+=n,t.m+=n}function t1(e){for(var t=0,n=0,i=e.children,r=i.length,s;--r>=0;)s=i[r],s.z+=t,s.m+=t,t+=s.s+(n+=s.c)}function e1(e,t,n){return e.a.parent===t.parent?e.a:n}function Ga(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}Ga.prototype=Object.create(Ao.prototype);function n1(e){for(var t=new Ga(e,0),n,i=[t],r,s,o,a;n=i.pop();)if(s=n._.children)for(n.children=new Array(a=s.length),o=a-1;o>=0;--o)i.push(r=n.children[o]=new Ga(s[o],o)),r.parent=n;return(t.parent=new Ga(null,0)).children=[t],t}function i1(){var e=Jb,t=1,n=1,i=null;function r(c){var h=n1(c);if(h.eachAfter(s),h.parent.m=-h.z,h.eachBefore(o),i)c.eachBefore(l);else{var d=c,u=c,f=c;c.eachBefore(function(b){b.x<d.x&&(d=b),b.x>u.x&&(u=b),b.depth>f.depth&&(f=b)});var m=d===u?1:e(d,u)/2,_=m-d.x,g=t/(u.x+m+_),p=n/(f.depth||1);c.eachBefore(function(b){b.x=(b.x+_)*g,b.y=b.depth*p})}return c}function s(c){var h=c.children,d=c.parent.children,u=c.i?d[c.i-1]:null;if(h){t1(c);var f=(h[0].z+h[h.length-1].z)/2;u?(c.z=u.z+e(c._,u._),c.m=c.z-f):c.z=f}else u&&(c.z=u.z+e(c._,u._));c.parent.A=a(c,u,c.parent.A||d[0])}function o(c){c._.x=c.z+c.parent.m,c.m+=c.parent.m}function a(c,h,d){if(h){for(var u=c,f=c,m=h,_=u.parent.children[0],g=u.m,p=f.m,b=m.m,E=_.m,y;m=oc(m),u=sc(u),m&&u;)_=sc(_),f=oc(f),f.a=c,y=m.z+b-u.z-g+e(m._,u._),y>0&&(Qb(e1(m,c,d),c,y),g+=y,p+=y),b+=m.m,g+=u.m,E+=_.m,p+=f.m;m&&!oc(f)&&(f.t=m,f.m+=b-p),u&&!sc(_)&&(_.t=u,_.m+=g-E,d=c)}return d}function l(c){c.x*=t,c.y=c.depth*n}return r.separation=function(c){return arguments.length?(e=c,r):e},r.size=function(c){return arguments.length?(i=!1,t=+c[0],n=+c[1],r):i?null:[t,n]},r.nodeSize=function(c){return arguments.length?(i=!0,t=+c[0],n=+c[1],r):i?[t,n]:null},r}function qd(e){return function(){return e}}const x4=Math.abs,v4=Math.atan2,y4=Math.cos,b4=Math.max,T4=Math.min,S4=Math.sin,M4=Math.sqrt,Xd=1e-12,ku=Math.PI,jd=ku/2,C4=2*ku;function E4(e){return e>1?0:e<-1?ku:Math.acos(e)}function w4(e){return e>=1?jd:e<=-1?-jd:Math.asin(e)}function r1(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const i=Math.floor(n);if(!(i>=0))throw new RangeError(`invalid digits: ${n}`);t=i}return e},()=>new Db(t)}var s1=Array.prototype.slice;function A4(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Ym(e){this._context=e}Ym.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function o1(e){return new Ym(e)}function a1(e){return e[0]}function l1(e){return e[1]}class Km{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function Zm(e){return new Km(e,!0)}function c1(e){return new Km(e,!1)}function h1(e){return e.source}function u1(e){return e.target}function d1(e){let t=h1,n=u1,i=a1,r=l1,s=null,o=null,a=r1(l);function l(){let c;const h=s1.call(arguments),d=t.apply(this,h),u=n.apply(this,h);if(s==null&&(o=e(c=a())),o.lineStart(),h[0]=d,o.point(+i.apply(this,h),+r.apply(this,h)),h[0]=u,o.point(+i.apply(this,h),+r.apply(this,h)),o.lineEnd(),c)return o=null,c+""||null}return l.source=function(c){return arguments.length?(t=c,l):t},l.target=function(c){return arguments.length?(n=c,l):n},l.x=function(c){return arguments.length?(i=typeof c=="function"?c:qd(+c),l):i},l.y=function(c){return arguments.length?(r=typeof c=="function"?c:qd(+c),l):r},l.context=function(c){return arguments.length?(c==null?s=o=null:o=e(s=c),l):s},l}function f1(){return d1(Zm)}function Ji(){}function hl(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function kl(e){this._context=e}kl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:hl(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:hl(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function p1(e){return new kl(e)}function Jm(e){this._context=e}Jm.prototype={areaStart:Ji,areaEnd:Ji,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:hl(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function m1(e){return new Jm(e)}function Qm(e){this._context=e}Qm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,i=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,i):this._context.moveTo(n,i);break;case 3:this._point=4;default:hl(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function g1(e){return new Qm(e)}function tg(e,t){this._basis=new kl(e),this._beta=t}tg.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1;if(n>0)for(var i=e[0],r=t[0],s=e[n]-i,o=t[n]-r,a=-1,l;++a<=n;)l=a/n,this._basis.point(this._beta*e[a]+(1-this._beta)*(i+l*s),this._beta*t[a]+(1-this._beta)*(r+l*o));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};const _1=(function e(t){function n(i){return t===1?new kl(i):new tg(i,t)}return n.beta=function(i){return e(+i)},n})(.85);function ul(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function Bu(e,t){this._context=e,this._k=(1-t)/6}Bu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ul(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:ul(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const x1=(function e(t){function n(i){return new Bu(i,t)}return n.tension=function(i){return e(+i)},n})(0);function Nu(e,t){this._context=e,this._k=(1-t)/6}Nu.prototype={areaStart:Ji,areaEnd:Ji,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:ul(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const v1=(function e(t){function n(i){return new Nu(i,t)}return n.tension=function(i){return e(+i)},n})(0);function Ou(e,t){this._context=e,this._k=(1-t)/6}Ou.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ul(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const y1=(function e(t){function n(i){return new Ou(i,t)}return n.tension=function(i){return e(+i)},n})(0);function Uu(e,t,n){var i=e._x1,r=e._y1,s=e._x2,o=e._y2;if(e._l01_a>Xd){var a=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,l=3*e._l01_a*(e._l01_a+e._l12_a);i=(i*a-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,r=(r*a-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}if(e._l23_a>Xd){var c=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,h=3*e._l23_a*(e._l23_a+e._l12_a);s=(s*c+e._x1*e._l23_2a-t*e._l12_2a)/h,o=(o*c+e._y1*e._l23_2a-n*e._l12_2a)/h}e._context.bezierCurveTo(i,r,s,o,e._x2,e._y2)}function eg(e,t){this._context=e,this._alpha=t}eg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,i=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:Uu(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const b1=(function e(t){function n(i){return t?new eg(i,t):new Bu(i,0)}return n.alpha=function(i){return e(+i)},n})(.5);function ng(e,t){this._context=e,this._alpha=t}ng.prototype={areaStart:Ji,areaEnd:Ji,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,i=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:Uu(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const T1=(function e(t){function n(i){return t?new ng(i,t):new Nu(i,0)}return n.alpha=function(i){return e(+i)},n})(.5);function ig(e,t){this._context=e,this._alpha=t}ig.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,i=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Uu(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const S1=(function e(t){function n(i){return t?new ig(i,t):new Ou(i,0)}return n.alpha=function(i){return e(+i)},n})(.5);function rg(e){this._context=e}rg.prototype={areaStart:Ji,areaEnd:Ji,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function M1(e){return new rg(e)}function Yd(e){return e<0?-1:1}function Kd(e,t,n){var i=e._x1-e._x0,r=t-e._x1,s=(e._y1-e._y0)/(i||r<0&&-0),o=(n-e._y1)/(r||i<0&&-0),a=(s*r+o*i)/(i+r);return(Yd(s)+Yd(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(a))||0}function Zd(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function ac(e,t,n){var i=e._x0,r=e._y0,s=e._x1,o=e._y1,a=(s-i)/3;e._context.bezierCurveTo(i+a,r+a*t,s-a,o-a*n,s,o)}function dl(e){this._context=e}dl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ac(this,this._t0,Zd(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,ac(this,Zd(this,n=Kd(this,e,t)),n);break;default:ac(this,this._t0,n=Kd(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function sg(e){this._context=new og(e)}(sg.prototype=Object.create(dl.prototype)).point=function(e,t){dl.prototype.point.call(this,t,e)};function og(e){this._context=e}og.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,i,r,s){this._context.bezierCurveTo(t,e,i,n,s,r)}};function C1(e){return new dl(e)}function E1(e){return new sg(e)}function ag(e){this._context=e}ag.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var i=Jd(e),r=Jd(t),s=0,o=1;o<n;++s,++o)this._context.bezierCurveTo(i[0][s],r[0][s],i[1][s],r[1][s],e[o],t[o]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function Jd(e){var t,n=e.length-1,i,r=new Array(n),s=new Array(n),o=new Array(n);for(r[0]=0,s[0]=2,o[0]=e[0]+2*e[1],t=1;t<n-1;++t)r[t]=1,s[t]=4,o[t]=4*e[t]+2*e[t+1];for(r[n-1]=2,s[n-1]=7,o[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)i=r[t]/s[t-1],s[t]-=i,o[t]-=i*o[t-1];for(r[n-1]=o[n-1]/s[n-1],t=n-2;t>=0;--t)r[t]=(o[t]-r[t+1])/s[t];for(s[n-1]=(e[n]+r[n-1])/2,t=0;t<n-1;++t)s[t]=2*e[t+1]-r[t+1];return[r,s]}function w1(e){return new ag(e)}function Bl(e,t){this._context=e,this._t=t}Bl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function A1(e){return new Bl(e,.5)}function R1(e){return new Bl(e,0)}function L1(e){return new Bl(e,1)}const oa=e=>()=>e;function D1(e,{sourceEvent:t,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Ci(e,t,n){this.k=e,this.x=t,this.y=n}Ci.prototype={constructor:Ci,scale:function(e){return e===1?this:new Ci(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ci(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ro=new Ci(1,0,0);lg.prototype=Ci.prototype;function lg(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Ro;return e.__zoom}function lc(e){e.stopImmediatePropagation()}function Xs(e){e.preventDefault(),e.stopImmediatePropagation()}function P1(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function F1(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Qd(){return this.__zoom||Ro}function I1(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function k1(){return navigator.maxTouchPoints||"ontouchstart"in this}function B1(e,t,n){var i=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],o=e.invertY(t[1][1])-n[1][1];return e.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),o>s?(s+o)/2:Math.min(0,s)||Math.max(0,o))}function N1(){var e=P1,t=F1,n=B1,i=I1,r=k1,s=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],a=250,l=_y,c=Eu("start","zoom","end"),h,d,u,f=500,m=150,_=0,g=10;function p(M){M.property("__zoom",Qd).on("wheel.zoom",U,{passive:!1}).on("mousedown.zoom",w).on("dblclick.zoom",S).filter(r).on("touchstart.zoom",L).on("touchmove.zoom",G).on("touchend.zoom touchcancel.zoom",$).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(M,C,v,N){var D=M.selection?M.selection():M;D.property("__zoom",Qd),M!==D?k(M,C,v,N):D.interrupt().each(function(){R(this,arguments).event(N).start().zoom(null,typeof C=="function"?C.apply(this,arguments):C).end()})},p.scaleBy=function(M,C,v,N){p.scaleTo(M,function(){var D=this.__zoom.k,W=typeof C=="function"?C.apply(this,arguments):C;return D*W},v,N)},p.scaleTo=function(M,C,v,N){p.transform(M,function(){var D=t.apply(this,arguments),W=this.__zoom,K=v==null?y(D):typeof v=="function"?v.apply(this,arguments):v,J=W.invert(K),nt=typeof C=="function"?C.apply(this,arguments):C;return n(E(b(W,nt),K,J),D,o)},v,N)},p.translateBy=function(M,C,v,N){p.transform(M,function(){return n(this.__zoom.translate(typeof C=="function"?C.apply(this,arguments):C,typeof v=="function"?v.apply(this,arguments):v),t.apply(this,arguments),o)},null,N)},p.translateTo=function(M,C,v,N,D){p.transform(M,function(){var W=t.apply(this,arguments),K=this.__zoom,J=N==null?y(W):typeof N=="function"?N.apply(this,arguments):N;return n(Ro.translate(J[0],J[1]).scale(K.k).translate(typeof C=="function"?-C.apply(this,arguments):-C,typeof v=="function"?-v.apply(this,arguments):-v),W,o)},N,D)};function b(M,C){return C=Math.max(s[0],Math.min(s[1],C)),C===M.k?M:new Ci(C,M.x,M.y)}function E(M,C,v){var N=C[0]-v[0]*M.k,D=C[1]-v[1]*M.k;return N===M.x&&D===M.y?M:new Ci(M.k,N,D)}function y(M){return[(+M[0][0]+ +M[1][0])/2,(+M[0][1]+ +M[1][1])/2]}function k(M,C,v,N){M.on("start.zoom",function(){R(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){R(this,arguments).event(N).end()}).tween("zoom",function(){var D=this,W=arguments,K=R(D,W).event(N),J=t.apply(D,W),nt=v==null?y(J):typeof v=="function"?v.apply(D,W):v,mt=Math.max(J[1][0]-J[0][0],J[1][1]-J[0][1]),Z=D.__zoom,Q=typeof C=="function"?C.apply(D,W):C,pt=l(Z.invert(nt).concat(mt/Z.k),Q.invert(nt).concat(mt/Q.k));return function(ht){if(ht===1)ht=Q;else{var dt=pt(ht),Kt=mt/dt[2];ht=new Ci(Kt,nt[0]-dt[0]*Kt,nt[1]-dt[1]*Kt)}K.zoom(null,ht)}})}function R(M,C,v){return!v&&M.__zooming||new P(M,C)}function P(M,C){this.that=M,this.args=C,this.active=0,this.sourceEvent=null,this.extent=t.apply(M,C),this.taps=0}P.prototype={event:function(M){return M&&(this.sourceEvent=M),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(M,C){return this.mouse&&M!=="mouse"&&(this.mouse[1]=C.invert(this.mouse[0])),this.touch0&&M!=="touch"&&(this.touch0[1]=C.invert(this.touch0[0])),this.touch1&&M!=="touch"&&(this.touch1[1]=C.invert(this.touch1[0])),this.that.__zoom=C,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(M){var C=Le(this.that).datum();c.call(M,this.that,new D1(M,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),C)}};function U(M,...C){if(!e.apply(this,arguments))return;var v=R(this,C).event(M),N=this.__zoom,D=Math.max(s[0],Math.min(s[1],N.k*Math.pow(2,i.apply(this,arguments)))),W=sr(M);if(v.wheel)(v.mouse[0][0]!==W[0]||v.mouse[0][1]!==W[1])&&(v.mouse[1]=N.invert(v.mouse[0]=W)),clearTimeout(v.wheel);else{if(N.k===D)return;v.mouse=[W,N.invert(W)],Va(this),v.start()}Xs(M),v.wheel=setTimeout(K,m),v.zoom("mouse",n(E(b(N,D),v.mouse[0],v.mouse[1]),v.extent,o));function K(){v.wheel=null,v.end()}}function w(M,...C){if(u||!e.apply(this,arguments))return;var v=M.currentTarget,N=R(this,C,!0).event(M),D=Le(M.view).on("mousemove.zoom",nt,!0).on("mouseup.zoom",mt,!0),W=sr(M,v),K=M.clientX,J=M.clientY;$v(M.view),lc(M),N.mouse=[W,this.__zoom.invert(W)],Va(this),N.start();function nt(Z){if(Xs(Z),!N.moved){var Q=Z.clientX-K,pt=Z.clientY-J;N.moved=Q*Q+pt*pt>_}N.event(Z).zoom("mouse",n(E(N.that.__zoom,N.mouse[0]=sr(Z,v),N.mouse[1]),N.extent,o))}function mt(Z){D.on("mousemove.zoom mouseup.zoom",null),qv(Z.view,N.moved),Xs(Z),N.event(Z).end()}}function S(M,...C){if(e.apply(this,arguments)){var v=this.__zoom,N=sr(M.changedTouches?M.changedTouches[0]:M,this),D=v.invert(N),W=v.k*(M.shiftKey?.5:2),K=n(E(b(v,W),N,D),t.apply(this,C),o);Xs(M),a>0?Le(this).transition().duration(a).call(k,K,N,M):Le(this).call(p.transform,K,N,M)}}function L(M,...C){if(e.apply(this,arguments)){var v=M.touches,N=v.length,D=R(this,C,M.changedTouches.length===N).event(M),W,K,J,nt;for(lc(M),K=0;K<N;++K)J=v[K],nt=sr(J,this),nt=[nt,this.__zoom.invert(nt),J.identifier],D.touch0?!D.touch1&&D.touch0[2]!==nt[2]&&(D.touch1=nt,D.taps=0):(D.touch0=nt,W=!0,D.taps=1+!!h);h&&(h=clearTimeout(h)),W&&(D.taps<2&&(d=nt[0],h=setTimeout(function(){h=null},f)),Va(this),D.start())}}function G(M,...C){if(this.__zooming){var v=R(this,C).event(M),N=M.changedTouches,D=N.length,W,K,J,nt;for(Xs(M),W=0;W<D;++W)K=N[W],J=sr(K,this),v.touch0&&v.touch0[2]===K.identifier?v.touch0[0]=J:v.touch1&&v.touch1[2]===K.identifier&&(v.touch1[0]=J);if(K=v.that.__zoom,v.touch1){var mt=v.touch0[0],Z=v.touch0[1],Q=v.touch1[0],pt=v.touch1[1],ht=(ht=Q[0]-mt[0])*ht+(ht=Q[1]-mt[1])*ht,dt=(dt=pt[0]-Z[0])*dt+(dt=pt[1]-Z[1])*dt;K=b(K,Math.sqrt(ht/dt)),J=[(mt[0]+Q[0])/2,(mt[1]+Q[1])/2],nt=[(Z[0]+pt[0])/2,(Z[1]+pt[1])/2]}else if(v.touch0)J=v.touch0[0],nt=v.touch0[1];else return;v.zoom("touch",n(E(K,J,nt),v.extent,o))}}function $(M,...C){if(this.__zooming){var v=R(this,C).event(M),N=M.changedTouches,D=N.length,W,K;for(lc(M),u&&clearTimeout(u),u=setTimeout(function(){u=null},f),W=0;W<D;++W)K=N[W],v.touch0&&v.touch0[2]===K.identifier?delete v.touch0:v.touch1&&v.touch1[2]===K.identifier&&delete v.touch1;if(v.touch1&&!v.touch0&&(v.touch0=v.touch1,delete v.touch1),v.touch0)v.touch0[1]=this.__zoom.invert(v.touch0[0]);else if(v.end(),v.taps===2&&(K=sr(K,this),Math.hypot(d[0]-K[0],d[1]-K[1])<g)){var J=Le(this).on("dblclick.zoom");J&&J.apply(this,arguments)}}}return p.wheelDelta=function(M){return arguments.length?(i=typeof M=="function"?M:oa(+M),p):i},p.filter=function(M){return arguments.length?(e=typeof M=="function"?M:oa(!!M),p):e},p.touchable=function(M){return arguments.length?(r=typeof M=="function"?M:oa(!!M),p):r},p.extent=function(M){return arguments.length?(t=typeof M=="function"?M:oa([[+M[0][0],+M[0][1]],[+M[1][0],+M[1][1]]]),p):t},p.scaleExtent=function(M){return arguments.length?(s[0]=+M[0],s[1]=+M[1],p):[s[0],s[1]]},p.translateExtent=function(M){return arguments.length?(o[0][0]=+M[0][0],o[1][0]=+M[1][0],o[0][1]=+M[0][1],o[1][1]=+M[1][1],p):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},p.constrain=function(M){return arguments.length?(n=M,p):n},p.duration=function(M){return arguments.length?(a=+M,p):a},p.interpolate=function(M){return arguments.length?(l=M,p):l},p.on=function(){var M=c.on.apply(c,arguments);return M===c?p:M},p.clickDistance=function(M){return arguments.length?(_=(M=+M)*M,p):Math.sqrt(_)},p.tapDistance=function(M){return arguments.length?(g=+M,p):g},p}const O1={class:"toolbar"},U1={class:"toolbar-left"},z1=["onClick"],H1={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},V1={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},G1={class:"toolbar-right"},W1={class:"control-group"},$1=["title"],q1={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},X1={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},j1={key:1,class:"control-group"},Y1=["title"],K1={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},Z1={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},J1={class:"content-area"},Q1={class:"code-panel"},tT={class:"code-viewer"},eT={class:"code-content"},nT={class:"preview-panel"},iT={key:0,class:"loading-overlay"},rT={key:1,class:"empty-state"};var cg=Ps({__name:"index",props:{content:{type:String,required:!1,default:""},height:{type:String,required:!1,default:"600px"},theme:{type:String,required:!1,default:"light"}},setup(e){Ho(L=>({"5fd93944-height":L.height}));const t=e,n=Yt("preview"),i=Yt(t.content),r=Yt(),s=Yt(!1),o=Yt(!1),a=Yt(!1),l=Yt({x:0,y:0}),c=Yt({x:0,y:0,scale:1});let h=null,d=null;const u=[{key:"preview",label:"预览"},{key:"code",label:"代码"}],f=L=>{const G=L.split(`
`).filter(C=>C.trim()),$={name:"Root",children:[],level:0},M=[$];return G.forEach(C=>{const v=C.match(/^(#+)\s*(.+)$/);if(v){const N=v[1].length,W={name:v[2].trim(),children:[],level:N};for(;M.length>1&&M[M.length-1].level>=N;)M.pop();M[M.length-1].children.push(W),M.push(W)}else if(C.trim().startsWith("-")){const D={name:C.trim().substring(1).trim(),children:[],level:M[M.length-1].level+1};M[M.length-1].children.push(D)}}),$.children[0]||{name:"空白思维导图",children:[]}},m=()=>{if(!(!r.value||!i.value.trim())){s.value=!0;try{const L=r.value;L.innerHTML="";const G=L.clientWidth,$=L.clientHeight,M=f(i.value);h=Le(L).append("svg").attr("width",G).attr("height",$);const C=h.append("g");d=N1().scaleExtent([.1,3]).filter(nt=>nt.type!=="wheel").on("zoom",nt=>{!isNaN(nt.transform.x)&&!isNaN(nt.transform.y)&&!isNaN(nt.transform.k)&&(C.attr("transform",nt.transform),c.value={x:nt.transform.x,y:nt.transform.y,scale:nt.transform.k})}),h.call(d);const v=i1().size([$-100,G-200]),N=Iu(M),D=v(N),W=["#3B82F6","#EF4444","#10B981","#F59E0B","#8B5CF6","#EC4899"];C.selectAll(".link").data(D.links()).enter().append("path").attr("class","link").attr("d",f1().x(nt=>nt.y+100).y(nt=>nt.x+50)).style("fill","none").style("stroke","#94a3b8").style("stroke-width",2);const K=C.selectAll(".node").data(D.descendants()).enter().append("g").attr("class","node").attr("transform",nt=>`translate(${nt.y+100},${nt.x+50})`).style("cursor","pointer");K.append("circle").attr("r",8).style("fill",nt=>W[nt.depth%W.length]).style("stroke","#fff").style("stroke-width",2),K.append("text").attr("dx",nt=>nt.children?-15:15).attr("dy",5).attr("text-anchor",nt=>nt.children?"end":"start").text(nt=>nt.data.name).style("font-size","14px").style("font-family","Inter, sans-serif").style("fill","#374151"),K.on("mouseenter",function(){Le(this).select("circle").transition().duration(200).attr("r",12)}).on("mouseleave",function(){Le(this).select("circle").transition().duration(200).attr("r",8)});const J=C.node()?.getBBox();if(J){const nt=Math.min(G/J.width,$/J.height)*.8,mt=(G-J.width*nt)/2-J.x*nt,Z=($-J.height*nt)/2-J.y*nt;h.call(d.transform,Ro.translate(mt,Z).scale(nt))}}catch(L){console.error("Error rendering mindmap:",L)}finally{s.value=!1}}},_=()=>{h&&d&&h.transition().call(d.scaleBy,1.2)},g=()=>{h&&d&&h.transition().call(d.scaleBy,.8)},p=()=>{h&&d&&h.transition().call(d.transform,Ro),c.value={x:0,y:0,scale:1}},b=()=>{if(!r.value)return;const L=r.value.querySelector("svg");if(!L)return;const $=new XMLSerializer().serializeToString(L),M=new Blob([$],{type:"image/svg+xml"});ds(URL.createObjectURL(M),"mindmap.svg")},E=()=>{const L=new Blob([i.value],{type:"text/markdown"});ds(URL.createObjectURL(L),"mindmap.md")},y=async()=>{try{await navigator.clipboard.writeText(i.value)}catch(L){console.error("复制失败:",L)}},k=()=>{o.value=!o.value,Un(()=>{setTimeout(()=>{n.value==="preview"&&m()},100)})},R=()=>{o.value=!1,Un(()=>{setTimeout(()=>{n.value==="preview"&&m()},100)})},P=L=>{L.button===0&&(a.value=!0,l.value={x:L.clientX,y:L.clientY},L.preventDefault())},U=L=>{if(a.value&&h&&d){const G=L.clientX-l.value.x,$=L.clientY-l.value.y,M=lg(h.node()),C=M.translate(G/M.k,$/M.k);h.call(d.transform,C),l.value={x:L.clientX,y:L.clientY}}},w=()=>{a.value=!1},S=()=>{n.value==="preview"&&Un(()=>{setTimeout(()=>{m()},100)})};return Tr(n,L=>{L==="preview"&&Un(()=>{m()})}),Dl(()=>{m(),window.addEventListener("resize",S)}),Go(()=>{window.removeEventListener("resize",S)}),(L,G)=>(Tt(),bt("div",{class:vn(["markmap-container",{fullscreen:o.value}])},[ut(" Header Toolbar "),B("div",O1,[B("div",U1,[(Tt(),bt(Cr,null,Vo(u,$=>B("button",{key:$.key,onClick:M=>n.value=$.key,class:vn(["tab-button",{active:n.value===$.key}])},[$.key==="preview"?(Tt(),bt("svg",H1,[...G[0]||(G[0]=[B("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"},null,-1)])])):ut("v-if",!0),$.key==="code"?(Tt(),bt("svg",V1,[...G[1]||(G[1]=[B("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"},null,-1)])])):ut("v-if",!0),Cu(" "+Je($.label),1)],10,z1)),64))]),B("div",G1,[ut(" 预览模式的工具栏 "),n.value==="preview"?(Tt(),bt(Cr,{key:0},[B("div",{class:"control-group"},[B("button",{onClick:_,class:"control-button",title:"放大"},G[2]||(G[2]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)])),B("button",{onClick:g,class:"control-button",title:"缩小"},G[3]||(G[3]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M7 9h5v1H7z"})],-1)])),B("button",{onClick:p,class:"control-button",title:"重置视图"},G[4]||(G[4]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)]))]),B("div",W1,[B("button",{onClick:b,class:"control-button",title:"下载SVG"},G[5]||(G[5]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:k,class:"control-button",title:o.value?"退出全屏":"全屏"},[o.value?(Tt(),bt("svg",X1,G[7]||(G[7]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",q1,G[6]||(G[6]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,$1)])],64)):ut("v-if",!0),ut(" 代码模式的工具栏 "),n.value==="code"?(Tt(),bt("div",j1,[B("button",{onClick:y,class:"control-button",title:"复制代码"},G[8]||(G[8]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})],-1)])),B("button",{onClick:E,class:"control-button",title:"下载Markdown"},G[9]||(G[9]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:k,class:"control-button",title:o.value?"退出全屏":"全屏"},[o.value?(Tt(),bt("svg",Z1,G[11]||(G[11]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",K1,G[10]||(G[10]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,Y1)])):ut("v-if",!0)])]),ut(" Content Area "),B("div",J1,[ut(" Code Editor "),Zi(B("div",Q1,[B("div",tT,[B("pre",eT,Je(i.value),1)])],512),[[us,n.value==="code"]]),ut(" MarkMap Preview "),Zi(B("div",nT,[B("div",{ref_key:"markmapContainer",ref:r,class:"markmap-svg-container",onMousedown:P,onMousemove:U,onMouseup:w,onMouseleave:w},null,544),ut(" Loading State "),s.value?(Tt(),bt("div",iT,G[12]||(G[12]=[B("div",{class:"loading-spinner"},null,-1),B("p",null,"正在渲染思维导图...",-1)]))):ut("v-if",!0),ut(" Empty State "),!i.value.trim()&&!s.value?(Tt(),bt("div",rT,G[13]||(G[13]=[B("div",{class:"empty-icon"},"🗺️",-1),B("h3",null,"开始创建你的思维导图",-1),B("p",null,"切换到代码模式查看Markdown源码",-1)]))):ut("v-if",!0)],512),[[us,n.value==="preview"]])]),ut(" Fullscreen Overlay (when in fullscreen mode) "),o.value?(Tt(),bt("div",{key:0,class:"fullscreen-overlay",onClick:R},G[14]||(G[14]=[B("div",{class:"fullscreen-close-hint"},"点击任意位置或按 ESC 退出全屏",-1)]))):ut("v-if",!0)],2))}}),sT=`
.dark .content-area[data-v-5fd93944] {\r
  background: #99999980 !important;
}
.dark .code-viewer[data-v-5fd93944] {\r
  background: #99999980 !important;
}
.dark .control-button[data-v-5fd93944]:hover {\r
  background: #cccccc80 !important;
}
.dark .toolbar[data-v-5fd93944] {\r
  background: #1d1d1d !important;
}
.dark .control-group[data-v-5fd93944]{\r
  background-color: #000 !important;
}
.dark .toolbar .tab-button.active[data-v-5fd93944]{\r
  background-color: #dbeafe80 !important;
}
.dark .toolbar .tab-button[data-v-5fd93944]:hover{\r
  background-color: #9299a380 !important;\r
  color: white;
}
.markmap-container[data-v-5fd93944] {\r
  background: white;\r
  border-radius: 8px;\r
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;\r
  overflow: hidden;\r
  height: var(--5fd93944-height);\r
  transition: all 0.3s ease;\r
  position: relative;
}
.markmap-container.fullscreen[data-v-5fd93944] {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  z-index: 1000;\r
  border-radius: 0;\r
  height: 100vh !important;\r
  margin: 0;\r
  padding: 0;
}
.markmap-container.fullscreen .content-area[data-v-5fd93944] {\r
  background: white;\r
  height: calc(100vh - 60px);\r
  margin: 0;\r
  padding: 0;
}
.fullscreen-overlay[data-v-5fd93944] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.8);\r
  z-index: -1;\r
  cursor: pointer;
}
.fullscreen-close-hint[data-v-5fd93944] {\r
  position: absolute;\r
  top: 10px;\r
  right: 20px;\r
  color: white;\r
  font-size: 14px;\r
  padding: 8px 12px;\r
  background: rgba(0, 0, 0, 0.6);\r
  border-radius: 4px;\r
  z-index: 1001;
}
.toolbar[data-v-5fd93944] {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 12px 16px;\r
  background: #f9fafb;\r
  border-bottom: 1px solid #e5e7eb;\r
  height: 60px;
}
.toolbar-left[data-v-5fd93944] {\r
  display: flex;\r
  gap: 4px;
}
.toolbar-right[data-v-5fd93944] {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;
}
.tab-button[data-v-5fd93944] {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 16px;\r
  border-radius: 6px;\r
  font-size: 14px;\r
  font-weight: 500;\r
  transition: all 0.2s;\r
  color: #6b7280;\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;
}
.tab-button[data-v-5fd93944]:hover {\r
  color: #374151;\r
  background: white;
}
.tab-button.active[data-v-5fd93944] {\r
  background: #dbeafe;\r
  color: #1d4ed8;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.control-group[data-v-5fd93944] {\r
  display: flex;\r
  align-items: center;\r
  background: white;\r
  border-radius: 6px;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;
}
.control-button[data-v-5fd93944] {\r
  padding: 8px;\r
  background: transparent;\r
  border: none;\r
  color: #6b7280;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border-right: 1px solid #e5e7eb;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;
}
.control-button[data-v-5fd93944]:last-child {\r
  border-right: none;
}
.control-button[data-v-5fd93944]:first-child {\r
  border-top-left-radius: 6px;\r
  border-bottom-left-radius: 6px;
}
.control-button[data-v-5fd93944]:last-child {\r
  border-top-right-radius: 6px;\r
  border-bottom-right-radius: 6px;
}
.control-button[data-v-5fd93944]:hover {\r
  background: #f9fafb;\r
  color: #374151;
}
.icon[data-v-5fd93944] {\r
  width: 16px;\r
  height: 16px;
}
.content-area[data-v-5fd93944] {\r
  flex: 1;\r
  position: relative;\r
  height: calc(100% - 60px);
}
.code-panel[data-v-5fd93944] {\r
  height: 100%;\r
  overflow: hidden;
}
.code-viewer[data-v-5fd93944] {\r
  height: 100%;\r
  overflow: auto;\r
  background: #f9fafb;
}
.code-content[data-v-5fd93944] {\r
  width: 100%;\r
  height: 100%;\r
  margin: 0;\r
  padding: 16px;\r
  font-family: "Fira Code", "Monaco", "Consolas", monospace;\r
  font-size: 14px;\r
  color: #374151;\r
  line-height: 1.6;\r
  white-space: pre-wrap;\r
  background: transparent;\r
  border: none;\r
  outline: none;
}
.preview-panel[data-v-5fd93944] {\r
  height: 100%;\r
  position: relative;
}
.markmap-svg-container[data-v-5fd93944] {\r
  width: 100%;\r
  height: 100%;\r
  cursor: grab;
}
.markmap-svg-container[data-v-5fd93944]:active {\r
  cursor: grabbing;
}
.loading-overlay[data-v-5fd93944] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  background: rgba(255, 255, 255, 0.8);
}
.loading-spinner[data-v-5fd93944] {\r
  width: 32px;\r
  height: 32px;\r
  border: 4px solid #dbeafe;\r
  border-top: 4px solid #2563eb;\r
  border-radius: 50%;\r
  animation: spin-5fd93944 1s linear infinite;\r
  margin-bottom: 16px;
}
.empty-state[data-v-5fd93944] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #6b7280;
}
.empty-icon[data-v-5fd93944] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.empty-state h3[data-v-5fd93944] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #374151;
}
.empty-state p[data-v-5fd93944] {\r
  font-size: 14px;
}
@keyframes spin-5fd93944 {
to {\r
    transform: rotate(360deg);
}
}\r
\r
/* Custom scrollbar for code viewer */
.code-viewer[data-v-5fd93944]::-webkit-scrollbar {\r
  width: 8px;\r
  height: 8px;
}
.code-viewer[data-v-5fd93944]::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
  border-radius: 4px;
}
.code-viewer[data-v-5fd93944]::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 4px;
}
.code-viewer[data-v-5fd93944]::-webkit-scrollbar-thumb:hover {\r
  background: #a1a1a1;
}\r
\r
/* Responsive adjustments */
@media (max-width: 768px) {
.toolbar[data-v-5fd93944] {\r
    flex-direction: column;\r
    gap: 12px;\r
    padding: 16px;\r
    height: auto;
}
.toolbar-left[data-v-5fd93944],\r
  .toolbar-right[data-v-5fd93944] {\r
    width: 100%;\r
    justify-content: center;
}
.tab-button[data-v-5fd93944] {\r
    flex: 1;\r
    justify-content: center;
}
}\r
\r
/* Print styles */
@media print {
.toolbar[data-v-5fd93944] {\r
    display: none;
}
.markmap-container[data-v-5fd93944] {\r
    box-shadow: none;\r
    border: none;
}
}\r
`;Fs(sT);cg.__scopeId="data-v-5fd93944";cg.__file="packages/MarkMap/index.vue";function oT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Array.from(typeof e=="string"?[e]:e);i[i.length-1]=i[i.length-1].replace(/\r?\n([\t ]*)$/,"");var r=i.reduce(function(a,l){var c=l.match(/\n([\t ]+|(?!\s).)/g);return c?a.concat(c.map(function(h){var d,u;return(u=(d=h.match(/[\t ]/g))===null||d===void 0?void 0:d.length)!==null&&u!==void 0?u:0})):a},[]);if(r.length){var s=new RegExp(`
[	 ]{`+Math.min.apply(Math,r)+"}","g");i=i.map(function(a){return a.replace(s,`
`)})}i[0]=i[0].replace(/^\r?\n/,"");var o=i[0];return t.forEach(function(a,l){var c=o.match(/(?:^|\n)( *)$/),h=c?c[1]:"",d=a;typeof a=="string"&&a.includes(`
`)&&(d=String(a).split(`
`).map(function(u,f){return f===0?u:""+h+u}).join(`
`)),o+=d+i[l+1]}),o}var R4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function aT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wa={exports:{}},lT=Wa.exports,tf;function cT(){return tf||(tf=1,(function(e,t){(function(n,i){e.exports=i()})(lT,(function(){var n=1e3,i=6e4,r=36e5,s="millisecond",o="second",a="minute",l="hour",c="day",h="week",d="month",u="quarter",f="year",m="date",_="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(M){var C=["th","st","nd","rd"],v=M%100;return"["+M+(C[(v-20)%10]||C[v]||C[0])+"]"}},E=function(M,C,v){var N=String(M);return!N||N.length>=C?M:""+Array(C+1-N.length).join(v)+M},y={s:E,z:function(M){var C=-M.utcOffset(),v=Math.abs(C),N=Math.floor(v/60),D=v%60;return(C<=0?"+":"-")+E(N,2,"0")+":"+E(D,2,"0")},m:function M(C,v){if(C.date()<v.date())return-M(v,C);var N=12*(v.year()-C.year())+(v.month()-C.month()),D=C.clone().add(N,d),W=v-D<0,K=C.clone().add(N+(W?-1:1),d);return+(-(N+(v-D)/(W?D-K:K-D))||0)},a:function(M){return M<0?Math.ceil(M)||0:Math.floor(M)},p:function(M){return{M:d,y:f,w:h,d:c,D:m,h:l,m:a,s:o,ms:s,Q:u}[M]||String(M||"").toLowerCase().replace(/s$/,"")},u:function(M){return M===void 0}},k="en",R={};R[k]=b;var P="$isDayjsObject",U=function(M){return M instanceof G||!(!M||!M[P])},w=function M(C,v,N){var D;if(!C)return k;if(typeof C=="string"){var W=C.toLowerCase();R[W]&&(D=W),v&&(R[W]=v,D=W);var K=C.split("-");if(!D&&K.length>1)return M(K[0])}else{var J=C.name;R[J]=C,D=J}return!N&&D&&(k=D),D||!N&&k},S=function(M,C){if(U(M))return M.clone();var v=typeof C=="object"?C:{};return v.date=M,v.args=arguments,new G(v)},L=y;L.l=w,L.i=U,L.w=function(M,C){return S(M,{locale:C.$L,utc:C.$u,x:C.$x,$offset:C.$offset})};var G=(function(){function M(v){this.$L=w(v.locale,null,!0),this.parse(v),this.$x=this.$x||v.x||{},this[P]=!0}var C=M.prototype;return C.parse=function(v){this.$d=(function(N){var D=N.date,W=N.utc;if(D===null)return new Date(NaN);if(L.u(D))return new Date;if(D instanceof Date)return new Date(D);if(typeof D=="string"&&!/Z$/i.test(D)){var K=D.match(g);if(K){var J=K[2]-1||0,nt=(K[7]||"0").substring(0,3);return W?new Date(Date.UTC(K[1],J,K[3]||1,K[4]||0,K[5]||0,K[6]||0,nt)):new Date(K[1],J,K[3]||1,K[4]||0,K[5]||0,K[6]||0,nt)}}return new Date(D)})(v),this.init()},C.init=function(){var v=this.$d;this.$y=v.getFullYear(),this.$M=v.getMonth(),this.$D=v.getDate(),this.$W=v.getDay(),this.$H=v.getHours(),this.$m=v.getMinutes(),this.$s=v.getSeconds(),this.$ms=v.getMilliseconds()},C.$utils=function(){return L},C.isValid=function(){return this.$d.toString()!==_},C.isSame=function(v,N){var D=S(v);return this.startOf(N)<=D&&D<=this.endOf(N)},C.isAfter=function(v,N){return S(v)<this.startOf(N)},C.isBefore=function(v,N){return this.endOf(N)<S(v)},C.$g=function(v,N,D){return L.u(v)?this[N]:this.set(D,v)},C.unix=function(){return Math.floor(this.valueOf()/1e3)},C.valueOf=function(){return this.$d.getTime()},C.startOf=function(v,N){var D=this,W=!!L.u(N)||N,K=L.p(v),J=function(Kt,Ct){var le=L.w(D.$u?Date.UTC(D.$y,Ct,Kt):new Date(D.$y,Ct,Kt),D);return W?le:le.endOf(c)},nt=function(Kt,Ct){return L.w(D.toDate()[Kt].apply(D.toDate("s"),(W?[0,0,0,0]:[23,59,59,999]).slice(Ct)),D)},mt=this.$W,Z=this.$M,Q=this.$D,pt="set"+(this.$u?"UTC":"");switch(K){case f:return W?J(1,0):J(31,11);case d:return W?J(1,Z):J(0,Z+1);case h:var ht=this.$locale().weekStart||0,dt=(mt<ht?mt+7:mt)-ht;return J(W?Q-dt:Q+(6-dt),Z);case c:case m:return nt(pt+"Hours",0);case l:return nt(pt+"Minutes",1);case a:return nt(pt+"Seconds",2);case o:return nt(pt+"Milliseconds",3);default:return this.clone()}},C.endOf=function(v){return this.startOf(v,!1)},C.$set=function(v,N){var D,W=L.p(v),K="set"+(this.$u?"UTC":""),J=(D={},D[c]=K+"Date",D[m]=K+"Date",D[d]=K+"Month",D[f]=K+"FullYear",D[l]=K+"Hours",D[a]=K+"Minutes",D[o]=K+"Seconds",D[s]=K+"Milliseconds",D)[W],nt=W===c?this.$D+(N-this.$W):N;if(W===d||W===f){var mt=this.clone().set(m,1);mt.$d[J](nt),mt.init(),this.$d=mt.set(m,Math.min(this.$D,mt.daysInMonth())).$d}else J&&this.$d[J](nt);return this.init(),this},C.set=function(v,N){return this.clone().$set(v,N)},C.get=function(v){return this[L.p(v)]()},C.add=function(v,N){var D,W=this;v=Number(v);var K=L.p(N),J=function(Z){var Q=S(W);return L.w(Q.date(Q.date()+Math.round(Z*v)),W)};if(K===d)return this.set(d,this.$M+v);if(K===f)return this.set(f,this.$y+v);if(K===c)return J(1);if(K===h)return J(7);var nt=(D={},D[a]=i,D[l]=r,D[o]=n,D)[K]||1,mt=this.$d.getTime()+v*nt;return L.w(mt,this)},C.subtract=function(v,N){return this.add(-1*v,N)},C.format=function(v){var N=this,D=this.$locale();if(!this.isValid())return D.invalidDate||_;var W=v||"YYYY-MM-DDTHH:mm:ssZ",K=L.z(this),J=this.$H,nt=this.$m,mt=this.$M,Z=D.weekdays,Q=D.months,pt=D.meridiem,ht=function(Ct,le,he,ot){return Ct&&(Ct[le]||Ct(N,W))||he[le].slice(0,ot)},dt=function(Ct){return L.s(J%12||12,Ct,"0")},Kt=pt||function(Ct,le,he){var ot=Ct<12?"AM":"PM";return he?ot.toLowerCase():ot};return W.replace(p,(function(Ct,le){return le||(function(he){switch(he){case"YY":return String(N.$y).slice(-2);case"YYYY":return L.s(N.$y,4,"0");case"M":return mt+1;case"MM":return L.s(mt+1,2,"0");case"MMM":return ht(D.monthsShort,mt,Q,3);case"MMMM":return ht(Q,mt);case"D":return N.$D;case"DD":return L.s(N.$D,2,"0");case"d":return String(N.$W);case"dd":return ht(D.weekdaysMin,N.$W,Z,2);case"ddd":return ht(D.weekdaysShort,N.$W,Z,3);case"dddd":return Z[N.$W];case"H":return String(J);case"HH":return L.s(J,2,"0");case"h":return dt(1);case"hh":return dt(2);case"a":return Kt(J,nt,!0);case"A":return Kt(J,nt,!1);case"m":return String(nt);case"mm":return L.s(nt,2,"0");case"s":return String(N.$s);case"ss":return L.s(N.$s,2,"0");case"SSS":return L.s(N.$ms,3,"0");case"Z":return K}return null})(Ct)||K.replace(":","")}))},C.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},C.diff=function(v,N,D){var W,K=this,J=L.p(N),nt=S(v),mt=(nt.utcOffset()-this.utcOffset())*i,Z=this-nt,Q=function(){return L.m(K,nt)};switch(J){case f:W=Q()/12;break;case d:W=Q();break;case u:W=Q()/3;break;case h:W=(Z-mt)/6048e5;break;case c:W=(Z-mt)/864e5;break;case l:W=Z/r;break;case a:W=Z/i;break;case o:W=Z/n;break;default:W=Z}return D?W:L.a(W)},C.daysInMonth=function(){return this.endOf(d).$D},C.$locale=function(){return R[this.$L]},C.locale=function(v,N){if(!v)return this.$L;var D=this.clone(),W=w(v,N,!0);return W&&(D.$L=W),D},C.clone=function(){return L.w(this.$d,this)},C.toDate=function(){return new Date(this.valueOf())},C.toJSON=function(){return this.isValid()?this.toISOString():null},C.toISOString=function(){return this.$d.toISOString()},C.toString=function(){return this.$d.toUTCString()},M})(),$=G.prototype;return S.prototype=$,[["$ms",s],["$s",o],["$m",a],["$H",l],["$W",c],["$M",d],["$y",f],["$D",m]].forEach((function(M){$[M[1]]=function(C){return this.$g(C,M[0],M[1])}})),S.extend=function(M,C){return M.$i||(M(C,G,S),M.$i=!0),S},S.locale=w,S.isDayjs=U,S.unix=function(M){return S(1e3*M)},S.en=R[k],S.Ls=R,S.p={},S}))})(Wa)),Wa.exports}var hT=cT();const uT=aT(hT);var cc={},ef;function dT(){return ef||(ef=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=e.BLANK_URL=void 0;var t=/^([^\w]*)(javascript|data|vbscript)/im,n=/&#(\w+)(^\w|;)?/g,i=/&(newline|tab);/gi,r=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,s=/^.+(:|&colon;)/gim,o=[".","/"];e.BLANK_URL="about:blank";function a(h){return o.indexOf(h[0])>-1}function l(h){var d=h.replace(r,"");return d.replace(n,function(u,f){return String.fromCharCode(f)})}function c(h){if(!h)return e.BLANK_URL;var d=l(h).replace(i,"").replace(r,"").trim();if(!d)return e.BLANK_URL;if(a(d))return d;var u=d.match(s);if(!u)return d;var f=u[0];return t.test(f)?e.BLANK_URL:d}e.sanitizeUrl=c})(cc)),cc}var fT=dT();const{entries:hg,setPrototypeOf:nf,isFrozen:pT,getPrototypeOf:mT,getOwnPropertyDescriptor:gT}=Object;let{freeze:rn,seal:Rn,create:yh}=Object,{apply:bh,construct:Th}=typeof Reflect<"u"&&Reflect;rn||(rn=function(t){return t});Rn||(Rn=function(t){return t});bh||(bh=function(t,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];return t.apply(n,r)});Th||(Th=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return new t(...i)});const aa=sn(Array.prototype.forEach),_T=sn(Array.prototype.lastIndexOf),rf=sn(Array.prototype.pop),js=sn(Array.prototype.push),xT=sn(Array.prototype.splice),$a=sn(String.prototype.toLowerCase),hc=sn(String.prototype.toString),uc=sn(String.prototype.match),Ys=sn(String.prototype.replace),vT=sn(String.prototype.indexOf),yT=sn(String.prototype.trim),kn=sn(Object.prototype.hasOwnProperty),je=sn(RegExp.prototype.test),Ks=bT(TypeError);function sn(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return bh(e,t,i)}}function bT(e){return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return Th(e,n)}}function ae(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$a;nf&&nf(e,null);let i=t.length;for(;i--;){let r=t[i];if(typeof r=="string"){const s=n(r);s!==r&&(pT(t)||(t[i]=s),r=s)}e[r]=!0}return e}function TT(e){for(let t=0;t<e.length;t++)kn(e,t)||(e[t]=null);return e}function jn(e){const t=yh(null);for(const[n,i]of hg(e))kn(e,n)&&(Array.isArray(i)?t[n]=TT(i):i&&typeof i=="object"&&i.constructor===Object?t[n]=jn(i):t[n]=i);return t}function Zs(e,t){for(;e!==null;){const i=gT(e,t);if(i){if(i.get)return sn(i.get);if(typeof i.value=="function")return sn(i.value)}e=mT(e)}function n(){return null}return n}const sf=rn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),dc=rn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),fc=rn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ST=rn(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),pc=rn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),MT=rn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),of=rn(["#text"]),af=rn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),mc=rn(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lf=rn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),la=rn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),CT=Rn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ET=Rn(/<%[\w\W]*|[\w\W]*%>/gm),wT=Rn(/\$\{[\w\W]*/gm),AT=Rn(/^data-[\-\w.\u00B7-\uFFFF]+$/),RT=Rn(/^aria-[\-\w]+$/),ug=Rn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),LT=Rn(/^(?:\w+script|data):/i),DT=Rn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),dg=Rn(/^html$/i),PT=Rn(/^[a-z][.\w]*(-[.\w]+)+$/i);var cf=Object.freeze({__proto__:null,ARIA_ATTR:RT,ATTR_WHITESPACE:DT,CUSTOM_ELEMENT:PT,DATA_ATTR:AT,DOCTYPE_NAME:dg,ERB_EXPR:ET,IS_ALLOWED_URI:ug,IS_SCRIPT_OR_DATA:LT,MUSTACHE_EXPR:CT,TMPLIT_EXPR:wT});const Js={element:1,text:3,progressingInstruction:7,comment:8,document:9},FT=function(){return typeof window>"u"?null:window},IT=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let i=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(i=n.getAttribute(r));const s="dompurify"+(i?"#"+i:"");try{return t.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},hf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function fg(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:FT();const t=Ut=>fg(Ut);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==Js.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const i=n,r=i.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:c,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:u,trustedTypes:f}=e,m=l.prototype,_=Zs(m,"cloneNode"),g=Zs(m,"remove"),p=Zs(m,"nextSibling"),b=Zs(m,"childNodes"),E=Zs(m,"parentNode");if(typeof o=="function"){const Ut=n.createElement("template");Ut.content&&Ut.content.ownerDocument&&(n=Ut.content.ownerDocument)}let y,k="";const{implementation:R,createNodeIterator:P,createDocumentFragment:U,getElementsByTagName:w}=n,{importNode:S}=i;let L=hf();t.isSupported=typeof hg=="function"&&typeof E=="function"&&R&&R.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:G,ERB_EXPR:$,TMPLIT_EXPR:M,DATA_ATTR:C,ARIA_ATTR:v,IS_SCRIPT_OR_DATA:N,ATTR_WHITESPACE:D,CUSTOM_ELEMENT:W}=cf;let{IS_ALLOWED_URI:K}=cf,J=null;const nt=ae({},[...sf,...dc,...fc,...pc,...of]);let mt=null;const Z=ae({},[...af,...mc,...lf,...la]);let Q=Object.seal(yh(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),pt=null,ht=null;const dt=Object.seal(yh(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Kt=!0,Ct=!0,le=!1,he=!0,ot=!1,A=!0,qt=!1,Lt=!1,Xt=!1,St=!1,re=!1,It=!1,Jt=!0,be=!1;const F="user-content-";let T=!0,Y=!1,et={},it=null;const tt=ae({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let kt=null;const xt=ae({},["audio","video","img","source","image","track"]);let Dt=null;const Bt=ae({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),at="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",Nt="http://www.w3.org/1999/xhtml";let Ot=Nt,gt=!1,Zt=null;const z=ae({},[at,Mt,Nt],hc);let vt=ae({},["mi","mo","mn","ms","mtext"]),lt=ae({},["annotation-xml"]);const At=ae({},["title","style","font","a","script"]);let ct=null;const rt=["application/xhtml+xml","text/html"],Pt="text/html";let Ft=null,fe=null;const me=n.createElement("form"),an=function(O){return O instanceof RegExp||O instanceof Function},mn=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(fe&&fe===O)){if((!O||typeof O!="object")&&(O={}),O=jn(O),ct=rt.indexOf(O.PARSER_MEDIA_TYPE)===-1?Pt:O.PARSER_MEDIA_TYPE,Ft=ct==="application/xhtml+xml"?hc:$a,J=kn(O,"ALLOWED_TAGS")?ae({},O.ALLOWED_TAGS,Ft):nt,mt=kn(O,"ALLOWED_ATTR")?ae({},O.ALLOWED_ATTR,Ft):Z,Zt=kn(O,"ALLOWED_NAMESPACES")?ae({},O.ALLOWED_NAMESPACES,hc):z,Dt=kn(O,"ADD_URI_SAFE_ATTR")?ae(jn(Bt),O.ADD_URI_SAFE_ATTR,Ft):Bt,kt=kn(O,"ADD_DATA_URI_TAGS")?ae(jn(xt),O.ADD_DATA_URI_TAGS,Ft):xt,it=kn(O,"FORBID_CONTENTS")?ae({},O.FORBID_CONTENTS,Ft):tt,pt=kn(O,"FORBID_TAGS")?ae({},O.FORBID_TAGS,Ft):jn({}),ht=kn(O,"FORBID_ATTR")?ae({},O.FORBID_ATTR,Ft):jn({}),et=kn(O,"USE_PROFILES")?O.USE_PROFILES:!1,Kt=O.ALLOW_ARIA_ATTR!==!1,Ct=O.ALLOW_DATA_ATTR!==!1,le=O.ALLOW_UNKNOWN_PROTOCOLS||!1,he=O.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ot=O.SAFE_FOR_TEMPLATES||!1,A=O.SAFE_FOR_XML!==!1,qt=O.WHOLE_DOCUMENT||!1,St=O.RETURN_DOM||!1,re=O.RETURN_DOM_FRAGMENT||!1,It=O.RETURN_TRUSTED_TYPE||!1,Xt=O.FORCE_BODY||!1,Jt=O.SANITIZE_DOM!==!1,be=O.SANITIZE_NAMED_PROPS||!1,T=O.KEEP_CONTENT!==!1,Y=O.IN_PLACE||!1,K=O.ALLOWED_URI_REGEXP||ug,Ot=O.NAMESPACE||Nt,vt=O.MATHML_TEXT_INTEGRATION_POINTS||vt,lt=O.HTML_INTEGRATION_POINTS||lt,Q=O.CUSTOM_ELEMENT_HANDLING||{},O.CUSTOM_ELEMENT_HANDLING&&an(O.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Q.tagNameCheck=O.CUSTOM_ELEMENT_HANDLING.tagNameCheck),O.CUSTOM_ELEMENT_HANDLING&&an(O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Q.attributeNameCheck=O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),O.CUSTOM_ELEMENT_HANDLING&&typeof O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Q.allowCustomizedBuiltInElements=O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ot&&(Ct=!1),re&&(St=!0),et&&(J=ae({},of),mt=[],et.html===!0&&(ae(J,sf),ae(mt,af)),et.svg===!0&&(ae(J,dc),ae(mt,mc),ae(mt,la)),et.svgFilters===!0&&(ae(J,fc),ae(mt,mc),ae(mt,la)),et.mathMl===!0&&(ae(J,pc),ae(mt,lf),ae(mt,la))),O.ADD_TAGS&&(typeof O.ADD_TAGS=="function"?dt.tagCheck=O.ADD_TAGS:(J===nt&&(J=jn(J)),ae(J,O.ADD_TAGS,Ft))),O.ADD_ATTR&&(typeof O.ADD_ATTR=="function"?dt.attributeCheck=O.ADD_ATTR:(mt===Z&&(mt=jn(mt)),ae(mt,O.ADD_ATTR,Ft))),O.ADD_URI_SAFE_ATTR&&ae(Dt,O.ADD_URI_SAFE_ATTR,Ft),O.FORBID_CONTENTS&&(it===tt&&(it=jn(it)),ae(it,O.FORBID_CONTENTS,Ft)),O.ADD_FORBID_CONTENTS&&(it===tt&&(it=jn(it)),ae(it,O.ADD_FORBID_CONTENTS,Ft)),T&&(J["#text"]=!0),qt&&ae(J,["html","head","body"]),J.table&&(ae(J,["tbody"]),delete pt.tbody),O.TRUSTED_TYPES_POLICY){if(typeof O.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ks('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof O.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ks('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');y=O.TRUSTED_TYPES_POLICY,k=y.createHTML("")}else y===void 0&&(y=IT(f,r)),y!==null&&typeof k=="string"&&(k=y.createHTML(""));rn&&rn(O),fe=O}},Hs=ae({},[...dc,...fc,...ST]),Vs=ae({},[...pc,...MT]),di=function(O){let x=E(O);(!x||!x.tagName)&&(x={namespaceURI:Ot,tagName:"template"});const I=$a(O.tagName),X=$a(x.tagName);return Zt[O.namespaceURI]?O.namespaceURI===Mt?x.namespaceURI===Nt?I==="svg":x.namespaceURI===at?I==="svg"&&(X==="annotation-xml"||vt[X]):!!Hs[I]:O.namespaceURI===at?x.namespaceURI===Nt?I==="math":x.namespaceURI===Mt?I==="math"&&lt[X]:!!Vs[I]:O.namespaceURI===Nt?x.namespaceURI===Mt&&!lt[X]||x.namespaceURI===at&&!vt[X]?!1:!Vs[I]&&(At[I]||!Hs[I]):!!(ct==="application/xhtml+xml"&&Zt[O.namespaceURI]):!1},ln=function(O){js(t.removed,{element:O});try{E(O).removeChild(O)}catch{g(O)}},Xn=function(O,x){try{js(t.removed,{attribute:x.getAttributeNode(O),from:x})}catch{js(t.removed,{attribute:null,from:x})}if(x.removeAttribute(O),O==="is")if(St||re)try{ln(x)}catch{}else try{x.setAttribute(O,"")}catch{}},Gs=function(O){let x=null,I=null;if(Xt)O="<remove></remove>"+O;else{const H=uc(O,/^[\r\n\t ]+/);I=H&&H[0]}ct==="application/xhtml+xml"&&Ot===Nt&&(O='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+O+"</body></html>");const X=y?y.createHTML(O):O;if(Ot===Nt)try{x=new u().parseFromString(X,ct)}catch{}if(!x||!x.documentElement){x=R.createDocument(Ot,"template",null);try{x.documentElement.innerHTML=gt?k:X}catch{}}const j=x.body||x.documentElement;return O&&I&&j.insertBefore(n.createTextNode(I),j.childNodes[0]||null),Ot===Nt?w.call(x,qt?"html":"body")[0]:qt?x.documentElement:j},nr=function(O){return P.call(O.ownerDocument||O,O,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},kr=function(O){return O instanceof d&&(typeof O.nodeName!="string"||typeof O.textContent!="string"||typeof O.removeChild!="function"||!(O.attributes instanceof h)||typeof O.removeAttribute!="function"||typeof O.setAttribute!="function"||typeof O.namespaceURI!="string"||typeof O.insertBefore!="function"||typeof O.hasChildNodes!="function")},ir=function(O){return typeof a=="function"&&O instanceof a};function Tn(Ut,O,x){aa(Ut,I=>{I.call(t,O,x,fe)})}const Ws=function(O){let x=null;if(Tn(L.beforeSanitizeElements,O,null),kr(O))return ln(O),!0;const I=Ft(O.nodeName);if(Tn(L.uponSanitizeElement,O,{tagName:I,allowedTags:J}),A&&O.hasChildNodes()&&!ir(O.firstElementChild)&&je(/<[/\w!]/g,O.innerHTML)&&je(/<[/\w!]/g,O.textContent)||O.nodeType===Js.progressingInstruction||A&&O.nodeType===Js.comment&&je(/<[/\w]/g,O.data))return ln(O),!0;if(!(dt.tagCheck instanceof Function&&dt.tagCheck(I))&&(!J[I]||pt[I])){if(!pt[I]&&ea(I)&&(Q.tagNameCheck instanceof RegExp&&je(Q.tagNameCheck,I)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(I)))return!1;if(T&&!it[I]){const X=E(O)||O.parentNode,j=b(O)||O.childNodes;if(j&&X){const H=j.length;for(let st=H-1;st>=0;--st){const ft=_(j[st],!0);ft.__removalCount=(O.__removalCount||0)+1,X.insertBefore(ft,p(O))}}}return ln(O),!0}return O instanceof l&&!di(O)||(I==="noscript"||I==="noembed"||I==="noframes")&&je(/<\/no(script|embed|frames)/i,O.innerHTML)?(ln(O),!0):(ot&&O.nodeType===Js.text&&(x=O.textContent,aa([G,$,M],X=>{x=Ys(x,X," ")}),O.textContent!==x&&(js(t.removed,{element:O.cloneNode()}),O.textContent=x)),Tn(L.afterSanitizeElements,O,null),!1)},ta=function(O,x,I){if(Jt&&(x==="id"||x==="name")&&(I in n||I in me))return!1;if(!(Ct&&!ht[x]&&je(C,x))){if(!(Kt&&je(v,x))){if(!(dt.attributeCheck instanceof Function&&dt.attributeCheck(x,O))){if(!mt[x]||ht[x]){if(!(ea(O)&&(Q.tagNameCheck instanceof RegExp&&je(Q.tagNameCheck,O)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(O))&&(Q.attributeNameCheck instanceof RegExp&&je(Q.attributeNameCheck,x)||Q.attributeNameCheck instanceof Function&&Q.attributeNameCheck(x,O))||x==="is"&&Q.allowCustomizedBuiltInElements&&(Q.tagNameCheck instanceof RegExp&&je(Q.tagNameCheck,I)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(I))))return!1}else if(!Dt[x]){if(!je(K,Ys(I,D,""))){if(!((x==="src"||x==="xlink:href"||x==="href")&&O!=="script"&&vT(I,"data:")===0&&kt[O])){if(!(le&&!je(N,Ys(I,D,"")))){if(I)return!1}}}}}}}return!0},ea=function(O){return O!=="annotation-xml"&&uc(O,W)},na=function(O){Tn(L.beforeSanitizeAttributes,O,null);const{attributes:x}=O;if(!x||kr(O))return;const I={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:mt,forceKeepAttr:void 0};let X=x.length;for(;X--;){const j=x[X],{name:H,namespaceURI:st,value:ft}=j,wt=Ft(H),Et=ft;let Rt=H==="value"?Et:yT(Et);if(I.attrName=wt,I.attrValue=Rt,I.keepAttr=!0,I.forceKeepAttr=void 0,Tn(L.uponSanitizeAttribute,O,I),Rt=I.attrValue,be&&(wt==="id"||wt==="name")&&(Xn(H,O),Rt=F+Rt),A&&je(/((--!?|])>)|<\/(style|title|textarea)/i,Rt)){Xn(H,O);continue}if(wt==="attributename"&&uc(Rt,"href")){Xn(H,O);continue}if(I.forceKeepAttr)continue;if(!I.keepAttr){Xn(H,O);continue}if(!he&&je(/\/>/i,Rt)){Xn(H,O);continue}ot&&aa([G,$,M],zt=>{Rt=Ys(Rt,zt," ")});const jt=Ft(O.nodeName);if(!ta(jt,wt,Rt)){Xn(H,O);continue}if(y&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!st)switch(f.getAttributeType(jt,wt)){case"TrustedHTML":{Rt=y.createHTML(Rt);break}case"TrustedScriptURL":{Rt=y.createScriptURL(Rt);break}}if(Rt!==Et)try{st?O.setAttributeNS(st,H,Rt):O.setAttribute(H,Rt),kr(O)?ln(O):rf(t.removed)}catch{Xn(H,O)}}Tn(L.afterSanitizeAttributes,O,null)},ec=function Ut(O){let x=null;const I=nr(O);for(Tn(L.beforeSanitizeShadowDOM,O,null);x=I.nextNode();)Tn(L.uponSanitizeShadowNode,x,null),Ws(x),na(x),x.content instanceof s&&Ut(x.content);Tn(L.afterSanitizeShadowDOM,O,null)};return t.sanitize=function(Ut){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,I=null,X=null,j=null;if(gt=!Ut,gt&&(Ut="<!-->"),typeof Ut!="string"&&!ir(Ut))if(typeof Ut.toString=="function"){if(Ut=Ut.toString(),typeof Ut!="string")throw Ks("dirty is not a string, aborting")}else throw Ks("toString is not a function");if(!t.isSupported)return Ut;if(Lt||mn(O),t.removed=[],typeof Ut=="string"&&(Y=!1),Y){if(Ut.nodeName){const ft=Ft(Ut.nodeName);if(!J[ft]||pt[ft])throw Ks("root node is forbidden and cannot be sanitized in-place")}}else if(Ut instanceof a)x=Gs("<!---->"),I=x.ownerDocument.importNode(Ut,!0),I.nodeType===Js.element&&I.nodeName==="BODY"||I.nodeName==="HTML"?x=I:x.appendChild(I);else{if(!St&&!ot&&!qt&&Ut.indexOf("<")===-1)return y&&It?y.createHTML(Ut):Ut;if(x=Gs(Ut),!x)return St?null:It?k:""}x&&Xt&&ln(x.firstChild);const H=nr(Y?Ut:x);for(;X=H.nextNode();)Ws(X),na(X),X.content instanceof s&&ec(X.content);if(Y)return Ut;if(St){if(re)for(j=U.call(x.ownerDocument);x.firstChild;)j.appendChild(x.firstChild);else j=x;return(mt.shadowroot||mt.shadowrootmode)&&(j=S.call(i,j,!0)),j}let st=qt?x.outerHTML:x.innerHTML;return qt&&J["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&je(dg,x.ownerDocument.doctype.name)&&(st="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+st),ot&&aa([G,$,M],ft=>{st=Ys(st,ft," ")}),y&&It?y.createHTML(st):st},t.setConfig=function(){let Ut=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mn(Ut),Lt=!0},t.clearConfig=function(){fe=null,Lt=!1},t.isValidAttribute=function(Ut,O,x){fe||mn({});const I=Ft(Ut),X=Ft(O);return ta(I,X,x)},t.addHook=function(Ut,O){typeof O=="function"&&js(L[Ut],O)},t.removeHook=function(Ut,O){if(O!==void 0){const x=_T(L[Ut],O);return x===-1?void 0:xT(L[Ut],x,1)[0]}return rf(L[Ut])},t.removeHooks=function(Ut){L[Ut]=[]},t.removeAllHooks=function(){L=hf()},t}var ms=fg();const qa={min:{r:0,g:0,b:0,s:0,l:0,a:0},max:{r:255,g:255,b:255,h:360,s:100,l:100,a:1},clamp:{r:e=>e>=255?255:e<0?0:e,g:e=>e>=255?255:e<0?0:e,b:e=>e>=255?255:e<0?0:e,h:e=>e%360,s:e=>e>=100?100:e<0?0:e,l:e=>e>=100?100:e<0?0:e,a:e=>e>=1?1:e<0?0:e},toLinear:e=>{const t=e/255;return e>.03928?Math.pow((t+.055)/1.055,2.4):t/12.92},hue2rgb:(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),hsl2rgb:({h:e,s:t,l:n},i)=>{if(!t)return n*2.55;e/=360,t/=100,n/=100;const r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;switch(i){case"r":return qa.hue2rgb(s,r,e+1/3)*255;case"g":return qa.hue2rgb(s,r,e)*255;case"b":return qa.hue2rgb(s,r,e-1/3)*255}},rgb2hsl:({r:e,g:t,b:n},i)=>{e/=255,t/=255,n/=255;const r=Math.max(e,t,n),s=Math.min(e,t,n),o=(r+s)/2;if(i==="l")return o*100;if(r===s)return 0;const a=r-s,l=o>.5?a/(2-r-s):a/(r+s);if(i==="s")return l*100;switch(r){case e:return((t-n)/a+(t<n?6:0))*60;case t:return((n-e)/a+2)*60;case n:return((e-t)/a+4)*60;default:return-1}}},kT={clamp:(e,t,n)=>t>n?Math.min(t,Math.max(n,e)):Math.min(n,Math.max(t,e)),round:e=>Math.round(e*1e10)/1e10},BT={dec2hex:e=>{const t=Math.round(e).toString(16);return t.length>1?t:`0${t}`}},Qt={channel:qa,lang:kT,unit:BT},Hi={};for(let e=0;e<=255;e++)Hi[e]=Qt.unit.dec2hex(e);const Ge={ALL:0,RGB:1,HSL:2};class NT{constructor(){this.type=Ge.ALL}get(){return this.type}set(t){if(this.type&&this.type!==t)throw new Error("Cannot change both RGB and HSL channels at the same time");this.type=t}reset(){this.type=Ge.ALL}is(t){return this.type===t}}class OT{constructor(t,n){this.color=n,this.changed=!1,this.data=t,this.type=new NT}set(t,n){return this.color=n,this.changed=!1,this.data=t,this.type.type=Ge.ALL,this}_ensureHSL(){const t=this.data,{h:n,s:i,l:r}=t;n===void 0&&(t.h=Qt.channel.rgb2hsl(t,"h")),i===void 0&&(t.s=Qt.channel.rgb2hsl(t,"s")),r===void 0&&(t.l=Qt.channel.rgb2hsl(t,"l"))}_ensureRGB(){const t=this.data,{r:n,g:i,b:r}=t;n===void 0&&(t.r=Qt.channel.hsl2rgb(t,"r")),i===void 0&&(t.g=Qt.channel.hsl2rgb(t,"g")),r===void 0&&(t.b=Qt.channel.hsl2rgb(t,"b"))}get r(){const t=this.data,n=t.r;return!this.type.is(Ge.HSL)&&n!==void 0?n:(this._ensureHSL(),Qt.channel.hsl2rgb(t,"r"))}get g(){const t=this.data,n=t.g;return!this.type.is(Ge.HSL)&&n!==void 0?n:(this._ensureHSL(),Qt.channel.hsl2rgb(t,"g"))}get b(){const t=this.data,n=t.b;return!this.type.is(Ge.HSL)&&n!==void 0?n:(this._ensureHSL(),Qt.channel.hsl2rgb(t,"b"))}get h(){const t=this.data,n=t.h;return!this.type.is(Ge.RGB)&&n!==void 0?n:(this._ensureRGB(),Qt.channel.rgb2hsl(t,"h"))}get s(){const t=this.data,n=t.s;return!this.type.is(Ge.RGB)&&n!==void 0?n:(this._ensureRGB(),Qt.channel.rgb2hsl(t,"s"))}get l(){const t=this.data,n=t.l;return!this.type.is(Ge.RGB)&&n!==void 0?n:(this._ensureRGB(),Qt.channel.rgb2hsl(t,"l"))}get a(){return this.data.a}set r(t){this.type.set(Ge.RGB),this.changed=!0,this.data.r=t}set g(t){this.type.set(Ge.RGB),this.changed=!0,this.data.g=t}set b(t){this.type.set(Ge.RGB),this.changed=!0,this.data.b=t}set h(t){this.type.set(Ge.HSL),this.changed=!0,this.data.h=t}set s(t){this.type.set(Ge.HSL),this.changed=!0,this.data.s=t}set l(t){this.type.set(Ge.HSL),this.changed=!0,this.data.l=t}set a(t){this.changed=!0,this.data.a=t}}const Nl=new OT({r:0,g:0,b:0,a:0},"transparent"),rs={re:/^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,parse:e=>{if(e.charCodeAt(0)!==35)return;const t=e.match(rs.re);if(!t)return;const n=t[1],i=parseInt(n,16),r=n.length,s=r%4===0,o=r>4,a=o?1:17,l=o?8:4,c=s?0:-1,h=o?255:15;return Nl.set({r:(i>>l*(c+3)&h)*a,g:(i>>l*(c+2)&h)*a,b:(i>>l*(c+1)&h)*a,a:s?(i&h)*a/255:1},e)},stringify:e=>{const{r:t,g:n,b:i,a:r}=e;return r<1?`#${Hi[Math.round(t)]}${Hi[Math.round(n)]}${Hi[Math.round(i)]}${Hi[Math.round(r*255)]}`:`#${Hi[Math.round(t)]}${Hi[Math.round(n)]}${Hi[Math.round(i)]}`}},vr={re:/^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,hueRe:/^(.+?)(deg|grad|rad|turn)$/i,_hue2deg:e=>{const t=e.match(vr.hueRe);if(t){const[,n,i]=t;switch(i){case"grad":return Qt.channel.clamp.h(parseFloat(n)*.9);case"rad":return Qt.channel.clamp.h(parseFloat(n)*180/Math.PI);case"turn":return Qt.channel.clamp.h(parseFloat(n)*360)}}return Qt.channel.clamp.h(parseFloat(e))},parse:e=>{const t=e.charCodeAt(0);if(t!==104&&t!==72)return;const n=e.match(vr.re);if(!n)return;const[,i,r,s,o,a]=n;return Nl.set({h:vr._hue2deg(i),s:Qt.channel.clamp.s(parseFloat(r)),l:Qt.channel.clamp.l(parseFloat(s)),a:o?Qt.channel.clamp.a(a?parseFloat(o)/100:parseFloat(o)):1},e)},stringify:e=>{const{h:t,s:n,l:i,a:r}=e;return r<1?`hsla(${Qt.lang.round(t)}, ${Qt.lang.round(n)}%, ${Qt.lang.round(i)}%, ${r})`:`hsl(${Qt.lang.round(t)}, ${Qt.lang.round(n)}%, ${Qt.lang.round(i)}%)`}},mo={colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyanaqua:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",transparent:"#00000000",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},parse:e=>{e=e.toLowerCase();const t=mo.colors[e];if(t)return rs.parse(t)},stringify:e=>{const t=rs.stringify(e);for(const n in mo.colors)if(mo.colors[n]===t)return n}},uo={re:/^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,parse:e=>{const t=e.charCodeAt(0);if(t!==114&&t!==82)return;const n=e.match(uo.re);if(!n)return;const[,i,r,s,o,a,l,c,h]=n;return Nl.set({r:Qt.channel.clamp.r(r?parseFloat(i)*2.55:parseFloat(i)),g:Qt.channel.clamp.g(o?parseFloat(s)*2.55:parseFloat(s)),b:Qt.channel.clamp.b(l?parseFloat(a)*2.55:parseFloat(a)),a:c?Qt.channel.clamp.a(h?parseFloat(c)/100:parseFloat(c)):1},e)},stringify:e=>{const{r:t,g:n,b:i,a:r}=e;return r<1?`rgba(${Qt.lang.round(t)}, ${Qt.lang.round(n)}, ${Qt.lang.round(i)}, ${Qt.lang.round(r)})`:`rgb(${Qt.lang.round(t)}, ${Qt.lang.round(n)}, ${Qt.lang.round(i)})`}},ni={format:{keyword:mo,hex:rs,rgb:uo,rgba:uo,hsl:vr,hsla:vr},parse:e=>{if(typeof e!="string")return e;const t=rs.parse(e)||uo.parse(e)||vr.parse(e)||mo.parse(e);if(t)return t;throw new Error(`Unsupported color format: "${e}"`)},stringify:e=>!e.changed&&e.color?e.color:e.type.is(Ge.HSL)||e.data.r===void 0?vr.stringify(e):e.a<1||!Number.isInteger(e.r)||!Number.isInteger(e.g)||!Number.isInteger(e.b)?uo.stringify(e):rs.stringify(e)},pg=(e,t)=>{const n=ni.parse(e);for(const i in t)n[i]=Qt.channel.clamp[i](t[i]);return ni.stringify(n)},go=(e,t,n=0,i=1)=>{if(typeof e!="number")return pg(e,{a:t});const r=Nl.set({r:Qt.channel.clamp.r(e),g:Qt.channel.clamp.g(t),b:Qt.channel.clamp.b(n),a:Qt.channel.clamp.a(i)});return ni.stringify(r)},UT=e=>{const{r:t,g:n,b:i}=ni.parse(e),r=.2126*Qt.channel.toLinear(t)+.7152*Qt.channel.toLinear(n)+.0722*Qt.channel.toLinear(i);return Qt.lang.round(r)},zT=e=>UT(e)>=.5,qo=e=>!zT(e),mg=(e,t,n)=>{const i=ni.parse(e),r=i[t],s=Qt.channel.clamp[t](r+n);return r!==s&&(i[t]=s),ni.stringify(i)},Ht=(e,t)=>mg(e,"l",t),Wt=(e,t)=>mg(e,"l",-t),q=(e,t)=>{const n=ni.parse(e),i={};for(const r in t)t[r]&&(i[r]=n[r]+t[r]);return pg(e,i)},HT=(e,t,n=50)=>{const{r:i,g:r,b:s,a:o}=ni.parse(e),{r:a,g:l,b:c,a:h}=ni.parse(t),d=n/100,u=d*2-1,f=o-h,_=((u*f===-1?u:(u+f)/(1+u*f))+1)/2,g=1-_,p=i*_+a*g,b=r*_+l*g,E=s*_+c*g,y=o*d+h*(1-d);return go(p,b,E,y)},_t=(e,t=100)=>{const n=ni.parse(e);return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,HT(n,e,t)};var gg=typeof global=="object"&&global&&global.Object===Object&&global,VT=typeof self=="object"&&self&&self.Object===Object&&self,li=gg||VT||Function("return this")(),fl=li.Symbol,_g=Object.prototype,GT=_g.hasOwnProperty,WT=_g.toString,Qs=fl?fl.toStringTag:void 0;function $T(e){var t=GT.call(e,Qs),n=e[Qs];try{e[Qs]=void 0;var i=!0}catch{}var r=WT.call(e);return i&&(t?e[Qs]=n:delete e[Qs]),r}var qT=Object.prototype,XT=qT.toString;function jT(e){return XT.call(e)}var YT="[object Null]",KT="[object Undefined]",uf=fl?fl.toStringTag:void 0;function Is(e){return e==null?e===void 0?KT:YT:uf&&uf in Object(e)?$T(e):jT(e)}function Dr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ZT="[object AsyncFunction]",JT="[object Function]",QT="[object GeneratorFunction]",tS="[object Proxy]";function zu(e){if(!Dr(e))return!1;var t=Is(e);return t==JT||t==QT||t==ZT||t==tS}var gc=li["__core-js_shared__"],df=(function(){var e=/[^.]+$/.exec(gc&&gc.keys&&gc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function eS(e){return!!df&&df in e}var nS=Function.prototype,iS=nS.toString;function Pr(e){if(e!=null){try{return iS.call(e)}catch{}try{return e+""}catch{}}return""}var rS=/[\\^$.*+?()[\]{}|]/g,sS=/^\[object .+?Constructor\]$/,oS=Function.prototype,aS=Object.prototype,lS=oS.toString,cS=aS.hasOwnProperty,hS=RegExp("^"+lS.call(cS).replace(rS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function uS(e){if(!Dr(e)||eS(e))return!1;var t=zu(e)?hS:sS;return t.test(Pr(e))}function dS(e,t){return e?.[t]}function Fr(e,t){var n=dS(e,t);return uS(n)?n:void 0}var Lo=Fr(Object,"create");function fS(){this.__data__=Lo?Lo(null):{},this.size=0}function pS(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var mS="__lodash_hash_undefined__",gS=Object.prototype,_S=gS.hasOwnProperty;function xS(e){var t=this.__data__;if(Lo){var n=t[e];return n===mS?void 0:n}return _S.call(t,e)?t[e]:void 0}var vS=Object.prototype,yS=vS.hasOwnProperty;function bS(e){var t=this.__data__;return Lo?t[e]!==void 0:yS.call(t,e)}var TS="__lodash_hash_undefined__";function SS(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Lo&&t===void 0?TS:t,this}function wr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}wr.prototype.clear=fS;wr.prototype.delete=pS;wr.prototype.get=xS;wr.prototype.has=bS;wr.prototype.set=SS;function MS(){this.__data__=[],this.size=0}function Ol(e,t){return e===t||e!==e&&t!==t}function Ul(e,t){for(var n=e.length;n--;)if(Ol(e[n][0],t))return n;return-1}var CS=Array.prototype,ES=CS.splice;function wS(e){var t=this.__data__,n=Ul(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():ES.call(t,n,1),--this.size,!0}function AS(e){var t=this.__data__,n=Ul(t,e);return n<0?void 0:t[n][1]}function RS(e){return Ul(this.__data__,e)>-1}function LS(e,t){var n=this.__data__,i=Ul(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}function Fi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Fi.prototype.clear=MS;Fi.prototype.delete=wS;Fi.prototype.get=AS;Fi.prototype.has=RS;Fi.prototype.set=LS;var Do=Fr(li,"Map");function DS(){this.size=0,this.__data__={hash:new wr,map:new(Do||Fi),string:new wr}}function PS(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function zl(e,t){var n=e.__data__;return PS(t)?n[typeof t=="string"?"string":"hash"]:n.map}function FS(e){var t=zl(this,e).delete(e);return this.size-=t?1:0,t}function IS(e){return zl(this,e).get(e)}function kS(e){return zl(this,e).has(e)}function BS(e,t){var n=zl(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}function er(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}er.prototype.clear=DS;er.prototype.delete=FS;er.prototype.get=IS;er.prototype.has=kS;er.prototype.set=BS;var NS="Expected a function";function Xo(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(NS);var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=e.apply(this,i);return n.cache=s.set(r,o)||s,o};return n.cache=new(Xo.Cache||er),n}Xo.Cache=er;function OS(){this.__data__=new Fi,this.size=0}function US(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function zS(e){return this.__data__.get(e)}function HS(e){return this.__data__.has(e)}var VS=200;function GS(e,t){var n=this.__data__;if(n instanceof Fi){var i=n.__data__;if(!Do||i.length<VS-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new er(i)}return n.set(e,t),this.size=n.size,this}function ks(e){var t=this.__data__=new Fi(e);this.size=t.size}ks.prototype.clear=OS;ks.prototype.delete=US;ks.prototype.get=zS;ks.prototype.has=HS;ks.prototype.set=GS;var pl=(function(){try{var e=Fr(Object,"defineProperty");return e({},"",{}),e}catch{}})();function Hu(e,t,n){t=="__proto__"&&pl?pl(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Sh(e,t,n){(n!==void 0&&!Ol(e[t],n)||n===void 0&&!(t in e))&&Hu(e,t,n)}function WS(e){return function(t,n,i){for(var r=-1,s=Object(t),o=i(t),a=o.length;a--;){var l=o[++r];if(n(s[l],l,s)===!1)break}return t}}var $S=WS(),xg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ff=xg&&typeof module=="object"&&module&&!module.nodeType&&module,qS=ff&&ff.exports===xg,pf=qS?li.Buffer:void 0,mf=pf?pf.allocUnsafe:void 0;function XS(e,t){if(t)return e.slice();var n=e.length,i=mf?mf(n):new e.constructor(n);return e.copy(i),i}var gf=li.Uint8Array;function jS(e){var t=new e.constructor(e.byteLength);return new gf(t).set(new gf(e)),t}function YS(e,t){var n=t?jS(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function KS(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var _f=Object.create,ZS=(function(){function e(){}return function(t){if(!Dr(t))return{};if(_f)return _f(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})();function vg(e,t){return function(n){return e(t(n))}}var yg=vg(Object.getPrototypeOf,Object),JS=Object.prototype;function Hl(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||JS;return e===n}function QS(e){return typeof e.constructor=="function"&&!Hl(e)?ZS(yg(e)):{}}function jo(e){return e!=null&&typeof e=="object"}var tM="[object Arguments]";function xf(e){return jo(e)&&Is(e)==tM}var bg=Object.prototype,eM=bg.hasOwnProperty,nM=bg.propertyIsEnumerable,ml=xf((function(){return arguments})())?xf:function(e){return jo(e)&&eM.call(e,"callee")&&!nM.call(e,"callee")},gl=Array.isArray,iM=9007199254740991;function Tg(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=iM}function Vl(e){return e!=null&&Tg(e.length)&&!zu(e)}function rM(e){return jo(e)&&Vl(e)}function sM(){return!1}var Sg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vf=Sg&&typeof module=="object"&&module&&!module.nodeType&&module,oM=vf&&vf.exports===Sg,yf=oM?li.Buffer:void 0,aM=yf?yf.isBuffer:void 0,Vu=aM||sM,lM="[object Object]",cM=Function.prototype,hM=Object.prototype,Mg=cM.toString,uM=hM.hasOwnProperty,dM=Mg.call(Object);function fM(e){if(!jo(e)||Is(e)!=lM)return!1;var t=yg(e);if(t===null)return!0;var n=uM.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Mg.call(n)==dM}var pM="[object Arguments]",mM="[object Array]",gM="[object Boolean]",_M="[object Date]",xM="[object Error]",vM="[object Function]",yM="[object Map]",bM="[object Number]",TM="[object Object]",SM="[object RegExp]",MM="[object Set]",CM="[object String]",EM="[object WeakMap]",wM="[object ArrayBuffer]",AM="[object DataView]",RM="[object Float32Array]",LM="[object Float64Array]",DM="[object Int8Array]",PM="[object Int16Array]",FM="[object Int32Array]",IM="[object Uint8Array]",kM="[object Uint8ClampedArray]",BM="[object Uint16Array]",NM="[object Uint32Array]",Me={};Me[RM]=Me[LM]=Me[DM]=Me[PM]=Me[FM]=Me[IM]=Me[kM]=Me[BM]=Me[NM]=!0;Me[pM]=Me[mM]=Me[wM]=Me[gM]=Me[AM]=Me[_M]=Me[xM]=Me[vM]=Me[yM]=Me[bM]=Me[TM]=Me[SM]=Me[MM]=Me[CM]=Me[EM]=!1;function OM(e){return jo(e)&&Tg(e.length)&&!!Me[Is(e)]}function UM(e){return function(t){return e(t)}}var Cg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_o=Cg&&typeof module=="object"&&module&&!module.nodeType&&module,zM=_o&&_o.exports===Cg,_c=zM&&gg.process,bf=(function(){try{var e=_o&&_o.require&&_o.require("util").types;return e||_c&&_c.binding&&_c.binding("util")}catch{}})(),Tf=bf&&bf.isTypedArray,Gu=Tf?UM(Tf):OM;function Mh(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var HM=Object.prototype,VM=HM.hasOwnProperty;function GM(e,t,n){var i=e[t];(!(VM.call(e,t)&&Ol(i,n))||n===void 0&&!(t in e))&&Hu(e,t,n)}function WM(e,t,n,i){var r=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=void 0;l===void 0&&(l=e[a]),r?Hu(n,a,l):GM(n,a,l)}return n}function $M(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var qM=9007199254740991,XM=/^(?:0|[1-9]\d*)$/;function Eg(e,t){var n=typeof e;return t=t??qM,!!t&&(n=="number"||n!="symbol"&&XM.test(e))&&e>-1&&e%1==0&&e<t}var jM=Object.prototype,YM=jM.hasOwnProperty;function KM(e,t){var n=gl(e),i=!n&&ml(e),r=!n&&!i&&Vu(e),s=!n&&!i&&!r&&Gu(e),o=n||i||r||s,a=o?$M(e.length,String):[],l=a.length;for(var c in e)(t||YM.call(e,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Eg(c,l)))&&a.push(c);return a}function ZM(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var JM=Object.prototype,QM=JM.hasOwnProperty;function tC(e){if(!Dr(e))return ZM(e);var t=Hl(e),n=[];for(var i in e)i=="constructor"&&(t||!QM.call(e,i))||n.push(i);return n}function wg(e){return Vl(e)?KM(e,!0):tC(e)}function eC(e){return WM(e,wg(e))}function nC(e,t,n,i,r,s,o){var a=Mh(e,n),l=Mh(t,n),c=o.get(l);if(c){Sh(e,n,c);return}var h=s?s(a,l,n+"",e,t,o):void 0,d=h===void 0;if(d){var u=gl(l),f=!u&&Vu(l),m=!u&&!f&&Gu(l);h=l,u||f||m?gl(a)?h=a:rM(a)?h=KS(a):f?(d=!1,h=XS(l,!0)):m?(d=!1,h=YS(l,!0)):h=[]:fM(l)||ml(l)?(h=a,ml(a)?h=eC(a):(!Dr(a)||zu(a))&&(h=QS(l))):d=!1}d&&(o.set(l,h),r(h,l,i,s,o),o.delete(l)),Sh(e,n,h)}function Ag(e,t,n,i,r){e!==t&&$S(t,function(s,o){if(r||(r=new ks),Dr(s))nC(e,t,o,n,Ag,i,r);else{var a=i?i(Mh(e,o),s,o+"",e,t,r):void 0;a===void 0&&(a=s),Sh(e,o,a)}},wg)}function Rg(e){return e}function iC(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var Sf=Math.max;function rC(e,t,n){return t=Sf(t===void 0?e.length-1:t,0),function(){for(var i=arguments,r=-1,s=Sf(i.length-t,0),o=Array(s);++r<s;)o[r]=i[t+r];r=-1;for(var a=Array(t+1);++r<t;)a[r]=i[r];return a[t]=n(o),iC(e,this,a)}}function sC(e){return function(){return e}}var oC=pl?function(e,t){return pl(e,"toString",{configurable:!0,enumerable:!1,value:sC(t),writable:!0})}:Rg,aC=800,lC=16,cC=Date.now;function hC(e){var t=0,n=0;return function(){var i=cC(),r=lC-(i-n);if(n=i,r>0){if(++t>=aC)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var uC=hC(oC);function dC(e,t){return uC(rC(e,t,Rg),e+"")}function fC(e,t,n){if(!Dr(n))return!1;var i=typeof t;return(i=="number"?Vl(n)&&Eg(t,n.length):i=="string"&&t in n)?Ol(n[t],e):!1}function pC(e){return dC(function(t,n){var i=-1,r=n.length,s=r>1?n[r-1]:void 0,o=r>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(r--,s):void 0,o&&fC(n[0],n[1],o)&&(s=r<3?void 0:s,r=1),t=Object(t);++i<r;){var a=n[i];a&&e(t,a,i,s)}return t})}var mC=pC(function(e,t,n){Ag(e,t,n)}),Lg="comm",Dg="rule",Pg="decl",gC="@import",_C="@namespace",xC="@keyframes",vC="@layer",Fg=Math.abs,Wu=String.fromCharCode;function Ig(e){return e.trim()}function Xa(e,t,n){return e.replace(t,n)}function yC(e,t,n){return e.indexOf(t,n)}function ss(e,t){return e.charCodeAt(t)|0}function gs(e,t,n){return e.slice(t,n)}function Kn(e){return e.length}function bC(e){return e.length}function ca(e,t){return t.push(e),e}var Gl=1,_s=1,kg=0,Ln=0,Pe=0,Bs="";function $u(e,t,n,i,r,s,o,a){return{value:e,root:t,parent:n,type:i,props:r,children:s,line:Gl,column:_s,length:o,return:"",siblings:a}}function TC(){return Pe}function SC(){return Pe=Ln>0?ss(Bs,--Ln):0,_s--,Pe===10&&(_s=1,Gl--),Pe}function Hn(){return Pe=Ln<kg?ss(Bs,Ln++):0,_s++,Pe===10&&(_s=1,Gl++),Pe}function $i(){return ss(Bs,Ln)}function ja(){return Ln}function Wl(e,t){return gs(Bs,e,t)}function Po(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function MC(e){return Gl=_s=1,kg=Kn(Bs=e),Ln=0,[]}function CC(e){return Bs="",e}function xc(e){return Ig(Wl(Ln-1,Ch(e===91?e+2:e===40?e+1:e)))}function EC(e){for(;(Pe=$i())&&Pe<33;)Hn();return Po(e)>2||Po(Pe)>3?"":" "}function wC(e,t){for(;--t&&Hn()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Wl(e,ja()+(t<6&&$i()==32&&Hn()==32))}function Ch(e){for(;Hn();)switch(Pe){case e:return Ln;case 34:case 39:e!==34&&e!==39&&Ch(Pe);break;case 40:e===41&&Ch(e);break;case 92:Hn();break}return Ln}function AC(e,t){for(;Hn()&&e+Pe!==57;)if(e+Pe===84&&$i()===47)break;return"/*"+Wl(t,Ln-1)+"*"+Wu(e===47?e:Hn())}function RC(e){for(;!Po($i());)Hn();return Wl(e,Ln)}function LC(e){return CC(Ya("",null,null,null,[""],e=MC(e),0,[0],e))}function Ya(e,t,n,i,r,s,o,a,l){for(var c=0,h=0,d=o,u=0,f=0,m=0,_=1,g=1,p=1,b=0,E="",y=r,k=s,R=i,P=E;g;)switch(m=b,b=Hn()){case 40:if(m!=108&&ss(P,d-1)==58){yC(P+=Xa(xc(b),"&","&\f"),"&\f",Fg(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:P+=xc(b);break;case 9:case 10:case 13:case 32:P+=EC(m);break;case 92:P+=wC(ja()-1,7);continue;case 47:switch($i()){case 42:case 47:ca(DC(AC(Hn(),ja()),t,n,l),l),(Po(m||1)==5||Po($i()||1)==5)&&Kn(P)&&gs(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*_:a[c++]=Kn(P)*p;case 125*_:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+h:p==-1&&(P=Xa(P,/\f/g,"")),f>0&&(Kn(P)-d||_===0&&m===47)&&ca(f>32?Cf(P+";",i,n,d-1,l):Cf(Xa(P," ","")+";",i,n,d-2,l),l);break;case 59:P+=";";default:if(ca(R=Mf(P,t,n,c,h,r,a,E,y=[],k=[],d,s),s),b===123)if(h===0)Ya(P,t,R,R,y,s,d,a,k);else{switch(u){case 99:if(ss(P,3)===110)break;case 108:if(ss(P,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Ya(e,R,R,i&&ca(Mf(e,R,R,0,0,r,a,E,r,y=[],d,k),k),r,k,d,a,i?y:k):Ya(P,R,R,R,[""],k,0,a,k)}}c=h=f=0,_=p=1,E=P="",d=o;break;case 58:d=1+Kn(P),f=m;default:if(_<1){if(b==123)--_;else if(b==125&&_++==0&&SC()==125)continue}switch(P+=Wu(b),b*_){case 38:p=h>0?1:(P+="\f",-1);break;case 44:a[c++]=(Kn(P)-1)*p,p=1;break;case 64:$i()===45&&(P+=xc(Hn())),u=$i(),h=d=Kn(E=P+=RC(ja())),b++;break;case 45:m===45&&Kn(P)==2&&(_=0)}}return s}function Mf(e,t,n,i,r,s,o,a,l,c,h,d){for(var u=r-1,f=r===0?s:[""],m=bC(f),_=0,g=0,p=0;_<i;++_)for(var b=0,E=gs(e,u+1,u=Fg(g=o[_])),y=e;b<m;++b)(y=Ig(g>0?f[b]+" "+E:Xa(E,/&\f/g,f[b])))&&(l[p++]=y);return $u(e,t,n,r===0?Dg:a,l,c,h,d)}function DC(e,t,n,i){return $u(e,t,n,Lg,Wu(TC()),gs(e,2,-2),0,i)}function Cf(e,t,n,i,r){return $u(e,t,n,Pg,gs(e,0,i),gs(e,i+1,-1),i,r)}function Eh(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function PC(e,t,n,i){switch(e.type){case vC:if(e.children.length)break;case gC:case _C:case Pg:return e.return=e.return||e.value;case Lg:return"";case xC:return e.return=e.value+"{"+Eh(e.children,i)+"}";case Dg:if(!Kn(e.value=e.props.join(",")))return""}return Kn(n=Eh(e.children,i))?e.return=e.value+"{"+n+"}":""}var FC=vg(Object.keys,Object),IC=Object.prototype,kC=IC.hasOwnProperty;function BC(e){if(!Hl(e))return FC(e);var t=[];for(var n in Object(e))kC.call(e,n)&&n!="constructor"&&t.push(n);return t}var wh=Fr(li,"DataView"),Ah=Fr(li,"Promise"),Rh=Fr(li,"Set"),Lh=Fr(li,"WeakMap"),Ef="[object Map]",NC="[object Object]",wf="[object Promise]",Af="[object Set]",Rf="[object WeakMap]",Lf="[object DataView]",OC=Pr(wh),UC=Pr(Do),zC=Pr(Ah),HC=Pr(Rh),VC=Pr(Lh),pr=Is;(wh&&pr(new wh(new ArrayBuffer(1)))!=Lf||Do&&pr(new Do)!=Ef||Ah&&pr(Ah.resolve())!=wf||Rh&&pr(new Rh)!=Af||Lh&&pr(new Lh)!=Rf)&&(pr=function(e){var t=Is(e),n=t==NC?e.constructor:void 0,i=n?Pr(n):"";if(i)switch(i){case OC:return Lf;case UC:return Ef;case zC:return wf;case HC:return Af;case VC:return Rf}return t});var GC="[object Map]",WC="[object Set]",$C=Object.prototype,qC=$C.hasOwnProperty;function vc(e){if(e==null)return!0;if(Vl(e)&&(gl(e)||typeof e=="string"||typeof e.splice=="function"||Vu(e)||Gu(e)||ml(e)))return!e.length;var t=pr(e);if(t==GC||t==WC)return!e.size;if(Hl(e))return!BC(e).length;for(var n in e)if(qC.call(e,n))return!1;return!0}const pi={trace:0,debug:1,info:2,warn:3,error:4,fatal:5},Gt={trace:(...e)=>{},debug:(...e)=>{},info:(...e)=>{},warn:(...e)=>{},error:(...e)=>{},fatal:(...e)=>{}},qu=function(e="fatal"){let t=pi.fatal;typeof e=="string"?(e=e.toLowerCase(),e in pi&&(t=pi[e])):typeof e=="number"&&(t=e),Gt.trace=()=>{},Gt.debug=()=>{},Gt.info=()=>{},Gt.warn=()=>{},Gt.error=()=>{},Gt.fatal=()=>{},t<=pi.fatal&&(Gt.fatal=console.error?console.error.bind(console,Cn("FATAL"),"color: orange"):console.log.bind(console,"\x1B[35m",Cn("FATAL"))),t<=pi.error&&(Gt.error=console.error?console.error.bind(console,Cn("ERROR"),"color: orange"):console.log.bind(console,"\x1B[31m",Cn("ERROR"))),t<=pi.warn&&(Gt.warn=console.warn?console.warn.bind(console,Cn("WARN"),"color: orange"):console.log.bind(console,"\x1B[33m",Cn("WARN"))),t<=pi.info&&(Gt.info=console.info?console.info.bind(console,Cn("INFO"),"color: lightblue"):console.log.bind(console,"\x1B[34m",Cn("INFO"))),t<=pi.debug&&(Gt.debug=console.debug?console.debug.bind(console,Cn("DEBUG"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",Cn("DEBUG"))),t<=pi.trace&&(Gt.trace=console.debug?console.debug.bind(console,Cn("TRACE"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",Cn("TRACE")))},Cn=e=>`%c${uT().format("ss.SSS")} : ${e} : `,Yo=/<br\s*\/?>/gi,XC=e=>e?Ng(e).replace(/\\n/g,"#br#").split("#br#"):[""],jC=(()=>{let e=!1;return()=>{e||(YC(),e=!0)}})();function YC(){const e="data-temp-href-target";ms.addHook("beforeSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute("target")&&t.setAttribute(e,t.getAttribute("target")??"")}),ms.addHook("afterSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute(e)&&(t.setAttribute("target",t.getAttribute(e)??""),t.removeAttribute(e),t.getAttribute("target")==="_blank"&&t.setAttribute("rel","noopener"))})}const Bg=e=>(jC(),ms.sanitize(e)),Df=(e,t)=>{var n;if(((n=t.flowchart)==null?void 0:n.htmlLabels)!==!1){const i=t.securityLevel;i==="antiscript"||i==="strict"?e=Bg(e):i!=="loose"&&(e=Ng(e),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/=/g,"&equals;"),e=QC(e))}return e},xs=(e,t)=>e&&(t.dompurifyConfig?e=ms.sanitize(Df(e,t),t.dompurifyConfig).toString():e=ms.sanitize(Df(e,t),{FORBID_TAGS:["style"]}).toString(),e),KC=(e,t)=>typeof e=="string"?xs(e,t):e.flat().map(n=>xs(n,t)),ZC=e=>Yo.test(e),JC=e=>e.split(Yo),QC=e=>e.replace(/#br#/g,"<br/>"),Ng=e=>e.replace(Yo,"#br#"),tE=e=>{let t="";return e&&(t=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,t=t.replaceAll(/\(/g,"\\("),t=t.replaceAll(/\)/g,"\\)")),t},Og=e=>!(e===!1||["false","null","0"].includes(String(e).trim().toLowerCase())),eE=function(...e){const t=e.filter(n=>!isNaN(n));return Math.max(...t)},nE=function(...e){const t=e.filter(n=>!isNaN(n));return Math.min(...t)},L4=function(e){const t=e.split(/(,)/),n=[];for(let i=0;i<t.length;i++){let r=t[i];if(r===","&&i>0&&i+1<t.length){const s=t[i-1],o=t[i+1];iE(s,o)&&(r=s+","+o,i++,n.pop())}n.push(rE(r))}return n.join("")},Dh=(e,t)=>Math.max(0,e.split(t).length-1),iE=(e,t)=>{const n=Dh(e,"~"),i=Dh(t,"~");return n===1&&i===1},rE=e=>{const t=Dh(e,"~");let n=!1;if(t<=1)return e;t%2!==0&&e.startsWith("~")&&(e=e.substring(1),n=!0);const i=[...e];let r=i.indexOf("~"),s=i.lastIndexOf("~");for(;r!==-1&&s!==-1&&r!==s;)i[r]="<",i[s]=">",r=i.indexOf("~"),s=i.lastIndexOf("~");return n&&i.unshift("~"),i.join("")},Pf=()=>window.MathMLElement!==void 0,Ph=/\$\$(.*)\$\$/g,Ff=e=>{var t;return(((t=e.match(Ph))==null?void 0:t.length)??0)>0},D4=async(e,t)=>{const n=document.createElement("div");n.innerHTML=await oE(e,t),n.id="katex-temp",n.style.visibility="hidden",n.style.position="absolute",n.style.top="0";const i=document.querySelector("body");i?.insertAdjacentElement("beforeend",n);const r={width:n.clientWidth,height:n.clientHeight};return n.remove(),r},sE=async(e,t)=>{if(!Ff(e))return e;if(!Pf()&&!t.legacyMathML)return e.replace(Ph,"MathML is unsupported in this environment.");const{default:n}=await Ae(async()=>{const{default:i}=await import("./chunks/katex.XbL3y5x-.js");return{default:i}},[]);return e.split(Yo).map(i=>Ff(i)?`
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${i}
            </div>
          `:`<div>${i}</div>`).join("").replace(Ph,(i,r)=>n.renderToString(r,{throwOnError:!0,displayMode:!0,output:Pf()?"mathml":"htmlAndMathml"}).replace(/\n/g," ").replace(/<annotation.*<\/annotation>/g,""))},oE=async(e,t)=>xs(await sE(e,t),t),Xu={getRows:XC,sanitizeText:xs,sanitizeTextOrArray:KC,hasBreaks:ZC,splitBreaks:JC,lineBreakRegex:Yo,removeScript:Bg,getUrl:tE,evaluate:Og,getMax:eE,getMin:nE},tn=(e,t)=>t?q(e,{s:-40,l:10}):q(e,{s:-40,l:-10}),$l="#ffffff",ql="#f2f2f2";let aE=class{constructor(){this.background="#f4f4f4",this.primaryColor="#fff4dd",this.noteBkgColor="#fff5ad",this.noteTextColor="#333",this.THEME_COLOR_LIMIT=12,this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px"}updateColors(){var t,n,i,r,s,o,a,l,c,h,d;if(this.primaryTextColor=this.primaryTextColor||(this.darkMode?"#eee":"#333"),this.secondaryColor=this.secondaryColor||q(this.primaryColor,{h:-120}),this.tertiaryColor=this.tertiaryColor||q(this.primaryColor,{h:180,l:5}),this.primaryBorderColor=this.primaryBorderColor||tn(this.primaryColor,this.darkMode),this.secondaryBorderColor=this.secondaryBorderColor||tn(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=this.tertiaryBorderColor||tn(this.tertiaryColor,this.darkMode),this.noteBorderColor=this.noteBorderColor||tn(this.noteBkgColor,this.darkMode),this.noteBkgColor=this.noteBkgColor||"#fff5ad",this.noteTextColor=this.noteTextColor||"#333",this.secondaryTextColor=this.secondaryTextColor||_t(this.secondaryColor),this.tertiaryTextColor=this.tertiaryTextColor||_t(this.tertiaryColor),this.lineColor=this.lineColor||_t(this.background),this.arrowheadColor=this.arrowheadColor||_t(this.background),this.textColor=this.textColor||this.primaryTextColor,this.border2=this.border2||this.tertiaryBorderColor,this.nodeBkg=this.nodeBkg||this.primaryColor,this.mainBkg=this.mainBkg||this.primaryColor,this.nodeBorder=this.nodeBorder||this.primaryBorderColor,this.clusterBkg=this.clusterBkg||this.tertiaryColor,this.clusterBorder=this.clusterBorder||this.tertiaryBorderColor,this.defaultLinkColor=this.defaultLinkColor||this.lineColor,this.titleColor=this.titleColor||this.tertiaryTextColor,this.edgeLabelBackground=this.edgeLabelBackground||(this.darkMode?Wt(this.secondaryColor,30):this.secondaryColor),this.nodeTextColor=this.nodeTextColor||this.primaryTextColor,this.actorBorder=this.actorBorder||this.primaryBorderColor,this.actorBkg=this.actorBkg||this.mainBkg,this.actorTextColor=this.actorTextColor||this.primaryTextColor,this.actorLineColor=this.actorLineColor||"grey",this.labelBoxBkgColor=this.labelBoxBkgColor||this.actorBkg,this.signalColor=this.signalColor||this.textColor,this.signalTextColor=this.signalTextColor||this.textColor,this.labelBoxBorderColor=this.labelBoxBorderColor||this.actorBorder,this.labelTextColor=this.labelTextColor||this.actorTextColor,this.loopTextColor=this.loopTextColor||this.actorTextColor,this.activationBorderColor=this.activationBorderColor||Wt(this.secondaryColor,10),this.activationBkgColor=this.activationBkgColor||this.secondaryColor,this.sequenceNumberColor=this.sequenceNumberColor||_t(this.lineColor),this.sectionBkgColor=this.sectionBkgColor||this.tertiaryColor,this.altSectionBkgColor=this.altSectionBkgColor||"white",this.sectionBkgColor=this.sectionBkgColor||this.secondaryColor,this.sectionBkgColor2=this.sectionBkgColor2||this.primaryColor,this.excludeBkgColor=this.excludeBkgColor||"#eeeeee",this.taskBorderColor=this.taskBorderColor||this.primaryBorderColor,this.taskBkgColor=this.taskBkgColor||this.primaryColor,this.activeTaskBorderColor=this.activeTaskBorderColor||this.primaryColor,this.activeTaskBkgColor=this.activeTaskBkgColor||Ht(this.primaryColor,23),this.gridColor=this.gridColor||"lightgrey",this.doneTaskBkgColor=this.doneTaskBkgColor||"lightgrey",this.doneTaskBorderColor=this.doneTaskBorderColor||"grey",this.critBorderColor=this.critBorderColor||"#ff8888",this.critBkgColor=this.critBkgColor||"red",this.todayLineColor=this.todayLineColor||"red",this.taskTextColor=this.taskTextColor||this.textColor,this.taskTextOutsideColor=this.taskTextOutsideColor||this.textColor,this.taskTextLightColor=this.taskTextLightColor||this.textColor,this.taskTextColor=this.taskTextColor||this.primaryTextColor,this.taskTextDarkColor=this.taskTextDarkColor||this.textColor,this.taskTextClickableColor=this.taskTextClickableColor||"#003163",this.personBorder=this.personBorder||this.primaryBorderColor,this.personBkg=this.personBkg||this.mainBkg,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||this.tertiaryColor,this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.specialStateColor=this.lineColor,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210,l:150}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330}),this.darkMode)for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScale"+f]=Wt(this["cScale"+f],75);else for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScale"+f]=Wt(this["cScale"+f],25);for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScaleInv"+f]=this["cScaleInv"+f]||_t(this["cScale"+f]);for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this.darkMode?this["cScalePeer"+f]=this["cScalePeer"+f]||Ht(this["cScale"+f],10):this["cScalePeer"+f]=this["cScalePeer"+f]||Wt(this["cScale"+f],10);this.scaleLabelColor=this.scaleLabelColor||this.labelTextColor;for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScaleLabel"+f]=this["cScaleLabel"+f]||this.scaleLabelColor;const u=this.darkMode?-4:-1;for(let f=0;f<5;f++)this["surface"+f]=this["surface"+f]||q(this.mainBkg,{h:180,s:-15,l:u*(5+f*3)}),this["surfacePeer"+f]=this["surfacePeer"+f]||q(this.mainBkg,{h:180,s:-15,l:u*(8+f*3)});this.classText=this.classText||this.textColor,this.fillType0=this.fillType0||this.primaryColor,this.fillType1=this.fillType1||this.secondaryColor,this.fillType2=this.fillType2||q(this.primaryColor,{h:64}),this.fillType3=this.fillType3||q(this.secondaryColor,{h:64}),this.fillType4=this.fillType4||q(this.primaryColor,{h:-64}),this.fillType5=this.fillType5||q(this.secondaryColor,{h:-64}),this.fillType6=this.fillType6||q(this.primaryColor,{h:128}),this.fillType7=this.fillType7||q(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||q(this.primaryColor,{l:-10}),this.pie5=this.pie5||q(this.secondaryColor,{l:-10}),this.pie6=this.pie6||q(this.tertiaryColor,{l:-10}),this.pie7=this.pie7||q(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||q(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||q(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||q(this.primaryColor,{h:60,l:-20}),this.pie11=this.pie11||q(this.primaryColor,{h:-60,l:-20}),this.pie12=this.pie12||q(this.primaryColor,{h:120,l:-10}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||qo(this.quadrant1Fill)?Ht(this.quadrant1Fill):Wt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((i=this.xyChart)==null?void 0:i.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((r=this.xyChart)==null?void 0:r.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((s=this.xyChart)==null?void 0:s.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((o=this.xyChart)==null?void 0:o.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((h=this.xyChart)==null?void 0:h.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((d=this.xyChart)==null?void 0:d.plotColorPalette)||"#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?Wt(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||q(this.primaryColor,{h:-30}),this.git4=this.git4||q(this.primaryColor,{h:-60}),this.git5=this.git5||q(this.primaryColor,{h:-90}),this.git6=this.git6||q(this.primaryColor,{h:60}),this.git7=this.git7||q(this.primaryColor,{h:120}),this.darkMode?(this.git0=Ht(this.git0,25),this.git1=Ht(this.git1,25),this.git2=Ht(this.git2,25),this.git3=Ht(this.git3,25),this.git4=Ht(this.git4,25),this.git5=Ht(this.git5,25),this.git6=Ht(this.git6,25),this.git7=Ht(this.git7,25)):(this.git0=Wt(this.git0,25),this.git1=Wt(this.git1,25),this.git2=Wt(this.git2,25),this.git3=Wt(this.git3,25),this.git4=Wt(this.git4,25),this.git5=Wt(this.git5,25),this.git6=Wt(this.git6,25),this.git7=Wt(this.git7,25)),this.gitInv0=this.gitInv0||_t(this.git0),this.gitInv1=this.gitInv1||_t(this.git1),this.gitInv2=this.gitInv2||_t(this.git2),this.gitInv3=this.gitInv3||_t(this.git3),this.gitInv4=this.gitInv4||_t(this.git4),this.gitInv5=this.gitInv5||_t(this.git5),this.gitInv6=this.gitInv6||_t(this.git6),this.gitInv7=this.gitInv7||_t(this.git7),this.branchLabelColor=this.branchLabelColor||(this.darkMode?"black":this.labelTextColor),this.gitBranchLabel0=this.gitBranchLabel0||this.branchLabelColor,this.gitBranchLabel1=this.gitBranchLabel1||this.branchLabelColor,this.gitBranchLabel2=this.gitBranchLabel2||this.branchLabelColor,this.gitBranchLabel3=this.gitBranchLabel3||this.branchLabelColor,this.gitBranchLabel4=this.gitBranchLabel4||this.branchLabelColor,this.gitBranchLabel5=this.gitBranchLabel5||this.branchLabelColor,this.gitBranchLabel6=this.gitBranchLabel6||this.branchLabelColor,this.gitBranchLabel7=this.gitBranchLabel7||this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||$l,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||ql}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(i=>{this[i]=t[i]}),this.updateColors(),n.forEach(i=>{this[i]=t[i]})}};const lE=e=>{const t=new aE;return t.calculate(e),t};let cE=class{constructor(){this.background="#333",this.primaryColor="#1f2020",this.secondaryColor=Ht(this.primaryColor,16),this.tertiaryColor=q(this.primaryColor,{h:-160}),this.primaryBorderColor=_t(this.background),this.secondaryBorderColor=tn(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=tn(this.tertiaryColor,this.darkMode),this.primaryTextColor=_t(this.primaryColor),this.secondaryTextColor=_t(this.secondaryColor),this.tertiaryTextColor=_t(this.tertiaryColor),this.lineColor=_t(this.background),this.textColor=_t(this.background),this.mainBkg="#1f2020",this.secondBkg="calculated",this.mainContrastColor="lightgrey",this.darkTextColor=Ht(_t("#323D47"),10),this.lineColor="calculated",this.border1="#81B1DB",this.border2=go(255,255,255,.25),this.arrowheadColor="calculated",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="#181818",this.textColor="#ccc",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#F9FFFE",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="calculated",this.activationBkgColor="calculated",this.sequenceNumberColor="black",this.sectionBkgColor=Wt("#EAE8D9",30),this.altSectionBkgColor="calculated",this.sectionBkgColor2="#EAE8D9",this.excludeBkgColor=Wt(this.sectionBkgColor,10),this.taskBorderColor=go(255,255,255,70),this.taskBkgColor="calculated",this.taskTextColor="calculated",this.taskTextLightColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor=go(255,255,255,50),this.activeTaskBkgColor="#81B1DB",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="grey",this.critBorderColor="#E83737",this.critBkgColor="#E83737",this.taskTextDarkColor="calculated",this.todayLineColor="#DB5757",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="calculated",this.errorBkgColor="#a44141",this.errorTextColor="#ddd"}updateColors(){var t,n,i,r,s,o,a,l,c,h,d;this.secondBkg=Ht(this.mainBkg,16),this.lineColor=this.mainContrastColor,this.arrowheadColor=this.mainContrastColor,this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.edgeLabelBackground=Ht(this.labelBackground,25),this.actorBorder=this.border1,this.actorBkg=this.mainBkg,this.actorTextColor=this.mainContrastColor,this.actorLineColor=this.mainContrastColor,this.signalColor=this.mainContrastColor,this.signalTextColor=this.mainContrastColor,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.mainContrastColor,this.loopTextColor=this.mainContrastColor,this.noteBorderColor=this.secondaryBorderColor,this.noteBkgColor=this.secondBkg,this.noteTextColor=this.secondaryTextColor,this.activationBorderColor=this.border1,this.activationBkgColor=this.secondBkg,this.altSectionBkgColor=this.background,this.taskBkgColor=Ht(this.mainBkg,23),this.taskTextColor=this.darkTextColor,this.taskTextLightColor=this.mainContrastColor,this.taskTextOutsideColor=this.taskTextLightColor,this.gridColor=this.mainContrastColor,this.doneTaskBkgColor=this.mainContrastColor,this.taskTextDarkColor=this.darkTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#555",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#f4f4f4",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128}),this.cScale1=this.cScale1||"#0b0000",this.cScale2=this.cScale2||"#4d1037",this.cScale3=this.cScale3||"#3f5258",this.cScale4=this.cScale4||"#4f2f1b",this.cScale5=this.cScale5||"#6e0a0a",this.cScale6=this.cScale6||"#3b0048",this.cScale7=this.cScale7||"#995a01",this.cScale8=this.cScale8||"#154706",this.cScale9=this.cScale9||"#161722",this.cScale10=this.cScale10||"#00296f",this.cScale11=this.cScale11||"#01629c",this.cScale12=this.cScale12||"#010029",this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330});for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleInv"+u]=this["cScaleInv"+u]||_t(this["cScale"+u]);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScalePeer"+u]=this["cScalePeer"+u]||Ht(this["cScale"+u],10);for(let u=0;u<5;u++)this["surface"+u]=this["surface"+u]||q(this.mainBkg,{h:30,s:-30,l:-(-10+u*4)}),this["surfacePeer"+u]=this["surfacePeer"+u]||q(this.mainBkg,{h:30,s:-30,l:-(-7+u*4)});this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleLabel"+u]=this["cScaleLabel"+u]||this.scaleLabelColor;for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["pie"+u]=this["cScale"+u];this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||qo(this.quadrant1Fill)?Ht(this.quadrant1Fill):Wt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((i=this.xyChart)==null?void 0:i.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((r=this.xyChart)==null?void 0:r.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((s=this.xyChart)==null?void 0:s.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((o=this.xyChart)==null?void 0:o.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((h=this.xyChart)==null?void 0:h.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((d=this.xyChart)==null?void 0:d.plotColorPalette)||"#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"},this.classText=this.primaryTextColor,this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?Wt(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=Ht(this.secondaryColor,20),this.git1=Ht(this.pie2||this.secondaryColor,20),this.git2=Ht(this.pie3||this.tertiaryColor,20),this.git3=Ht(this.pie4||q(this.primaryColor,{h:-30}),20),this.git4=Ht(this.pie5||q(this.primaryColor,{h:-60}),20),this.git5=Ht(this.pie6||q(this.primaryColor,{h:-90}),10),this.git6=Ht(this.pie7||q(this.primaryColor,{h:60}),10),this.git7=Ht(this.pie8||q(this.primaryColor,{h:120}),20),this.gitInv0=this.gitInv0||_t(this.git0),this.gitInv1=this.gitInv1||_t(this.git1),this.gitInv2=this.gitInv2||_t(this.git2),this.gitInv3=this.gitInv3||_t(this.git3),this.gitInv4=this.gitInv4||_t(this.git4),this.gitInv5=this.gitInv5||_t(this.git5),this.gitInv6=this.gitInv6||_t(this.git6),this.gitInv7=this.gitInv7||_t(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||_t(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||_t(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Ht(this.background,12),this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Ht(this.background,2)}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(i=>{this[i]=t[i]}),this.updateColors(),n.forEach(i=>{this[i]=t[i]})}};const hE=e=>{const t=new cE;return t.calculate(e),t};let uE=class{constructor(){this.background="#f4f4f4",this.primaryColor="#ECECFF",this.secondaryColor=q(this.primaryColor,{h:120}),this.secondaryColor="#ffffde",this.tertiaryColor=q(this.primaryColor,{h:-160}),this.primaryBorderColor=tn(this.primaryColor,this.darkMode),this.secondaryBorderColor=tn(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=tn(this.tertiaryColor,this.darkMode),this.primaryTextColor=_t(this.primaryColor),this.secondaryTextColor=_t(this.secondaryColor),this.tertiaryTextColor=_t(this.tertiaryColor),this.lineColor=_t(this.background),this.textColor=_t(this.background),this.background="white",this.mainBkg="#ECECFF",this.secondBkg="#ffffde",this.lineColor="#333333",this.border1="#9370DB",this.border2="#aaaa33",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="#e8e8e8",this.textColor="#333",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="grey",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="calculated",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="calculated",this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor="calculated",this.taskTextOutsideColor=this.taskTextDarkColor,this.taskTextClickableColor="calculated",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBorderColor="calculated",this.critBkgColor="calculated",this.todayLineColor="calculated",this.sectionBkgColor=go(102,102,255,.49),this.altSectionBkgColor="white",this.sectionBkgColor2="#fff400",this.taskBorderColor="#534fbc",this.taskBkgColor="#8a90dd",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="#534fbc",this.activeTaskBkgColor="#bfc7ff",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222",this.updateColors()}updateColors(){var t,n,i,r,s,o,a,l,c,h,d;this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||Wt(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||Wt(this.tertiaryColor,40);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScale"+u]=Wt(this["cScale"+u],10),this["cScalePeer"+u]=this["cScalePeer"+u]||Wt(this["cScale"+u],25);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleInv"+u]=this["cScaleInv"+u]||q(this["cScale"+u],{h:180});for(let u=0;u<5;u++)this["surface"+u]=this["surface"+u]||q(this.mainBkg,{h:30,l:-(5+u*5)}),this["surfacePeer"+u]=this["surfacePeer"+u]||q(this.mainBkg,{h:30,l:-(7+u*5)});if(this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor,this.labelTextColor!=="calculated"){this.cScaleLabel0=this.cScaleLabel0||_t(this.labelTextColor),this.cScaleLabel3=this.cScaleLabel3||_t(this.labelTextColor);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleLabel"+u]=this["cScaleLabel"+u]||this.labelTextColor}this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.textColor,this.edgeLabelBackground=this.labelBackground,this.actorBorder=Ht(this.border1,23),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.signalColor=this.textColor,this.signalTextColor=this.textColor,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||q(this.tertiaryColor,{l:-40}),this.pie4=this.pie4||q(this.primaryColor,{l:-10}),this.pie5=this.pie5||q(this.secondaryColor,{l:-30}),this.pie6=this.pie6||q(this.tertiaryColor,{l:-20}),this.pie7=this.pie7||q(this.primaryColor,{h:60,l:-20}),this.pie8=this.pie8||q(this.primaryColor,{h:-60,l:-40}),this.pie9=this.pie9||q(this.primaryColor,{h:120,l:-40}),this.pie10=this.pie10||q(this.primaryColor,{h:60,l:-40}),this.pie11=this.pie11||q(this.primaryColor,{h:-90,l:-40}),this.pie12=this.pie12||q(this.primaryColor,{h:120,l:-30}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||qo(this.quadrant1Fill)?Ht(this.quadrant1Fill):Wt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((i=this.xyChart)==null?void 0:i.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((r=this.xyChart)==null?void 0:r.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((s=this.xyChart)==null?void 0:s.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((o=this.xyChart)==null?void 0:o.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((h=this.xyChart)==null?void 0:h.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((d=this.xyChart)==null?void 0:d.plotColorPalette)||"#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.labelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||q(this.primaryColor,{h:-30}),this.git4=this.git4||q(this.primaryColor,{h:-60}),this.git5=this.git5||q(this.primaryColor,{h:-90}),this.git6=this.git6||q(this.primaryColor,{h:60}),this.git7=this.git7||q(this.primaryColor,{h:120}),this.darkMode?(this.git0=Ht(this.git0,25),this.git1=Ht(this.git1,25),this.git2=Ht(this.git2,25),this.git3=Ht(this.git3,25),this.git4=Ht(this.git4,25),this.git5=Ht(this.git5,25),this.git6=Ht(this.git6,25),this.git7=Ht(this.git7,25)):(this.git0=Wt(this.git0,25),this.git1=Wt(this.git1,25),this.git2=Wt(this.git2,25),this.git3=Wt(this.git3,25),this.git4=Wt(this.git4,25),this.git5=Wt(this.git5,25),this.git6=Wt(this.git6,25),this.git7=Wt(this.git7,25)),this.gitInv0=this.gitInv0||Wt(_t(this.git0),25),this.gitInv1=this.gitInv1||_t(this.git1),this.gitInv2=this.gitInv2||_t(this.git2),this.gitInv3=this.gitInv3||_t(this.git3),this.gitInv4=this.gitInv4||_t(this.git4),this.gitInv5=this.gitInv5||_t(this.git5),this.gitInv6=this.gitInv6||_t(this.git6),this.gitInv7=this.gitInv7||_t(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||_t(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||_t(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||$l,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||ql}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(i=>{this[i]=t[i]}),this.updateColors(),n.forEach(i=>{this[i]=t[i]})}};const dE=e=>{const t=new uE;return t.calculate(e),t};let fE=class{constructor(){this.background="#f4f4f4",this.primaryColor="#cde498",this.secondaryColor="#cdffb2",this.background="white",this.mainBkg="#cde498",this.secondBkg="#cdffb2",this.lineColor="green",this.border1="#13540c",this.border2="#6eaa49",this.arrowheadColor="green",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.tertiaryColor=Ht("#cde498",10),this.primaryBorderColor=tn(this.primaryColor,this.darkMode),this.secondaryBorderColor=tn(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=tn(this.tertiaryColor,this.darkMode),this.primaryTextColor=_t(this.primaryColor),this.secondaryTextColor=_t(this.secondaryColor),this.tertiaryTextColor=_t(this.primaryColor),this.lineColor=_t(this.background),this.textColor=_t(this.background),this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#333",this.edgeLabelBackground="#e8e8e8",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="grey",this.signalColor="#333",this.signalTextColor="#333",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="#326932",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="#6eaa49",this.altSectionBkgColor="white",this.sectionBkgColor2="#6eaa49",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="#487e3a",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,i,r,s,o,a,l,c,h,d;this.actorBorder=Wt(this.mainBkg,20),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||Wt(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||Wt(this.tertiaryColor,40);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScale"+u]=Wt(this["cScale"+u],10),this["cScalePeer"+u]=this["cScalePeer"+u]||Wt(this["cScale"+u],25);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleInv"+u]=this["cScaleInv"+u]||q(this["cScale"+u],{h:180});this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor;for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleLabel"+u]=this["cScaleLabel"+u]||this.scaleLabelColor;for(let u=0;u<5;u++)this["surface"+u]=this["surface"+u]||q(this.mainBkg,{h:30,s:-30,l:-(5+u*5)}),this["surfacePeer"+u]=this["surfacePeer"+u]||q(this.mainBkg,{h:30,s:-30,l:-(8+u*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.taskBorderColor=this.border1,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||q(this.primaryColor,{l:-30}),this.pie5=this.pie5||q(this.secondaryColor,{l:-30}),this.pie6=this.pie6||q(this.tertiaryColor,{h:40,l:-40}),this.pie7=this.pie7||q(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||q(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||q(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||q(this.primaryColor,{h:60,l:-50}),this.pie11=this.pie11||q(this.primaryColor,{h:-60,l:-50}),this.pie12=this.pie12||q(this.primaryColor,{h:120,l:-50}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||qo(this.quadrant1Fill)?Ht(this.quadrant1Fill):Wt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((i=this.xyChart)==null?void 0:i.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((r=this.xyChart)==null?void 0:r.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((s=this.xyChart)==null?void 0:s.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((o=this.xyChart)==null?void 0:o.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((h=this.xyChart)==null?void 0:h.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((d=this.xyChart)==null?void 0:d.plotColorPalette)||"#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||q(this.primaryColor,{h:-30}),this.git4=this.git4||q(this.primaryColor,{h:-60}),this.git5=this.git5||q(this.primaryColor,{h:-90}),this.git6=this.git6||q(this.primaryColor,{h:60}),this.git7=this.git7||q(this.primaryColor,{h:120}),this.darkMode?(this.git0=Ht(this.git0,25),this.git1=Ht(this.git1,25),this.git2=Ht(this.git2,25),this.git3=Ht(this.git3,25),this.git4=Ht(this.git4,25),this.git5=Ht(this.git5,25),this.git6=Ht(this.git6,25),this.git7=Ht(this.git7,25)):(this.git0=Wt(this.git0,25),this.git1=Wt(this.git1,25),this.git2=Wt(this.git2,25),this.git3=Wt(this.git3,25),this.git4=Wt(this.git4,25),this.git5=Wt(this.git5,25),this.git6=Wt(this.git6,25),this.git7=Wt(this.git7,25)),this.gitInv0=this.gitInv0||_t(this.git0),this.gitInv1=this.gitInv1||_t(this.git1),this.gitInv2=this.gitInv2||_t(this.git2),this.gitInv3=this.gitInv3||_t(this.git3),this.gitInv4=this.gitInv4||_t(this.git4),this.gitInv5=this.gitInv5||_t(this.git5),this.gitInv6=this.gitInv6||_t(this.git6),this.gitInv7=this.gitInv7||_t(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||_t(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||_t(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||$l,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||ql}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(i=>{this[i]=t[i]}),this.updateColors(),n.forEach(i=>{this[i]=t[i]})}};const pE=e=>{const t=new fE;return t.calculate(e),t};class mE{constructor(){this.primaryColor="#eee",this.contrast="#707070",this.secondaryColor=Ht(this.contrast,55),this.background="#ffffff",this.tertiaryColor=q(this.primaryColor,{h:-160}),this.primaryBorderColor=tn(this.primaryColor,this.darkMode),this.secondaryBorderColor=tn(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=tn(this.tertiaryColor,this.darkMode),this.primaryTextColor=_t(this.primaryColor),this.secondaryTextColor=_t(this.secondaryColor),this.tertiaryTextColor=_t(this.tertiaryColor),this.lineColor=_t(this.background),this.textColor=_t(this.background),this.mainBkg="#eee",this.secondBkg="calculated",this.lineColor="#666",this.border1="#999",this.border2="calculated",this.note="#ffa",this.text="#333",this.critical="#d42",this.done="#bbb",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="white",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="calculated",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="white",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBkgColor="calculated",this.critBorderColor="calculated",this.todayLineColor="calculated",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,i,r,s,o,a,l,c,h,d;this.secondBkg=Ht(this.contrast,55),this.border2=this.contrast,this.actorBorder=Ht(this.border1,23),this.actorBkg=this.mainBkg,this.actorTextColor=this.text,this.actorLineColor=this.lineColor,this.signalColor=this.text,this.signalTextColor=this.text,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.text,this.loopTextColor=this.text,this.noteBorderColor="#999",this.noteBkgColor="#666",this.noteTextColor="#fff",this.cScale0=this.cScale0||"#555",this.cScale1=this.cScale1||"#F4F4F4",this.cScale2=this.cScale2||"#555",this.cScale3=this.cScale3||"#BBB",this.cScale4=this.cScale4||"#777",this.cScale5=this.cScale5||"#999",this.cScale6=this.cScale6||"#DDD",this.cScale7=this.cScale7||"#FFF",this.cScale8=this.cScale8||"#DDD",this.cScale9=this.cScale9||"#BBB",this.cScale10=this.cScale10||"#999",this.cScale11=this.cScale11||"#777";for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleInv"+u]=this["cScaleInv"+u]||_t(this["cScale"+u]);for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this.darkMode?this["cScalePeer"+u]=this["cScalePeer"+u]||Ht(this["cScale"+u],10):this["cScalePeer"+u]=this["cScalePeer"+u]||Wt(this["cScale"+u],10);this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor),this.cScaleLabel0=this.cScaleLabel0||this.cScale1,this.cScaleLabel2=this.cScaleLabel2||this.cScale1;for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["cScaleLabel"+u]=this["cScaleLabel"+u]||this.scaleLabelColor;for(let u=0;u<5;u++)this["surface"+u]=this["surface"+u]||q(this.mainBkg,{l:-(5+u*5)}),this["surfacePeer"+u]=this["surfacePeer"+u]||q(this.mainBkg,{l:-(8+u*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.text,this.sectionBkgColor=Ht(this.contrast,30),this.sectionBkgColor2=Ht(this.contrast,30),this.taskBorderColor=Wt(this.contrast,10),this.taskBkgColor=this.contrast,this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor=this.text,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.gridColor=Ht(this.border1,30),this.doneTaskBkgColor=this.done,this.doneTaskBorderColor=this.lineColor,this.critBkgColor=this.critical,this.critBorderColor=Wt(this.critBkgColor,10),this.todayLineColor=this.critBkgColor,this.transitionColor=this.transitionColor||"#000",this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f4f4f4",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.stateBorder=this.stateBorder||"#000",this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#222",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128});for(let u=0;u<this.THEME_COLOR_LIMIT;u++)this["pie"+u]=this["cScale"+u];this.pie12=this.pie0,this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||qo(this.quadrant1Fill)?Ht(this.quadrant1Fill):Wt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((i=this.xyChart)==null?void 0:i.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((r=this.xyChart)==null?void 0:r.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((s=this.xyChart)==null?void 0:s.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((o=this.xyChart)==null?void 0:o.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((h=this.xyChart)==null?void 0:h.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((d=this.xyChart)==null?void 0:d.plotColorPalette)||"#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=Wt(this.pie1,25)||this.primaryColor,this.git1=this.pie2||this.secondaryColor,this.git2=this.pie3||this.tertiaryColor,this.git3=this.pie4||q(this.primaryColor,{h:-30}),this.git4=this.pie5||q(this.primaryColor,{h:-60}),this.git5=this.pie6||q(this.primaryColor,{h:-90}),this.git6=this.pie7||q(this.primaryColor,{h:60}),this.git7=this.pie8||q(this.primaryColor,{h:120}),this.gitInv0=this.gitInv0||_t(this.git0),this.gitInv1=this.gitInv1||_t(this.git1),this.gitInv2=this.gitInv2||_t(this.git2),this.gitInv3=this.gitInv3||_t(this.git3),this.gitInv4=this.gitInv4||_t(this.git4),this.gitInv5=this.gitInv5||_t(this.git5),this.gitInv6=this.gitInv6||_t(this.git6),this.gitInv7=this.gitInv7||_t(this.git7),this.branchLabelColor=this.branchLabelColor||this.labelTextColor,this.gitBranchLabel0=this.branchLabelColor,this.gitBranchLabel1="white",this.gitBranchLabel2=this.branchLabelColor,this.gitBranchLabel3="white",this.gitBranchLabel4=this.branchLabelColor,this.gitBranchLabel5=this.branchLabelColor,this.gitBranchLabel6=this.branchLabelColor,this.gitBranchLabel7=this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||$l,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||ql}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(i=>{this[i]=t[i]}),this.updateColors(),n.forEach(i=>{this[i]=t[i]})}}const gE=e=>{const t=new mE;return t.calculate(e),t},Ai={base:{getThemeVariables:lE},dark:{getThemeVariables:hE},default:{getThemeVariables:dE},forest:{getThemeVariables:pE},neutral:{getThemeVariables:gE}},mi={flowchart:{useMaxWidth:!0,titleTopMargin:25,subGraphTitleMargin:{top:0,bottom:0},diagramPadding:8,htmlLabels:!0,nodeSpacing:50,rankSpacing:50,curve:"basis",padding:15,defaultRenderer:"dagre-wrapper",wrappingWidth:200},sequence:{useMaxWidth:!0,hideUnusedParticipants:!1,activationWidth:10,diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:150,height:65,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",mirrorActors:!0,forceMenus:!1,bottomMarginAdj:1,rightAngles:!1,showSequenceNumbers:!1,actorFontSize:14,actorFontFamily:'"Open Sans", sans-serif',actorFontWeight:400,noteFontSize:14,noteFontFamily:'"trebuchet ms", verdana, arial, sans-serif',noteFontWeight:400,noteAlign:"center",messageFontSize:16,messageFontFamily:'"trebuchet ms", verdana, arial, sans-serif',messageFontWeight:400,wrap:!1,wrapPadding:10,labelBoxWidth:50,labelBoxHeight:20},gantt:{useMaxWidth:!0,titleTopMargin:25,barHeight:20,barGap:4,topPadding:50,rightPadding:75,leftPadding:75,gridLineStartPadding:35,fontSize:11,sectionFontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d",topAxis:!1,displayMode:"",weekday:"sunday"},journey:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"]},class:{useMaxWidth:!0,titleTopMargin:25,arrowMarkerAbsolute:!1,dividerMargin:10,padding:5,textHeight:10,defaultRenderer:"dagre-wrapper",htmlLabels:!1},state:{useMaxWidth:!0,titleTopMargin:25,dividerMargin:10,sizeUnit:5,padding:8,textHeight:10,titleShift:-15,noteMargin:10,forkWidth:70,forkHeight:7,miniPadding:2,fontSizeFactor:5.02,fontSize:24,labelHeight:16,edgeLengthFactor:"20",compositTitleSize:35,radius:5,defaultRenderer:"dagre-wrapper"},er:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:20,layoutDirection:"TB",minEntityWidth:100,minEntityHeight:75,entityPadding:15,stroke:"gray",fill:"honeydew",fontSize:12},pie:{useMaxWidth:!0,textPosition:.75},quadrantChart:{useMaxWidth:!0,chartWidth:500,chartHeight:500,titleFontSize:20,titlePadding:10,quadrantPadding:5,xAxisLabelPadding:5,yAxisLabelPadding:5,xAxisLabelFontSize:16,yAxisLabelFontSize:16,quadrantLabelFontSize:16,quadrantTextTopPadding:5,pointTextPadding:5,pointLabelFontSize:12,pointRadius:5,xAxisPosition:"top",yAxisPosition:"left",quadrantInternalBorderStrokeWidth:1,quadrantExternalBorderStrokeWidth:2},xyChart:{useMaxWidth:!0,width:700,height:500,titleFontSize:20,titlePadding:10,showTitle:!0,xAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},yAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},chartOrientation:"vertical",plotReservedSpacePercent:50},requirement:{useMaxWidth:!0,rect_fill:"#f9f9f9",text_color:"#333",rect_border_size:"0.5px",rect_border_color:"#bbb",rect_min_width:200,rect_min_height:200,fontSize:14,rect_padding:10,line_height:20},mindmap:{useMaxWidth:!0,padding:10,maxNodeWidth:200},timeline:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"],disableMulticolor:!1},gitGraph:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:8,nodeLabel:{width:75,height:100,x:-25,y:0},mainBranchName:"main",mainBranchOrder:0,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0,parallelCommits:!1,arrowMarkerAbsolute:!1},c4:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,c4ShapeMargin:50,c4ShapePadding:20,width:216,height:60,boxMargin:10,c4ShapeInRow:4,nextLinePaddingX:0,c4BoundaryInRow:2,personFontSize:14,personFontFamily:'"Open Sans", sans-serif',personFontWeight:"normal",external_personFontSize:14,external_personFontFamily:'"Open Sans", sans-serif',external_personFontWeight:"normal",systemFontSize:14,systemFontFamily:'"Open Sans", sans-serif',systemFontWeight:"normal",external_systemFontSize:14,external_systemFontFamily:'"Open Sans", sans-serif',external_systemFontWeight:"normal",system_dbFontSize:14,system_dbFontFamily:'"Open Sans", sans-serif',system_dbFontWeight:"normal",external_system_dbFontSize:14,external_system_dbFontFamily:'"Open Sans", sans-serif',external_system_dbFontWeight:"normal",system_queueFontSize:14,system_queueFontFamily:'"Open Sans", sans-serif',system_queueFontWeight:"normal",external_system_queueFontSize:14,external_system_queueFontFamily:'"Open Sans", sans-serif',external_system_queueFontWeight:"normal",boundaryFontSize:14,boundaryFontFamily:'"Open Sans", sans-serif',boundaryFontWeight:"normal",messageFontSize:12,messageFontFamily:'"Open Sans", sans-serif',messageFontWeight:"normal",containerFontSize:14,containerFontFamily:'"Open Sans", sans-serif',containerFontWeight:"normal",external_containerFontSize:14,external_containerFontFamily:'"Open Sans", sans-serif',external_containerFontWeight:"normal",container_dbFontSize:14,container_dbFontFamily:'"Open Sans", sans-serif',container_dbFontWeight:"normal",external_container_dbFontSize:14,external_container_dbFontFamily:'"Open Sans", sans-serif',external_container_dbFontWeight:"normal",container_queueFontSize:14,container_queueFontFamily:'"Open Sans", sans-serif',container_queueFontWeight:"normal",external_container_queueFontSize:14,external_container_queueFontFamily:'"Open Sans", sans-serif',external_container_queueFontWeight:"normal",componentFontSize:14,componentFontFamily:'"Open Sans", sans-serif',componentFontWeight:"normal",external_componentFontSize:14,external_componentFontFamily:'"Open Sans", sans-serif',external_componentFontWeight:"normal",component_dbFontSize:14,component_dbFontFamily:'"Open Sans", sans-serif',component_dbFontWeight:"normal",external_component_dbFontSize:14,external_component_dbFontFamily:'"Open Sans", sans-serif',external_component_dbFontWeight:"normal",component_queueFontSize:14,component_queueFontFamily:'"Open Sans", sans-serif',component_queueFontWeight:"normal",external_component_queueFontSize:14,external_component_queueFontFamily:'"Open Sans", sans-serif',external_component_queueFontWeight:"normal",wrap:!0,wrapPadding:10,person_bg_color:"#08427B",person_border_color:"#073B6F",external_person_bg_color:"#686868",external_person_border_color:"#8A8A8A",system_bg_color:"#1168BD",system_border_color:"#3C7FC0",system_db_bg_color:"#1168BD",system_db_border_color:"#3C7FC0",system_queue_bg_color:"#1168BD",system_queue_border_color:"#3C7FC0",external_system_bg_color:"#999999",external_system_border_color:"#8A8A8A",external_system_db_bg_color:"#999999",external_system_db_border_color:"#8A8A8A",external_system_queue_bg_color:"#999999",external_system_queue_border_color:"#8A8A8A",container_bg_color:"#438DD5",container_border_color:"#3C7FC0",container_db_bg_color:"#438DD5",container_db_border_color:"#3C7FC0",container_queue_bg_color:"#438DD5",container_queue_border_color:"#3C7FC0",external_container_bg_color:"#B3B3B3",external_container_border_color:"#A6A6A6",external_container_db_bg_color:"#B3B3B3",external_container_db_border_color:"#A6A6A6",external_container_queue_bg_color:"#B3B3B3",external_container_queue_border_color:"#A6A6A6",component_bg_color:"#85BBF0",component_border_color:"#78A8D8",component_db_bg_color:"#85BBF0",component_db_border_color:"#78A8D8",component_queue_bg_color:"#85BBF0",component_queue_border_color:"#78A8D8",external_component_bg_color:"#CCCCCC",external_component_border_color:"#BFBFBF",external_component_db_bg_color:"#CCCCCC",external_component_db_border_color:"#BFBFBF",external_component_queue_bg_color:"#CCCCCC",external_component_queue_border_color:"#BFBFBF"},sankey:{useMaxWidth:!0,width:600,height:400,linkColor:"gradient",nodeAlignment:"justify",showValues:!0,prefix:"",suffix:""},block:{useMaxWidth:!0,padding:8},theme:"default",maxTextSize:5e4,maxEdges:500,darkMode:!1,fontFamily:'"trebuchet ms", verdana, arial, sans-serif;',logLevel:5,securityLevel:"strict",startOnLoad:!0,arrowMarkerAbsolute:!1,secure:["secure","securityLevel","startOnLoad","maxTextSize","maxEdges"],legacyMathML:!1,deterministicIds:!1,fontSize:16},Ug={...mi,deterministicIDSeed:void 0,themeCSS:void 0,themeVariables:Ai.default.getThemeVariables(),sequence:{...mi.sequence,messageFont:function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}},noteFont:function(){return{fontFamily:this.noteFontFamily,fontSize:this.noteFontSize,fontWeight:this.noteFontWeight}},actorFont:function(){return{fontFamily:this.actorFontFamily,fontSize:this.actorFontSize,fontWeight:this.actorFontWeight}}},gantt:{...mi.gantt,tickInterval:void 0,useWidth:void 0},c4:{...mi.c4,useWidth:void 0,personFont:function(){return{fontFamily:this.personFontFamily,fontSize:this.personFontSize,fontWeight:this.personFontWeight}},external_personFont:function(){return{fontFamily:this.external_personFontFamily,fontSize:this.external_personFontSize,fontWeight:this.external_personFontWeight}},systemFont:function(){return{fontFamily:this.systemFontFamily,fontSize:this.systemFontSize,fontWeight:this.systemFontWeight}},external_systemFont:function(){return{fontFamily:this.external_systemFontFamily,fontSize:this.external_systemFontSize,fontWeight:this.external_systemFontWeight}},system_dbFont:function(){return{fontFamily:this.system_dbFontFamily,fontSize:this.system_dbFontSize,fontWeight:this.system_dbFontWeight}},external_system_dbFont:function(){return{fontFamily:this.external_system_dbFontFamily,fontSize:this.external_system_dbFontSize,fontWeight:this.external_system_dbFontWeight}},system_queueFont:function(){return{fontFamily:this.system_queueFontFamily,fontSize:this.system_queueFontSize,fontWeight:this.system_queueFontWeight}},external_system_queueFont:function(){return{fontFamily:this.external_system_queueFontFamily,fontSize:this.external_system_queueFontSize,fontWeight:this.external_system_queueFontWeight}},containerFont:function(){return{fontFamily:this.containerFontFamily,fontSize:this.containerFontSize,fontWeight:this.containerFontWeight}},external_containerFont:function(){return{fontFamily:this.external_containerFontFamily,fontSize:this.external_containerFontSize,fontWeight:this.external_containerFontWeight}},container_dbFont:function(){return{fontFamily:this.container_dbFontFamily,fontSize:this.container_dbFontSize,fontWeight:this.container_dbFontWeight}},external_container_dbFont:function(){return{fontFamily:this.external_container_dbFontFamily,fontSize:this.external_container_dbFontSize,fontWeight:this.external_container_dbFontWeight}},container_queueFont:function(){return{fontFamily:this.container_queueFontFamily,fontSize:this.container_queueFontSize,fontWeight:this.container_queueFontWeight}},external_container_queueFont:function(){return{fontFamily:this.external_container_queueFontFamily,fontSize:this.external_container_queueFontSize,fontWeight:this.external_container_queueFontWeight}},componentFont:function(){return{fontFamily:this.componentFontFamily,fontSize:this.componentFontSize,fontWeight:this.componentFontWeight}},external_componentFont:function(){return{fontFamily:this.external_componentFontFamily,fontSize:this.external_componentFontSize,fontWeight:this.external_componentFontWeight}},component_dbFont:function(){return{fontFamily:this.component_dbFontFamily,fontSize:this.component_dbFontSize,fontWeight:this.component_dbFontWeight}},external_component_dbFont:function(){return{fontFamily:this.external_component_dbFontFamily,fontSize:this.external_component_dbFontSize,fontWeight:this.external_component_dbFontWeight}},component_queueFont:function(){return{fontFamily:this.component_queueFontFamily,fontSize:this.component_queueFontSize,fontWeight:this.component_queueFontWeight}},external_component_queueFont:function(){return{fontFamily:this.external_component_queueFontFamily,fontSize:this.external_component_queueFontSize,fontWeight:this.external_component_queueFontWeight}},boundaryFont:function(){return{fontFamily:this.boundaryFontFamily,fontSize:this.boundaryFontSize,fontWeight:this.boundaryFontWeight}},messageFont:function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}}},pie:{...mi.pie,useWidth:984},xyChart:{...mi.xyChart,useWidth:void 0},requirement:{...mi.requirement,useWidth:void 0},gitGraph:{...mi.gitGraph,useMaxWidth:!1},sankey:{...mi.sankey,useMaxWidth:!1}},zg=(e,t="")=>Object.keys(e).reduce((n,i)=>Array.isArray(e[i])?n:typeof e[i]=="object"&&e[i]!==null?[...n,t+i,...zg(e[i],"")]:[...n,t+i],[]),_E=new Set(zg(Ug,"")),xE=Ug,_l=e=>{if(Gt.debug("sanitizeDirective called with",e),!(typeof e!="object"||e==null)){if(Array.isArray(e)){e.forEach(t=>_l(t));return}for(const t of Object.keys(e)){if(Gt.debug("Checking key",t),t.startsWith("__")||t.includes("proto")||t.includes("constr")||!_E.has(t)||e[t]==null){Gt.debug("sanitize deleting key: ",t),delete e[t];continue}if(typeof e[t]=="object"){Gt.debug("sanitizing object",t),_l(e[t]);continue}const n=["themeCSS","fontFamily","altFontFamily"];for(const i of n)t.includes(i)&&(Gt.debug("sanitizing css option",t),e[t]=vE(e[t]))}if(e.themeVariables)for(const t of Object.keys(e.themeVariables)){const n=e.themeVariables[t];n?.match&&!n.match(/^[\d "#%(),.;A-Za-z]+$/)&&(e.themeVariables[t]="")}Gt.debug("After sanitization",e)}},vE=e=>{let t=0,n=0;for(const i of e){if(t<n)return"{ /* ERROR: Unbalanced CSS */ }";i==="{"?t++:i==="}"&&n++}return t!==n?"{ /* ERROR: Unbalanced CSS */ }":e},Hg=/^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s,xo=/%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,yE=/\s*%%.*\n/gm;class Vg extends Error{constructor(t){super(t),this.name="UnknownDiagramError"}}const vs={},Xl=function(e,t){e=e.replace(Hg,"").replace(xo,"").replace(yE,`
`);for(const[n,{detector:i}]of Object.entries(vs))if(i(e,t))return n;throw new Vg(`No diagram type detected matching given configuration for text: ${e}`)},Gg=(...e)=>{for(const{id:t,detector:n,loader:i}of e)Wg(t,n,i)},Wg=(e,t,n)=>{vs[e]?Gt.error(`Detector with key ${e} already exists`):vs[e]={detector:t,loader:n},Gt.debug(`Detector with key ${e} added${n?" with loader":""}`)},bE=e=>vs[e].loader,Fh=(e,t,{depth:n=2,clobber:i=!1}={})=>{const r={depth:n,clobber:i};return Array.isArray(t)&&!Array.isArray(e)?(t.forEach(s=>Fh(e,s,r)),e):Array.isArray(t)&&Array.isArray(e)?(t.forEach(s=>{e.includes(s)||e.push(s)}),e):e===void 0||n<=0?e!=null&&typeof e=="object"&&typeof t=="object"?Object.assign(e,t):t:(t!==void 0&&typeof e=="object"&&typeof t=="object"&&Object.keys(t).forEach(s=>{typeof t[s]=="object"&&(e[s]===void 0||typeof e[s]=="object")?(e[s]===void 0&&(e[s]=Array.isArray(t[s])?[]:{}),e[s]=Fh(e[s],t[s],{depth:n-1,clobber:i})):(i||typeof e[s]!="object"&&typeof t[s]!="object")&&(e[s]=t[s])}),e)},We=Fh,TE="​",SE={curveBasis:p1,curveBasisClosed:m1,curveBasisOpen:g1,curveBumpX:Zm,curveBumpY:c1,curveBundle:_1,curveCardinalClosed:v1,curveCardinalOpen:y1,curveCardinal:x1,curveCatmullRomClosed:T1,curveCatmullRomOpen:S1,curveCatmullRom:b1,curveLinear:o1,curveLinearClosed:M1,curveMonotoneX:C1,curveMonotoneY:E1,curveNatural:w1,curveStep:A1,curveStepAfter:L1,curveStepBefore:R1},ME=/\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,CE=function(e,t){const n=$g(e,/(?:init\b)|(?:initialize\b)/);let i={};if(Array.isArray(n)){const o=n.map(a=>a.args);_l(o),i=We(i,[...o])}else i=n.args;if(!i)return;let r=Xl(e,t);const s="config";return i[s]!==void 0&&(r==="flowchart-v2"&&(r="flowchart"),i[r]=i[s],delete i[s]),i},$g=function(e,t=null){try{const n=new RegExp(`[%]{2}(?![{]${ME.source})(?=[}][%]{2}).*
`,"ig");e=e.trim().replace(n,"").replace(/'/gm,'"'),Gt.debug(`Detecting diagram directive${t!==null?" type:"+t:""} based on the text:${e}`);let i;const r=[];for(;(i=xo.exec(e))!==null;)if(i.index===xo.lastIndex&&xo.lastIndex++,i&&!t||t&&i[1]&&i[1].match(t)||t&&i[2]&&i[2].match(t)){const s=i[1]?i[1]:i[2],o=i[3]?i[3].trim():i[4]?JSON.parse(i[4].trim()):null;r.push({type:s,args:o})}return r.length===0?{type:e,args:null}:r.length===1?r[0]:r}catch(n){return Gt.error(`ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`),{type:void 0,args:null}}},EE=function(e){return e.replace(xo,"")},wE=function(e,t){for(const[n,i]of t.entries())if(i.match(e))return n;return-1};function AE(e,t){if(!e)return t;const n=`curve${e.charAt(0).toUpperCase()+e.slice(1)}`;return SE[n]??t}function RE(e,t){const n=e.trim();if(n)return t.securityLevel!=="loose"?fT.sanitizeUrl(n):n}const LE=(e,...t)=>{const n=e.split("."),i=n.length-1,r=n[i];let s=window;for(let o=0;o<i;o++)if(s=s[n[o]],!s){Gt.error(`Function name: ${e} not found in window`);return}s[r](...t)};function qg(e,t){return!e||!t?0:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function DE(e){let t,n=0;e.forEach(r=>{n+=qg(r,t),t=r});const i=n/2;return ju(e,i)}function PE(e){return e.length===1?e[0]:DE(e)}const If=(e,t=2)=>{const n=Math.pow(10,t);return Math.round(e*n)/n},ju=(e,t)=>{let n,i=t;for(const r of e){if(n){const s=qg(r,n);if(s<i)i-=s;else{const o=i/s;if(o<=0)return n;if(o>=1)return{x:r.x,y:r.y};if(o>0&&o<1)return{x:If((1-o)*n.x+o*r.x,5),y:If((1-o)*n.y+o*r.y,5)}}}n=r}throw new Error("Could not find a suitable point for the given distance")},FE=(e,t,n)=>{Gt.info(`our points ${JSON.stringify(t)}`),t[0]!==n&&(t=t.reverse());const r=ju(t,25),s=e?10:5,o=Math.atan2(t[0].y-r.y,t[0].x-r.x),a={x:0,y:0};return a.x=Math.sin(o)*s+(t[0].x+r.x)/2,a.y=-Math.cos(o)*s+(t[0].y+r.y)/2,a};function IE(e,t,n){const i=structuredClone(n);Gt.info("our points",i),t!=="start_left"&&t!=="start_right"&&i.reverse();const r=25+e,s=ju(i,r),o=10+e*.5,a=Math.atan2(i[0].y-s.y,i[0].x-s.x),l={x:0,y:0};return t==="start_left"?(l.x=Math.sin(a+Math.PI)*o+(i[0].x+s.x)/2,l.y=-Math.cos(a+Math.PI)*o+(i[0].y+s.y)/2):t==="end_right"?(l.x=Math.sin(a-Math.PI)*o+(i[0].x+s.x)/2-5,l.y=-Math.cos(a-Math.PI)*o+(i[0].y+s.y)/2-5):t==="end_left"?(l.x=Math.sin(a)*o+(i[0].x+s.x)/2-5,l.y=-Math.cos(a)*o+(i[0].y+s.y)/2-5):(l.x=Math.sin(a)*o+(i[0].x+s.x)/2,l.y=-Math.cos(a)*o+(i[0].y+s.y)/2),l}function kE(e){let t="",n="";for(const i of e)i!==void 0&&(i.startsWith("color:")||i.startsWith("text-align:")?n=n+i+";":t=t+i+";");return{style:t,labelStyle:n}}let kf=0;const BE=()=>(kf++,"id-"+Math.random().toString(36).substr(2,12)+"-"+kf);function NE(e){let t="";const n="0123456789abcdef",i=n.length;for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*i));return t}const OE=e=>NE(e.length),UE=function(){return{x:0,y:0,fill:void 0,anchor:"start",style:"#666",width:100,height:100,textMargin:0,rx:0,ry:0,valign:void 0,text:""}},zE=function(e,t){const n=t.text.replace(Xu.lineBreakRegex," "),[,i]=Ku(t.fontSize),r=e.append("text");r.attr("x",t.x),r.attr("y",t.y),r.style("text-anchor",t.anchor),r.style("font-family",t.fontFamily),r.style("font-size",i),r.style("font-weight",t.fontWeight),r.attr("fill",t.fill),t.class!==void 0&&r.attr("class",t.class);const s=r.append("tspan");return s.attr("x",t.x+t.textMargin*2),s.attr("fill",t.fill),s.text(n),r},HE=Xo((e,t,n)=>{if(!e||(n=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",joinWith:"<br/>"},n),Xu.lineBreakRegex.test(e)))return e;const i=e.split(" "),r=[];let s="";return i.forEach((o,a)=>{const l=xl(`${o} `,n),c=xl(s,n);if(l>t){const{hyphenatedStrings:u,remainingWord:f}=VE(o,t,"-",n);r.push(s,...u),s=f}else c+l>=t?(r.push(s),s=o):s=[s,o].filter(Boolean).join(" ");a+1===i.length&&r.push(s)}),r.filter(o=>o!=="").join(n.joinWith)},(e,t,n)=>`${e}${t}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`),VE=Xo((e,t,n="-",i)=>{i=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",margin:0},i);const r=[...e],s=[];let o="";return r.forEach((a,l)=>{const c=`${o}${a}`;if(xl(c,i)>=t){const d=l+1,u=r.length===d,f=`${c}${n}`;s.push(u?c:f),o=""}else o=c}),{hyphenatedStrings:s,remainingWord:o}},(e,t,n="-",i)=>`${e}${t}${n}${i.fontSize}${i.fontWeight}${i.fontFamily}`);function GE(e,t){return Yu(e,t).height}function xl(e,t){return Yu(e,t).width}const Yu=Xo((e,t)=>{const{fontSize:n=12,fontFamily:i="Arial",fontWeight:r=400}=t;if(!e)return{width:0,height:0};const[,s]=Ku(n),o=["sans-serif",i],a=e.split(Xu.lineBreakRegex),l=[],c=Le("body");if(!c.remove)return{width:0,height:0,lineHeight:0};const h=c.append("svg");for(const u of o){let f=0;const m={width:0,height:0,lineHeight:0};for(const _ of a){const g=UE();g.text=_||TE;const p=zE(h,g).style("font-size",s).style("font-weight",r).style("font-family",u),b=(p._groups||p)[0][0].getBBox();if(b.width===0&&b.height===0)throw new Error("svg element not in render tree");m.width=Math.round(Math.max(m.width,b.width)),f=Math.round(b.height),m.height+=f,m.lineHeight=Math.round(Math.max(m.lineHeight,f))}l.push(m)}h.remove();const d=isNaN(l[1].height)||isNaN(l[1].width)||isNaN(l[1].lineHeight)||l[0].height>l[1].height&&l[0].width>l[1].width&&l[0].lineHeight>l[1].lineHeight?0:1;return l[d]},(e,t)=>`${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`);class WE{constructor(t=!1,n){this.count=0,this.count=n?n.length:0,this.next=t?()=>this.count++:()=>Date.now()}}let ha;const $E=function(e){return ha=ha||document.createElement("div"),e=escape(e).replace(/%26/g,"&").replace(/%23/g,"#").replace(/%3B/g,";"),ha.innerHTML=e,unescape(ha.textContent)};function Xg(e){return"str"in e}const qE=(e,t,n,i)=>{var r;if(!i)return;const s=(r=e.node())==null?void 0:r.getBBox();s&&e.append("text").text(i).attr("x",s.x+s.width/2).attr("y",-n).attr("class",t)},Ku=e=>{if(typeof e=="number")return[e,e+"px"];const t=parseInt(e??"",10);return Number.isNaN(t)?[void 0,void 0]:e===String(t)?[t,e+"px"]:[t,e]};function jg(e,t){return mC({},e,t)}const vo={assignWithDepth:We,wrapLabel:HE,calculateTextHeight:GE,calculateTextWidth:xl,calculateTextDimensions:Yu,cleanAndMerge:jg,detectInit:CE,detectDirective:$g,isSubstringInArray:wE,interpolateToCurve:AE,calcLabelPosition:PE,calcCardinalityPosition:FE,calcTerminalLabelPosition:IE,formatUrl:RE,getStylesFromArray:kE,generateId:BE,random:OE,runFunc:LE,entityDecode:$E,insertTitle:qE,parseFontSize:Ku,InitIDGenerator:WE},XE=function(e){let t=e;return t=t.replace(/style.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/classDef.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/#\w+;/g,function(n){const i=n.substring(1,n.length-1);return/^\+?\d+$/.test(i)?"ﬂ°°"+i+"¶ß":"ﬂ°"+i+"¶ß"}),t},jE=function(e){return e.replace(/ﬂ°°/g,"&#").replace(/ﬂ°/g,"&").replace(/¶ß/g,";")},Bf="10.9.5",ys=Object.freeze(xE);let un=We({},ys),Yg,bs=[],yo=We({},ys);const jl=(e,t)=>{let n=We({},e),i={};for(const r of t)Jg(r),i=We(i,r);if(n=We(n,i),i.theme&&i.theme in Ai){const r=We({},Yg),s=We(r.themeVariables||{},i.themeVariables);n.theme&&n.theme in Ai&&(n.themeVariables=Ai[n.theme].getThemeVariables(s))}return yo=n,Qg(yo),yo},YE=e=>(un=We({},ys),un=We(un,e),e.theme&&Ai[e.theme]&&(un.themeVariables=Ai[e.theme].getThemeVariables(e.themeVariables)),jl(un,bs),un),KE=e=>{Yg=We({},e)},ZE=e=>(un=We(un,e),jl(un,bs),un),Kg=()=>We({},un),Zg=e=>(Qg(e),We(yo,e),ii()),ii=()=>We({},yo),Jg=e=>{e&&(["secure",...un.secure??[]].forEach(t=>{Object.hasOwn(e,t)&&(Gt.debug(`Denied attempt to modify a secure key ${t}`,e[t]),delete e[t])}),Object.keys(e).forEach(t=>{t.startsWith("__")&&delete e[t]}),Object.keys(e).forEach(t=>{typeof e[t]=="string"&&(e[t].includes("<")||e[t].includes(">")||e[t].includes("url(data:"))&&delete e[t],typeof e[t]=="object"&&Jg(e[t])}))},JE=e=>{_l(e),e.fontFamily&&(!e.themeVariables||!e.themeVariables.fontFamily)&&(e.themeVariables={fontFamily:e.fontFamily}),bs.push(e),jl(un,bs)},vl=(e=un)=>{bs=[],jl(e,bs)},QE={LAZY_LOAD_DEPRECATED:"The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."},Nf={},tw=e=>{Nf[e]||(Gt.warn(QE[e]),Nf[e]=!0)},Qg=e=>{e&&(e.lazyLoadedDiagrams||e.loadExternalDiagramsAtStartup)&&tw("LAZY_LOAD_DEPRECATED")},t0="c4",ew=e=>/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e),nw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/c4Diagram-c83219d4.Dc3eiVvE.js");return{diagram:t}},__vite__mapDeps([0,1,2]));return{id:t0,diagram:e}},iw={id:t0,detector:ew,loader:nw},rw=iw,e0="flowchart",sw=(e,t)=>{var n,i;return((n=t?.flowchart)==null?void 0:n.defaultRenderer)==="dagre-wrapper"||((i=t?.flowchart)==null?void 0:i.defaultRenderer)==="elk"?!1:/^\s*graph/.test(e)},ow=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/flowDiagram-50d868cf.CNnVa17S.js");return{diagram:t}},__vite__mapDeps([3,4,5,6,7,8,9,10,11,12,13,2]));return{id:e0,diagram:e}},aw={id:e0,detector:sw,loader:ow},lw=aw,n0="flowchart-v2",cw=(e,t)=>{var n,i,r;return((n=t?.flowchart)==null?void 0:n.defaultRenderer)==="dagre-d3"||((i=t?.flowchart)==null?void 0:i.defaultRenderer)==="elk"?!1:/^\s*graph/.test(e)&&((r=t?.flowchart)==null?void 0:r.defaultRenderer)==="dagre-wrapper"?!0:/^\s*flowchart/.test(e)},hw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/flowDiagram-v2-4f6560a1.CU-xdpH7.js");return{diagram:t}},__vite__mapDeps([14,4,7,5,8,6,9,10,11,12,13,2]));return{id:n0,diagram:e}},uw={id:n0,detector:cw,loader:hw},dw=uw,i0="er",fw=e=>/^\s*erDiagram/.test(e),pw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/erDiagram-0228fc6a.Ikn1HGzO.js");return{diagram:t}},__vite__mapDeps([15,5,6,12,2]));return{id:i0,diagram:e}},mw={id:i0,detector:fw,loader:pw},gw=mw,r0="gitGraph",_w=e=>/^\s*gitGraph/.test(e),xw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/gitGraphDiagram-82fe8481.CefYxlPV.js");return{diagram:t}},__vite__mapDeps([16,2]));return{id:r0,diagram:e}},vw={id:r0,detector:_w,loader:xw},yw=vw,s0="gantt",bw=e=>/^\s*gantt/.test(e),Tw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/ganttDiagram-a2739b55.CHIKsLFq.js");return{diagram:t}},__vite__mapDeps([17,18,19,2]));return{id:s0,diagram:e}},Sw={id:s0,detector:bw,loader:Tw},Mw=Sw,o0="info",Cw=e=>/^\s*info/.test(e),Ew=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/infoDiagram-8eee0895.Bie638fK.js");return{diagram:t}},__vite__mapDeps([20,2]));return{id:o0,diagram:e}},ww={id:o0,detector:Cw,loader:Ew},a0="pie",Aw=e=>/^\s*pie/.test(e),Rw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/pieDiagram-a8764435.BzyMiozc.js");return{diagram:t}},__vite__mapDeps([21,22,23,19,2]));return{id:a0,diagram:e}},Lw={id:a0,detector:Aw,loader:Rw},l0="quadrantChart",Dw=e=>/^\s*quadrantChart/.test(e),Pw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/quadrantDiagram-1e28029f.C4Ts-tEQ.js");return{diagram:t}},__vite__mapDeps([24,18,19,2]));return{id:l0,diagram:e}},Fw={id:l0,detector:Dw,loader:Pw},Iw=Fw,c0="xychart",kw=e=>/^\s*xychart-beta/.test(e),Bw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/xychartDiagram-f5964ef8.xXkkJZ0g.js");return{diagram:t}},__vite__mapDeps([25,11,19,23,18,12,2]));return{id:c0,diagram:e}},Nw={id:c0,detector:kw,loader:Bw},Ow=Nw,h0="requirement",Uw=e=>/^\s*requirement(Diagram)?/.test(e),zw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/requirementDiagram-08caed73.JrfZnN5J.js");return{diagram:t}},__vite__mapDeps([26,5,6,12,2]));return{id:h0,diagram:e}},Hw={id:h0,detector:Uw,loader:zw},Vw=Hw,u0="sequence",Gw=e=>/^\s*sequenceDiagram/.test(e),Ww=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/sequenceDiagram-c5b8d532.Cl64QM-v.js");return{diagram:t}},__vite__mapDeps([27,1,2]));return{id:u0,diagram:e}},$w={id:u0,detector:Gw,loader:Ww},qw=$w,d0="class",Xw=(e,t)=>{var n;return((n=t?.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*classDiagram/.test(e)},jw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/classDiagram-beda092f.yJxJFsKn.js");return{diagram:t}},__vite__mapDeps([28,29,5,6,12,2]));return{id:d0,diagram:e}},Yw={id:d0,detector:Xw,loader:jw},Kw=Yw,f0="classDiagram",Zw=(e,t)=>{var n;return/^\s*classDiagram/.test(e)&&((n=t?.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!0:/^\s*classDiagram-v2/.test(e)},Jw=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/classDiagram-v2-2358418a.DERtc8MH.js");return{diagram:t}},__vite__mapDeps([30,29,5,8,6,9,10,11,12,2]));return{id:f0,diagram:e}},Qw={id:f0,detector:Zw,loader:Jw},tA=Qw,p0="state",eA=(e,t)=>{var n;return((n=t?.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*stateDiagram/.test(e)},nA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/stateDiagram-1ecb1508.DRJgi36E.js");return{diagram:t}},__vite__mapDeps([31,32,5,6,12,2]));return{id:p0,diagram:e}},iA={id:p0,detector:eA,loader:nA},rA=iA,m0="stateDiagram",sA=(e,t)=>{var n;return!!(/^\s*stateDiagram-v2/.test(e)||/^\s*stateDiagram/.test(e)&&((n=t?.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper")},oA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/stateDiagram-v2-c2b004d7.GKQj9kzw.js");return{diagram:t}},__vite__mapDeps([33,32,5,8,6,9,10,11,12,2]));return{id:m0,diagram:e}},aA={id:m0,detector:sA,loader:oA},lA=aA,g0="journey",cA=e=>/^\s*journey/.test(e),hA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/journeyDiagram-c64418c1.Dy68T_os.js");return{diagram:t}},__vite__mapDeps([34,1,22,2]));return{id:g0,diagram:e}},uA={id:g0,detector:cA,loader:hA},dA=uA,fA=function(e,t){for(let n of t)e.attr(n[0],n[1])},pA=function(e,t,n){let i=new Map;return n?(i.set("width","100%"),i.set("style",`max-width: ${t}px;`)):(i.set("height",e),i.set("width",t)),i},_0=function(e,t,n,i){const r=pA(t,n,i);fA(e,r)},mA=function(e,t,n,i){const r=t.node().getBBox(),s=r.width,o=r.height;Gt.info(`SVG bounds: ${s}x${o}`,r);let a=0,l=0;Gt.info(`Graph bounds: ${a}x${l}`,e),a=s+n*2,l=o+n*2,Gt.info(`Calculated bounds: ${a}x${l}`),_0(t,l,a,i);const c=`${r.x-n} ${r.y-n} ${r.width+2*n} ${r.height+2*n}`;t.attr("viewBox",c)},Ka={},gA=(e,t,n)=>{let i="";return e in Ka&&Ka[e]?i=Ka[e](n):Gt.warn(`No theme found for ${e}`),` & {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
    fill: ${n.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${n.errorBkgColor};
  }
  & .error-text {
    fill: ${n.errorTextColor};
    stroke: ${n.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${n.lineColor};
    stroke: ${n.lineColor};
  }
  & .marker.cross {
    stroke: ${n.lineColor};
  }

  & svg {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
  }

  ${i}

  ${t}
`},_A=(e,t)=>{t!==void 0&&(Ka[e]=t)},xA=gA;let Zu="",Ju="",Qu="";const td=e=>xs(e,ii()),vA=()=>{Zu="",Qu="",Ju=""},yA=e=>{Zu=td(e).replace(/^\s+/g,"")},bA=()=>Zu,TA=e=>{Qu=td(e).replace(/\n\s+/g,`
`)},SA=()=>Qu,MA=e=>{Ju=td(e)},CA=()=>Ju,EA=Object.freeze(Object.defineProperty({__proto__:null,clear:vA,getAccDescription:SA,getAccTitle:bA,getDiagramTitle:CA,setAccDescription:TA,setAccTitle:yA,setDiagramTitle:MA},Symbol.toStringTag,{value:"Module"})),wA=Gt,AA=qu,ed=ii,B4=Zg,N4=ys,RA=e=>xs(e,ed()),LA=mA,DA=()=>EA,yl={},bl=(e,t,n)=>{var i;if(yl[e])throw new Error(`Diagram ${e} already registered.`);yl[e]=t,n&&Wg(e,n),_A(e,t.styles),(i=t.injectUtils)==null||i.call(t,wA,AA,ed,RA,LA,DA(),()=>{})},nd=e=>{if(e in yl)return yl[e];throw new PA(e)};class PA extends Error{constructor(t){super(`Diagram ${t} not found.`)}}const FA=e=>{var t;const{securityLevel:n}=ed();let i=Le("body");if(n==="sandbox"){const o=((t=Le(`#i${e}`).node())==null?void 0:t.contentDocument)??document;i=Le(o.body)}return i.select(`#${e}`)},IA=(e,t,n)=>{Gt.debug(`rendering svg for syntax error
`);const i=FA(t),r=i.append("g");i.attr("viewBox","0 0 2412 512"),_0(i,100,512,!0),r.append("path").attr("class","error-icon").attr("d","m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"),r.append("path").attr("class","error-icon").attr("d","m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"),r.append("path").attr("class","error-icon").attr("d","m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"),r.append("path").attr("class","error-icon").attr("d","m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"),r.append("path").attr("class","error-icon").attr("d","m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"),r.append("path").attr("class","error-icon").attr("d","m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"),r.append("text").attr("class","error-text").attr("x",1440).attr("y",250).attr("font-size","150px").style("text-anchor","middle").text("Syntax error in text"),r.append("text").attr("class","error-text").attr("x",1250).attr("y",400).attr("font-size","100px").style("text-anchor","middle").text(`mermaid version ${n}`)},x0={draw:IA},kA=x0,BA={db:{},renderer:x0,parser:{parser:{yy:{}},parse:()=>{}}},NA=BA,v0="flowchart-elk",OA=(e,t)=>{var n;return!!(/^\s*flowchart-elk/.test(e)||/^\s*flowchart|graph/.test(e)&&((n=t?.flowchart)==null?void 0:n.defaultRenderer)==="elk")},UA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/flowchart-elk-definition-6af322e1.DeurhFv8.js");return{diagram:t}},__vite__mapDeps([35,4,10,11,12,2]));return{id:v0,diagram:e}},zA={id:v0,detector:OA,loader:UA},HA=zA,y0="timeline",VA=e=>/^\s*timeline/.test(e),GA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/timeline-definition-faaaa080.CEJmUZuL.js");return{diagram:t}},__vite__mapDeps([36,22,2]));return{id:y0,diagram:e}},WA={id:y0,detector:VA,loader:GA},$A=WA,b0="mindmap",qA=e=>/^\s*mindmap/.test(e),XA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/mindmap-definition-8da855dc.DuJ2g8iH.js");return{diagram:t}},__vite__mapDeps([37,11,2]));return{id:b0,diagram:e}},jA={id:b0,detector:qA,loader:XA},YA=jA,T0="sankey",KA=e=>/^\s*sankey-beta/.test(e),ZA=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/sankeyDiagram-a04cb91d.HOmtk39d.js");return{diagram:t}},__vite__mapDeps([38,23,19,39,2]));return{id:T0,diagram:e}},JA={id:T0,detector:KA,loader:ZA},QA=JA,S0="block",t2=e=>/^\s*block-beta/.test(e),e2=async()=>{const{diagram:e}=await Ae(async()=>{const{diagram:t}=await import("./chunks/blockDiagram-c4efeb88.YLmpGgUH.js");return{diagram:t}},__vite__mapDeps([40,9,5,10,11,12,13,23,19,39,2]));return{id:S0,diagram:e}},n2={id:S0,detector:t2,loader:e2},i2=n2;let Of=!1;const id=()=>{Of||(Of=!0,bl("error",NA,e=>e.toLowerCase().trim()==="error"),bl("---",{db:{clear:()=>{}},styles:{},renderer:{draw:()=>{}},parser:{parser:{yy:{}},parse:()=>{throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks")}},init:()=>null},e=>e.toLowerCase().trimStart().startsWith("---")),Gg(rw,tA,Kw,gw,Mw,ww,Lw,Vw,qw,HA,dw,lw,YA,$A,yw,lA,rA,dA,Iw,QA,Ow,i2))};class M0{constructor(t,n={}){this.text=t,this.metadata=n,this.type="graph",this.text=XE(t),this.text+=`
`;const i=ii();try{this.type=Xl(t,i)}catch(s){this.type="error",this.detectError=s}const r=nd(this.type);Gt.debug("Type "+this.type),this.db=r.db,this.renderer=r.renderer,this.parser=r.parser,this.parser.parser.yy=this.db,this.init=r.init,this.parse()}parse(){var t,n,i,r,s;if(this.detectError)throw this.detectError;(n=(t=this.db).clear)==null||n.call(t);const o=ii();(i=this.init)==null||i.call(this,o),this.metadata.title&&((s=(r=this.db).setDiagramTitle)==null||s.call(r,this.metadata.title)),this.parser.parse(this.text)}async render(t,n){await this.renderer.draw(this.text,t,n,this)}getParser(){return this.parser}getType(){return this.type}}const r2=async(e,t={})=>{const n=Xl(e,ii());try{nd(n)}catch{const r=bE(n);if(!r)throw new Vg(`Diagram ${n} not found.`);const{id:s,diagram:o}=await r();bl(s,o)}return new M0(e,t)};let Uf=[];const s2=()=>{Uf.forEach(e=>{e()}),Uf=[]},o2="graphics-document document";function a2(e,t){e.attr("role",o2),t!==""&&e.attr("aria-roledescription",t)}function l2(e,t,n,i){if(e.insert!==void 0){if(n){const r=`chart-desc-${i}`;e.attr("aria-describedby",r),e.insert("desc",":first-child").attr("id",r).text(n)}if(t){const r=`chart-title-${i}`;e.attr("aria-labelledby",r),e.insert("title",":first-child").attr("id",r).text(t)}}}const c2=e=>e.replace(/^\s*%%(?!{)[^\n]+\n?/gm,"").trimStart();function C0(e){return typeof e>"u"||e===null}function h2(e){return typeof e=="object"&&e!==null}function u2(e){return Array.isArray(e)?e:C0(e)?[]:[e]}function d2(e,t){var n,i,r,s;if(t)for(s=Object.keys(t),n=0,i=s.length;n<i;n+=1)r=s[n],e[r]=t[r];return e}function f2(e,t){var n="",i;for(i=0;i<t;i+=1)n+=e;return n}function p2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var m2=C0,g2=h2,_2=u2,x2=f2,v2=p2,y2=d2,Qe={isNothing:m2,isObject:g2,toArray:_2,repeat:x2,isNegativeZero:v2,extend:y2};function E0(e,t){var n="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),i+" "+n):i}function Fo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=E0(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Fo.prototype=Object.create(Error.prototype);Fo.prototype.constructor=Fo;Fo.prototype.toString=function(t){return this.name+": "+E0(this,t)};var Mi=Fo;function yc(e,t,n,i,r){var s="",o="",a=Math.floor(r/2)-1;return i-t>a&&(s=" ... ",t=i-a+s.length),n-i>a&&(o=" ...",n=i+a-o.length),{str:s+e.slice(t,n).replace(/\t/g,"→")+o,pos:i-t+s.length}}function bc(e,t){return Qe.repeat(" ",t-e.length)+e}function b2(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var n=/\r?\n|\r|\0/g,i=[0],r=[],s,o=-1;s=n.exec(e.buffer);)r.push(s.index),i.push(s.index+s[0].length),e.position<=s.index&&o<0&&(o=i.length-2);o<0&&(o=i.length-1);var a="",l,c,h=Math.min(e.line+t.linesAfter,r.length).toString().length,d=t.maxLength-(t.indent+h+3);for(l=1;l<=t.linesBefore&&!(o-l<0);l++)c=yc(e.buffer,i[o-l],r[o-l],e.position-(i[o]-i[o-l]),d),a=Qe.repeat(" ",t.indent)+bc((e.line-l+1).toString(),h)+" | "+c.str+`
`+a;for(c=yc(e.buffer,i[o],r[o],e.position,d),a+=Qe.repeat(" ",t.indent)+bc((e.line+1).toString(),h)+" | "+c.str+`
`,a+=Qe.repeat("-",t.indent+h+3+c.pos)+`^
`,l=1;l<=t.linesAfter&&!(o+l>=r.length);l++)c=yc(e.buffer,i[o+l],r[o+l],e.position-(i[o]-i[o+l]),d),a+=Qe.repeat(" ",t.indent)+bc((e.line+l+1).toString(),h)+" | "+c.str+`
`;return a.replace(/\n$/,"")}var T2=b2,S2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],M2=["scalar","sequence","mapping"];function C2(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(i){t[String(i)]=n})}),t}function E2(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(S2.indexOf(n)===-1)throw new Mi('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=C2(t.styleAliases||null),M2.indexOf(this.kind)===-1)throw new Mi('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var qe=E2;function zf(e,t){var n=[];return e[t].forEach(function(i){var r=n.length;n.forEach(function(s,o){s.tag===i.tag&&s.kind===i.kind&&s.multi===i.multi&&(r=o)}),n[r]=i}),n}function w2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function i(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(i);return e}function Ih(e){return this.extend(e)}Ih.prototype.extend=function(t){var n=[],i=[];if(t instanceof qe)i.push(t);else if(Array.isArray(t))i=i.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit));else throw new Mi("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(s){if(!(s instanceof qe))throw new Mi("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(s.loadKind&&s.loadKind!=="scalar")throw new Mi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(s.multi)throw new Mi("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(s){if(!(s instanceof qe))throw new Mi("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Ih.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(i),r.compiledImplicit=zf(r,"implicit"),r.compiledExplicit=zf(r,"explicit"),r.compiledTypeMap=w2(r.compiledImplicit,r.compiledExplicit),r};var A2=Ih,R2=new qe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),L2=new qe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),D2=new qe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),P2=new A2({explicit:[R2,L2,D2]});function F2(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function I2(){return null}function k2(e){return e===null}var B2=new qe("tag:yaml.org,2002:null",{kind:"scalar",resolve:F2,construct:I2,predicate:k2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function N2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function O2(e){return e==="true"||e==="True"||e==="TRUE"}function U2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var z2=new qe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:N2,construct:O2,predicate:U2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function H2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function V2(e){return 48<=e&&e<=55}function G2(e){return 48<=e&&e<=57}function W2(e){if(e===null)return!1;var t=e.length,n=0,i=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;i=!0}return i&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!H2(e.charCodeAt(n)))return!1;i=!0}return i&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!V2(e.charCodeAt(n)))return!1;i=!0}return i&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!G2(e.charCodeAt(n)))return!1;i=!0}return!(!i||r==="_")}function $2(e){var t=e,n=1,i;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),i=t[0],(i==="-"||i==="+")&&(i==="-"&&(n=-1),t=t.slice(1),i=t[0]),t==="0")return 0;if(i==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function q2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Qe.isNegativeZero(e)}var X2=new qe("tag:yaml.org,2002:int",{kind:"scalar",resolve:W2,construct:$2,predicate:q2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),j2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Y2(e){return!(e===null||!j2.test(e)||e[e.length-1]==="_")}function K2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Z2=/^[-+]?[0-9]+e/;function J2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Qe.isNegativeZero(e))return"-0.0";return n=e.toString(10),Z2.test(n)?n.replace("e",".e"):n}function Q2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Qe.isNegativeZero(e))}var tR=new qe("tag:yaml.org,2002:float",{kind:"scalar",resolve:Y2,construct:K2,predicate:Q2,represent:J2,defaultStyle:"lowercase"}),w0=P2.extend({implicit:[B2,z2,X2,tR]}),eR=w0,A0=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),R0=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function nR(e){return e===null?!1:A0.exec(e)!==null||R0.exec(e)!==null}function iR(e){var t,n,i,r,s,o,a,l=0,c=null,h,d,u;if(t=A0.exec(e),t===null&&(t=R0.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,i,r));if(s=+t[4],o=+t[5],a=+t[6],t[7]){for(l=t[7].slice(0,3);l.length<3;)l+="0";l=+l}return t[9]&&(h=+t[10],d=+(t[11]||0),c=(h*60+d)*6e4,t[9]==="-"&&(c=-c)),u=new Date(Date.UTC(n,i,r,s,o,a,l)),c&&u.setTime(u.getTime()-c),u}function rR(e){return e.toISOString()}var sR=new qe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:nR,construct:iR,instanceOf:Date,represent:rR});function oR(e){return e==="<<"||e===null}var aR=new qe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:oR}),rd=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function lR(e){if(e===null)return!1;var t,n,i=0,r=e.length,s=rd;for(n=0;n<r;n++)if(t=s.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;i+=6}return i%8===0}function cR(e){var t,n,i=e.replace(/[\r\n=]/g,""),r=i.length,s=rd,o=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)),o=o<<6|s.indexOf(i.charAt(t));return n=r%4*6,n===0?(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)):n===18?(a.push(o>>10&255),a.push(o>>2&255)):n===12&&a.push(o>>4&255),new Uint8Array(a)}function hR(e){var t="",n=0,i,r,s=e.length,o=rd;for(i=0;i<s;i++)i%3===0&&i&&(t+=o[n>>18&63],t+=o[n>>12&63],t+=o[n>>6&63],t+=o[n&63]),n=(n<<8)+e[i];return r=s%3,r===0?(t+=o[n>>18&63],t+=o[n>>12&63],t+=o[n>>6&63],t+=o[n&63]):r===2?(t+=o[n>>10&63],t+=o[n>>4&63],t+=o[n<<2&63],t+=o[64]):r===1&&(t+=o[n>>2&63],t+=o[n<<4&63],t+=o[64],t+=o[64]),t}function uR(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var dR=new qe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:lR,construct:cR,predicate:uR,represent:hR}),fR=Object.prototype.hasOwnProperty,pR=Object.prototype.toString;function mR(e){if(e===null)return!0;var t=[],n,i,r,s,o,a=e;for(n=0,i=a.length;n<i;n+=1){if(r=a[n],o=!1,pR.call(r)!=="[object Object]")return!1;for(s in r)if(fR.call(r,s))if(!o)o=!0;else return!1;if(!o)return!1;if(t.indexOf(s)===-1)t.push(s);else return!1}return!0}function gR(e){return e!==null?e:[]}var _R=new qe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:mR,construct:gR}),xR=Object.prototype.toString;function vR(e){if(e===null)return!0;var t,n,i,r,s,o=e;for(s=new Array(o.length),t=0,n=o.length;t<n;t+=1){if(i=o[t],xR.call(i)!=="[object Object]"||(r=Object.keys(i),r.length!==1))return!1;s[t]=[r[0],i[r[0]]]}return!0}function yR(e){if(e===null)return[];var t,n,i,r,s,o=e;for(s=new Array(o.length),t=0,n=o.length;t<n;t+=1)i=o[t],r=Object.keys(i),s[t]=[r[0],i[r[0]]];return s}var bR=new qe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:vR,construct:yR}),TR=Object.prototype.hasOwnProperty;function SR(e){if(e===null)return!0;var t,n=e;for(t in n)if(TR.call(n,t)&&n[t]!==null)return!1;return!0}function MR(e){return e!==null?e:{}}var CR=new qe("tag:yaml.org,2002:set",{kind:"mapping",resolve:SR,construct:MR}),ER=eR.extend({implicit:[sR,aR],explicit:[dR,_R,bR,CR]}),Qi=Object.prototype.hasOwnProperty,Tl=1,L0=2,D0=3,Sl=4,Tc=1,wR=2,Hf=3,AR=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,RR=/[\x85\u2028\u2029]/,LR=/[,\[\]\{\}]/,P0=/^(?:!|!!|![a-z\-]+!)$/i,F0=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Vf(e){return Object.prototype.toString.call(e)}function ti(e){return e===10||e===13}function Mr(e){return e===9||e===32}function fn(e){return e===9||e===32||e===10||e===13}function Qr(e){return e===44||e===91||e===93||e===123||e===125}function DR(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}function PR(e){return e===120?2:e===117?4:e===85?8:0}function FR(e){return 48<=e&&e<=57?e-48:-1}function Gf(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function IR(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var I0=new Array(256),k0=new Array(256);for(var Nr=0;Nr<256;Nr++)I0[Nr]=Gf(Nr)?1:0,k0[Nr]=Gf(Nr);function kR(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||ER,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function B0(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=T2(n),new Mi(t,n)}function Vt(e,t){throw B0(e,t)}function Ml(e,t){e.onWarning&&e.onWarning.call(null,B0(e,t))}var Wf={YAML:function(t,n,i){var r,s,o;t.version!==null&&Vt(t,"duplication of %YAML directive"),i.length!==1&&Vt(t,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]),r===null&&Vt(t,"ill-formed argument of the YAML directive"),s=parseInt(r[1],10),o=parseInt(r[2],10),s!==1&&Vt(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=o<2,o!==1&&o!==2&&Ml(t,"unsupported YAML version of the document")},TAG:function(t,n,i){var r,s;i.length!==2&&Vt(t,"TAG directive accepts exactly two arguments"),r=i[0],s=i[1],P0.test(r)||Vt(t,"ill-formed tag handle (first argument) of the TAG directive"),Qi.call(t.tagMap,r)&&Vt(t,'there is a previously declared suffix for "'+r+'" tag handle'),F0.test(s)||Vt(t,"ill-formed tag prefix (second argument) of the TAG directive");try{s=decodeURIComponent(s)}catch{Vt(t,"tag prefix is malformed: "+s)}t.tagMap[r]=s}};function ji(e,t,n,i){var r,s,o,a;if(t<n){if(a=e.input.slice(t,n),i)for(r=0,s=a.length;r<s;r+=1)o=a.charCodeAt(r),o===9||32<=o&&o<=1114111||Vt(e,"expected valid JSON character");else AR.test(a)&&Vt(e,"the stream contains non-printable characters");e.result+=a}}function $f(e,t,n,i){var r,s,o,a;for(Qe.isObject(n)||Vt(e,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(n),o=0,a=r.length;o<a;o+=1)s=r[o],Qi.call(t,s)||(t[s]=n[s],i[s]=!0)}function ts(e,t,n,i,r,s,o,a,l){var c,h;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),c=0,h=r.length;c<h;c+=1)Array.isArray(r[c])&&Vt(e,"nested arrays are not supported inside keys"),typeof r=="object"&&Vf(r[c])==="[object Object]"&&(r[c]="[object Object]");if(typeof r=="object"&&Vf(r)==="[object Object]"&&(r="[object Object]"),r=String(r),t===null&&(t={}),i==="tag:yaml.org,2002:merge")if(Array.isArray(s))for(c=0,h=s.length;c<h;c+=1)$f(e,t,s[c],n);else $f(e,t,s,n);else!e.json&&!Qi.call(n,r)&&Qi.call(t,r)&&(e.line=o||e.line,e.lineStart=a||e.lineStart,e.position=l||e.position,Vt(e,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(t,r,{configurable:!0,enumerable:!0,writable:!0,value:s}):t[r]=s,delete n[r];return t}function sd(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):Vt(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Fe(e,t,n){for(var i=0,r=e.input.charCodeAt(e.position);r!==0;){for(;Mr(r);)r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&r===35)do r=e.input.charCodeAt(++e.position);while(r!==10&&r!==13&&r!==0);if(ti(r))for(sd(e),r=e.input.charCodeAt(e.position),i++,e.lineIndent=0;r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return n!==-1&&i!==0&&e.lineIndent<n&&Ml(e,"deficient indentation"),i}function Yl(e){var t=e.position,n;return n=e.input.charCodeAt(t),!!((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)&&(t+=3,n=e.input.charCodeAt(t),n===0||fn(n)))}function od(e,t){t===1?e.result+=" ":t>1&&(e.result+=Qe.repeat(`
`,t-1))}function BR(e,t,n){var i,r,s,o,a,l,c,h,d=e.kind,u=e.result,f;if(f=e.input.charCodeAt(e.position),fn(f)||Qr(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(r=e.input.charCodeAt(e.position+1),fn(r)||n&&Qr(r)))return!1;for(e.kind="scalar",e.result="",s=o=e.position,a=!1;f!==0;){if(f===58){if(r=e.input.charCodeAt(e.position+1),fn(r)||n&&Qr(r))break}else if(f===35){if(i=e.input.charCodeAt(e.position-1),fn(i))break}else{if(e.position===e.lineStart&&Yl(e)||n&&Qr(f))break;if(ti(f))if(l=e.line,c=e.lineStart,h=e.lineIndent,Fe(e,!1,-1),e.lineIndent>=t){a=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=l,e.lineStart=c,e.lineIndent=h;break}}a&&(ji(e,s,o,!1),od(e,e.line-l),s=o=e.position,a=!1),Mr(f)||(o=e.position+1),f=e.input.charCodeAt(++e.position)}return ji(e,s,o,!1),e.result?!0:(e.kind=d,e.result=u,!1)}function NR(e,t){var n,i,r;if(n=e.input.charCodeAt(e.position),n!==39)return!1;for(e.kind="scalar",e.result="",e.position++,i=r=e.position;(n=e.input.charCodeAt(e.position))!==0;)if(n===39)if(ji(e,i,e.position,!0),n=e.input.charCodeAt(++e.position),n===39)i=e.position,e.position++,r=e.position;else return!0;else ti(n)?(ji(e,i,r,!0),od(e,Fe(e,!1,t)),i=r=e.position):e.position===e.lineStart&&Yl(e)?Vt(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);Vt(e,"unexpected end of the stream within a single quoted scalar")}function OR(e,t){var n,i,r,s,o,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,n=i=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return ji(e,n,e.position,!0),e.position++,!0;if(a===92){if(ji(e,n,e.position,!0),a=e.input.charCodeAt(++e.position),ti(a))Fe(e,!1,t);else if(a<256&&I0[a])e.result+=k0[a],e.position++;else if((o=PR(a))>0){for(r=o,s=0;r>0;r--)a=e.input.charCodeAt(++e.position),(o=DR(a))>=0?s=(s<<4)+o:Vt(e,"expected hexadecimal character");e.result+=IR(s),e.position++}else Vt(e,"unknown escape sequence");n=i=e.position}else ti(a)?(ji(e,n,i,!0),od(e,Fe(e,!1,t)),n=i=e.position):e.position===e.lineStart&&Yl(e)?Vt(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}Vt(e,"unexpected end of the stream within a double quoted scalar")}function UR(e,t){var n=!0,i,r,s,o=e.tag,a,l=e.anchor,c,h,d,u,f,m=Object.create(null),_,g,p,b;if(b=e.input.charCodeAt(e.position),b===91)h=93,f=!1,a=[];else if(b===123)h=125,f=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),b=e.input.charCodeAt(++e.position);b!==0;){if(Fe(e,!0,t),b=e.input.charCodeAt(e.position),b===h)return e.position++,e.tag=o,e.anchor=l,e.kind=f?"mapping":"sequence",e.result=a,!0;n?b===44&&Vt(e,"expected the node content, but found ','"):Vt(e,"missed comma between flow collection entries"),g=_=p=null,d=u=!1,b===63&&(c=e.input.charCodeAt(e.position+1),fn(c)&&(d=u=!0,e.position++,Fe(e,!0,t))),i=e.line,r=e.lineStart,s=e.position,Ts(e,t,Tl,!1,!0),g=e.tag,_=e.result,Fe(e,!0,t),b=e.input.charCodeAt(e.position),(u||e.line===i)&&b===58&&(d=!0,b=e.input.charCodeAt(++e.position),Fe(e,!0,t),Ts(e,t,Tl,!1,!0),p=e.result),f?ts(e,a,m,g,_,p,i,r,s):d?a.push(ts(e,null,m,g,_,p,i,r,s)):a.push(_),Fe(e,!0,t),b=e.input.charCodeAt(e.position),b===44?(n=!0,b=e.input.charCodeAt(++e.position)):n=!1}Vt(e,"unexpected end of the stream within a flow collection")}function zR(e,t){var n,i,r=Tc,s=!1,o=!1,a=t,l=0,c=!1,h,d;if(d=e.input.charCodeAt(e.position),d===124)i=!1;else if(d===62)i=!0;else return!1;for(e.kind="scalar",e.result="";d!==0;)if(d=e.input.charCodeAt(++e.position),d===43||d===45)Tc===r?r=d===43?Hf:wR:Vt(e,"repeat of a chomping mode identifier");else if((h=FR(d))>=0)h===0?Vt(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?Vt(e,"repeat of an indentation width identifier"):(a=t+h-1,o=!0);else break;if(Mr(d)){do d=e.input.charCodeAt(++e.position);while(Mr(d));if(d===35)do d=e.input.charCodeAt(++e.position);while(!ti(d)&&d!==0)}for(;d!==0;){for(sd(e),e.lineIndent=0,d=e.input.charCodeAt(e.position);(!o||e.lineIndent<a)&&d===32;)e.lineIndent++,d=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>a&&(a=e.lineIndent),ti(d)){l++;continue}if(e.lineIndent<a){r===Hf?e.result+=Qe.repeat(`
`,s?1+l:l):r===Tc&&s&&(e.result+=`
`);break}for(i?Mr(d)?(c=!0,e.result+=Qe.repeat(`
`,s?1+l:l)):c?(c=!1,e.result+=Qe.repeat(`
`,l+1)):l===0?s&&(e.result+=" "):e.result+=Qe.repeat(`
`,l):e.result+=Qe.repeat(`
`,s?1+l:l),s=!0,o=!0,l=0,n=e.position;!ti(d)&&d!==0;)d=e.input.charCodeAt(++e.position);ji(e,n,e.position,!1)}return!0}function qf(e,t){var n,i=e.tag,r=e.anchor,s=[],o,a=!1,l;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),l=e.input.charCodeAt(e.position);l!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Vt(e,"tab characters must not be used in indentation")),!(l!==45||(o=e.input.charCodeAt(e.position+1),!fn(o))));){if(a=!0,e.position++,Fe(e,!0,-1)&&e.lineIndent<=t){s.push(null),l=e.input.charCodeAt(e.position);continue}if(n=e.line,Ts(e,t,D0,!1,!0),s.push(e.result),Fe(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&l!==0)Vt(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return a?(e.tag=i,e.anchor=r,e.kind="sequence",e.result=s,!0):!1}function HR(e,t,n){var i,r,s,o,a,l,c=e.tag,h=e.anchor,d={},u=Object.create(null),f=null,m=null,_=null,g=!1,p=!1,b;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),b=e.input.charCodeAt(e.position);b!==0;){if(!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Vt(e,"tab characters must not be used in indentation")),i=e.input.charCodeAt(e.position+1),s=e.line,(b===63||b===58)&&fn(i))b===63?(g&&(ts(e,d,u,f,m,null,o,a,l),f=m=_=null),p=!0,g=!0,r=!0):g?(g=!1,r=!0):Vt(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,b=i;else{if(o=e.line,a=e.lineStart,l=e.position,!Ts(e,n,L0,!1,!0))break;if(e.line===s){for(b=e.input.charCodeAt(e.position);Mr(b);)b=e.input.charCodeAt(++e.position);if(b===58)b=e.input.charCodeAt(++e.position),fn(b)||Vt(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(ts(e,d,u,f,m,null,o,a,l),f=m=_=null),p=!0,g=!1,r=!1,f=e.tag,m=e.result;else if(p)Vt(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=h,!0}else if(p)Vt(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=h,!0}if((e.line===s||e.lineIndent>t)&&(g&&(o=e.line,a=e.lineStart,l=e.position),Ts(e,t,Sl,!0,r)&&(g?m=e.result:_=e.result),g||(ts(e,d,u,f,m,_,o,a,l),f=m=_=null),Fe(e,!0,-1),b=e.input.charCodeAt(e.position)),(e.line===s||e.lineIndent>t)&&b!==0)Vt(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&ts(e,d,u,f,m,null,o,a,l),p&&(e.tag=c,e.anchor=h,e.kind="mapping",e.result=d),p}function VR(e){var t,n=!1,i=!1,r,s,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&Vt(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(n=!0,o=e.input.charCodeAt(++e.position)):o===33?(i=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",t=e.position,n){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(s=e.input.slice(t,e.position),o=e.input.charCodeAt(++e.position)):Vt(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!fn(o);)o===33&&(i?Vt(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),P0.test(r)||Vt(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),o=e.input.charCodeAt(++e.position);s=e.input.slice(t,e.position),LR.test(s)&&Vt(e,"tag suffix cannot contain flow indicator characters")}s&&!F0.test(s)&&Vt(e,"tag name cannot contain such characters: "+s);try{s=decodeURIComponent(s)}catch{Vt(e,"tag name is malformed: "+s)}return n?e.tag=s:Qi.call(e.tagMap,r)?e.tag=e.tagMap[r]+s:r==="!"?e.tag="!"+s:r==="!!"?e.tag="tag:yaml.org,2002:"+s:Vt(e,'undeclared tag handle "'+r+'"'),!0}function GR(e){var t,n;if(n=e.input.charCodeAt(e.position),n!==38)return!1;for(e.anchor!==null&&Vt(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;n!==0&&!fn(n)&&!Qr(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&Vt(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function WR(e){var t,n,i;if(i=e.input.charCodeAt(e.position),i!==42)return!1;for(i=e.input.charCodeAt(++e.position),t=e.position;i!==0&&!fn(i)&&!Qr(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&Vt(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),Qi.call(e.anchorMap,n)||Vt(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],Fe(e,!0,-1),!0}function Ts(e,t,n,i,r){var s,o,a,l=1,c=!1,h=!1,d,u,f,m,_,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,s=o=a=Sl===n||D0===n,i&&Fe(e,!0,-1)&&(c=!0,e.lineIndent>t?l=1:e.lineIndent===t?l=0:e.lineIndent<t&&(l=-1)),l===1)for(;VR(e)||GR(e);)Fe(e,!0,-1)?(c=!0,a=s,e.lineIndent>t?l=1:e.lineIndent===t?l=0:e.lineIndent<t&&(l=-1)):a=!1;if(a&&(a=c||r),(l===1||Sl===n)&&(Tl===n||L0===n?_=t:_=t+1,g=e.position-e.lineStart,l===1?a&&(qf(e,g)||HR(e,g,_))||UR(e,_)?h=!0:(o&&zR(e,_)||NR(e,_)||OR(e,_)?h=!0:WR(e)?(h=!0,(e.tag!==null||e.anchor!==null)&&Vt(e,"alias node should not have any properties")):BR(e,_,Tl===n)&&(h=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(h=a&&qf(e,g))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&Vt(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),d=0,u=e.implicitTypes.length;d<u;d+=1)if(m=e.implicitTypes[d],m.resolve(e.result)){e.result=m.construct(e.result),e.tag=m.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Qi.call(e.typeMap[e.kind||"fallback"],e.tag))m=e.typeMap[e.kind||"fallback"][e.tag];else for(m=null,f=e.typeMap.multi[e.kind||"fallback"],d=0,u=f.length;d<u;d+=1)if(e.tag.slice(0,f[d].tag.length)===f[d].tag){m=f[d];break}m||Vt(e,"unknown tag !<"+e.tag+">"),e.result!==null&&m.kind!==e.kind&&Vt(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+m.kind+'", not "'+e.kind+'"'),m.resolve(e.result,e.tag)?(e.result=m.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):Vt(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||h}function $R(e){var t=e.position,n,i,r,s=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(Fe(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(s=!0,o=e.input.charCodeAt(++e.position),n=e.position;o!==0&&!fn(o);)o=e.input.charCodeAt(++e.position);for(i=e.input.slice(n,e.position),r=[],i.length<1&&Vt(e,"directive name must not be less than one character in length");o!==0;){for(;Mr(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!ti(o));break}if(ti(o))break;for(n=e.position;o!==0&&!fn(o);)o=e.input.charCodeAt(++e.position);r.push(e.input.slice(n,e.position))}o!==0&&sd(e),Qi.call(Wf,i)?Wf[i](e,i,r):Ml(e,'unknown document directive "'+i+'"')}if(Fe(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Fe(e,!0,-1)):s&&Vt(e,"directives end mark is expected"),Ts(e,e.lineIndent-1,Sl,!1,!0),Fe(e,!0,-1),e.checkLineBreaks&&RR.test(e.input.slice(t,e.position))&&Ml(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Yl(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Fe(e,!0,-1));return}if(e.position<e.length-1)Vt(e,"end of the stream or a document separator is expected");else return}function qR(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var n=new kR(e,t),i=e.indexOf("\0");for(i!==-1&&(n.position=i,Vt(n,"null byte is not allowed in input")),n.input+="\0";n.input.charCodeAt(n.position)===32;)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)$R(n);return n.documents}function XR(e,t){var n=qR(e,t);if(n.length!==0){if(n.length===1)return n[0];throw new Mi("expected a single document in the stream, but found more")}}var jR=XR,YR={load:jR},KR=w0,ZR=YR.load;function JR(e){const t=e.match(Hg);if(!t)return{text:e,metadata:{}};let n=ZR(t[1],{schema:KR})??{};n=typeof n=="object"&&!Array.isArray(n)?n:{};const i={};return n.displayMode&&(i.displayMode=n.displayMode.toString()),n.title&&(i.title=n.title.toString()),n.config&&(i.config=n.config),{text:e.slice(t[0].length),metadata:i}}const QR=e=>e.replace(/\r\n?/g,`
`).replace(/<(\w+)([^>]*)>/g,(t,n,i)=>"<"+n+i.replace(/="([^"]*)"/g,"='$1'")+">"),tL=e=>{const{text:t,metadata:n}=JR(e),{displayMode:i,title:r,config:s={}}=n;return i&&(s.gantt||(s.gantt={}),s.gantt.displayMode=i),{title:r,config:s,text:t}},eL=e=>{const t=vo.detectInit(e)??{},n=vo.detectDirective(e,"wrap");return Array.isArray(n)?t.wrap=n.some(({type:i})=>{}):n?.type==="wrap"&&(t.wrap=!0),{text:EE(e),directive:t}};function N0(e){const t=QR(e),n=tL(t),i=eL(n.text),r=jg(n.config,i.directive);return e=c2(i.text),{code:e,title:n.title,config:r}}const nL=5e4,iL="graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa",rL="sandbox",sL="loose",oL="http://www.w3.org/2000/svg",aL="http://www.w3.org/1999/xlink",lL="http://www.w3.org/1999/xhtml",cL="100%",hL="100%",uL="border:0;margin:0;",dL="margin:0",fL="allow-top-navigation-by-user-activation allow-popups",pL='The "iframe" tag is not supported by your browser.',mL=["foreignobject"],gL=["dominant-baseline"];function O0(e){const t=N0(e);return vl(),JE(t.config??{}),t}async function _L(e,t){id(),e=O0(e).code;try{await ad(e)}catch(n){if(t?.suppressErrors)return!1;throw n}return!0}const Xf=(e,t,n=[])=>`
.${e} ${t} { ${n.join(" !important; ")} !important; }`,xL=(e,t={})=>{var n;let i="";if(e.themeCSS!==void 0&&(i+=`
${e.themeCSS}`),e.fontFamily!==void 0&&(i+=`
:root { --mermaid-font-family: ${e.fontFamily}}`),e.altFontFamily!==void 0&&(i+=`
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`),!vc(t)){const a=e.htmlLabels||((n=e.flowchart)==null?void 0:n.htmlLabels)?["> *","span"]:["rect","polygon","ellipse","circle","path"];for(const l in t){const c=t[l];vc(c.styles)||a.forEach(h=>{i+=Xf(c.id,h,c.styles)}),vc(c.textStyles)||(i+=Xf(c.id,"tspan",c.textStyles))}}return i},vL=(e,t,n,i)=>{const r=xL(e,n),s=xA(t,r,e.themeVariables);return Eh(LC(`${i}{${s}}`),PC)},yL=(e="",t,n)=>{let i=e;return!n&&!t&&(i=i.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g,'marker-end="url(#')),i=jE(i),i=i.replace(/<br>/g,"<br/>"),i},bL=(e="",t)=>{var n,i;const r=(i=(n=t?.viewBox)==null?void 0:n.baseVal)!=null&&i.height?t.viewBox.baseVal.height+"px":hL,s=btoa('<body style="'+dL+'">'+e+"</body>");return`<iframe style="width:${cL};height:${r};${uL}" src="data:text/html;base64,${s}" sandbox="${fL}">
  ${pL}
</iframe>`},jf=(e,t,n,i,r)=>{const s=e.append("div");s.attr("id",n),i&&s.attr("style",i);const o=s.append("svg").attr("id",t).attr("width","100%").attr("xmlns",oL);return r&&o.attr("xmlns:xlink",r),o.append("g"),e};function Yf(e,t){return e.append("iframe").attr("id",t).attr("style","width: 100%; height: 100%;").attr("sandbox","")}const TL=(e,t,n,i)=>{var r,s,o;(r=e.getElementById(t))==null||r.remove(),(s=e.getElementById(n))==null||s.remove(),(o=e.getElementById(i))==null||o.remove()},SL=async function(e,t,n){var i,r,s,o,a,l;id();const c=O0(t);t=c.code;const h=ii();Gt.debug(h),t.length>(h?.maxTextSize??nL)&&(t=iL);const d="#"+e,u="i"+e,f="#"+u,m="d"+e,_="#"+m;let g=Le("body");const p=h.securityLevel===rL,b=h.securityLevel===sL,E=h.fontFamily;if(n!==void 0){if(n&&(n.innerHTML=""),p){const W=Yf(Le(n),u);g=Le(W.nodes()[0].contentDocument.body),g.node().style.margin=0}else g=Le(n);jf(g,e,m,`font-family: ${E}`,aL)}else{if(TL(document,e,m,u),p){const W=Yf(Le("body"),u);g=Le(W.nodes()[0].contentDocument.body),g.node().style.margin=0}else g=Le("body");jf(g,e,m)}let y,k;try{y=await ad(t,{title:c.title})}catch(W){y=new M0("error"),k=W}const R=g.select(_).node(),P=y.type,U=R.firstChild,w=U.firstChild,S=(r=(i=y.renderer).getClasses)==null?void 0:r.call(i,t,y),L=vL(h,P,S,d),G=document.createElement("style");G.innerHTML=L,U.insertBefore(G,w);try{await y.renderer.draw(t,e,Bf,y)}catch(W){throw kA.draw(t,e,Bf),W}const $=g.select(`${_} svg`),M=(o=(s=y.db).getAccTitle)==null?void 0:o.call(s),C=(l=(a=y.db).getAccDescription)==null?void 0:l.call(a);CL(P,$,M,C),g.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns",lL);let v=g.select(_).node().innerHTML;if(Gt.debug("config.arrowMarkerAbsolute",h.arrowMarkerAbsolute),v=yL(v,p,Og(h.arrowMarkerAbsolute)),p){const W=g.select(_+" svg").node();v=bL(v,W)}else b||(v=ms.sanitize(v,{ADD_TAGS:mL,ADD_ATTR:gL,HTML_INTEGRATION_POINTS:{foreignobject:!0}}));if(s2(),k)throw k;const D=Le(p?f:_).node();return D&&"remove"in D&&D.remove(),{svg:v,bindFunctions:y.db.bindFunctions}};function ML(e={}){var t;e?.fontFamily&&!((t=e.themeVariables)!=null&&t.fontFamily)&&(e.themeVariables||(e.themeVariables={}),e.themeVariables.fontFamily=e.fontFamily),KE(e),e?.theme&&e.theme in Ai?e.themeVariables=Ai[e.theme].getThemeVariables(e.themeVariables):e&&(e.themeVariables=Ai.default.getThemeVariables(e.themeVariables));const n=typeof e=="object"?YE(e):Kg();qu(n.logLevel),id()}const ad=(e,t={})=>{const{code:n}=N0(e);return r2(n,t)};function CL(e,t,n,i){a2(t,e),l2(t,n,i,t.attr("id"))}const Ar=Object.freeze({render:SL,parse:_L,getDiagramFromText:ad,initialize:ML,getConfig:ii,setConfig:Zg,getSiteConfig:Kg,updateSiteConfig:ZE,reset:()=>{vl()},globalReset:()=>{vl(ys)},defaultConfig:ys});qu(ii().logLevel);vl(ii());const EL=async()=>{Gt.debug("Loading registered diagrams");const t=(await Promise.allSettled(Object.entries(vs).map(async([n,{detector:i,loader:r}])=>{if(r)try{nd(n)}catch{try{const{diagram:o,id:a}=await r();bl(a,o,i)}catch(o){throw Gt.error(`Failed to load external diagram with key ${n}. Removing from detectors.`),delete vs[n],o}}}))).filter(n=>n.status==="rejected");if(t.length>0){Gt.error(`Failed to load ${t.length} external diagrams`);for(const n of t)Gt.error(n);throw new Error(`Failed to load ${t.length} external diagrams`)}},wL=(e,t,n)=>{Gt.warn(e),Xg(e)?(n&&n(e.str,e.hash),t.push({...e,message:e.str,error:e})):(n&&n(e),e instanceof Error&&t.push({str:e.message,message:e.message,hash:e.name,error:e}))},U0=async function(e={querySelector:".mermaid"}){try{await AL(e)}catch(t){if(Xg(t)&&Gt.error(t.str),Gn.parseError&&Gn.parseError(t),!e.suppressErrors)throw Gt.error("Use the suppressErrors option to suppress these errors"),t}},AL=async function({postRenderCallback:e,querySelector:t,nodes:n}={querySelector:".mermaid"}){const i=Ar.getConfig();Gt.debug(`${e?"":"No "}Callback function found`);let r;if(n)r=n;else if(t)r=document.querySelectorAll(t);else throw new Error("Nodes and querySelector are both undefined");Gt.debug(`Found ${r.length} diagrams`),i?.startOnLoad!==void 0&&(Gt.debug("Start On Load: "+i?.startOnLoad),Ar.updateSiteConfig({startOnLoad:i?.startOnLoad}));const s=new vo.InitIDGenerator(i.deterministicIds,i.deterministicIDSeed);let o;const a=[];for(const l of Array.from(r)){Gt.info("Rendering diagram: "+l.id);if(l.getAttribute("data-processed"))continue;l.setAttribute("data-processed","true");const c=`mermaid-${s.next()}`;o=l.innerHTML,o=oT(vo.entityDecode(o)).trim().replace(/<br\s*\/?>/gi,"<br/>");const h=vo.detectInit(o);h&&Gt.debug("Detected early reinit: ",h);try{const{svg:d,bindFunctions:u}=await G0(c,o,l);l.innerHTML=d,e&&await e(c),u&&u(l)}catch(d){wL(d,a,Gn.parseError)}}if(a.length>0)throw a[0]},z0=function(e){Ar.initialize(e)},RL=async function(e,t,n){Gt.warn("mermaid.init is deprecated. Please use run instead."),e&&z0(e);const i={postRenderCallback:n,querySelector:".mermaid"};typeof t=="string"?i.querySelector=t:t&&(t instanceof HTMLElement?i.nodes=[t]:i.nodes=t),await U0(i)},LL=async(e,{lazyLoad:t=!0}={})=>{Gg(...e),t===!1&&await EL()},H0=function(){if(Gn.startOnLoad){const{startOnLoad:e}=Ar.getConfig();e&&Gn.run().catch(t=>Gt.error("Mermaid failed to initialize",t))}};if(typeof document<"u"){window.addEventListener("load",H0,!1)}const DL=function(e){Gn.parseError=e},Cl=[];let Sc=!1;const V0=async()=>{if(!Sc){for(Sc=!0;Cl.length>0;){const e=Cl.shift();if(e)try{await e()}catch(t){Gt.error("Error executing queue",t)}}Sc=!1}},PL=async(e,t)=>new Promise((n,i)=>{const r=()=>new Promise((s,o)=>{Ar.parse(e,t).then(a=>{s(a),n(a)},a=>{var l;Gt.error("Error parsing",a),(l=Gn.parseError)==null||l.call(Gn,a),o(a),i(a)})});Cl.push(r),V0().catch(i)}),G0=(e,t,n)=>new Promise((i,r)=>{const s=()=>new Promise((o,a)=>{Ar.render(e,t,n).then(l=>{o(l),i(l)},l=>{var c;Gt.error("Error parsing",l),(c=Gn.parseError)==null||c.call(Gn,l),a(l),r(l)})});Cl.push(s),V0().catch(r)}),Gn={startOnLoad:!0,mermaidAPI:Ar,parse:PL,render:G0,init:RL,run:U0,registerExternalDiagrams:LL,initialize:z0,parseError:void 0,contentLoaded:H0,setParseErrorHandler:DL,detectType:Xl},FL={class:"toolbar"},IL={class:"toolbar-left"},kL=["onClick"],BL={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},NL={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},OL={class:"toolbar-right"},UL={class:"control-group"},zL=["title"],HL={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},VL={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},GL={key:1,class:"control-group"},WL=["title"],$L={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},qL={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},XL={class:"content-area"},jL={class:"code-panel"},YL={class:"code-viewer"},KL={class:"code-content"},ZL={class:"preview-panel"},JL={key:0,class:"loading-overlay"},QL={key:1,class:"error-state"},t3={class:"error-message"},e3={key:2,class:"empty-state"};var ld=Ps({__name:"index",props:{content:{type:String,required:!1,default:""},height:{type:String,required:!1,default:"600px"},theme:{type:String,required:!1,default:"default"}},setup(e){Ho(C=>({"01b08bd0-height":C.height}));const t=e,n=`mermaid-${Math.random().toString(36).substr(2,9)}`,i=Yt("preview"),r=Yt(t.content),s=Yt(),o=Yt(!1),a=Yt(!1),l=Yt(""),c=Yt(!1),h=Yt({x:0,y:0}),d=Yt(1),u=Yt(0),f=Yt(0),m=[{key:"preview",label:"预览"},{key:"code",label:"代码"}],_=async()=>{if(!(!s.value||!r.value.trim())){o.value=!0,l.value="";try{const C=s.value;C.innerHTML="";const v=`${n}-${Date.now()}`,{svg:N}=await Gn.render(v,r.value);C.innerHTML=N;const D=C.querySelector("svg");D&&(D.style.maxWidth="none",D.style.maxHeight="none",D.style.width="auto",D.style.height="auto",setTimeout(()=>{g()},50))}catch(C){console.error("Mermaid rendering error:",C),l.value=C instanceof Error?C.message:"未知错误"}finally{o.value=!1}}},g=()=>{if(!s.value)return;const C=s.value,v=C.querySelector("svg");if(!v)return;v.style.transform="";const N=C.getBoundingClientRect(),D=v.getBoundingClientRect(),W=(N.width-D.width)/2,K=(N.height-D.height)/2;d.value=1,u.value=Math.max(0,W),f.value=Math.max(0,K),p()},p=()=>{if(!s.value)return;const C=s.value.querySelector("svg");C&&(C.style.transform=`translate(${u.value}px, ${f.value}px) scale(${d.value})`,C.style.transformOrigin="0 0")},b=()=>{d.value=Math.min(d.value*1.2,3),p()},E=()=>{d.value=Math.max(d.value*.8,.1),p()},y=()=>{g()},k=()=>{if(!s.value)return;const C=s.value.querySelector("svg");if(!C)return;const N=new XMLSerializer().serializeToString(C),D=new Blob([N],{type:"image/svg+xml"});ds(URL.createObjectURL(D),"mermaid-diagram.svg")},R=()=>{const C=new Blob([r.value],{type:"text/plain"});ds(URL.createObjectURL(C),"mermaid-diagram.md")},P=async()=>{try{await navigator.clipboard.writeText(r.value)}catch(C){console.error("复制失败:",C)}},U=()=>{l.value="",_()},w=()=>{a.value=!a.value,Un(()=>{setTimeout(()=>{i.value==="preview"&&_()},100)})},S=()=>{a.value=!1,Un(()=>{setTimeout(()=>{i.value==="preview"&&_()},100)})},L=C=>{C.button===0&&(c.value=!0,h.value={x:C.clientX,y:C.clientY},C.preventDefault())},G=C=>{if(c.value){const v=C.clientX-h.value.x,N=C.clientY-h.value.y;u.value+=v,f.value+=N,p(),h.value={x:C.clientX,y:C.clientY}}},$=()=>{c.value=!1},M=()=>{i.value==="preview"&&Un(()=>{setTimeout(()=>{_()},100)})};return Tr(i,C=>{C==="preview"&&Un(()=>{_()})}),Dl(()=>{_(),window.addEventListener("resize",M)}),Go(()=>{window.removeEventListener("resize",M)}),(C,v)=>(Tt(),bt("div",{class:vn(["mermaid-container",{fullscreen:a.value}])},[ut(" Header Toolbar "),B("div",FL,[B("div",IL,[(Tt(),bt(Cr,null,Vo(m,N=>B("button",{key:N.key,onClick:D=>i.value=N.key,class:vn(["tab-button",{active:i.value===N.key}])},[N.key==="preview"?(Tt(),bt("svg",BL,[...v[0]||(v[0]=[B("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"},null,-1)])])):ut("v-if",!0),N.key==="code"?(Tt(),bt("svg",NL,[...v[1]||(v[1]=[B("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"},null,-1)])])):ut("v-if",!0),Cu(" "+Je(N.label),1)],10,kL)),64))]),B("div",OL,[ut(" 预览模式的工具栏 "),i.value==="preview"?(Tt(),bt(Cr,{key:0},[B("div",{class:"control-group"},[B("button",{onClick:b,class:"control-button",title:"放大"},v[2]||(v[2]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)])),B("button",{onClick:E,class:"control-button",title:"缩小"},v[3]||(v[3]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M7 9h5v1H7z"})],-1)])),B("button",{onClick:y,class:"control-button",title:"重置视图"},v[4]||(v[4]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)]))]),B("div",UL,[B("button",{onClick:k,class:"control-button",title:"下载SVG"},v[5]||(v[5]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:w,class:"control-button",title:a.value?"退出全屏":"全屏"},[a.value?(Tt(),bt("svg",VL,v[7]||(v[7]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",HL,v[6]||(v[6]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,zL)])],64)):ut("v-if",!0),ut(" 代码模式的工具栏 "),i.value==="code"?(Tt(),bt("div",GL,[B("button",{onClick:P,class:"control-button",title:"复制代码"},v[8]||(v[8]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})],-1)])),B("button",{onClick:R,class:"control-button",title:"下载Mermaid"},v[9]||(v[9]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:w,class:"control-button",title:a.value?"退出全屏":"全屏"},[a.value?(Tt(),bt("svg",qL,v[11]||(v[11]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",$L,v[10]||(v[10]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,WL)])):ut("v-if",!0)])]),ut(" Content Area "),B("div",XL,[ut(" Code Viewer "),Zi(B("div",jL,[B("div",YL,[B("pre",KL,Je(r.value),1)])],512),[[us,i.value==="code"]]),ut(" Mermaid Preview "),Zi(B("div",ZL,[B("div",{ref_key:"mermaidContainer",ref:s,class:"mermaid-diagram-container",onMousedown:L,onMousemove:G,onMouseup:$,onMouseleave:$},null,544),ut(" Loading State "),o.value?(Tt(),bt("div",JL,v[12]||(v[12]=[B("div",{class:"loading-spinner"},null,-1),B("p",null,"正在渲染图表...",-1)]))):ut("v-if",!0),ut(" Error State "),l.value?(Tt(),bt("div",QL,[v[13]||(v[13]=B("div",{class:"error-icon"},"⚠️",-1)),v[14]||(v[14]=B("h3",null,"图表渲染失败",-1)),B("p",t3,Je(l.value),1),B("button",{onClick:U,class:"retry-button"},"重试")])):ut("v-if",!0),ut(" Empty State "),!r.value.trim()&&!o.value&&!l.value?(Tt(),bt("div",e3,v[15]||(v[15]=[B("div",{class:"empty-icon"},"📊",-1),B("h3",null,"开始创建你的图表",-1),B("p",null,"切换到代码模式查看Mermaid源码",-1)]))):ut("v-if",!0)],512),[[us,i.value==="preview"]])]),ut(" Fullscreen Overlay (when in fullscreen mode) "),a.value?(Tt(),bt("div",{key:0,class:"fullscreen-overlay",onClick:S},v[16]||(v[16]=[B("div",{class:"fullscreen-close-hint"},"点击任意位置或按 ESC 退出全屏",-1)]))):ut("v-if",!0)],2))}}),n3=`
.dark .content-area[data-v-01b08bd0] {\r
  background: #99999980 !important;
}
.dark .code-viewer[data-v-01b08bd0] {\r
  background: #99999980 !important;
}
.dark .control-button[data-v-01b08bd0]:hover {\r
  background: #cccccc80 !important;
}
.dark .toolbar[data-v-01b08bd0] {\r
  background: #1d1d1d !important;
}
.dark .control-group[data-v-01b08bd0]{\r
  background-color: #000 !important;
}
.dark .toolbar .tab-button.active[data-v-01b08bd0]{\r
  background-color: #dbeafe80 !important;
}
.dark .toolbar .tab-button[data-v-01b08bd0]:hover{\r
  background-color: #9299a380 !important;\r
  color: white;
}
.mermaid-container[data-v-01b08bd0] {\r
  background: white;\r
  border-radius: 8px;\r
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;\r
  overflow: hidden;\r
  height: var(--01b08bd0-height);\r
  transition: all 0.3s ease;\r
  position: relative;
}
.mermaid-container.fullscreen[data-v-01b08bd0] {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  z-index: 1000;\r
  border-radius: 0;\r
  height: 100vh !important;\r
  margin: 0;\r
  padding: 0;
}
.mermaid-container.fullscreen .content-area[data-v-01b08bd0] {\r
  background: white;\r
  height: calc(100vh - 60px);\r
  margin: 0;\r
  padding: 0;
}
.fullscreen-overlay[data-v-01b08bd0] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.8);\r
  z-index: -1;\r
  cursor: pointer;
}
.fullscreen-close-hint[data-v-01b08bd0] {\r
  position: absolute;\r
  top: 10px;\r
  right: 20px;\r
  color: white;\r
  font-size: 14px;\r
  padding: 8px 12px;\r
  background: rgba(0, 0, 0, 0.6);\r
  border-radius: 4px;\r
  z-index: 1001;
}
.toolbar[data-v-01b08bd0] {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 12px 16px;\r
  background: #f9fafb;\r
  border-bottom: 1px solid #e5e7eb;\r
  height: 60px;
}
.toolbar-left[data-v-01b08bd0] {\r
  display: flex;\r
  gap: 4px;
}
.toolbar-right[data-v-01b08bd0] {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;
}
.tab-button[data-v-01b08bd0] {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 16px;\r
  border-radius: 6px;\r
  font-size: 14px;\r
  font-weight: 500;\r
  transition: all 0.2s;\r
  color: #6b7280;\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;
}
.tab-button[data-v-01b08bd0]:hover {\r
  color: #374151;\r
  background: white;
}
.tab-button.active[data-v-01b08bd0] {\r
  background: #dbeafe;\r
  color: #1d4ed8;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.control-group[data-v-01b08bd0] {\r
  display: flex;\r
  align-items: center;\r
  background: white;\r
  border-radius: 6px;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;
}
.control-button[data-v-01b08bd0] {\r
  padding: 8px;\r
  background: transparent;\r
  border: none;\r
  color: #6b7280;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border-right: 1px solid #e5e7eb;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;
}
.control-button[data-v-01b08bd0]:last-child {\r
  border-right: none;
}
.control-button[data-v-01b08bd0]:first-child {\r
  border-top-left-radius: 6px;\r
  border-bottom-left-radius: 6px;
}
.control-button[data-v-01b08bd0]:last-child {\r
  border-top-right-radius: 6px;\r
  border-bottom-right-radius: 6px;
}
.control-button[data-v-01b08bd0]:hover {\r
  background: #f9fafb;\r
  color: #374151;
}
.icon[data-v-01b08bd0] {\r
  width: 16px;\r
  height: 16px;
}
.content-area[data-v-01b08bd0] {\r
  flex: 1;\r
  position: relative;\r
  height: calc(100% - 60px);
}
.code-panel[data-v-01b08bd0] {\r
  height: 100%;\r
  overflow: hidden;
}
.code-viewer[data-v-01b08bd0] {\r
  height: 100%;\r
  overflow: auto;\r
  background: #f9fafb;
}
.code-content[data-v-01b08bd0] {\r
  width: 100%;\r
  height: 100%;\r
  margin: 0;\r
  padding: 16px;\r
  font-family: "Fira Code", "Monaco", "Consolas", monospace;\r
  font-size: 14px;\r
  color: #374151;\r
  line-height: 1.6;\r
  white-space: pre-wrap;\r
  background: transparent;\r
  border: none;\r
  outline: none;
}
.preview-panel[data-v-01b08bd0] {\r
  height: 100%;\r
  position: relative;\r
  overflow: hidden;
}
.mermaid-diagram-container[data-v-01b08bd0] {\r
  width: 100%;\r
  height: 100%;\r
  cursor: grab;\r
  overflow: hidden;\r
  background: #fafafa;
}
.mermaid-diagram-container[data-v-01b08bd0]:active {\r
  cursor: grabbing;
}
.loading-overlay[data-v-01b08bd0] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  background: rgba(255, 255, 255, 0.8);\r
  color: #6b7280;
}
.loading-spinner[data-v-01b08bd0] {\r
  width: 32px;\r
  height: 32px;\r
  border: 4px solid #dbeafe;\r
  border-top: 4px solid #2563eb;\r
  border-radius: 50%;\r
  animation: spin 1s linear infinite;\r
  margin-bottom: 16px;
}
.error-state[data-v-01b08bd0] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #dc2626;\r
  padding: 20px;
}
.error-icon[data-v-01b08bd0] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.error-state h3[data-v-01b08bd0] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #dc2626;
}
.error-message[data-v-01b08bd0] {\r
  font-size: 14px;\r
  color: #6b7280;\r
  text-align: center;\r
  margin-bottom: 16px;\r
  max-width: 400px;
}
.retry-button[data-v-01b08bd0] {\r
  padding: 8px 16px;\r
  background: #dc2626;\r
  color: white;\r
  border: none;\r
  border-radius: 6px;\r
  font-size: 14px;\r
  cursor: pointer;\r
  transition: background 0.2s;
}
.retry-button[data-v-01b08bd0]:hover {\r
  background: #b91c1c;
}
.empty-state[data-v-01b08bd0] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #6b7280;
}
.empty-icon[data-v-01b08bd0] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.empty-state h3[data-v-01b08bd0] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #374151;
}
.empty-state p[data-v-01b08bd0] {\r
  font-size: 14px;
}\r
\r
/* Mermaid diagram styles */
[data-v-01b08bd0] .mermaid {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;
}
[data-v-01b08bd0] .mermaid svg {\r
  max-width: none !important;\r
  max-height: none !important;\r
  transition: transform 0.2s ease;
}\r
\r
/* Custom scrollbar */
.code-viewer[data-v-01b08bd0]::-webkit-scrollbar {\r
  width: 8px;\r
  height: 8px;
}
.code-viewer[data-v-01b08bd0]::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
  border-radius: 4px;
}
.code-viewer[data-v-01b08bd0]::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 4px;
}
.code-viewer[data-v-01b08bd0]::-webkit-scrollbar-thumb:hover {\r
  background: #a1a1a1;
}\r
\r
/* Responsive adjustments */
@media (max-width: 768px) {
.toolbar[data-v-01b08bd0] {\r
    flex-direction: column;\r
    gap: 12px;\r
    padding: 16px;\r
    height: auto;
}
.toolbar-left[data-v-01b08bd0],\r
  .toolbar-right[data-v-01b08bd0] {\r
    width: 100%;\r
    justify-content: center;
}
.tab-button[data-v-01b08bd0] {\r
    flex: 1;\r
    justify-content: center;
}
}\r
\r
/* Print styles */
@media print {
.toolbar[data-v-01b08bd0] {\r
    display: none;
}
.mermaid-container[data-v-01b08bd0] {\r
    box-shadow: none;\r
    border: none;
}
}\r
`;Fs(n3);ld.__scopeId="data-v-01b08bd0";ld.__file="packages/Mermaid/index.vue";const cd="177",os={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i3=0,Kf=1,r3=2,W0=1,$0=2,Ti=3,Pi=0,pn=1,Jn=2,Yi=0,as=1,Zf=2,Jf=3,Qf=4,s3=5,gr=100,o3=101,a3=102,l3=103,c3=104,h3=200,u3=201,d3=202,f3=203,kh=204,Bh=205,p3=206,m3=207,g3=208,_3=209,x3=210,v3=211,y3=212,b3=213,T3=214,Nh=0,Oh=1,Uh=2,Ss=3,zh=4,Hh=5,Vh=6,Gh=7,q0=0,S3=1,M3=2,Ki=0,C3=1,E3=2,w3=3,A3=4,R3=5,L3=6,D3=7,tp="attached",P3="detached",X0=300,Ms=301,Cs=302,Wh=303,$h=304,Kl=306,Es=1e3,qi=1001,El=1002,en=1003,j0=1004,fo=1005,yn=1006,Za=1007,Ei=1008,ri=1009,Y0=1010,K0=1011,Io=1012,hd=1013,Rr=1014,zn=1015,Ko=1016,ud=1017,dd=1018,ko=1020,Z0=35902,J0=1021,Q0=1022,An=1023,Bo=1026,No=1027,fd=1028,pd=1029,t_=1030,md=1031,gd=1033,Ja=33776,Qa=33777,tl=33778,el=33779,qh=35840,Xh=35841,jh=35842,Yh=35843,Kh=36196,Zh=37492,Jh=37496,Qh=37808,tu=37809,eu=37810,nu=37811,iu=37812,ru=37813,su=37814,ou=37815,au=37816,lu=37817,cu=37818,hu=37819,uu=37820,du=37821,nl=36492,fu=36494,pu=36495,e_=36283,mu=36284,gu=36285,_u=36286,Oo=2300,Uo=2301,Mc=2302,ep=2400,np=2401,ip=2402,F3=2500,I3=0,n_=1,xu=2,k3=3200,B3=3201,i_=0,N3=1,Wi="",ze="srgb",on="srgb-linear",wl="linear",Te="srgb",Or=7680,rp=519,O3=512,U3=513,z3=514,r_=515,H3=516,V3=517,G3=518,W3=519,vu=35044,sp="300 es",wi=2e3,Al=2001;class Ir{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let op=1234567;const bo=Math.PI/180,ws=180/Math.PI;function Vn(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[e&255]+He[e>>8&255]+He[e>>16&255]+He[e>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[n&63|128]+He[n>>8&255]+"-"+He[n>>16&255]+He[n>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function _d(e,t){return(e%t+t)%t}function $3(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function q3(e,t,n){return e!==t?(n-e)/(t-e):0}function To(e,t,n){return(1-n)*e+n*t}function X3(e,t,n,i){return To(e,t,1-Math.exp(-n*i))}function j3(e,t=1){return t-Math.abs(_d(e,t*2)-t)}function Y3(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function K3(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Z3(e,t){return e+Math.floor(Math.random()*(t-e+1))}function J3(e,t){return e+Math.random()*(t-e)}function Q3(e){return e*(.5-Math.random())}function tD(e){e!==void 0&&(op=e);let t=op+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eD(e){return e*bo}function nD(e){return e*ws}function iD(e){return(e&e-1)===0&&e!==0}function rD(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function sD(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function oD(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),u=o((t-i)/2),f=s((i-t)/2),m=o((i-t)/2);switch(r){case"XYX":e.set(a*h,l*d,l*u,a*c);break;case"YZY":e.set(l*u,a*h,l*d,a*c);break;case"ZXZ":e.set(l*d,l*u,a*h,a*c);break;case"XZX":e.set(a*h,l*m,l*f,a*c);break;case"YXY":e.set(l*f,a*h,l*m,a*c);break;case"ZYZ":e.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ve(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const s_={DEG2RAD:bo,RAD2DEG:ws,generateUUID:Vn,clamp:oe,euclideanModulo:_d,mapLinear:$3,inverseLerp:q3,lerp:To,damp:X3,pingpong:j3,smoothstep:Y3,smootherstep:K3,randInt:Z3,randFloat:J3,randFloatSpread:Q3,seededRandom:tD,degToRad:eD,radToDeg:nD,isPowerOfTwo:iD,ceilPowerOfTwo:rD,floorPowerOfTwo:sD,setQuaternionFromProperEuler:oD,normalize:ve,denormalize:Nn};class te{constructor(t=0,n=0){te.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class si{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(a===1){t[n+0]=u,t[n+1]=f,t[n+2]=m,t[n+3]=_;return}if(d!==_||l!==u||c!==f||h!==m){let g=1-a;const p=l*u+c*f+h*m+d*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const k=Math.sqrt(E),R=Math.atan2(k,p*b);g=Math.sin(g*R)/k,a=Math.sin(a*R)/k}const y=a*b;if(l=l*g+u*y,c=c*g+f*y,h=h*g+m*y,d=d*g+_*y,g===1-a){const k=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=k,c*=k,h*=k,d*=k}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[n]=a*m+h*d+l*f-c*u,t[n+1]=l*m+h*u+c*d-a*f,t[n+2]=c*m+h*f+a*u-l*d,t[n+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),u=l(i/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,u=Math.sin(n*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,n=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ap.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ap.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cc.copy(this).projectOnVector(t),this.sub(Cc)}reflect(t){return this.sub(Cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new V,ap=new si;class ne{constructor(t,n,i,r,s,o,a,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,c)}set(t,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],_=r[0],g=r[3],p=r[6],b=r[1],E=r[4],y=r[7],k=r[2],R=r[5],P=r[8];return s[0]=o*_+a*b+l*k,s[3]=o*g+a*E+l*R,s[6]=o*p+a*y+l*P,s[1]=c*_+h*b+d*k,s[4]=c*g+h*E+d*R,s[7]=c*p+h*y+d*P,s[2]=u*_+f*b+m*k,s[5]=u*g+f*E+m*R,s[8]=u*p+f*y+m*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=n*d+i*u+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(r*c-h*i)*_,t[2]=(a*i-r*o)*_,t[3]=u*_,t[4]=(h*n-r*l)*_,t[5]=(r*s-a*n)*_,t[6]=f*_,t[7]=(i*l-c*n)*_,t[8]=(o*n-i*s)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Ec.makeScale(t,n)),this}rotate(t){return this.premultiply(Ec.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ec.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new ne;function o_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function zo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function aD(){const e=zo("canvas");return e.style.display="block",e}const lp={};function ls(e){e in lp||(lp[e]=!0,console.warn(e))}function lD(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function cD(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hD(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const cp=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hp=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uD(){const e={enabled:!0,workingColorSpace:on,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Te&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?wl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[on]:{primaries:t,whitePoint:i,transfer:wl,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}const de=uD();function Ri(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function cs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ur;class dD{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ur===void 0&&(Ur=zo("canvas")),Ur.width=t.width,Ur.height=t.height;const r=Ur.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ur}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=zo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fD=0;class xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fD++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wc(r[o].image)):s.push(wc(r[o]))}else s=wc(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function wc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?dD.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pD=0;const Ac=new V;class Oe extends Ir{constructor(t=Oe.DEFAULT_IMAGE,n=Oe.DEFAULT_MAPPING,i=qi,r=qi,s=yn,o=Ei,a=An,l=ri,c=Oe.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pD++}),this.uuid=Vn(),this.name="",this.source=new xd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==X0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=X0;Oe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,n=0,i=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,y=(f+1)/2,k=(p+1)/2,R=(h+u)/4,P=(d+_)/4,U=(m+g)/4;return E>y&&E>k?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=P/i):y>k?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=U/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=P/s,r=U/s),this.set(i,r,s,n),this}let b=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this.w=oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this.w=oe(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mD extends Ir{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ge(0,0,t,n),this.scissorTest=!1,this.viewport=new ge(0,0,t,n);const r={width:t,height:n,depth:i.depth},s=new Oe(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new xd(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends mD{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class a_ extends Oe{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gD extends Oe{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),da.subVectors(this.max,to),zr.subVectors(t.a,to),Hr.subVectors(t.b,to),Vr.subVectors(t.c,to),Ii.subVectors(Hr,zr),ki.subVectors(Vr,Hr),or.subVectors(zr,Vr);let n=[0,-Ii.z,Ii.y,0,-ki.z,ki.y,0,-or.z,or.y,Ii.z,0,-Ii.x,ki.z,0,-ki.x,or.z,0,-or.x,-Ii.y,Ii.x,0,-ki.y,ki.x,0,-or.y,or.x,0];return!Rc(n,zr,Hr,Vr,da)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,zr,Hr,Vr,da))?!1:(fa.crossVectors(Ii,ki),n=[fa.x,fa.y,fa.z],Rc(n,zr,Hr,Vr,da))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gi=[new V,new V,new V,new V,new V,new V,new V,new V],Pn=new V,ua=new Wn,zr=new V,Hr=new V,Vr=new V,Ii=new V,ki=new V,or=new V,to=new V,da=new V,fa=new V,ar=new V;function Rc(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){ar.fromArray(e,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=t.dot(ar),c=n.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _D=new Wn,eo=new V,Lc=new V;class ci{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):_D.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(Lc)),this.expandByPoint(eo.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _i=new V,Dc=new V,pa=new V,Bi=new V,Pc=new V,ma=new V,Fc=new V;class Zo{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=_i.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Dc.copy(t).add(n).multiplyScalar(.5),pa.copy(n).sub(t).normalize(),Bi.copy(this.origin).sub(Dc);const s=t.distanceTo(n)*.5,o=-this.direction.dot(pa),a=Bi.dot(this.direction),l=-Bi.dot(pa),c=Bi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dc).addScaledVector(pa,u),f}intersectSphere(t,n){_i.subVectors(t.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,n,i,r,s){Pc.subVectors(n,t),ma.subVectors(i,t),Fc.crossVectors(Pc,ma);let o=this.direction.dot(Fc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,t);const l=a*this.direction.dot(ma.crossVectors(Bi,ma));if(l<0)return null;const c=a*this.direction.dot(Pc.cross(Bi));if(c<0||l+c>o)return null;const h=-a*Bi.dot(Fc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,n,i,r,s,o,a,l,c,h,d,u,f,m,_,g){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,c,h,d,u,f,m,_,g)}set(t,n,i,r,s,o,a,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Gr.setFromMatrixColumn(t,0).length(),s=1/Gr.setFromMatrixColumn(t,1).length(),o=1/Gr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,_=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+m*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=m+f*c,n[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;n[0]=u+_*a,n[4]=m*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=f*a-m,n[6]=_+u*a,n[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;n[0]=u-_*a,n[4]=-o*d,n[8]=m+f*a,n[1]=f+m*a,n[5]=o*h,n[9]=_-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,_=a*d;n[0]=l*h,n[4]=m*c-f,n[8]=u*c+_,n[1]=l*d,n[5]=_*c+u,n[9]=f*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,_=a*c;n[0]=l*h,n[4]=_-u*d,n[8]=m*d+f,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*d+m,n[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,_=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+_,n[5]=o*h,n[9]=f*d-m,n[2]=m*d-f,n[6]=a*h,n[10]=_*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xD,t,vD)}lookAt(t,n,i){const r=this.elements;return _n.subVectors(t,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ni.crossVectors(i,_n),Ni.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ni.crossVectors(i,_n)),Ni.normalize(),ga.crossVectors(_n,Ni),r[0]=Ni.x,r[4]=ga.x,r[8]=_n.x,r[1]=Ni.y,r[5]=ga.y,r[9]=_n.y,r[2]=Ni.z,r[6]=ga.z,r[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],b=i[3],E=i[7],y=i[11],k=i[15],R=r[0],P=r[4],U=r[8],w=r[12],S=r[1],L=r[5],G=r[9],$=r[13],M=r[2],C=r[6],v=r[10],N=r[14],D=r[3],W=r[7],K=r[11],J=r[15];return s[0]=o*R+a*S+l*M+c*D,s[4]=o*P+a*L+l*C+c*W,s[8]=o*U+a*G+l*v+c*K,s[12]=o*w+a*$+l*N+c*J,s[1]=h*R+d*S+u*M+f*D,s[5]=h*P+d*L+u*C+f*W,s[9]=h*U+d*G+u*v+f*K,s[13]=h*w+d*$+u*N+f*J,s[2]=m*R+_*S+g*M+p*D,s[6]=m*P+_*L+g*C+p*W,s[10]=m*U+_*G+g*v+p*K,s[14]=m*w+_*$+g*N+p*J,s[3]=b*R+E*S+y*M+k*D,s[7]=b*P+E*L+y*C+k*W,s[11]=b*U+E*G+y*v+k*K,s[15]=b*w+E*$+y*N+k*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*d-r*c*d-s*a*u+i*c*u+r*a*f-i*l*f)+_*(+n*l*f-n*c*u+s*o*u-r*o*f+r*c*h-s*l*h)+g*(+n*c*d-n*a*f-s*o*d+i*o*f+s*a*h-i*c*h)+p*(-r*a*h-n*l*d+n*a*u+r*o*d-i*o*u+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],b=d*g*c-_*u*c+_*l*f-a*g*f-d*l*p+a*u*p,E=m*u*c-h*g*c-m*l*f+o*g*f+h*l*p-o*u*p,y=h*_*c-m*d*c+m*a*f-o*_*f-h*a*p+o*d*p,k=m*d*l-h*_*l-m*a*u+o*_*u+h*a*g-o*d*g,R=n*b+i*E+r*y+s*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=b*P,t[1]=(_*u*s-d*g*s-_*r*f+i*g*f+d*r*p-i*u*p)*P,t[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*P,t[3]=(d*l*s-a*u*s-d*r*c+i*u*c+a*r*f-i*l*f)*P,t[4]=E*P,t[5]=(h*g*s-m*u*s+m*r*f-n*g*f-h*r*p+n*u*p)*P,t[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*p-n*l*p)*P,t[7]=(o*u*s-h*l*s+h*r*c-n*u*c-o*r*f+n*l*f)*P,t[8]=y*P,t[9]=(m*d*s-h*_*s-m*i*f+n*_*f+h*i*p-n*d*p)*P,t[10]=(o*_*s-m*a*s+m*i*c-n*_*c-o*i*p+n*a*p)*P,t[11]=(h*a*s-o*d*s-h*i*c+n*d*c+o*i*f-n*a*f)*P,t[12]=k*P,t[13]=(h*_*r-m*d*r+m*i*u-n*_*u-h*i*g+n*d*g)*P,t[14]=(m*a*r-o*_*r-m*i*l+n*_*l+o*i*g-n*a*g)*P,t[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*u+n*a*u)*P,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,g=o*d,p=a*d,b=l*c,E=l*h,y=l*d,k=i.x,R=i.y,P=i.z;return r[0]=(1-(_+p))*k,r[1]=(f+y)*k,r[2]=(m-E)*k,r[3]=0,r[4]=(f-y)*R,r[5]=(1-(u+p))*R,r[6]=(g+b)*R,r[7]=0,r[8]=(m+E)*P,r[9]=(g-b)*P,r[10]=(1-(u+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Fn.copy(this);const c=1/s,h=1/o,d=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=wi){const l=this.elements,c=2*s/(n-t),h=2*s/(i-r),d=(n+t)/(n-t),u=(i+r)/(i-r);let f,m;if(a===wi)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Al)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=wi){const l=this.elements,c=1/(n-t),h=1/(i-r),d=1/(o-s),u=(n+t)*c,f=(i+r)*h;let m,_;if(a===wi)m=(o+s)*d,_=-2*d;else if(a===Al)m=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Gr=new V,Fn=new ie,xD=new V(0,0,0),vD=new V(1,1,1),Ni=new V,ga=new V,_n=new V,up=new ie,dp=new si;class oi{constructor(t=0,n=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return up.makeRotationFromQuaternion(t),this.setFromRotationMatrix(up,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return dp.setFromEuler(this),this.setFromQuaternion(dp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yD=0;const fp=new V,Wr=new si,xi=new ie,_a=new V,no=new V,bD=new V,TD=new si,pp=new V(1,0,0),mp=new V(0,1,0),gp=new V(0,0,1),_p={type:"added"},SD={type:"removed"},$r={type:"childadded",child:null},Ic={type:"childremoved",child:null};class we extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yD++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new V,n=new oi,i=new si,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new ne}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Wr.setFromAxisAngle(t,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,n){return Wr.setFromAxisAngle(t,n),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(pp,t)}rotateY(t){return this.rotateOnAxis(mp,t)}rotateZ(t){return this.rotateOnAxis(gp,t)}translateOnAxis(t,n){return fp.copy(t).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(pp,t)}translateY(t){return this.translateOnAxis(mp,t)}translateZ(t){return this.translateOnAxis(gp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?_a.copy(t):_a.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(no,_a,this.up):xi.lookAt(_a,no,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(xi),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_p),$r.child=t,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(SD),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_p),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,bD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,TD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}we.DEFAULT_UP=new V(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new V,vi=new V,kc=new V,yi=new V,qr=new V,Xr=new V,xp=new V,Bc=new V,Nc=new V,Oc=new V,Uc=new ge,zc=new ge,Hc=new ge;class On{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),In.subVectors(t,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){In.subVectors(r,n),vi.subVectors(i,n),kc.subVectors(t,n);const o=In.dot(In),a=In.dot(vi),l=In.dot(kc),c=vi.dot(vi),h=vi.dot(kc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,n,i,r,s,o,a,l){return this.getBarycoord(t,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(t,n,i,r,s,o){return Uc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),Uc.fromBufferAttribute(t,n),zc.fromBufferAttribute(t,i),Hc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Uc,s.x),o.addScaledVector(zc,s.y),o.addScaledVector(Hc,s.z),o}static isFrontFacing(t,n,i,r){return In.subVectors(i,n),vi.subVectors(t,n),In.cross(vi).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),In.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return On.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return On.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Xr.subVectors(s,i),Bc.subVectors(t,i);const l=qr.dot(Bc),c=Xr.dot(Bc);if(l<=0&&c<=0)return n.copy(i);Nc.subVectors(t,r);const h=qr.dot(Nc),d=Xr.dot(Nc);if(h>=0&&d<=h)return n.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(qr,o);Oc.subVectors(t,s);const f=qr.dot(Oc),m=Xr.dot(Oc);if(m>=0&&f<=m)return n.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Xr,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return xp.subVectors(s,r),a=(d-h)/(d-h+(f-m)),n.copy(r).addScaledVector(xp,a);const p=1/(g+_+u);return o=_*p,a=u*p,n.copy(i).addScaledVector(qr,o).addScaledVector(Xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Vc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ee{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,n),this}setRGB(t,n,i,r=de.workingColorSpace){return this.r=t,this.g=n,this.b=i,de.colorSpaceToWorking(this,r),this}setHSL(t,n,i,r=de.workingColorSpace){if(t=_d(t,1),n=oe(n,0,1),i=oe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vc(o,s,t+1/3),this.g=Vc(o,s,t),this.b=Vc(o,s,t-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(t,n=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ze){const i=c_[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return de.workingToColorSpace(Ve.copy(this),t),Math.round(oe(Ve.r*255,0,255))*65536+Math.round(oe(Ve.g*255,0,255))*256+Math.round(oe(Ve.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=de.workingColorSpace){de.workingToColorSpace(Ve.copy(this),n);const i=Ve.r,r=Ve.g,s=Ve.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=de.workingColorSpace){return de.workingToColorSpace(Ve.copy(this),n),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ze){de.workingToColorSpace(Ve.copy(this),t);const n=Ve.r,i=Ve.g,r=Ve.b;return t!==ze?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+n,Oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Oi),t.getHSL(xa);const i=To(Oi.h,xa.h,n),r=To(Oi.s,xa.s,n),s=To(Oi.l,xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new ee;ee.NAMES=c_;let MD=0;class ei extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MD++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=as,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Bh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kh&&(i.blendSrc=this.blendSrc),this.blendDst!==Bh&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yr extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new V,va=new te;let CD=0;class nn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CD++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=vu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(t),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.applyMatrix3(t),this.setXYZ(n,De.x,De.y,De.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.applyMatrix4(t),this.setXYZ(n,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.applyNormalMatrix(t),this.setXYZ(n,De.x,De.y,De.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.transformDirection(t),this.setXYZ(n,De.x,De.y,De.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Nn(n,this.array)),n}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Nn(n,this.array)),n}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Nn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Nn(n,this.array)),n}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array),s=ve(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vu&&(t.usage=this.usage),t}}class h_ extends nn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class u_ extends nn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Li extends nn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let ED=0;const En=new ie,Gc=new we,jr=new V,xn=new Wn,io=new Wn,Ne=new V;class hi extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ED++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o_(t)?u_:h_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ne().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,n,i){return En.makeTranslation(t,n,i),this.applyMatrix4(En),this}scale(t,n,i){return En.makeScale(t,n,i),this.applyMatrix4(En),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Li(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(xn.min,io.min),xn.expandByPoint(Ne),Ne.addVectors(xn.max,io.max),xn.expandByPoint(Ne)):(xn.expandByPoint(io.min),xn.expandByPoint(io.max))}xn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ne));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(t,c),Ne.add(jr)),r=Math.max(r,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new V,l[U]=new V;const c=new V,h=new V,d=new V,u=new te,f=new te,m=new te,_=new V,g=new V;function p(U,w,S){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),u.fromBufferAttribute(s,U),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[U].add(_),a[w].add(_),a[S].add(_),l[U].add(g),l[w].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,w=b.length;U<w;++U){const S=b[U],L=S.start,G=S.count;for(let $=L,M=L+G;$<M;$+=3)p(t.getX($+0),t.getX($+1),t.getX($+2))}const E=new V,y=new V,k=new V,R=new V;function P(U){k.fromBufferAttribute(r,U),R.copy(k);const w=a[U];E.copy(w),E.sub(k.multiplyScalar(k.dot(w))).normalize(),y.crossVectors(R,w);const L=y.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,L)}for(let U=0,w=b.length;U<w;++U){const S=b[U],L=S.start,G=S.count;for(let $=L,M=L+G;$<M;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=n.count;u<f;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ne.fromBufferAttribute(t,n),Ne.normalize(),t.setXYZ(n,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vp=new ie,lr=new Zo,ya=new ci,yp=new V,ba=new V,Ta=new V,Sa=new V,Wc=new V,Ma=new V,bp=new V,Ca=new V;class $e extends we{constructor(t=new hi,n=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Wc.fromBufferAttribute(d,t),o?Ma.addScaledVector(Wc,h):Ma.addScaledVector(Wc.sub(n),h))}n.add(Ma)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(ya.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ya,yp)===null||lr.origin.distanceToSquared(yp)>(t.far-t.near)**2))&&(vp.copy(s).invert(),lr.copy(t.ray).applyMatrix4(vp),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,lr)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,k=E;y<k;y+=3){const R=a.getX(y),P=a.getX(y+1),U=a.getX(y+2);r=Ea(this,p,t,i,c,h,d,R,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);r=Ea(this,o,t,i,c,h,d,b,E,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,k=E;y<k;y+=3){const R=y,P=y+1,U=y+2;r=Ea(this,p,t,i,c,h,d,R,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const b=g,E=g+1,y=g+2;r=Ea(this,o,t,i,c,h,d,b,E,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function wD(e,t,n,i,r,s,o,a){let l;if(t.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Pi,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Ca);return c<n.near||c>n.far?null:{distance:c,point:Ca.clone(),object:e}}function Ea(e,t,n,i,r,s,o,a,l,c){e.getVertexPosition(a,ba),e.getVertexPosition(l,Ta),e.getVertexPosition(c,Sa);const h=wD(e,t,n,i,ba,Ta,Sa,bp);if(h){const d=new V;On.getBarycoord(bp,ba,Ta,Sa,d),r&&(h.uv=On.getInterpolatedAttribute(r,a,l,c,d,new te)),s&&(h.uv1=On.getInterpolatedAttribute(s,a,l,c,d,new te)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new V,materialIndex:0};On.getNormal(ba,Ta,Sa,u.normal),h.face=u,h.barycoord=d}return h}class Jo extends hi{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,n,t,o,s,0),m("z","y","x",1,-1,i,n,-t,o,s,1),m("x","z","y",1,1,t,i,n,r,o,2),m("x","z","y",1,-1,t,i,-n,r,o,3),m("x","y","z",1,-1,t,n,i,r,s,4),m("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(h,3)),this.setAttribute("uv",new Li(d,2));function m(_,g,p,b,E,y,k,R,P,U,w){const S=y/P,L=k/U,G=y/2,$=k/2,M=R/2,C=P+1,v=U+1;let N=0,D=0;const W=new V;for(let K=0;K<v;K++){const J=K*L-$;for(let nt=0;nt<C;nt++){const mt=nt*S-G;W[_]=mt*b,W[g]=J*E,W[p]=M,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[p]=R>0?1:-1,h.push(W.x,W.y,W.z),d.push(nt/P),d.push(1-K/U),N+=1}}for(let K=0;K<U;K++)for(let J=0;J<P;J++){const nt=u+J+C*K,mt=u+J+C*(K+1),Z=u+(J+1)+C*(K+1),Q=u+(J+1)+C*K;l.push(nt,mt,Q),l.push(mt,Z,Q),D+=6}a.addGroup(f,D,w),f+=D,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Ke(e){const t={};for(let n=0;n<e.length;n++){const i=As(e[n]);for(const r in i)t[r]=i[r]}return t}function AD(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function d_(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const RD={clone:As,merge:Ke};var LD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LD,this.fragmentShader=DD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=AD(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=wi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new V,Tp=new te,Sp=new te;class Ze extends f_{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,n){return this.getViewBounds(t,Tp,Sp),n.subVectors(Sp,Tp)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,Kr=1;class PD extends we{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ze(Yr,Kr,t,n);r.layers=this.layers,this.add(r);const s=new Ze(Yr,Kr,t,n);s.layers=this.layers,this.add(s);const o=new Ze(Yr,Kr,t,n);o.layers=this.layers,this.add(o);const a=new Ze(Yr,Kr,t,n);a.layers=this.layers,this.add(a);const l=new Ze(Yr,Kr,t,n);l.layers=this.layers,this.add(l);const c=new Ze(Yr,Kr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(n,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class p_ extends Oe{constructor(t=[],n=Ms,i,r,s,o,a,l,c,h){super(t,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class FD extends Lr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new p_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jo(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Yi});s.uniforms.tEquirect.value=n;const o=new $e(r,s),a=n.minFilter;return n.minFilter===Ei&&(n.minFilter=yn),new PD(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}class br extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ID={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=n.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ID)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new br;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class kD extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class BD{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=vu,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=n.array[i+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new V;class vd{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Ye.fromBufferAttribute(this,n),Ye.applyMatrix4(t),this.setXYZ(n,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ye.fromBufferAttribute(this,n),Ye.applyNormalMatrix(t),this.setXYZ(n,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ye.fromBufferAttribute(this,n),Ye.transformDirection(t),this.setXYZ(n,Ye.x,Ye.y,Ye.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Nn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Nn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Nn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Nn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array),s=ve(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vd(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mp=new V,Cp=new ge,Ep=new ge,ND=new V,wp=new ie,wa=new V,qc=new ci,Ap=new ie,Xc=new Zo;class OD extends $e{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,wa),this.boundingBox.expandByPoint(wa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,wa),this.boundingSphere.expandByPoint(wa)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qc.copy(this.boundingSphere),qc.applyMatrix4(r),t.ray.intersectsSphere(qc)!==!1&&(Ap.copy(r).invert(),Xc.copy(t.ray).applyMatrix4(Ap),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,Xc)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ge,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){t.fromBufferAttribute(n,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===P3?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const i=this.skeleton,r=this.geometry;Cp.fromBufferAttribute(r.attributes.skinIndex,t),Ep.fromBufferAttribute(r.attributes.skinWeight,t),Mp.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=Ep.getComponent(s);if(o!==0){const a=Cp.getComponent(s);wp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector(ND.copy(Mp).applyMatrix4(wp),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class m_ extends we{constructor(){super(),this.isBone=!0,this.type="Bone"}}class g_ extends Oe{constructor(t=null,n=1,i=1,r,s,o,a,l,c=en,h=en,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rp=new ie,UD=new ie;class yd{constructor(t=[],n=[]){this.uuid=Vn(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new ie;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:UD;Rp.multiplyMatrices(a,n[s]),Rp.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yd(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new g_(n,t,t,An,zn);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,r=t.bones.length;i<r;i++){const s=t.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new m_),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];t.bones.push(o.uuid);const a=i[r];t.boneInverses.push(a.toArray())}return t}}class yu extends nn{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zr=new ie,Lp=new ie,Aa=[],Dp=new Wn,zD=new ie,ro=new $e,so=new ci;class HD extends $e{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new yu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zD)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Zr),Dp.copy(t.boundingBox).applyMatrix4(Zr),this.boundingBox.union(Dp)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Zr),so.copy(t.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(so)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),t.ray.intersectsSphere(so)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Zr),Lp.multiplyMatrices(i,Zr),ro.matrixWorld=Lp,ro.raycast(t,Aa);for(let o=0,a=Aa.length;o<a;o++){const l=Aa[o];l.instanceId=s,l.object=this,n.push(l)}Aa.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new yu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new g_(new Float32Array(r*this.count),r,this.count,fd,zn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jc=new V,VD=new V,GD=new ne;class Gi{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=jc.subVectors(i,n).cross(VD.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||GD.getNormalMatrix(t),r=this.coplanarPoint(jc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new ci,Ra=new V;class bd{constructor(t=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=wi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],f=r[8],m=r[9],_=r[10],g=r[11],p=r[12],b=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-s,u-c,g-f,y-p).normalize(),i[1].setComponents(l+s,u+c,g+f,y+p).normalize(),i[2].setComponents(l+o,u+h,g+m,y+b).normalize(),i[3].setComponents(l-o,u-h,g-m,y-b).normalize(),i[4].setComponents(l-a,u-d,g-_,y-E).normalize(),n===wi)i[5].setComponents(l+a,u+d,g+_,y+E).normalize();else if(n===Al)i[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ra.x=r.normal.x>0?t.max.x:t.min.x,Ra.y=r.normal.y>0?t.max.y:t.min.y,Ra.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class __ extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rl=new V,Ll=new V,Pp=new ie,oo=new Zo,La=new ci,Yc=new V,Fp=new V;class Td extends we{constructor(t=new hi,n=new __){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rl.fromBufferAttribute(n,r-1),Ll.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rl.distanceTo(Ll);t.setAttribute("lineDistance",new Li(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;Pp.copy(r).invert(),oo.copy(t.ray).applyMatrix4(Pp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),b=h.getX(_+1),E=Da(this,t,oo,l,p,b,_);E&&n.push(E)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Da(this,t,oo,l,_,g,m-1);p&&n.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=Da(this,t,oo,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){const _=Da(this,t,oo,l,m-1,f,m-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Da(e,t,n,i,r,s,o){const a=e.geometry.attributes.position;if(Rl.fromBufferAttribute(a,r),Ll.fromBufferAttribute(a,s),n.distanceSqToSegment(Rl,Ll,Yc,Fp)>i)return;Yc.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Yc);if(!(c<t.near||c>t.far))return{distance:c,point:Fp.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}const Ip=new V,kp=new V;class WD extends Td{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ip.fromBufferAttribute(n,r),kp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ip.distanceTo(kp);t.setAttribute("lineDistance",new Li(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $D extends Td{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class x_ extends ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bp=new ie,bu=new Zo,Pa=new ci,Fa=new V;class qD extends we{constructor(t=new hi,n=new x_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,t.ray.intersectsSphere(Pa)===!1)return;Bp.copy(r).invert(),bu.copy(t.ray).applyMatrix4(Bp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){const g=c.getX(m);Fa.fromBufferAttribute(d,g),Np(Fa,g,l,r,t,n,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)Fa.fromBufferAttribute(d,m),Np(Fa,m,l,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Np(e,t,n,i,r,s,o){const a=bu.distanceSqToPoint(e);if(a<n){const l=new V;bu.closestPointToPoint(e,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class v_ extends Oe{constructor(t,n,i=Rr,r,s,o,a=en,l=en,c,h=Bo,d=1){if(h!==Bo&&h!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zl extends hi{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=t/a,u=n/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const b=p*u-o;for(let E=0;E<c;E++){const y=E*d-s;m.push(y,-b,0),_.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,y=b+c*(p+1),k=b+1+c*(p+1),R=b+1+c*p;f.push(E,y,R),f.push(y,k,R)}this.setIndex(f),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(_,3)),this.setAttribute("uv",new Li(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jl extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ui extends Jl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class XD extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jD extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ia(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function YD(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function KD(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i}function Op(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let l=0;l!==t;++l)r[o++]=e[a+l]}return r}function y_(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push(...o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)}class Qo{constructor(t,n,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],t<r)break t}o=n.length;break e}if(!(t>=s)){const a=n[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){const a=i+o>>>1;t<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ZD extends Qo{constructor(t,n,i,r){super(t,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ep,endingEnd:ep}}intervalChanged_(t,n,i){const r=this.parameterPositions;let s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case np:s=t,a=2*n-i;break;case ip:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case np:o=t,l=2*i-n;break;case ip:o=1,l=i+r[1]-r[0];break;default:o=t-1,l=n}const c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-n)/(r-n),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,b=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let k=0;k!==a;++k)s[k]=p*o[h+k]+b*o[c+k]+E*o[l+k]+y*o[d+k];return s}}class JD extends Qo{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-n)/(r-n),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class QD extends Qo{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class qn{constructor(t,n,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ia(n,this.TimeBufferType),this.values=Ia(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ia(t.times,Array),values:Ia(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new QD(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new JD(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ZD(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Oo:n=this.InterpolantFactoryMethodDiscrete;break;case Uo:n=this.InterpolantFactoryMethodLinear;break;case Mc:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=t}return this}trim(t,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&YD(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Mc,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{const d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){const _=n[d+m];if(_!==n[u+m]||_!==n[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*i,u=o*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){const t=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Uo;class Ns extends qn{constructor(t,n,i){super(t,n,i)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Oo;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class b_ extends qn{constructor(t,n,i,r){super(t,n,i,r)}}b_.prototype.ValueTypeName="color";class Rs extends qn{constructor(t,n,i,r){super(t,n,i,r)}}Rs.prototype.ValueTypeName="number";class tP extends Qo{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n);let c=t*a;for(let h=c+a;c!==h;c+=4)si.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ls extends qn{constructor(t,n,i,r){super(t,n,i,r)}InterpolantFactoryMethodLinear(t){return new tP(this.times,this.values,this.getValueSize(),t)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends qn{constructor(t,n,i){super(t,n,i)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Oo;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends qn{constructor(t,n,i,r){super(t,n,i,r)}}Ds.prototype.ValueTypeName="vector";class eP{constructor(t="",n=-1,i=[],r=F3){this.name=t,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],i=t.tracks,r=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(iP(i[o]).scale(r));const s=new this(t.name,t.duration,n,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const n=[],i=t.tracks,r={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(qn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(t,n,i,r){const s=n.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=KD(l);l=Op(l,1,h),c=Op(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Rs(".morphTargetInfluences["+n[a].name+"]",l,c).scale(1/i))}return new this(t,-1,o)}static findByName(t,n){let i=t;if(!Array.isArray(t)){const r=t;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(t,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=r[d];u||(r[d]=u=[]),u.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],n,i));return o}static parseAnimation(t,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,u,f,m,_){if(f.length!==0){const g=[],p=[];y_(f,g,p,m),g.length!==0&&_.push(new d(u,g,p))}},r=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let b=0;b!==u[m].morphTargets.length;++b){const E=u[m];g.push(E.time),p.push(E.morphTarget===_?1:0)}r.push(new Rs(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+n[d].name+"]";i(Ds,f+".position",u,"pos",r),i(Ls,f+".quaternion",u,"rot",r),i(Ds,f+".scale",u,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const t=this.tracks;let n=0;for(let i=0,r=t.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nP(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return b_;case"quaternion":return Ls;case"bool":case"boolean":return Ns;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function iP(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=nP(e.type);if(e.times===void 0){const n=[],i=[];y_(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}const Xi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class rP{constructor(t,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const sP=new rP;class Us{constructor(t){this.manager=t!==void 0?t:sP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class oP extends Error{constructor(t,n){super(t),this.response=n}}class T_ extends Us{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Xi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(s),this.manager.itemEnd(t)},0),s;if(bi[t]!==void 0){bi[t].push({onLoad:n,onProgress:i,onError:r});return}bi[t]=[],bi[t].push({onLoad:n,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=bi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){b();function b(){d.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const k=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let R=0,P=h.length;R<P;R++){const U=h[R];U.onProgress&&U.onProgress(k)}p.enqueue(y),b()}},E=>{p.error(E)})}}});return new Response(g)}else throw new oP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Xi.add(t,c);const h=bi[t];delete bi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=bi[t];if(h===void 0)throw this.manager.itemError(t),c;delete bi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class aP extends Us{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Xi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o;const a=zo("img");function l(){h(),Xi.add(t,this),n&&n(this),s.manager.itemEnd(t)}function c(d){h(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class lP extends Us{constructor(t){super(t)}load(t,n,i,r){const s=new Oe,o=new aP(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ql extends we{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Kc=new ie,Up=new V,zp=new V;class Sd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Up.setFromMatrixPosition(t.matrixWorld),n.position.copy(Up),zp.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(zp),n.updateMatrixWorld(),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cP extends Sd{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,i=ws*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class hP extends Ql{constructor(t,n,i=0,r=Math.PI/3,s=0,o=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new cP}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hp=new ie,ao=new V,Zc=new V;class uP extends Sd{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ao.setFromMatrixPosition(t.matrixWorld),i.position.copy(ao),Zc.copy(i.position),Zc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zc),i.updateMatrixWorld(),r.makeTranslation(-ao.x,-ao.y,-ao.z),Hp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hp)}}class dP extends Ql{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uP}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Md extends f_{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class fP extends Sd{constructor(){super(new Md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class S_ extends Ql{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new fP}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pP extends Ql{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class So{static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}const Jc=new WeakMap;class mP extends Us{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Xi.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{if(Jc.has(o)===!0)r&&r(Jc.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return n&&n(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(t,c),n&&n(c),s.manager.itemEnd(t),c}).catch(function(c){r&&r(c),Jc.set(l,c),Xi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Xi.add(t,l),s.manager.itemStart(t)}}class gP extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Cd="\\[\\]\\.:\\/",_P=new RegExp("["+Cd+"]","g"),Ed="[^"+Cd+"]",xP="[^"+Cd.replace("\\.","")+"]",vP=/((?:WC+[\/:])*)/.source.replace("WC",Ed),yP=/(WCOD+)?/.source.replace("WCOD",xP),bP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ed),TP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ed),SP=new RegExp("^"+vP+yP+bP+TP+"$"),MP=["material","materials","bones","map"];class CP{constructor(t,n,i){const r=i||ye.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,n)}setValue(t,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class ye{constructor(t,n,i){this.path=n,this.parsedPath=i||ye.parseTrackName(n),this.node=ye.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new ye.Composite(t,n,i):new ye(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_P,"")}static parseTrackName(t){const n=SP.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);MP.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(t||(t=ye.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ye.Composite=CP;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vp{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(oe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class EP extends Ir{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Gp(e,t,n,i){const r=wP(i);switch(n){case J0:return e*t;case fd:return e*t/r.components*r.byteLength;case pd:return e*t/r.components*r.byteLength;case t_:return e*t*2/r.components*r.byteLength;case md:return e*t*2/r.components*r.byteLength;case Q0:return e*t*3/r.components*r.byteLength;case An:return e*t*4/r.components*r.byteLength;case gd:return e*t*4/r.components*r.byteLength;case Ja:case Qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case tl:case el:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xh:case Yh:return Math.max(e,16)*Math.max(t,8)/4;case qh:case jh:return Math.max(e,8)*Math.max(t,8)/2;case Kh:case Zh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Jh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case eu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case nu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case iu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ru:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case su:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ou:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case au:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case lu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case cu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case hu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case uu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case du:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case nl:case fu:case pu:return Math.ceil(e/4)*Math.ceil(t/4)*16;case e_:case mu:return Math.ceil(e/4)*Math.ceil(t/4)*8;case gu:case _u:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wP(e){switch(e){case ri:case Y0:return{byteLength:1,components:1};case Io:case K0:case Ko:return{byteLength:2,components:1};case ud:case dd:return{byteLength:2,components:4};case Rr:case hd:case zn:return{byteLength:4,components:1};case Z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);function M_(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function AP(e){const t=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var RP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$P=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,JP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tF=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sF="gl_FragColor = linearToOutputTexel( gl_FragColor );",oF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cF=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gF=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_F=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vF=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yF=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bF=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SF=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CF=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EF=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wF=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AF=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RF=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DF=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PF=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FF=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IF=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OF=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WF=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$F=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XF=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZF=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_I=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,II=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$I=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tk=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ek=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nk=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ik=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rk=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sk=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ok=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ak=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:RP,alphahash_pars_fragment:LP,alphamap_fragment:DP,alphamap_pars_fragment:PP,alphatest_fragment:FP,alphatest_pars_fragment:IP,aomap_fragment:kP,aomap_pars_fragment:BP,batching_pars_vertex:NP,batching_vertex:OP,begin_vertex:UP,beginnormal_vertex:zP,bsdfs:HP,iridescence_fragment:VP,bumpmap_pars_fragment:GP,clipping_planes_fragment:WP,clipping_planes_pars_fragment:$P,clipping_planes_pars_vertex:qP,clipping_planes_vertex:XP,color_fragment:jP,color_pars_fragment:YP,color_pars_vertex:KP,color_vertex:ZP,common:JP,cube_uv_reflection_fragment:QP,defaultnormal_vertex:tF,displacementmap_pars_vertex:eF,displacementmap_vertex:nF,emissivemap_fragment:iF,emissivemap_pars_fragment:rF,colorspace_fragment:sF,colorspace_pars_fragment:oF,envmap_fragment:aF,envmap_common_pars_fragment:lF,envmap_pars_fragment:cF,envmap_pars_vertex:hF,envmap_physical_pars_fragment:bF,envmap_vertex:uF,fog_vertex:dF,fog_pars_vertex:fF,fog_fragment:pF,fog_pars_fragment:mF,gradientmap_pars_fragment:gF,lightmap_pars_fragment:_F,lights_lambert_fragment:xF,lights_lambert_pars_fragment:vF,lights_pars_begin:yF,lights_toon_fragment:TF,lights_toon_pars_fragment:SF,lights_phong_fragment:MF,lights_phong_pars_fragment:CF,lights_physical_fragment:EF,lights_physical_pars_fragment:wF,lights_fragment_begin:AF,lights_fragment_maps:RF,lights_fragment_end:LF,logdepthbuf_fragment:DF,logdepthbuf_pars_fragment:PF,logdepthbuf_pars_vertex:FF,logdepthbuf_vertex:IF,map_fragment:kF,map_pars_fragment:BF,map_particle_fragment:NF,map_particle_pars_fragment:OF,metalnessmap_fragment:UF,metalnessmap_pars_fragment:zF,morphinstance_vertex:HF,morphcolor_vertex:VF,morphnormal_vertex:GF,morphtarget_pars_vertex:WF,morphtarget_vertex:$F,normal_fragment_begin:qF,normal_fragment_maps:XF,normal_pars_fragment:jF,normal_pars_vertex:YF,normal_vertex:KF,normalmap_pars_fragment:ZF,clearcoat_normal_fragment_begin:JF,clearcoat_normal_fragment_maps:QF,clearcoat_pars_fragment:tI,iridescence_pars_fragment:eI,opaque_fragment:nI,packing:iI,premultiplied_alpha_fragment:rI,project_vertex:sI,dithering_fragment:oI,dithering_pars_fragment:aI,roughnessmap_fragment:lI,roughnessmap_pars_fragment:cI,shadowmap_pars_fragment:hI,shadowmap_pars_vertex:uI,shadowmap_vertex:dI,shadowmask_pars_fragment:fI,skinbase_vertex:pI,skinning_pars_vertex:mI,skinning_vertex:gI,skinnormal_vertex:_I,specularmap_fragment:xI,specularmap_pars_fragment:vI,tonemapping_fragment:yI,tonemapping_pars_fragment:bI,transmission_fragment:TI,transmission_pars_fragment:SI,uv_pars_fragment:MI,uv_pars_vertex:CI,uv_vertex:EI,worldpos_vertex:wI,background_vert:AI,background_frag:RI,backgroundCube_vert:LI,backgroundCube_frag:DI,cube_vert:PI,cube_frag:FI,depth_vert:II,depth_frag:kI,distanceRGBA_vert:BI,distanceRGBA_frag:NI,equirect_vert:OI,equirect_frag:UI,linedashed_vert:zI,linedashed_frag:HI,meshbasic_vert:VI,meshbasic_frag:GI,meshlambert_vert:WI,meshlambert_frag:$I,meshmatcap_vert:qI,meshmatcap_frag:XI,meshnormal_vert:jI,meshnormal_frag:YI,meshphong_vert:KI,meshphong_frag:ZI,meshphysical_vert:JI,meshphysical_frag:QI,meshtoon_vert:tk,meshtoon_frag:ek,points_vert:nk,points_frag:ik,shadow_vert:rk,shadow_frag:sk,sprite_vert:ok,sprite_frag:ak},yt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Zn={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ee(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ee(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Zn.physical={uniforms:Ke([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const ka={r:0,b:0,g:0},hr=new oi,lk=new ie;function ck(e,t,n,i,r,s,o){const a=new ee(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function m(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?n:t).get(y)),y}function _(E){let y=!1;const k=m(E);k===null?p(a,l):k&&k.isColor&&(p(k,1),y=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(E,y){const k=m(y);k&&(k.isCubeTexture||k.mapping===Kl)?(h===void 0&&(h=new $e(new Jo(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:As(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hr.copy(y.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=k,h.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lk.makeRotationFromEuler(hr)),h.material.toneMapped=de.getTransfer(k.colorSpace)!==Te,(d!==k||u!==k.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,d=k,u=k.version,f=e.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):k&&k.isTexture&&(c===void 0&&(c=new $e(new Zl(2,2),new tr({name:"BackgroundMaterial",uniforms:As(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=k,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(k.colorSpace)!==Te,k.matrixAutoUpdate===!0&&k.updateMatrix(),c.material.uniforms.uvTransform.value.copy(k.matrix),(d!==k||u!==k.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,d=k,u=k.version,f=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(ka,d_(e)),i.buffers.color.setClear(ka.r,ka.g,ka.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:g,dispose:b}}function hk(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(S,L,G,$,M){let C=!1;const v=d($,G,L);s!==v&&(s=v,c(s.object)),C=f(S,$,G,M),C&&m(S,$,G,M),M!==null&&t.update(M,e.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,y(S,L,G,$),M!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function h(S){return e.deleteVertexArray(S)}function d(S,L,G){const $=G.wireframe===!0;let M=i[S.id];M===void 0&&(M={},i[S.id]=M);let C=M[L.id];C===void 0&&(C={},M[L.id]=C);let v=C[$];return v===void 0&&(v=u(l()),C[$]=v),v}function u(S){const L=[],G=[],$=[];for(let M=0;M<n;M++)L[M]=0,G[M]=0,$[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:$,object:S,attributes:{},index:null}}function f(S,L,G,$){const M=s.attributes,C=L.attributes;let v=0;const N=G.getAttributes();for(const D in N)if(N[D].location>=0){const K=M[D];let J=C[D];if(J===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),K===void 0||K.attribute!==J||J&&K.data!==J.data)return!0;v++}return s.attributesNum!==v||s.index!==$}function m(S,L,G,$){const M={},C=L.attributes;let v=0;const N=G.getAttributes();for(const D in N)if(N[D].location>=0){let K=C[D];K===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const J={};J.attribute=K,K&&K.data&&(J.data=K.data),M[D]=J,v++}s.attributes=M,s.attributesNum=v,s.index=$}function _(){const S=s.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const G=s.newAttributes,$=s.enabledAttributes,M=s.attributeDivisors;G[S]=1,$[S]===0&&(e.enableVertexAttribArray(S),$[S]=1),M[S]!==L&&(e.vertexAttribDivisor(S,L),M[S]=L)}function b(){const S=s.newAttributes,L=s.enabledAttributes;for(let G=0,$=L.length;G<$;G++)L[G]!==S[G]&&(e.disableVertexAttribArray(G),L[G]=0)}function E(S,L,G,$,M,C,v){v===!0?e.vertexAttribIPointer(S,L,G,M,C):e.vertexAttribPointer(S,L,G,$,M,C)}function y(S,L,G,$){_();const M=$.attributes,C=G.getAttributes(),v=L.defaultAttributeValues;for(const N in C){const D=C[N];if(D.location>=0){let W=M[N];if(W===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const K=W.normalized,J=W.itemSize,nt=t.get(W);if(nt===void 0)continue;const mt=nt.buffer,Z=nt.type,Q=nt.bytesPerElement,pt=Z===e.INT||Z===e.UNSIGNED_INT||W.gpuType===hd;if(W.isInterleavedBufferAttribute){const ht=W.data,dt=ht.stride,Kt=W.offset;if(ht.isInstancedInterleavedBuffer){for(let Ct=0;Ct<D.locationSize;Ct++)p(D.location+Ct,ht.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ct=0;Ct<D.locationSize;Ct++)g(D.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,mt);for(let Ct=0;Ct<D.locationSize;Ct++)E(D.location+Ct,J/D.locationSize,Z,K,dt*Q,(Kt+J/D.locationSize*Ct)*Q,pt)}else{if(W.isInstancedBufferAttribute){for(let ht=0;ht<D.locationSize;ht++)p(D.location+ht,W.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ht=0;ht<D.locationSize;ht++)g(D.location+ht);e.bindBuffer(e.ARRAY_BUFFER,mt);for(let ht=0;ht<D.locationSize;ht++)E(D.location+ht,J/D.locationSize,Z,K,J*Q,J/D.locationSize*ht*Q,pt)}}else if(v!==void 0){const K=v[N];if(K!==void 0)switch(K.length){case 2:e.vertexAttrib2fv(D.location,K);break;case 3:e.vertexAttrib3fv(D.location,K);break;case 4:e.vertexAttrib4fv(D.location,K);break;default:e.vertexAttrib1fv(D.location,K)}}}}b()}function k(){U();for(const S in i){const L=i[S];for(const G in L){const $=L[G];for(const M in $)h($[M].object),delete $[M];delete L[G]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const G in L){const $=L[G];for(const M in $)h($[M].object),delete $[M];delete L[G]}delete i[S.id]}function P(S){for(const L in i){const G=i[L];if(G[S.id]===void 0)continue;const $=G[S.id];for(const M in $)h($[M].object),delete $[M];delete G[S.id]}}function U(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function uk(e,t,n){let i;function r(c){i=c}function s(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];n.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dk(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==An&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ri&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!U)}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),k=m>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:k,maxSamples:R}}function fk(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new Gi,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{const b=s?0:i,E=b*4;let y=p.clippingState||null;l.value=y,y=h(m,u,E,f);for(let k=0;k!==E;++k)y[k]=n[k];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function pk(e){let t=new WeakMap;function n(o,a){return a===Wh?o.mapping=Ms:a===$h&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wh||a===$h)if(t.has(o)){const l=t.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new FD(l.height);return c.fromEquirectangularTexture(e,o),t.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const ns=4,Wp=[.125,.215,.35,.446,.526,.582],_r=20,Qc=new Md,$p=new ee;let th=null,eh=0,nh=0,ih=!1;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,qp=[new V(-mr,Jr,0),new V(mr,Jr,0),new V(-Jr,0,mr),new V(Jr,0,mr),new V(0,mr,-Jr),new V(0,mr,Jr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],mk=new V;class Xp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=mk}=s;th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(th,eh,nh),this._renderer.xr.enabled=ih,t.scissorTest=!1,Ba(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ms||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ko,format:An,colorSpace:on,depthBuffer:!1},r=jp(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gk(s)),this._blurMaterial=_k(s,t,n)}return r}_compileMaterial(t){const n=new $e(this._lodPlanes[0],t);this._renderer.compile(n,Qc)}_sceneToCubeUV(t,n,i,r,s){const l=new Ze(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor($p),d.toneMapping=Ki,d.autoClear=!1;const m=new yr({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new $e(new Jo,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy($p),g=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const y=this._cubeSize;Ba(r,E*y,b>2?y:0,y,y),d.setRenderTarget(r),g&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===Ms||t.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qp[(r-s-1)%qp.length];this._blur(t,s-1,s,o,a)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $e(this._lodPlanes[r],c),u=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_r-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):_r;g>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_r}`);const p=[];let b=0;for(let P=0;P<_r;++P){const U=P/_,w=Math.exp(-U*U/2);p.push(w),P===0?b+=w:P<g&&(b+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:E}=this;u.dTheta.value=m,u.mipInt.value=E-i;const y=this._sizeLods[r],k=3*y*(r>E-ns?r-E+ns:0),R=4*(this._cubeSize-y);Ba(n,k,R,3*y,2*y),l.setRenderTarget(n),l.render(d,Qc)}}function gk(e){const t=[],n=[],i=[];let r=e;const s=e-ns+1+Wp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>e-ns?l=Wp[o-e+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*f),E=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,U=R>2?0:-1,w=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(w,_*m*R),E.set(u,g*m*R);const S=[R,R,R,R,R,R];y.set(S,p*m*R)}const k=new hi;k.setAttribute("position",new nn(b,_)),k.setAttribute("uv",new nn(E,g)),k.setAttribute("faceIndex",new nn(y,p)),t.push(k),r>ns&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function jp(e,t,n){const i=new Lr(e,t,n);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function _k(e,t,n){const i=new Float32Array(_r),r=new V(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Yp(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Kp(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xk(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wh||l===$h,h=l===Ms||l===Cs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return n===null&&(n=new Xp(e)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(n===null&&(n=new Xp(e)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vk(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yk(e,t,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){const k=b[E+0],R=b[E+1],P=b[E+2];u.push(k,R,R,P,P,k)}}else if(m!==void 0){const b=m.array;_=m.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const k=E+0,R=E+1,P=E+2;u.push(k,R,R,P,P,k)}}else return;const g=new(o_(u)?u_:h_)(u,1);g.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function bk(e,t,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){e.drawElements(i,f,s,u*o),n.update(f,i,1)}function c(u,f,m){m!==0&&(e.drawElementsInstanced(i,f,s,u*o,m),n.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];n.update(g,i,1)}function d(u,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*_[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Tk(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Sk(e,t,n){const i=new WeakMap,r=new ge;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,k=1;y>t.maxTextureSize&&(k=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*k*4*d),P=new a_(R,y,k,d);P.type=zn,P.needsUpdate=!0;const U=E*4;for(let S=0;S<d;S++){const L=g[S],G=p[S],$=b[S],M=y*k*4*S;for(let C=0;C<L.count;C++){const v=C*U;f===!0&&(r.fromBufferAttribute(L,C),R[M+v+0]=r.x,R[M+v+1]=r.y,R[M+v+2]=r.z,R[M+v+3]=0),m===!0&&(r.fromBufferAttribute(G,C),R[M+v+4]=r.x,R[M+v+5]=r.y,R[M+v+6]=r.z,R[M+v+7]=0),_===!0&&(r.fromBufferAttribute($,C),R[M+v+8]=r.x,R[M+v+9]=r.y,R[M+v+10]=r.z,R[M+v+11]=$.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new te(y,k)},i.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function Mk(e,t,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const C_=new Oe,Zp=new v_(1,1),E_=new a_,w_=new gD,A_=new p_,Jp=[],Qp=[],tm=new Float32Array(16),em=new Float32Array(9),nm=new Float32Array(4);function zs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Jp[r];if(s===void 0&&(s=new Float32Array(r),Jp[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Be(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function tc(e,t){let n=Qp[t];n===void 0&&(n=new Int32Array(t),Qp[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Ck(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ek(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2fv(this.addr,t),Be(n,t)}}function wk(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ke(n,t))return;e.uniform3fv(this.addr,t),Be(n,t)}}function Ak(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4fv(this.addr,t),Be(n,t)}}function Rk(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Be(n,t)}else{if(ke(n,i))return;nm.set(i),e.uniformMatrix2fv(this.addr,!1,nm),Be(n,i)}}function Lk(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Be(n,t)}else{if(ke(n,i))return;em.set(i),e.uniformMatrix3fv(this.addr,!1,em),Be(n,i)}}function Dk(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Be(n,t)}else{if(ke(n,i))return;tm.set(i),e.uniformMatrix4fv(this.addr,!1,tm),Be(n,i)}}function Pk(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Fk(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2iv(this.addr,t),Be(n,t)}}function Ik(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3iv(this.addr,t),Be(n,t)}}function kk(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4iv(this.addr,t),Be(n,t)}}function Bk(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Nk(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2uiv(this.addr,t),Be(n,t)}}function Ok(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3uiv(this.addr,t),Be(n,t)}}function Uk(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4uiv(this.addr,t),Be(n,t)}}function zk(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Zp.compareFunction=r_,s=Zp):s=C_,n.setTexture2D(t||s,r)}function Hk(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||w_,r)}function Vk(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||A_,r)}function Gk(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||E_,r)}function Wk(e){switch(e){case 5126:return Ck;case 35664:return Ek;case 35665:return wk;case 35666:return Ak;case 35674:return Rk;case 35675:return Lk;case 35676:return Dk;case 5124:case 35670:return Pk;case 35667:case 35671:return Fk;case 35668:case 35672:return Ik;case 35669:case 35673:return kk;case 5125:return Bk;case 36294:return Nk;case 36295:return Ok;case 36296:return Uk;case 35678:case 36198:case 36298:case 36306:case 35682:return zk;case 35679:case 36299:case 36307:return Hk;case 35680:case 36300:case 36308:case 36293:return Vk;case 36289:case 36303:case 36311:case 36292:return Gk}}function $k(e,t){e.uniform1fv(this.addr,t)}function qk(e,t){const n=zs(t,this.size,2);e.uniform2fv(this.addr,n)}function Xk(e,t){const n=zs(t,this.size,3);e.uniform3fv(this.addr,n)}function jk(e,t){const n=zs(t,this.size,4);e.uniform4fv(this.addr,n)}function Yk(e,t){const n=zs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Kk(e,t){const n=zs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zk(e,t){const n=zs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Jk(e,t){e.uniform1iv(this.addr,t)}function Qk(e,t){e.uniform2iv(this.addr,t)}function t5(e,t){e.uniform3iv(this.addr,t)}function e5(e,t){e.uniform4iv(this.addr,t)}function n5(e,t){e.uniform1uiv(this.addr,t)}function i5(e,t){e.uniform2uiv(this.addr,t)}function r5(e,t){e.uniform3uiv(this.addr,t)}function s5(e,t){e.uniform4uiv(this.addr,t)}function o5(e,t,n){const i=this.cache,r=t.length,s=tc(n,r);ke(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||C_,s[o])}function a5(e,t,n){const i=this.cache,r=t.length,s=tc(n,r);ke(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||w_,s[o])}function l5(e,t,n){const i=this.cache,r=t.length,s=tc(n,r);ke(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||A_,s[o])}function c5(e,t,n){const i=this.cache,r=t.length,s=tc(n,r);ke(i,s)||(e.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||E_,s[o])}function h5(e){switch(e){case 5126:return $k;case 35664:return qk;case 35665:return Xk;case 35666:return jk;case 35674:return Yk;case 35675:return Kk;case 35676:return Zk;case 5124:case 35670:return Jk;case 35667:case 35671:return Qk;case 35668:case 35672:return t5;case 35669:case 35673:return e5;case 5125:return n5;case 36294:return i5;case 36295:return r5;case 36296:return s5;case 35678:case 36198:case 36298:case 36306:case 35682:return o5;case 35679:case 36299:case 36307:return a5;case 35680:case 36300:case 36308:case 36293:return l5;case 36289:case 36303:case 36311:case 36292:return c5}}class u5{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Wk(n.type)}}class d5{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=h5(n.type)}}class f5{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function im(e,t){e.seq.push(t),e.map[t.id]=t}function p5(e,t,n){const i=e.name,r=i.length;for(rh.lastIndex=0;;){const s=rh.exec(i),o=rh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){im(n,c===void 0?new u5(a,e,t):new d5(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new f5(a),im(n,d)),n=d}}}class il{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);p5(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function rm(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const m5=37297;let g5=0;function _5(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const sm=new ne;function x5(e){de._getMatrix(sm,de.workingColorSpace,e);const t=`mat3( ${sm.elements.map(n=>n.toFixed(4))} )`;switch(de.getTransfer(e)){case wl:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function om(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_5(e.getShaderSource(t),o)}else return r}function v5(e,t){const n=x5(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function y5(e,t){let n;switch(t){case C3:n="Linear";break;case E3:n="Reinhard";break;case w3:n="Cineon";break;case A3:n="ACESFilmic";break;case L3:n="AgX";break;case D3:n="Neutral";break;case R3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Na=new V;function b5(){de.getLuminanceCoefficients(Na);const e=Na.x.toFixed(4),t=Na.y.toFixed(4),n=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T5(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function S5(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function M5(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function po(e){return e!==""}function am(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(e){return e.replace(C5,w5)}const E5=new Map;function w5(e,t){let n=se[t];if(n===void 0){const i=E5.get(t);if(i!==void 0)n=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Tu(n)}const A5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(e){return e.replace(A5,R5)}function R5(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L5(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===W0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===$0?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function D5(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ms:case Cs:t="ENVMAP_TYPE_CUBE";break;case Kl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P5(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Cs&&(t="ENVMAP_MODE_REFRACTION"),t}function F5(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case q0:t="ENVMAP_BLENDING_MULTIPLY";break;case S3:t="ENVMAP_BLENDING_MIX";break;case M3:t="ENVMAP_BLENDING_ADD";break}return t}function I5(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function k5(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=L5(n),c=D5(n),h=P5(n),d=F5(n),u=I5(n),f=T5(n),m=S5(s),_=r.createProgram();let g,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(po).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(po).join(`
`),p.length>0&&(p+=`
`)):(g=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?se.tonemapping_pars_fragment:"",n.toneMapping!==Ki?y5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,v5("linearToOutputTexel",n.outputColorSpace),b5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(po).join(`
`)),o=Tu(o),o=am(o,n),o=lm(o,n),a=Tu(a),a=am(a,n),a=lm(a,n),o=cm(o),a=cm(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+g+o,y=b+p+a,k=rm(r,r.VERTEX_SHADER,E),R=rm(r,r.FRAGMENT_SHADER,y);r.attachShader(_,k),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(L){if(e.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),$=r.getShaderInfoLog(k).trim(),M=r.getShaderInfoLog(R).trim();let C=!0,v=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(C=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,k,R);else{const N=om(r,k,"vertex"),D=om(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+N+`
`+D)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):($===""||M==="")&&(v=!1);v&&(L.diagnostics={runnable:C,programLog:G,vertexShader:{log:$,prefix:g},fragmentShader:{log:M,prefix:p}})}r.deleteShader(k),r.deleteShader(R),U=new il(r,_),w=M5(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,m5)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=g5++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=R,this}let B5=0;class N5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new O5(t),n.set(t,i)),i}}class O5{constructor(t){this.id=B5++,this.code=t,this.usedTimes=0}}function U5(e,t,n,i,r,s,o){const a=new l_,l=new N5,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,L,G,$){const M=G.fog,C=$.geometry,v=w.isMeshStandardMaterial?G.environment:null,N=(w.isMeshStandardMaterial?n:t).get(w.envMap||v),D=N&&N.mapping===Kl?N.image.height:null,W=m[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J=K!==void 0?K.length:0;let nt=0;C.morphAttributes.position!==void 0&&(nt=1),C.morphAttributes.normal!==void 0&&(nt=2),C.morphAttributes.color!==void 0&&(nt=3);let mt,Z,Q,pt;if(W){const me=Zn[W];mt=me.vertexShader,Z=me.fragmentShader}else mt=w.vertexShader,Z=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),pt=l.getFragmentShaderID(w);const ht=e.getRenderTarget(),dt=e.state.buffers.depth.getReversed(),Kt=$.isInstancedMesh===!0,Ct=$.isBatchedMesh===!0,le=!!w.map,he=!!w.matcap,ot=!!N,A=!!w.aoMap,qt=!!w.lightMap,Lt=!!w.bumpMap,Xt=!!w.normalMap,St=!!w.displacementMap,re=!!w.emissiveMap,It=!!w.metalnessMap,Jt=!!w.roughnessMap,be=w.anisotropy>0,F=w.clearcoat>0,T=w.dispersion>0,Y=w.iridescence>0,et=w.sheen>0,it=w.transmission>0,tt=be&&!!w.anisotropyMap,kt=F&&!!w.clearcoatMap,xt=F&&!!w.clearcoatNormalMap,Dt=F&&!!w.clearcoatRoughnessMap,Bt=Y&&!!w.iridescenceMap,at=Y&&!!w.iridescenceThicknessMap,Mt=et&&!!w.sheenColorMap,Nt=et&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,gt=!!w.specularColorMap,Zt=!!w.specularIntensityMap,z=it&&!!w.transmissionMap,vt=it&&!!w.thicknessMap,lt=!!w.gradientMap,At=!!w.alphaMap,ct=w.alphaTest>0,rt=!!w.alphaHash,Pt=!!w.extensions;let Ft=Ki;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ft=e.toneMapping);const fe={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:mt,fragmentShader:Z,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&$._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&$.instanceColor!==null,instancingMorph:Kt&&$.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?e.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:on,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:he,envMap:ot,envMapMode:ot&&N.mapping,envMapCubeUVHeight:D,aoMap:A,lightMap:qt,bumpMap:Lt,normalMap:Xt,displacementMap:u&&St,emissiveMap:re,normalMapObjectSpace:Xt&&w.normalMapType===N3,normalMapTangentSpace:Xt&&w.normalMapType===i_,metalnessMap:It,roughnessMap:Jt,anisotropy:be,anisotropyMap:tt,clearcoat:F,clearcoatMap:kt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Dt,dispersion:T,iridescence:Y,iridescenceMap:Bt,iridescenceThicknessMap:at,sheen:et,sheenColorMap:Mt,sheenRoughnessMap:Nt,specularMap:Ot,specularColorMap:gt,specularIntensityMap:Zt,transmission:it,transmissionMap:z,thicknessMap:vt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===as&&w.alphaToCoverage===!1,alphaMap:At,alphaTest:ct,alphaHash:rt,combine:w.combine,mapUv:le&&_(w.map.channel),aoMapUv:A&&_(w.aoMap.channel),lightMapUv:qt&&_(w.lightMap.channel),bumpMapUv:Lt&&_(w.bumpMap.channel),normalMapUv:Xt&&_(w.normalMap.channel),displacementMapUv:St&&_(w.displacementMap.channel),emissiveMapUv:re&&_(w.emissiveMap.channel),metalnessMapUv:It&&_(w.metalnessMap.channel),roughnessMapUv:Jt&&_(w.roughnessMap.channel),anisotropyMapUv:tt&&_(w.anisotropyMap.channel),clearcoatMapUv:kt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ot&&_(w.specularMap.channel),specularColorMapUv:gt&&_(w.specularColorMap.channel),specularIntensityMapUv:Zt&&_(w.specularIntensityMap.channel),transmissionMapUv:z&&_(w.transmissionMap.channel),thicknessMapUv:vt&&_(w.thicknessMap.channel),alphaMapUv:At&&_(w.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Xt||be),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!C.attributes.uv&&(le||At),fog:!!M,useFog:w.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:dt,skinning:$.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ft,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&de.getTransfer(w.map.colorSpace)===Te,decodeVideoTextureEmissive:re&&w.emissiveMap.isVideoTexture===!0&&de.getTransfer(w.emissiveMap.colorSpace)===Te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jn,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(b(S,w),E(S,w),S.push(e.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function b(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=m[w.type];let L;if(S){const G=Zn[S];L=RD.clone(G.uniforms)}else L=w.uniforms;return L}function k(w,S){let L;for(let G=0,$=h.length;G<$;G++){const M=h[G];if(M.cacheKey===S){L=M,++L.usedTimes;break}}return L===void 0&&(L=new k5(e,S,w,s),h.push(L)),L}function R(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:k,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:U}}function z5(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function H5(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function um(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function dm(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(d,u,f,m,_,g){let p=e[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},e[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function a(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):n.push(p)}function l(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):n.unshift(p)}function c(d,u){n.length>1&&n.sort(d||H5),i.length>1&&i.sort(u||um),r.length>1&&r.sort(u||um)}function h(){for(let d=t,u=e.length;d<u;d++){const f=e[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function V5(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new dm,e.set(i,[o])):r>=s.length?(o=new dm,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function G5(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new ee};break;case"SpotLight":n={position:new V,direction:new V,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function W5(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let $5=0;function q5(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function X5(e){const t=new G5,n=W5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new ie,o=new ie;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,E=0,y=0,k=0,R=0,P=0;c.sort(q5);for(let w=0,S=c.length;w<S;w++){const L=c[w],G=L.color,$=L.intensity,M=L.distance,C=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*$,d+=G.g*$,u+=G.b*$;else if(L.isLightProbe){for(let v=0;v<9;v++)i.probe[v].addScaledVector(L.sh.coefficients[v],$);P++}else if(L.isDirectionalLight){const v=t.get(L);if(v.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const N=L.shadow,D=n.get(L);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,i.directionalShadow[f]=D,i.directionalShadowMap[f]=C,i.directionalShadowMatrix[f]=L.shadow.matrix,b++}i.directional[f]=v,f++}else if(L.isSpotLight){const v=t.get(L);v.position.setFromMatrixPosition(L.matrixWorld),v.color.copy(G).multiplyScalar($),v.distance=M,v.coneCos=Math.cos(L.angle),v.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),v.decay=L.decay,i.spot[_]=v;const N=L.shadow;if(L.map&&(i.spotLightMap[k]=L.map,k++,N.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[_]=N.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=C,y++}_++}else if(L.isRectAreaLight){const v=t.get(L);v.color.copy(G).multiplyScalar($),v.halfWidth.set(L.width*.5,0,0),v.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=v,g++}else if(L.isPointLight){const v=t.get(L);if(v.color.copy(L.color).multiplyScalar(L.intensity),v.distance=L.distance,v.decay=L.decay,L.castShadow){const N=L.shadow,D=n.get(L);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=C,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=v,m++}else if(L.isHemisphereLight){const v=t.get(L);v.skyColor.copy(L.color).multiplyScalar($),v.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[p]=v,p++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const U=i.hash;(U.directionalLength!==f||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==y||U.numSpotMaps!==k||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+k-R,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,U.directionalLength=f,U.pointLength=m,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=y,U.numSpotMaps=k,U.numLightProbes=P,i.version=$5++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(E.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(E.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),u++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function fm(e){const t=new X5(e),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function j5(e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new fm(e),t.set(r,[a])):s>=o.length?(a=new fm(e),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const Y5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z5(e,t,n){let i=new bd;const r=new te,s=new te,o=new ge,a=new XD({depthPacking:B3}),l=new jD,c={},h=n.maxTextureSize,d={[Pi]:pn,[pn]:Pi,[Jn]:Jn},u=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Y5,fragmentShader:K5}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new hi;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let p=this.type;this.render=function(R,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const w=e.getRenderTarget(),S=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),G=e.state;G.setBlending(Yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=p!==Ti&&this.type===Ti,M=p===Ti&&this.type!==Ti;for(let C=0,v=R.length;C<v;C++){const N=R[C],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const W=D.getFrameExtents();if(r.multiply(W),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,D.mapSize.y=s.y)),D.map===null||$===!0||M===!0){const J=this.type!==Ti?{minFilter:en,magFilter:en}:{};D.map!==null&&D.map.dispose(),D.map=new Lr(r.x,r.y,J),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}e.setRenderTarget(D.map),e.clear();const K=D.getViewportCount();for(let J=0;J<K;J++){const nt=D.getViewport(J);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),G.viewport(o),D.updateMatrices(N,J),i=D.getFrustum(),y(P,U,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Ti&&b(D,U),D.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(w,S,L)};function b(R,P){const U=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Lr(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(P,null,U,u,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(P,null,U,f,_,null)}function E(R,P,U,w){let S=null;const L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=U.isPointLight===!0?l:a,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const G=S.uuid,$=P.uuid;let M=c[G];M===void 0&&(M={},c[G]=M);let C=M[$];C===void 0&&(C=S.clone(),M[$]=C,P.addEventListener("dispose",k)),S=C}if(S.visible=P.visible,S.wireframe=P.wireframe,w===Ti?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=e.properties.get(S);G.light=U}return S}function y(R,P,U,w,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const $=t.update(R),M=R.material;if(Array.isArray(M)){const C=$.groups;for(let v=0,N=C.length;v<N;v++){const D=C[v],W=M[D.materialIndex];if(W&&W.visible){const K=E(R,W,w,S);R.onBeforeShadow(e,R,P,U,$,K,D),e.renderBufferDirect(U,null,$,K,R,D),R.onAfterShadow(e,R,P,U,$,K,D)}}}else if(M.visible){const C=E(R,M,w,S);R.onBeforeShadow(e,R,P,U,$,C,null),e.renderBufferDirect(U,null,$,C,R,null),R.onAfterShadow(e,R,P,U,$,C,null)}}const G=R.children;for(let $=0,M=G.length;$<M;$++)y(G[$],P,U,w,S)}function k(R){R.target.removeEventListener("dispose",k);for(const U in c){const w=c[U],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const J5={[Nh]:Oh,[Uh]:Vh,[zh]:Gh,[Ss]:Hh,[Oh]:Nh,[Vh]:Uh,[Gh]:zh,[Hh]:Ss};function Q5(e,t){function n(){let z=!1;const vt=new ge;let lt=null;const At=new ge(0,0,0,0);return{setMask:function(ct){lt!==ct&&!z&&(e.colorMask(ct,ct,ct,ct),lt=ct)},setLocked:function(ct){z=ct},setClear:function(ct,rt,Pt,Ft,fe){fe===!0&&(ct*=Ft,rt*=Ft,Pt*=Ft),vt.set(ct,rt,Pt,Ft),At.equals(vt)===!1&&(e.clearColor(ct,rt,Pt,Ft),At.copy(vt))},reset:function(){z=!1,lt=null,At.set(-1,0,0,0)}}}function i(){let z=!1,vt=!1,lt=null,At=null,ct=null;return{setReversed:function(rt){if(vt!==rt){const Pt=t.get("EXT_clip_control");rt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),vt=rt;const Ft=ct;ct=null,this.setClear(Ft)}},getReversed:function(){return vt},setTest:function(rt){rt?ht(e.DEPTH_TEST):dt(e.DEPTH_TEST)},setMask:function(rt){lt!==rt&&!z&&(e.depthMask(rt),lt=rt)},setFunc:function(rt){if(vt&&(rt=J5[rt]),At!==rt){switch(rt){case Nh:e.depthFunc(e.NEVER);break;case Oh:e.depthFunc(e.ALWAYS);break;case Uh:e.depthFunc(e.LESS);break;case Ss:e.depthFunc(e.LEQUAL);break;case zh:e.depthFunc(e.EQUAL);break;case Hh:e.depthFunc(e.GEQUAL);break;case Vh:e.depthFunc(e.GREATER);break;case Gh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}At=rt}},setLocked:function(rt){z=rt},setClear:function(rt){ct!==rt&&(vt&&(rt=1-rt),e.clearDepth(rt),ct=rt)},reset:function(){z=!1,lt=null,At=null,ct=null,vt=!1}}}function r(){let z=!1,vt=null,lt=null,At=null,ct=null,rt=null,Pt=null,Ft=null,fe=null;return{setTest:function(me){z||(me?ht(e.STENCIL_TEST):dt(e.STENCIL_TEST))},setMask:function(me){vt!==me&&!z&&(e.stencilMask(me),vt=me)},setFunc:function(me,an,mn){(lt!==me||At!==an||ct!==mn)&&(e.stencilFunc(me,an,mn),lt=me,At=an,ct=mn)},setOp:function(me,an,mn){(rt!==me||Pt!==an||Ft!==mn)&&(e.stencilOp(me,an,mn),rt=me,Pt=an,Ft=mn)},setLocked:function(me){z=me},setClear:function(me){fe!==me&&(e.clearStencil(me),fe=me)},reset:function(){z=!1,vt=null,lt=null,At=null,ct=null,rt=null,Pt=null,Ft=null,fe=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,b=null,E=null,y=null,k=null,R=null,P=new ee(0,0,0),U=0,w=!1,S=null,L=null,G=null,$=null,M=null;const C=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let v=!1,N=0;const D=e.getParameter(e.VERSION);D.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(D)[1]),v=N>=1):D.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),v=N>=2);let W=null,K={};const J=e.getParameter(e.SCISSOR_BOX),nt=e.getParameter(e.VIEWPORT),mt=new ge().fromArray(J),Z=new ge().fromArray(nt);function Q(z,vt,lt,At){const ct=new Uint8Array(4),rt=e.createTexture();e.bindTexture(z,rt),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pt=0;Pt<lt;Pt++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D(vt,0,e.RGBA,1,1,At,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(vt+Pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return rt}const pt={};pt[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),pt[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pt[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(e.DEPTH_TEST),o.setFunc(Ss),Lt(!1),Xt(Kf),ht(e.CULL_FACE),A(Yi);function ht(z){h[z]!==!0&&(e.enable(z),h[z]=!0)}function dt(z){h[z]!==!1&&(e.disable(z),h[z]=!1)}function Kt(z,vt){return d[z]!==vt?(e.bindFramebuffer(z,vt),d[z]=vt,z===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=vt),z===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ct(z,vt){let lt=f,At=!1;if(z){lt=u.get(vt),lt===void 0&&(lt=[],u.set(vt,lt));const ct=z.textures;if(lt.length!==ct.length||lt[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Pt=ct.length;rt<Pt;rt++)lt[rt]=e.COLOR_ATTACHMENT0+rt;lt.length=ct.length,At=!0}}else lt[0]!==e.BACK&&(lt[0]=e.BACK,At=!0);At&&e.drawBuffers(lt)}function le(z){return m!==z?(e.useProgram(z),m=z,!0):!1}const he={[gr]:e.FUNC_ADD,[o3]:e.FUNC_SUBTRACT,[a3]:e.FUNC_REVERSE_SUBTRACT};he[l3]=e.MIN,he[c3]=e.MAX;const ot={[h3]:e.ZERO,[u3]:e.ONE,[d3]:e.SRC_COLOR,[kh]:e.SRC_ALPHA,[x3]:e.SRC_ALPHA_SATURATE,[g3]:e.DST_COLOR,[p3]:e.DST_ALPHA,[f3]:e.ONE_MINUS_SRC_COLOR,[Bh]:e.ONE_MINUS_SRC_ALPHA,[_3]:e.ONE_MINUS_DST_COLOR,[m3]:e.ONE_MINUS_DST_ALPHA,[v3]:e.CONSTANT_COLOR,[y3]:e.ONE_MINUS_CONSTANT_COLOR,[b3]:e.CONSTANT_ALPHA,[T3]:e.ONE_MINUS_CONSTANT_ALPHA};function A(z,vt,lt,At,ct,rt,Pt,Ft,fe,me){if(z===Yi){_===!0&&(dt(e.BLEND),_=!1);return}if(_===!1&&(ht(e.BLEND),_=!0),z!==s3){if(z!==g||me!==w){if((p!==gr||y!==gr)&&(e.blendEquation(e.FUNC_ADD),p=gr,y=gr),me)switch(z){case as:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zf:e.blendFunc(e.ONE,e.ONE);break;case Jf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Qf:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case as:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zf:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Jf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Qf:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,E=null,k=null,R=null,P.set(0,0,0),U=0,g=z,w=me}return}ct=ct||vt,rt=rt||lt,Pt=Pt||At,(vt!==p||ct!==y)&&(e.blendEquationSeparate(he[vt],he[ct]),p=vt,y=ct),(lt!==b||At!==E||rt!==k||Pt!==R)&&(e.blendFuncSeparate(ot[lt],ot[At],ot[rt],ot[Pt]),b=lt,E=At,k=rt,R=Pt),(Ft.equals(P)===!1||fe!==U)&&(e.blendColor(Ft.r,Ft.g,Ft.b,fe),P.copy(Ft),U=fe),g=z,w=!1}function qt(z,vt){z.side===Jn?dt(e.CULL_FACE):ht(e.CULL_FACE);let lt=z.side===pn;vt&&(lt=!lt),Lt(lt),z.blending===as&&z.transparent===!1?A(Yi):A(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const At=z.stencilWrite;a.setTest(At),At&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ht(e.SAMPLE_ALPHA_TO_COVERAGE):dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(z){S!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),S=z)}function Xt(z){z!==i3?(ht(e.CULL_FACE),z!==L&&(z===Kf?e.cullFace(e.BACK):z===r3?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):dt(e.CULL_FACE),L=z}function St(z){z!==G&&(v&&e.lineWidth(z),G=z)}function re(z,vt,lt){z?(ht(e.POLYGON_OFFSET_FILL),($!==vt||M!==lt)&&(e.polygonOffset(vt,lt),$=vt,M=lt)):dt(e.POLYGON_OFFSET_FILL)}function It(z){z?ht(e.SCISSOR_TEST):dt(e.SCISSOR_TEST)}function Jt(z){z===void 0&&(z=e.TEXTURE0+C-1),W!==z&&(e.activeTexture(z),W=z)}function be(z,vt,lt){lt===void 0&&(W===null?lt=e.TEXTURE0+C-1:lt=W);let At=K[lt];At===void 0&&(At={type:void 0,texture:void 0},K[lt]=At),(At.type!==z||At.texture!==vt)&&(W!==lt&&(e.activeTexture(lt),W=lt),e.bindTexture(z,vt||pt[z]),At.type=z,At.texture=vt)}function F(){const z=K[W];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{e.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{e.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{e.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{e.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{e.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(){try{e.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{e.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{e.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(){try{e.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{e.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(z){mt.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),mt.copy(z))}function Nt(z){Z.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),Z.copy(z))}function Ot(z,vt){let lt=c.get(vt);lt===void 0&&(lt=new WeakMap,c.set(vt,lt));let At=lt.get(z);At===void 0&&(At=e.getUniformBlockIndex(vt,z.name),lt.set(z,At))}function gt(z,vt){const At=c.get(vt).get(z);l.get(vt)!==At&&(e.uniformBlockBinding(vt,At,z.__bindingPointIndex),l.set(vt,At))}function Zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},W=null,K={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,b=null,E=null,y=null,k=null,R=null,P=new ee(0,0,0),U=0,w=!1,S=null,L=null,G=null,$=null,M=null,mt.set(0,0,e.canvas.width,e.canvas.height),Z.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ht,disable:dt,bindFramebuffer:Kt,drawBuffers:Ct,useProgram:le,setBlending:A,setMaterial:qt,setFlipSided:Lt,setCullFace:Xt,setLineWidth:St,setPolygonOffset:re,setScissorTest:It,activeTexture:Jt,bindTexture:be,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:Bt,texImage3D:at,updateUBOMapping:Ot,uniformBlockBinding:gt,texStorage2D:xt,texStorage3D:Dt,texSubImage2D:et,texSubImage3D:it,compressedTexSubImage2D:tt,compressedTexSubImage3D:kt,scissor:Mt,viewport:Nt,reset:Zt}}function tB(e,t,n,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,T){return f?new OffscreenCanvas(F,T):zo("canvas")}function _(F,T,Y){let et=1;const it=be(F);if((it.width>Y||it.height>Y)&&(et=Y/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const tt=Math.floor(et*it.width),kt=Math.floor(et*it.height);d===void 0&&(d=m(tt,kt));const xt=T?m(tt,kt):d;return xt.width=tt,xt.height=kt,xt.getContext("2d").drawImage(F,0,0,tt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+kt+")."),xt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),F;return F}function g(F){return F.generateMipmaps}function p(F){e.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?e.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(F,T,Y,et,it=!1){if(F!==null){if(e[F]!==void 0)return e[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let tt=T;if(T===e.RED&&(Y===e.FLOAT&&(tt=e.R32F),Y===e.HALF_FLOAT&&(tt=e.R16F),Y===e.UNSIGNED_BYTE&&(tt=e.R8)),T===e.RED_INTEGER&&(Y===e.UNSIGNED_BYTE&&(tt=e.R8UI),Y===e.UNSIGNED_SHORT&&(tt=e.R16UI),Y===e.UNSIGNED_INT&&(tt=e.R32UI),Y===e.BYTE&&(tt=e.R8I),Y===e.SHORT&&(tt=e.R16I),Y===e.INT&&(tt=e.R32I)),T===e.RG&&(Y===e.FLOAT&&(tt=e.RG32F),Y===e.HALF_FLOAT&&(tt=e.RG16F),Y===e.UNSIGNED_BYTE&&(tt=e.RG8)),T===e.RG_INTEGER&&(Y===e.UNSIGNED_BYTE&&(tt=e.RG8UI),Y===e.UNSIGNED_SHORT&&(tt=e.RG16UI),Y===e.UNSIGNED_INT&&(tt=e.RG32UI),Y===e.BYTE&&(tt=e.RG8I),Y===e.SHORT&&(tt=e.RG16I),Y===e.INT&&(tt=e.RG32I)),T===e.RGB_INTEGER&&(Y===e.UNSIGNED_BYTE&&(tt=e.RGB8UI),Y===e.UNSIGNED_SHORT&&(tt=e.RGB16UI),Y===e.UNSIGNED_INT&&(tt=e.RGB32UI),Y===e.BYTE&&(tt=e.RGB8I),Y===e.SHORT&&(tt=e.RGB16I),Y===e.INT&&(tt=e.RGB32I)),T===e.RGBA_INTEGER&&(Y===e.UNSIGNED_BYTE&&(tt=e.RGBA8UI),Y===e.UNSIGNED_SHORT&&(tt=e.RGBA16UI),Y===e.UNSIGNED_INT&&(tt=e.RGBA32UI),Y===e.BYTE&&(tt=e.RGBA8I),Y===e.SHORT&&(tt=e.RGBA16I),Y===e.INT&&(tt=e.RGBA32I)),T===e.RGB&&Y===e.UNSIGNED_INT_5_9_9_9_REV&&(tt=e.RGB9_E5),T===e.RGBA){const kt=it?wl:de.getTransfer(et);Y===e.FLOAT&&(tt=e.RGBA32F),Y===e.HALF_FLOAT&&(tt=e.RGBA16F),Y===e.UNSIGNED_BYTE&&(tt=kt===Te?e.SRGB8_ALPHA8:e.RGBA8),Y===e.UNSIGNED_SHORT_4_4_4_4&&(tt=e.RGBA4),Y===e.UNSIGNED_SHORT_5_5_5_1&&(tt=e.RGB5_A1)}return(tt===e.R16F||tt===e.R32F||tt===e.RG16F||tt===e.RG32F||tt===e.RGBA16F||tt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(F,T){let Y;return F?T===null||T===Rr||T===ko?Y=e.DEPTH24_STENCIL8:T===zn?Y=e.DEPTH32F_STENCIL8:T===Io&&(Y=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===ko?Y=e.DEPTH_COMPONENT24:T===zn?Y=e.DEPTH_COMPONENT32F:T===Io&&(Y=e.DEPTH_COMPONENT16),Y}function k(F,T){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function R(F){const T=F.target;T.removeEventListener("dispose",R),U(T),T.isVideoTexture&&h.delete(T)}function P(F){const T=F.target;T.removeEventListener("dispose",P),S(T)}function U(F){const T=i.get(F);if(T.__webglInit===void 0)return;const Y=F.source,et=u.get(Y);if(et){const it=et[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(F),Object.keys(et).length===0&&u.delete(Y)}i.remove(F)}function w(F){const T=i.get(F);e.deleteTexture(T.__webglTexture);const Y=F.source,et=u.get(Y);delete et[T.__cacheKey],o.memory.textures--}function S(F){const T=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let it=0;it<T.__webglFramebuffer[et].length;it++)e.deleteFramebuffer(T.__webglFramebuffer[et][it]);else e.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)e.deleteFramebuffer(T.__webglFramebuffer[et]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=F.textures;for(let et=0,it=Y.length;et<it;et++){const tt=i.get(Y[et]);tt.__webglTexture&&(e.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(Y[et])}i.remove(F)}let L=0;function G(){L=0}function $(){const F=L;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),L+=1,F}function M(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function C(F,T){const Y=i.get(F);if(F.isVideoTexture&&It(F),F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){const et=F.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Y,F,T);return}}n.bindTexture(e.TEXTURE_2D,Y.__webglTexture,e.TEXTURE0+T)}function v(F,T){const Y=i.get(F);if(F.version>0&&Y.__version!==F.version){pt(Y,F,T);return}n.bindTexture(e.TEXTURE_2D_ARRAY,Y.__webglTexture,e.TEXTURE0+T)}function N(F,T){const Y=i.get(F);if(F.version>0&&Y.__version!==F.version){pt(Y,F,T);return}n.bindTexture(e.TEXTURE_3D,Y.__webglTexture,e.TEXTURE0+T)}function D(F,T){const Y=i.get(F);if(F.version>0&&Y.__version!==F.version){ht(Y,F,T);return}n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture,e.TEXTURE0+T)}const W={[Es]:e.REPEAT,[qi]:e.CLAMP_TO_EDGE,[El]:e.MIRRORED_REPEAT},K={[en]:e.NEAREST,[j0]:e.NEAREST_MIPMAP_NEAREST,[fo]:e.NEAREST_MIPMAP_LINEAR,[yn]:e.LINEAR,[Za]:e.LINEAR_MIPMAP_NEAREST,[Ei]:e.LINEAR_MIPMAP_LINEAR},J={[O3]:e.NEVER,[W3]:e.ALWAYS,[U3]:e.LESS,[r_]:e.LEQUAL,[z3]:e.EQUAL,[G3]:e.GEQUAL,[H3]:e.GREATER,[V3]:e.NOTEQUAL};function nt(F,T){if(T.type===zn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===Za||T.magFilter===fo||T.magFilter===Ei||T.minFilter===yn||T.minFilter===Za||T.minFilter===fo||T.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(F,e.TEXTURE_WRAP_S,W[T.wrapS]),e.texParameteri(F,e.TEXTURE_WRAP_T,W[T.wrapT]),(F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)&&e.texParameteri(F,e.TEXTURE_WRAP_R,W[T.wrapR]),e.texParameteri(F,e.TEXTURE_MAG_FILTER,K[T.magFilter]),e.texParameteri(F,e.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(e.texParameteri(F,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(F,e.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===en||T.minFilter!==fo&&T.minFilter!==Ei||T.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");e.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function mt(F,T){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",R));const et=T.source;let it=u.get(et);it===void 0&&(it={},u.set(et,it));const tt=M(T);if(tt!==F.__cacheKey){it[tt]===void 0&&(it[tt]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[tt].usedTimes++;const kt=it[F.__cacheKey];kt!==void 0&&(it[F.__cacheKey].usedTimes--,kt.usedTimes===0&&w(T)),F.__cacheKey=tt,F.__webglTexture=it[tt].texture}return Y}function Z(F,T,Y){return Math.floor(Math.floor(F/Y)/T)}function Q(F,T,Y,et){const tt=F.updateRanges;if(tt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,Y,et,T.data);else{tt.sort((at,Mt)=>at.start-Mt.start);let kt=0;for(let at=1;at<tt.length;at++){const Mt=tt[kt],Nt=tt[at],Ot=Mt.start+Mt.count,gt=Z(Nt.start,T.width,4),Zt=Z(Mt.start,T.width,4);Nt.start<=Ot+1&&gt===Zt&&Z(Nt.start+Nt.count-1,T.width,4)===gt?Mt.count=Math.max(Mt.count,Nt.start+Nt.count-Mt.start):(++kt,tt[kt]=Nt)}tt.length=kt+1;const xt=e.getParameter(e.UNPACK_ROW_LENGTH),Dt=e.getParameter(e.UNPACK_SKIP_PIXELS),Bt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let at=0,Mt=tt.length;at<Mt;at++){const Nt=tt[at],Ot=Math.floor(Nt.start/4),gt=Math.ceil(Nt.count/4),Zt=Ot%T.width,z=Math.floor(Ot/T.width),vt=gt,lt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,z),n.texSubImage2D(e.TEXTURE_2D,0,Zt,z,vt,lt,Y,et,T.data)}F.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,xt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Bt)}}function pt(F,T,Y){let et=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(et=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(et=e.TEXTURE_3D);const it=mt(F,T),tt=T.source;n.bindTexture(et,F.__webglTexture,e.TEXTURE0+Y);const kt=i.get(tt);if(tt.version!==kt.__version||it===!0){n.activeTexture(e.TEXTURE0+Y);const xt=de.getPrimaries(de.workingColorSpace),Dt=T.colorSpace===Wi?null:de.getPrimaries(T.colorSpace),Bt=T.colorSpace===Wi||xt===Dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let at=_(T.image,!1,r.maxTextureSize);at=Jt(T,at);const Mt=s.convert(T.format,T.colorSpace),Nt=s.convert(T.type);let Ot=E(T.internalFormat,Mt,Nt,T.colorSpace,T.isVideoTexture);nt(et,T);let gt;const Zt=T.mipmaps,z=T.isVideoTexture!==!0,vt=kt.__version===void 0||it===!0,lt=tt.dataReady,At=k(T,at);if(T.isDepthTexture)Ot=y(T.format===No,T.type),vt&&(z?n.texStorage2D(e.TEXTURE_2D,1,Ot,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,Ot,at.width,at.height,0,Mt,Nt,null));else if(T.isDataTexture)if(Zt.length>0){z&&vt&&n.texStorage2D(e.TEXTURE_2D,At,Ot,Zt[0].width,Zt[0].height);for(let ct=0,rt=Zt.length;ct<rt;ct++)gt=Zt[ct],z?lt&&n.texSubImage2D(e.TEXTURE_2D,ct,0,0,gt.width,gt.height,Mt,Nt,gt.data):n.texImage2D(e.TEXTURE_2D,ct,Ot,gt.width,gt.height,0,Mt,Nt,gt.data);T.generateMipmaps=!1}else z?(vt&&n.texStorage2D(e.TEXTURE_2D,At,Ot,at.width,at.height),lt&&Q(T,at,Mt,Nt)):n.texImage2D(e.TEXTURE_2D,0,Ot,at.width,at.height,0,Mt,Nt,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,At,Ot,Zt[0].width,Zt[0].height,at.depth);for(let ct=0,rt=Zt.length;ct<rt;ct++)if(gt=Zt[ct],T.format!==An)if(Mt!==null)if(z){if(lt)if(T.layerUpdates.size>0){const Pt=Gp(gt.width,gt.height,T.format,T.type);for(const Ft of T.layerUpdates){const fe=gt.data.subarray(Ft*Pt/gt.data.BYTES_PER_ELEMENT,(Ft+1)*Pt/gt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,Ft,gt.width,gt.height,1,Mt,fe)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,at.depth,Mt,gt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ct,Ot,gt.width,gt.height,at.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?lt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,at.depth,Mt,Nt,gt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ct,Ot,gt.width,gt.height,at.depth,0,Mt,Nt,gt.data)}else{z&&vt&&n.texStorage2D(e.TEXTURE_2D,At,Ot,Zt[0].width,Zt[0].height);for(let ct=0,rt=Zt.length;ct<rt;ct++)gt=Zt[ct],T.format!==An?Mt!==null?z?lt&&n.compressedTexSubImage2D(e.TEXTURE_2D,ct,0,0,gt.width,gt.height,Mt,gt.data):n.compressedTexImage2D(e.TEXTURE_2D,ct,Ot,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?lt&&n.texSubImage2D(e.TEXTURE_2D,ct,0,0,gt.width,gt.height,Mt,Nt,gt.data):n.texImage2D(e.TEXTURE_2D,ct,Ot,gt.width,gt.height,0,Mt,Nt,gt.data)}else if(T.isDataArrayTexture)if(z){if(vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,At,Ot,at.width,at.height,at.depth),lt)if(T.layerUpdates.size>0){const ct=Gp(at.width,at.height,T.format,T.type);for(const rt of T.layerUpdates){const Pt=at.data.subarray(rt*ct/at.data.BYTES_PER_ELEMENT,(rt+1)*ct/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,rt,at.width,at.height,1,Mt,Nt,Pt)}T.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,Nt,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ot,at.width,at.height,at.depth,0,Mt,Nt,at.data);else if(T.isData3DTexture)z?(vt&&n.texStorage3D(e.TEXTURE_3D,At,Ot,at.width,at.height,at.depth),lt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,Nt,at.data)):n.texImage3D(e.TEXTURE_3D,0,Ot,at.width,at.height,at.depth,0,Mt,Nt,at.data);else if(T.isFramebufferTexture){if(vt)if(z)n.texStorage2D(e.TEXTURE_2D,At,Ot,at.width,at.height);else{let ct=at.width,rt=at.height;for(let Pt=0;Pt<At;Pt++)n.texImage2D(e.TEXTURE_2D,Pt,Ot,ct,rt,0,Mt,Nt,null),ct>>=1,rt>>=1}}else if(Zt.length>0){if(z&&vt){const ct=be(Zt[0]);n.texStorage2D(e.TEXTURE_2D,At,Ot,ct.width,ct.height)}for(let ct=0,rt=Zt.length;ct<rt;ct++)gt=Zt[ct],z?lt&&n.texSubImage2D(e.TEXTURE_2D,ct,0,0,Mt,Nt,gt):n.texImage2D(e.TEXTURE_2D,ct,Ot,Mt,Nt,gt);T.generateMipmaps=!1}else if(z){if(vt){const ct=be(at);n.texStorage2D(e.TEXTURE_2D,At,Ot,ct.width,ct.height)}lt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Mt,Nt,at)}else n.texImage2D(e.TEXTURE_2D,0,Ot,Mt,Nt,at);g(T)&&p(et),kt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ht(F,T,Y){if(T.image.length!==6)return;const et=mt(F,T),it=T.source;n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+Y);const tt=i.get(it);if(it.version!==tt.__version||et===!0){n.activeTexture(e.TEXTURE0+Y);const kt=de.getPrimaries(de.workingColorSpace),xt=T.colorSpace===Wi?null:de.getPrimaries(T.colorSpace),Dt=T.colorSpace===Wi||kt===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Bt=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!Bt&&!at?Mt[rt]=_(T.image[rt],!0,r.maxCubemapSize):Mt[rt]=at?T.image[rt].image:T.image[rt],Mt[rt]=Jt(T,Mt[rt]);const Nt=Mt[0],Ot=s.convert(T.format,T.colorSpace),gt=s.convert(T.type),Zt=E(T.internalFormat,Ot,gt,T.colorSpace),z=T.isVideoTexture!==!0,vt=tt.__version===void 0||et===!0,lt=it.dataReady;let At=k(T,Nt);nt(e.TEXTURE_CUBE_MAP,T);let ct;if(Bt){z&&vt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,At,Zt,Nt.width,Nt.height);for(let rt=0;rt<6;rt++){ct=Mt[rt].mipmaps;for(let Pt=0;Pt<ct.length;Pt++){const Ft=ct[Pt];T.format!==An?Ot!==null?z?lt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Ft.width,Ft.height,Ot,Ft.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,Zt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Ft.width,Ft.height,Ot,gt,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,Zt,Ft.width,Ft.height,0,Ot,gt,Ft.data)}}}else{if(ct=T.mipmaps,z&&vt){ct.length>0&&At++;const rt=be(Mt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,At,Zt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(at){z?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Ot,gt,Mt[rt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,Mt[rt].width,Mt[rt].height,0,Ot,gt,Mt[rt].data);for(let Pt=0;Pt<ct.length;Pt++){const fe=ct[Pt].image[rt].image;z?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,fe.width,fe.height,Ot,gt,fe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,Zt,fe.width,fe.height,0,Ot,gt,fe.data)}}else{z?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,gt,Mt[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,Ot,gt,Mt[rt]);for(let Pt=0;Pt<ct.length;Pt++){const Ft=ct[Pt];z?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Ot,gt,Ft.image[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,Zt,Ot,gt,Ft.image[rt])}}}g(T)&&p(e.TEXTURE_CUBE_MAP),tt.__version=it.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function dt(F,T,Y,et,it,tt){const kt=s.convert(Y.format,Y.colorSpace),xt=s.convert(Y.type),Dt=E(Y.internalFormat,kt,xt,Y.colorSpace),Bt=i.get(T),at=i.get(Y);if(at.__renderTarget=T,!Bt.__hasExternalTextures){const Mt=Math.max(1,T.width>>tt),Nt=Math.max(1,T.height>>tt);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,tt,Dt,Mt,Nt,T.depth,0,kt,xt,null):n.texImage2D(it,tt,Dt,Mt,Nt,0,kt,xt,null)}n.bindFramebuffer(e.FRAMEBUFFER,F),re(T)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,it,at.__webglTexture,0,St(T)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,et,it,at.__webglTexture,tt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Kt(F,T,Y){if(e.bindRenderbuffer(e.RENDERBUFFER,F),T.depthBuffer){const et=T.depthTexture,it=et&&et.isDepthTexture?et.type:null,tt=y(T.stencilBuffer,it),kt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xt=St(T);re(T)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,tt,T.width,T.height):Y?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,tt,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,tt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,kt,e.RENDERBUFFER,F)}else{const et=T.textures;for(let it=0;it<et.length;it++){const tt=et[it],kt=s.convert(tt.format,tt.colorSpace),xt=s.convert(tt.type),Dt=E(tt.internalFormat,kt,xt,tt.colorSpace),Bt=St(T);Y&&re(T)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Bt,Dt,T.width,T.height):re(T)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Bt,Dt,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,Dt,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ct(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(T.depthTexture);et.__renderTarget=T,(!et.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),C(T.depthTexture,0);const it=et.__webglTexture,tt=St(T);if(T.depthTexture.format===Bo)re(T)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0,tt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0);else if(T.depthTexture.format===No)re(T)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0,tt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function le(F){const T=i.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const et=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),et){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=et}if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const et=F.texture.mipmaps;et&&et.length>0?Ct(T.__webglFramebuffer[0],F):Ct(T.__webglFramebuffer,F)}else if(Y){T.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[et]),T.__webglDepthbuffer[et]===void 0)T.__webglDepthbuffer[et]=e.createRenderbuffer(),Kt(T.__webglDepthbuffer[et],F,!1);else{const it=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer[et];e.bindRenderbuffer(e.RENDERBUFFER,tt),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,tt)}}else{const et=F.texture.mipmaps;if(et&&et.length>0?n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),Kt(T.__webglDepthbuffer,F,!1);else{const it=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,tt),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,tt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(F,T,Y){const et=i.get(F);T!==void 0&&dt(et.__webglFramebuffer,F,F.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Y!==void 0&&le(F)}function ot(F){const T=F.texture,Y=i.get(F),et=i.get(T);F.addEventListener("dispose",P);const it=F.textures,tt=F.isWebGLCubeRenderTarget===!0,kt=it.length>1;if(kt||(et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture()),et.__version=T.version,o.memory.textures++),tt){Y.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[xt]=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)Y.__webglFramebuffer[xt][Dt]=e.createFramebuffer()}else Y.__webglFramebuffer[xt]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let xt=0;xt<T.mipmaps.length;xt++)Y.__webglFramebuffer[xt]=e.createFramebuffer()}else Y.__webglFramebuffer=e.createFramebuffer();if(kt)for(let xt=0,Dt=it.length;xt<Dt;xt++){const Bt=i.get(it[xt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=e.createTexture(),o.memory.textures++)}if(F.samples>0&&re(F)===!1){Y.__webglMultisampledFramebuffer=e.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let xt=0;xt<it.length;xt++){const Dt=it[xt];Y.__webglColorRenderbuffer[xt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Y.__webglColorRenderbuffer[xt]);const Bt=s.convert(Dt.format,Dt.colorSpace),at=s.convert(Dt.type),Mt=E(Dt.internalFormat,Bt,at,Dt.colorSpace,F.isXRRenderTarget===!0),Nt=St(F);e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,Mt,F.width,F.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Y.__webglColorRenderbuffer[xt])}e.bindRenderbuffer(e.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=e.createRenderbuffer(),Kt(Y.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(tt){n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),nt(e.TEXTURE_CUBE_MAP,T);for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Dt=0;Dt<T.mipmaps.length;Dt++)dt(Y.__webglFramebuffer[xt][Dt],F,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt);else dt(Y.__webglFramebuffer[xt],F,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(T)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(kt){for(let xt=0,Dt=it.length;xt<Dt;xt++){const Bt=it[xt],at=i.get(Bt);n.bindTexture(e.TEXTURE_2D,at.__webglTexture),nt(e.TEXTURE_2D,Bt),dt(Y.__webglFramebuffer,F,Bt,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,0),g(Bt)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let xt=e.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(xt=F.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(xt,et.__webglTexture),nt(xt,T),T.mipmaps&&T.mipmaps.length>0)for(let Dt=0;Dt<T.mipmaps.length;Dt++)dt(Y.__webglFramebuffer[Dt],F,T,e.COLOR_ATTACHMENT0,xt,Dt);else dt(Y.__webglFramebuffer,F,T,e.COLOR_ATTACHMENT0,xt,0);g(T)&&p(xt),n.unbindTexture()}F.depthBuffer&&le(F)}function A(F){const T=F.textures;for(let Y=0,et=T.length;Y<et;Y++){const it=T[Y];if(g(it)){const tt=b(F),kt=i.get(it).__webglTexture;n.bindTexture(tt,kt),p(tt),n.unbindTexture()}}}const qt=[],Lt=[];function Xt(F){if(F.samples>0){if(re(F)===!1){const T=F.textures,Y=F.width,et=F.height;let it=e.COLOR_BUFFER_BIT;const tt=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,kt=i.get(F),xt=T.length>1;if(xt)for(let Bt=0;Bt<T.length;Bt++)n.bindFramebuffer(e.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Bt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,kt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Bt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Dt=F.texture.mipmaps;Dt&&Dt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),xt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,kt.__webglColorRenderbuffer[Bt]);const at=i.get(T[Bt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,at,0)}e.blitFramebuffer(0,0,Y,et,0,0,Y,et,it,e.NEAREST),l===!0&&(qt.length=0,Lt.length=0,qt.push(e.COLOR_ATTACHMENT0+Bt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(qt.push(tt),Lt.push(tt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Lt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,qt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xt)for(let Bt=0;Bt<T.length;Bt++){n.bindFramebuffer(e.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Bt,e.RENDERBUFFER,kt.__webglColorRenderbuffer[Bt]);const at=i.get(T[Bt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,kt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Bt,e.TEXTURE_2D,at,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const T=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function St(F){return Math.min(r.maxSamples,F.samples)}function re(F){const T=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(F){const T=o.render.frame;h.get(F)!==T&&(h.set(F,T),F.update())}function Jt(F,T){const Y=F.colorSpace,et=F.format,it=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==on&&Y!==Wi&&(de.getTransfer(Y)===Te?(et!==An||it!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function be(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.setTexture2D=C,this.setTexture2DArray=v,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=he,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=re}function eB(e,t){function n(i,r=Wi){let s;const o=de.getTransfer(r);if(i===ri)return e.UNSIGNED_BYTE;if(i===ud)return e.UNSIGNED_SHORT_4_4_4_4;if(i===dd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Z0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Y0)return e.BYTE;if(i===K0)return e.SHORT;if(i===Io)return e.UNSIGNED_SHORT;if(i===hd)return e.INT;if(i===Rr)return e.UNSIGNED_INT;if(i===zn)return e.FLOAT;if(i===Ko)return e.HALF_FLOAT;if(i===J0)return e.ALPHA;if(i===Q0)return e.RGB;if(i===An)return e.RGBA;if(i===Bo)return e.DEPTH_COMPONENT;if(i===No)return e.DEPTH_STENCIL;if(i===fd)return e.RED;if(i===pd)return e.RED_INTEGER;if(i===t_)return e.RG;if(i===md)return e.RG_INTEGER;if(i===gd)return e.RGBA_INTEGER;if(i===Ja||i===Qa||i===tl||i===el)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qh||i===Xh||i===jh||i===Yh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Zh||i===Jh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kh||i===Zh)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qh||i===tu||i===eu||i===nu||i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===hu||i===uu||i===du)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qh)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===iu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ru)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ou)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===au)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===du)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===fu||i===pu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===nl)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===e_||i===mu||i===gu||i===_u)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const nB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iB=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rB{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new Oe,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new tr({vertexShader:nB,fragmentShader:iB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new Zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sB extends Ir{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const _=new rB,g=n.getContextAttributes();let p=null,b=null;const E=[],y=[],k=new te;let R=null;const P=new Ze;P.viewport=new ge;const U=new Ze;U.viewport=new ge;const w=[P,U],S=new gP;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=E[Z];return Q===void 0&&(Q=new $c,E[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=E[Z];return Q===void 0&&(Q=new $c,E[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=E[Z];return Q===void 0&&(Q=new $c,E[Z]=Q),Q.getHandSpace()};function $(Z){const Q=y.indexOf(Z.inputSource);if(Q===-1)return;const pt=E[Q];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||o),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function M(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",C);for(let Z=0;Z<E.length;Z++){const Q=y[Z];Q!==null&&(y[Z]=null,E[Z].disconnect(Q))}L=null,G=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,r=null,b=null,mt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",M),r.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,ht=null,dt=null;g.depth&&(dt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=g.stencil?No:Bo,ht=g.stencil?ko:Rr);const Kt={colorFormat:n.RGBA8,depthFormat:dt,scaleFactor:s};d=new XRWebGLBinding(r,n),u=d.createProjectionLayer(Kt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Lr(u.textureWidth,u.textureHeight,{format:An,type:ri,depthTexture:new v_(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,pt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Lr(f.framebufferWidth,f.framebufferHeight,{format:An,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),mt.setContext(r),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function C(Z){for(let Q=0;Q<Z.removed.length;Q++){const pt=Z.removed[Q],ht=y.indexOf(pt);ht>=0&&(y[ht]=null,E[ht].disconnect(pt))}for(let Q=0;Q<Z.added.length;Q++){const pt=Z.added[Q];let ht=y.indexOf(pt);if(ht===-1){for(let Kt=0;Kt<E.length;Kt++)if(Kt>=y.length){y.push(pt),ht=Kt;break}else if(y[Kt]===null){y[Kt]=pt,ht=Kt;break}if(ht===-1)break}const dt=E[ht];dt&&dt.connect(pt)}}const v=new V,N=new V;function D(Z,Q,pt){v.setFromMatrixPosition(Q.matrixWorld),N.setFromMatrixPosition(pt.matrixWorld);const ht=v.distanceTo(N),dt=Q.projectionMatrix.elements,Kt=pt.projectionMatrix.elements,Ct=dt[14]/(dt[10]-1),le=dt[14]/(dt[10]+1),he=(dt[9]+1)/dt[5],ot=(dt[9]-1)/dt[5],A=(dt[8]-1)/dt[0],qt=(Kt[8]+1)/Kt[0],Lt=Ct*A,Xt=Ct*qt,St=ht/(-A+qt),re=St*-A;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(St),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),dt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const It=Ct+St,Jt=le+St,be=Lt-re,F=Xt+(ht-re),T=he*le/Jt*It,Y=ot*le/Jt*It;Z.projectionMatrix.makePerspective(be,F,T,Y,It,Jt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function W(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let Q=Z.near,pt=Z.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),S.near=U.near=P.near=Q,S.far=U.far=P.far=pt,(L!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),P.layers.mask=Z.layers.mask|2,U.layers.mask=Z.layers.mask|4,S.layers.mask=P.layers.mask|U.layers.mask;const ht=Z.parent,dt=S.cameras;W(S,ht);for(let Kt=0;Kt<dt.length;Kt++)W(dt[Kt],ht);dt.length===2?D(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),K(Z,S,ht)};function K(Z,Q,pt){pt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let J=null;function nt(Z,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ht=!1;pt.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let Ct=0;Ct<pt.length;Ct++){const le=pt[Ct];let he=null;if(f!==null)he=f.getViewport(le);else{const A=d.getViewSubImage(u,le);he=A.viewport,Ct===0&&(t.setRenderTargetTextures(b,A.colorTexture,A.depthStencilTexture),t.setRenderTarget(b))}let ot=w[Ct];ot===void 0&&(ot=new Ze,ot.layers.enable(Ct),ot.viewport=new ge,w[Ct]=ot),ot.matrix.fromArray(le.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(le.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(he.x,he.y,he.width,he.height),Ct===0&&(S.matrix.copy(ot.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(ot)}const dt=r.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ct=d.getDepthInformation(pt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,r.renderState)}}for(let pt=0;pt<E.length;pt++){const ht=y[pt],dt=E[pt];ht!==null&&dt!==void 0&&dt.update(ht,Q,c||o)}J&&J(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}const mt=new M_;mt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}}const ur=new oi,oB=new ie;function aB(e,t){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,d_(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,ur.copy(y),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.envMapRotation.value.setFromMatrix4(oB.makeRotationFromEuler(ur)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=E*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lB(e,t,n,i){let r={},s={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const y=E.program;i.uniformBlockBinding(b,y)}function c(b,E){let y=r[b.id];y===void 0&&(m(b),y=h(b),r[b.id]=y,b.addEventListener("dispose",g));const k=E.program;i.updateUBOMapping(b,k);const R=t.render.frame;s[b.id]!==R&&(u(b),s[b.id]=R)}function h(b){const E=d();b.__bindingPointIndex=E;const y=e.createBuffer(),k=b.__size,R=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,k,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const E=r[b.id],y=b.uniforms,k=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let R=0,P=y.length;R<P;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,S=U.length;w<S;w++){const L=U[w];if(f(L,R,w,k)===!0){const G=L.__offset,$=Array.isArray(L.value)?L.value:[L.value];let M=0;for(let C=0;C<$.length;C++){const v=$[C],N=_(v);typeof v=="number"||typeof v=="boolean"?(L.__data[0]=v,e.bufferSubData(e.UNIFORM_BUFFER,G+M,L.__data)):v.isMatrix3?(L.__data[0]=v.elements[0],L.__data[1]=v.elements[1],L.__data[2]=v.elements[2],L.__data[3]=0,L.__data[4]=v.elements[3],L.__data[5]=v.elements[4],L.__data[6]=v.elements[5],L.__data[7]=0,L.__data[8]=v.elements[6],L.__data[9]=v.elements[7],L.__data[10]=v.elements[8],L.__data[11]=0):(v.toArray(L.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,G,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(b,E,y,k){const R=b.value,P=E+"_"+y;if(k[P]===void 0)return typeof R=="number"||typeof R=="boolean"?k[P]=R:k[P]=R.clone(),!0;{const U=k[P];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return k[P]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function m(b){const E=b.uniforms;let y=0;const k=16;for(let P=0,U=E.length;P<U;P++){const w=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,L=w.length;S<L;S++){const G=w[S],$=Array.isArray(G.value)?G.value:[G.value];for(let M=0,C=$.length;M<C;M++){const v=$[M],N=_(v),D=y%k,W=D%N.boundary,K=D+W;y+=W,K!==0&&k-K<N.storage&&(y+=k-K),G.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=N.storage}}}const R=y%k;return R>0&&(y+=k-R),b.__size=y,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const b in r)e.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class cB{constructor(t={}){const{canvas:n=aD(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const b=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let k=!1;this._outputColorSpace=ze;let R=0,P=0,U=null,w=-1,S=null;const L=new ge,G=new ge;let $=null;const M=new ee(0);let C=0,v=n.width,N=n.height,D=1,W=null,K=null;const J=new ge(0,0,v,N),nt=new ge(0,0,v,N);let mt=!1;const Z=new bd;let Q=!1,pt=!1;const ht=new ie,dt=new ie,Kt=new V,Ct=new ge,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ot(){return U===null?D:1}let A=i;function qt(x,I){return n.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",rt,!1),A===null){const I="webgl2";if(A=qt(I,x),A===null)throw qt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Lt,Xt,St,re,It,Jt,be,F,T,Y,et,it,tt,kt,xt,Dt,Bt,at,Mt,Nt,Ot,gt,Zt,z;function vt(){Lt=new vk(A),Lt.init(),gt=new eB(A,Lt),Xt=new dk(A,Lt,t,gt),St=new Q5(A,Lt),Xt.reverseDepthBuffer&&u&&St.buffers.depth.setReversed(!0),re=new Tk(A),It=new z5,Jt=new tB(A,Lt,St,It,Xt,gt,re),be=new pk(y),F=new xk(y),T=new AP(A),Zt=new hk(A,T),Y=new yk(A,T,re,Zt),et=new Mk(A,Y,T,re),Mt=new Sk(A,Xt,Jt),Dt=new fk(It),it=new U5(y,be,F,Lt,Xt,Zt,Dt),tt=new aB(y,It),kt=new V5,xt=new j5(Lt),at=new ck(y,be,F,St,et,f,l),Bt=new Z5(y,et,Xt),z=new lB(A,re,Xt,St),Nt=new uk(A,Lt,re),Ot=new bk(A,Lt,re),re.programs=it.programs,y.capabilities=Xt,y.extensions=Lt,y.properties=It,y.renderLists=kt,y.shadowMap=Bt,y.state=St,y.info=re}vt();const lt=new sB(y,A);this.xr=lt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=Lt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Lt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(x){x!==void 0&&(D=x,this.setSize(v,N,!1))},this.getSize=function(x){return x.set(v,N)},this.setSize=function(x,I,X=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}v=x,N=I,n.width=Math.floor(x*D),n.height=Math.floor(I*D),X===!0&&(n.style.width=x+"px",n.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(v*D,N*D).floor()},this.setDrawingBufferSize=function(x,I,X){v=x,N=I,D=X,n.width=Math.floor(x*X),n.height=Math.floor(I*X),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,I,X,j){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,I,X,j),St.viewport(L.copy(J).multiplyScalar(D).round())},this.getScissor=function(x){return x.copy(nt)},this.setScissor=function(x,I,X,j){x.isVector4?nt.set(x.x,x.y,x.z,x.w):nt.set(x,I,X,j),St.scissor(G.copy(nt).multiplyScalar(D).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(x){St.setScissorTest(mt=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,X=!0){let j=0;if(x){let H=!1;if(U!==null){const st=U.texture.format;H=st===gd||st===md||st===pd}if(H){const st=U.texture.type,ft=st===ri||st===Rr||st===Io||st===ko||st===ud||st===dd,wt=at.getClearColor(),Et=at.getClearAlpha(),Rt=wt.r,jt=wt.g,zt=wt.b;ft?(m[0]=Rt,m[1]=jt,m[2]=zt,m[3]=Et,A.clearBufferuiv(A.COLOR,0,m)):(_[0]=Rt,_[1]=jt,_[2]=zt,_[3]=Et,A.clearBufferiv(A.COLOR,0,_))}else j|=A.COLOR_BUFFER_BIT}I&&(j|=A.DEPTH_BUFFER_BIT),X&&(j|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),at.dispose(),kt.dispose(),xt.dispose(),It.dispose(),be.dispose(),F.dispose(),et.dispose(),Zt.dispose(),z.dispose(),it.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Hs),lt.removeEventListener("sessionend",Vs),di.stop()};function At(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const x=re.autoReset,I=Bt.enabled,X=Bt.autoUpdate,j=Bt.needsUpdate,H=Bt.type;vt(),re.autoReset=x,Bt.enabled=I,Bt.autoUpdate=X,Bt.needsUpdate=j,Bt.type=H}function rt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Pt(x){const I=x.target;I.removeEventListener("dispose",Pt),Ft(I)}function Ft(x){fe(x),It.remove(x)}function fe(x){const I=It.get(x).programs;I!==void 0&&(I.forEach(function(X){it.releaseProgram(X)}),x.isShaderMaterial&&it.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,X,j,H,st){I===null&&(I=le);const ft=H.isMesh&&H.matrixWorld.determinant()<0,wt=ta(x,I,X,j,H);St.setMaterial(j,ft);let Et=X.index,Rt=1;if(j.wireframe===!0){if(Et=Y.getWireframeAttribute(X),Et===void 0)return;Rt=2}const jt=X.drawRange,zt=X.attributes.position;let ue=jt.start*Rt,xe=(jt.start+jt.count)*Rt;st!==null&&(ue=Math.max(ue,st.start*Rt),xe=Math.min(xe,(st.start+st.count)*Rt)),Et!==null?(ue=Math.max(ue,0),xe=Math.min(xe,Et.count)):zt!=null&&(ue=Math.max(ue,0),xe=Math.min(xe,zt.count));const Ee=xe-ue;if(Ee<0||Ee===1/0)return;Zt.setup(H,j,wt,X,Et);let Re,pe=Nt;if(Et!==null&&(Re=T.get(Et),pe=Ot,pe.setIndex(Re)),H.isMesh)j.wireframe===!0?(St.setLineWidth(j.wireframeLinewidth*ot()),pe.setMode(A.LINES)):pe.setMode(A.TRIANGLES);else if(H.isLine){let $t=j.linewidth;$t===void 0&&($t=1),St.setLineWidth($t*ot()),H.isLineSegments?pe.setMode(A.LINES):H.isLineLoop?pe.setMode(A.LINE_LOOP):pe.setMode(A.LINE_STRIP)}else H.isPoints?pe.setMode(A.POINTS):H.isSprite&&pe.setMode(A.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $t=H._multiDrawStarts,Ue=H._multiDrawCounts,_e=H._multiDrawCount,Dn=Et?T.get(Et).bytesPerElement:1,Br=It.get(j).currentProgram.getUniforms();for(let gn=0;gn<_e;gn++)Br.setValue(A,"_gl_DrawID",gn),pe.render($t[gn]/Dn,Ue[gn])}else if(H.isInstancedMesh)pe.renderInstances(ue,Ee,H.count);else if(X.isInstancedBufferGeometry){const $t=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ue=Math.min(X.instanceCount,$t);pe.renderInstances(ue,Ee,Ue)}else pe.render(ue,Ee)};function me(x,I,X){x.transparent===!0&&x.side===Jn&&x.forceSinglePass===!1?(x.side=pn,x.needsUpdate=!0,ir(x,I,X),x.side=Pi,x.needsUpdate=!0,ir(x,I,X),x.side=Jn):ir(x,I,X)}this.compile=function(x,I,X=null){X===null&&(X=x),p=xt.get(X),p.init(I),E.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),x!==X&&x.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const st=H.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const wt=st[ft];me(wt,X,H),j.add(wt)}else me(st,X,H),j.add(st)}),p=E.pop(),j},this.compileAsync=function(x,I,X=null){const j=this.compile(x,I,X);return new Promise(H=>{function st(){if(j.forEach(function(ft){It.get(ft).currentProgram.isReady()&&j.delete(ft)}),j.size===0){H(x);return}setTimeout(st,10)}Lt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let an=null;function mn(x){an&&an(x)}function Hs(){di.stop()}function Vs(){di.start()}const di=new M_;di.setAnimationLoop(mn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(x){an=x,lt.setAnimationLoop(x),x===null?di.stop():di.start()},lt.addEventListener("sessionstart",Hs),lt.addEventListener("sessionend",Vs),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(I),I=lt.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,I,U),p=xt.get(x,E.length),p.init(I),E.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(dt),pt=this.localClippingEnabled,Q=Dt.init(this.clippingPlanes,pt),g=kt.get(x,b.length),g.init(),b.push(g),lt.enabled===!0&&lt.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&ln(st,I,-1/0,y.sortObjects)}ln(x,I,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,K),he=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,he&&at.addToRenderList(g,x),this.info.render.frame++,Q===!0&&Dt.beginShadows();const X=p.state.shadowsArray;Bt.render(X,x,I),Q===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,H=g.transmissive;if(p.setupLights(),I.isArrayCamera){const st=I.cameras;if(H.length>0)for(let ft=0,wt=st.length;ft<wt;ft++){const Et=st[ft];Gs(j,H,x,Et)}he&&at.render(x);for(let ft=0,wt=st.length;ft<wt;ft++){const Et=st[ft];Xn(g,x,Et,Et.viewport)}}else H.length>0&&Gs(j,H,x,I),he&&at.render(x),Xn(g,x,I);U!==null&&P===0&&(Jt.updateMultisampleRenderTarget(U),Jt.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(y,x,I),Zt.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],Q===!0&&Dt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ln(x,I,X,j){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z.intersectsSprite(x)){j&&Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(dt);const ft=et.update(x),wt=x.material;wt.visible&&g.push(x,ft,wt,X,Ct.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z.intersectsObject(x))){const ft=et.update(x),wt=x.material;if(j&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ct.copy(x.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ct.copy(ft.boundingSphere.center)),Ct.applyMatrix4(x.matrixWorld).applyMatrix4(dt)),Array.isArray(wt)){const Et=ft.groups;for(let Rt=0,jt=Et.length;Rt<jt;Rt++){const zt=Et[Rt],ue=wt[zt.materialIndex];ue&&ue.visible&&g.push(x,ft,ue,X,Ct.z,zt)}}else wt.visible&&g.push(x,ft,wt,X,Ct.z,null)}}const st=x.children;for(let ft=0,wt=st.length;ft<wt;ft++)ln(st[ft],I,X,j)}function Xn(x,I,X,j){const H=x.opaque,st=x.transmissive,ft=x.transparent;p.setupLightsView(X),Q===!0&&Dt.setGlobalState(y.clippingPlanes,X),j&&St.viewport(L.copy(j)),H.length>0&&nr(H,I,X),st.length>0&&nr(st,I,X),ft.length>0&&nr(ft,I,X),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Gs(x,I,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Lr(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Ko:ri,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const st=p.state.transmissionRenderTarget[j.id],ft=j.viewport||L;st.setSize(ft.z*y.transmissionResolutionScale,ft.w*y.transmissionResolutionScale);const wt=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(M),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear(),he&&at.render(X);const Et=y.toneMapping;y.toneMapping=Ki;const Rt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Q===!0&&Dt.setGlobalState(y.clippingPlanes,j),nr(x,X,j),Jt.updateMultisampleRenderTarget(st),Jt.updateRenderTargetMipmap(st),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let zt=0,ue=I.length;zt<ue;zt++){const xe=I[zt],Ee=xe.object,Re=xe.geometry,pe=xe.material,$t=xe.group;if(pe.side===Jn&&Ee.layers.test(j.layers)){const Ue=pe.side;pe.side=pn,pe.needsUpdate=!0,kr(Ee,X,j,Re,pe,$t),pe.side=Ue,pe.needsUpdate=!0,jt=!0}}jt===!0&&(Jt.updateMultisampleRenderTarget(st),Jt.updateRenderTargetMipmap(st))}y.setRenderTarget(wt),y.setClearColor(M,C),Rt!==void 0&&(j.viewport=Rt),y.toneMapping=Et}function nr(x,I,X){const j=I.isScene===!0?I.overrideMaterial:null;for(let H=0,st=x.length;H<st;H++){const ft=x[H],wt=ft.object,Et=ft.geometry,Rt=ft.group;let jt=ft.material;jt.allowOverride===!0&&j!==null&&(jt=j),wt.layers.test(X.layers)&&kr(wt,I,X,Et,jt,Rt)}}function kr(x,I,X,j,H,st){x.onBeforeRender(y,I,X,j,H,st),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(y,I,X,j,x,st),H.transparent===!0&&H.side===Jn&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,y.renderBufferDirect(X,I,j,H,x,st),H.side=Pi,H.needsUpdate=!0,y.renderBufferDirect(X,I,j,H,x,st),H.side=Jn):y.renderBufferDirect(X,I,j,H,x,st),x.onAfterRender(y,I,X,j,H,st)}function ir(x,I,X){I.isScene!==!0&&(I=le);const j=It.get(x),H=p.state.lights,st=p.state.shadowsArray,ft=H.state.version,wt=it.getParameters(x,H.state,st,I,X),Et=it.getProgramCacheKey(wt);let Rt=j.programs;j.environment=x.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(x.isMeshStandardMaterial?F:be).get(x.envMap||j.environment),j.envMapRotation=j.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",Pt),Rt=new Map,j.programs=Rt);let jt=Rt.get(Et);if(jt!==void 0){if(j.currentProgram===jt&&j.lightsStateVersion===ft)return Ws(x,wt),jt}else wt.uniforms=it.getUniforms(x),x.onBeforeCompile(wt,y),jt=it.acquireProgram(wt,Et),Rt.set(Et,jt),j.uniforms=wt.uniforms;const zt=j.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(zt.clippingPlanes=Dt.uniform),Ws(x,wt),j.needsLights=na(x),j.lightsStateVersion=ft,j.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=jt,j.uniformsList=null,jt}function Tn(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=il.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ws(x,I){const X=It.get(x);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function ta(x,I,X,j,H){I.isScene!==!0&&(I=le),Jt.resetTextureUnits();const st=I.fog,ft=j.isMeshStandardMaterial?I.environment:null,wt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:on,Et=(j.isMeshStandardMaterial?F:be).get(j.envMap||ft),Rt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,jt=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color;let Ee=Ki;j.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ee=y.toneMapping);const Re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=Re!==void 0?Re.length:0,$t=It.get(j),Ue=p.state.lights;if(Q===!0&&(pt===!0||x!==S)){const Xe=x===S&&j.id===w;Dt.setState(j,x,Xe)}let _e=!1;j.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ue.state.version||$t.outputColorSpace!==wt||H.isBatchedMesh&&$t.batching===!1||!H.isBatchedMesh&&$t.batching===!0||H.isBatchedMesh&&$t.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&$t.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&$t.instancing===!1||!H.isInstancedMesh&&$t.instancing===!0||H.isSkinnedMesh&&$t.skinning===!1||!H.isSkinnedMesh&&$t.skinning===!0||H.isInstancedMesh&&$t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$t.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&$t.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&$t.instancingMorph===!1&&H.morphTexture!==null||$t.envMap!==Et||j.fog===!0&&$t.fog!==st||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Dt.numPlanes||$t.numIntersection!==Dt.numIntersection)||$t.vertexAlphas!==Rt||$t.vertexTangents!==jt||$t.morphTargets!==zt||$t.morphNormals!==ue||$t.morphColors!==xe||$t.toneMapping!==Ee||$t.morphTargetsCount!==pe)&&(_e=!0):(_e=!0,$t.__version=j.version);let Dn=$t.currentProgram;_e===!0&&(Dn=ir(j,I,H));let Br=!1,gn=!1,$s=!1;const Ce=Dn.getUniforms(),Sn=$t.uniforms;if(St.useProgram(Dn.program)&&(Br=!0,gn=!0,$s=!0),j.id!==w&&(w=j.id,gn=!0),Br||S!==x){St.buffers.depth.getReversed()?(ht.copy(x.projectionMatrix),cD(ht),hD(ht),Ce.setValue(A,"projectionMatrix",ht)):Ce.setValue(A,"projectionMatrix",x.projectionMatrix),Ce.setValue(A,"viewMatrix",x.matrixWorldInverse);const cn=Ce.map.cameraPosition;cn!==void 0&&cn.setValue(A,Kt.setFromMatrixPosition(x.matrixWorld)),Xt.logarithmicDepthBuffer&&Ce.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ce.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,gn=!0,$s=!0)}if(H.isSkinnedMesh){Ce.setOptional(A,H,"bindMatrix"),Ce.setOptional(A,H,"bindMatrixInverse");const Xe=H.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ce.setValue(A,"boneTexture",Xe.boneTexture,Jt))}H.isBatchedMesh&&(Ce.setOptional(A,H,"batchingTexture"),Ce.setValue(A,"batchingTexture",H._matricesTexture,Jt),Ce.setOptional(A,H,"batchingIdTexture"),Ce.setValue(A,"batchingIdTexture",H._indirectTexture,Jt),Ce.setOptional(A,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(A,"batchingColorTexture",H._colorsTexture,Jt));const Mn=X.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Mt.update(H,X,Dn),(gn||$t.receiveShadow!==H.receiveShadow)&&($t.receiveShadow=H.receiveShadow,Ce.setValue(A,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Sn.envMap.value=Et,Sn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&I.environment!==null&&(Sn.envMapIntensity.value=I.environmentIntensity),gn&&(Ce.setValue(A,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&ea(Sn,$s),st&&j.fog===!0&&tt.refreshFogUniforms(Sn,st),tt.refreshMaterialUniforms(Sn,j,D,N,p.state.transmissionRenderTarget[x.id]),il.upload(A,Tn($t),Sn,Jt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(il.upload(A,Tn($t),Sn,Jt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ce.setValue(A,"center",H.center),Ce.setValue(A,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(A,"normalMatrix",H.normalMatrix),Ce.setValue(A,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Xe=j.uniformsGroups;for(let cn=0,nc=Xe.length;cn<nc;cn++){const rr=Xe[cn];z.update(rr,Dn),z.bind(rr,Dn)}}return Dn}function ea(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function na(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,I,X){const j=It.get(x);j.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),It.get(x.texture).__webglTexture=I,It.get(x.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const X=It.get(x);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0};const ec=A.createFramebuffer();this.setRenderTarget=function(x,I=0,X=0){U=x,R=I,P=X;let j=!0,H=null,st=!1,ft=!1;if(x){const Et=It.get(x);if(Et.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(A.FRAMEBUFFER,null),j=!1;else if(Et.__webglFramebuffer===void 0)Jt.setupRenderTarget(x);else if(Et.__hasExternalTextures)Jt.rebindTextures(x,It.get(x.texture).__webglTexture,It.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const zt=x.depthTexture;if(Et.__boundDepthTexture!==zt){if(zt!==null&&It.has(zt)&&(x.width!==zt.image.width||x.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(x)}}const Rt=x.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ft=!0);const jt=It.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(jt[I])?H=jt[I][X]:H=jt[I],st=!0):x.samples>0&&Jt.useMultisampledRTT(x)===!1?H=It.get(x).__webglMultisampledFramebuffer:Array.isArray(jt)?H=jt[X]:H=jt,L.copy(x.viewport),G.copy(x.scissor),$=x.scissorTest}else L.copy(J).multiplyScalar(D).floor(),G.copy(nt).multiplyScalar(D).floor(),$=mt;if(X!==0&&(H=ec),St.bindFramebuffer(A.FRAMEBUFFER,H)&&j&&St.drawBuffers(x,H),St.viewport(L),St.scissor(G),St.setScissorTest($),st){const Et=It.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,Et.__webglTexture,X)}else if(ft){const Et=It.get(x.texture),Rt=I;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Et.__webglTexture,X,Rt)}else if(x!==null&&X!==0){const Et=It.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Et.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(x,I,X,j,H,st,ft,wt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=It.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){St.bindFramebuffer(A.FRAMEBUFFER,Et);try{const Rt=x.textures[wt],jt=Rt.format,zt=Rt.type;if(!Xt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-j&&X>=0&&X<=x.height-H&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+wt),A.readPixels(I,X,j,H,gt.convert(jt),gt.convert(zt),st))}finally{const Rt=U!==null?It.get(U).__webglFramebuffer:null;St.bindFramebuffer(A.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,I,X,j,H,st,ft,wt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=It.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et)if(I>=0&&I<=x.width-j&&X>=0&&X<=x.height-H){St.bindFramebuffer(A.FRAMEBUFFER,Et);const Rt=x.textures[wt],jt=Rt.format,zt=Rt.type;if(!Xt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ue),A.bufferData(A.PIXEL_PACK_BUFFER,st.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+wt),A.readPixels(I,X,j,H,gt.convert(jt),gt.convert(zt),0);const xe=U!==null?It.get(U).__webglFramebuffer:null;St.bindFramebuffer(A.FRAMEBUFFER,xe);const Ee=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await lD(A,Ee,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ue),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,st),A.deleteBuffer(ue),A.deleteSync(Ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,X=0){const j=Math.pow(2,-X),H=Math.floor(x.image.width*j),st=Math.floor(x.image.height*j),ft=I!==null?I.x:0,wt=I!==null?I.y:0;Jt.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,ft,wt,H,st),St.unbindTexture()};const Ut=A.createFramebuffer(),O=A.createFramebuffer();this.copyTextureToTexture=function(x,I,X=null,j=null,H=0,st=null){st===null&&(H!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=H,H=0):st=0);let ft,wt,Et,Rt,jt,zt,ue,xe,Ee;const Re=x.isCompressedTexture?x.mipmaps[st]:x.image;if(X!==null)ft=X.max.x-X.min.x,wt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,jt=X.min.y,zt=X.isBox3?X.min.z:0;else{const Mn=Math.pow(2,-H);ft=Math.floor(Re.width*Mn),wt=Math.floor(Re.height*Mn),x.isDataArrayTexture?Et=Re.depth:x.isData3DTexture?Et=Math.floor(Re.depth*Mn):Et=1,Rt=0,jt=0,zt=0}j!==null?(ue=j.x,xe=j.y,Ee=j.z):(ue=0,xe=0,Ee=0);const pe=gt.convert(I.format),$t=gt.convert(I.type);let Ue;I.isData3DTexture?(Jt.setTexture3D(I,0),Ue=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Jt.setTexture2DArray(I,0),Ue=A.TEXTURE_2D_ARRAY):(Jt.setTexture2D(I,0),Ue=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const _e=A.getParameter(A.UNPACK_ROW_LENGTH),Dn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Br=A.getParameter(A.UNPACK_SKIP_PIXELS),gn=A.getParameter(A.UNPACK_SKIP_ROWS),$s=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Rt),A.pixelStorei(A.UNPACK_SKIP_ROWS,jt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt);const Ce=x.isDataArrayTexture||x.isData3DTexture,Sn=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Mn=It.get(x),Xe=It.get(I),cn=It.get(Mn.__renderTarget),nc=It.get(Xe.__renderTarget);St.bindFramebuffer(A.READ_FRAMEBUFFER,cn.__webglFramebuffer),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,nc.__webglFramebuffer);for(let rr=0;rr<Et;rr++)Ce&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.get(x).__webglTexture,H,zt+rr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.get(I).__webglTexture,st,Ee+rr)),A.blitFramebuffer(Rt,jt,ft,wt,ue,xe,ft,wt,A.DEPTH_BUFFER_BIT,A.NEAREST);St.bindFramebuffer(A.READ_FRAMEBUFFER,null),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||It.has(x)){const Mn=It.get(x),Xe=It.get(I);St.bindFramebuffer(A.READ_FRAMEBUFFER,Ut),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,O);for(let cn=0;cn<Et;cn++)Ce?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Mn.__webglTexture,H,zt+cn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Mn.__webglTexture,H),Sn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Xe.__webglTexture,st,Ee+cn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Xe.__webglTexture,st),H!==0?A.blitFramebuffer(Rt,jt,ft,wt,ue,xe,ft,wt,A.COLOR_BUFFER_BIT,A.NEAREST):Sn?A.copyTexSubImage3D(Ue,st,ue,xe,Ee+cn,Rt,jt,ft,wt):A.copyTexSubImage2D(Ue,st,ue,xe,Rt,jt,ft,wt);St.bindFramebuffer(A.READ_FRAMEBUFFER,null),St.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Sn?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(Ue,st,ue,xe,Ee,ft,wt,Et,pe,$t,Re.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(Ue,st,ue,xe,Ee,ft,wt,Et,pe,Re.data):A.texSubImage3D(Ue,st,ue,xe,Ee,ft,wt,Et,pe,$t,Re):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,st,ue,xe,ft,wt,pe,$t,Re.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,st,ue,xe,Re.width,Re.height,pe,Re.data):A.texSubImage2D(A.TEXTURE_2D,st,ue,xe,ft,wt,pe,$t,Re);A.pixelStorei(A.UNPACK_ROW_LENGTH,_e),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Dn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Br),A.pixelStorei(A.UNPACK_SKIP_ROWS,gn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,$s),st===0&&I.generateMipmaps&&A.generateMipmap(Ue),St.unbindTexture()},this.copyTextureToTexture3D=function(x,I,X=null,j=null,H=0){return ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,X,j,H)},this.initRenderTarget=function(x){It.get(x).__webglFramebuffer===void 0&&Jt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Jt.setTextureCube(x,0):x.isData3DTexture?Jt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Jt.setTexture2DArray(x,0):Jt.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){R=0,P=0,U=null,St.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),n.unpackColorSpace=de._getUnpackColorSpace()}}function pm(e,t){if(t===I3)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===xu||t===n_){let n=e.getIndex();if(n===null){const o=[],a=e.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);e.setIndex(o),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=n.count-2,r=[];if(t===xu)for(let o=1;o<=i;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2))):(r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=e.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}class hB extends Us{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new mB(n)}),this.register(function(n){return new gB(n)}),this.register(function(n){return new CB(n)}),this.register(function(n){return new EB(n)}),this.register(function(n){return new wB(n)}),this.register(function(n){return new xB(n)}),this.register(function(n){return new vB(n)}),this.register(function(n){return new yB(n)}),this.register(function(n){return new bB(n)}),this.register(function(n){return new pB(n)}),this.register(function(n){return new TB(n)}),this.register(function(n){return new _B(n)}),this.register(function(n){return new MB(n)}),this.register(function(n){return new SB(n)}),this.register(function(n){return new dB(n)}),this.register(function(n){return new AB(n)}),this.register(function(n){return new RB(n)})}load(t,n,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=So.extractUrlBase(t);o=So.resolveURL(c,this.path)}else o=So.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){r?r(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new T_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){n(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===R_){try{o[ce.KHR_BINARY_GLTF]=new LB(t)}catch(d){r&&r(d);return}s=JSON.parse(o[ce.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new GB(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case ce.KHR_MATERIALS_UNLIT:o[d]=new fB;break;case ce.KHR_DRACO_MESH_COMPRESSION:o[d]=new DB(s,this.dracoLoader);break;case ce.KHR_TEXTURE_TRANSFORM:o[d]=new PB;break;case ce.KHR_MESH_QUANTIZATION:o[d]=new FB;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(t,n){const i=this;return new Promise(function(r,s){i.parse(t,n,r,s)})}}function uB(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}const ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dB{constructor(t){this.parser=t,this.name=ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const n=this.parser,i="light:"+t;let r=n.cache.get(i);if(r)return r;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],on);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new S_(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new dP(h),c.distance=d;break;case"spot":c=new hP(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+t),r=Promise.resolve(c),n.cache.add(i,r),r}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,i=this.parser,s=i.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(n.cache,a,l)})}}class fB{constructor(){this.name=ce.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(t,n,i){const r=[];t.color=new ee(1,1,1),t.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],on),t.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(t,"map",s.baseColorTexture,ze))}return Promise.all(r)}}class pB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class mB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new te(a,a)}return Promise.all(s)}}class gB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class _B{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class xB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new ee(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,ze)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class yB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return n.attenuationColor=new ee().setRGB(a[0],a[1],a[2],on),Promise.all(s)}}class bB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class TB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return n.specularColor=new ee().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&s.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,ze)),Promise.all(s)}}class SB{constructor(t){this.parser=t,this.name=ce.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(s)}}class MB{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class CB{constructor(t){this.parser=t,this.name=ce.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,s.source,o)}}class EB{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_WEBP}loadTexture(t){const n=this.name,i=this.parser,r=i.json,s=r.textures[t];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(t,o.source,l)}}class wB{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_AVIF}loadTexture(t){const n=this.name,i=this.parser,r=i.json,s=r.textures[t];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(t,o.source,l)}}class AB{constructor(t){this.name=ce.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,i=n.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,d=r.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,r.mode,r.filter),f})})}else return null}}class RB{constructor(t){this.name=ce.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,i=n.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==wn.TRIANGLES&&c.mode!==wn.TRIANGLE_STRIP&&c.mode!==wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const m of d){const _=new ie,g=new V,p=new si,b=new V(1,1,1),E=new HD(m.geometry,m.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,_.compose(g,p,b));for(const y in l)if(y==="_COLOR_0"){const k=l[y];E.instanceColor=new yu(k.array,k.itemSize,k.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);we.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const R_="glTF",lo=12,mm={JSON:1313821514,BIN:5130562};class LB{constructor(t){this.name=ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,lo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==R_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-lo,s=new DataView(t,lo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===mm.JSON){const c=new Uint8Array(t,lo+o,a);this.content=i.decode(c)}else if(l===mm.BIN){const c=lo+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DB{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ce.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const i=this.json,r=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Su[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=Su[h]||h.toLowerCase();if(o[h]!==void 0){const u=i.accessors[t.attributes[h]],f=hs[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return n.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){r.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}d(f)},a,c,on,u)})})}}class PB{constructor(){this.name=ce.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return(n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class FB{constructor(){this.name=ce.KHR_MESH_QUANTIZATION}}class L_ extends Qo{constructor(t,n,i,r){super(t,n,i,r)}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r*3+r;for(let o=0;o!==r;o++)n[o]=i[s+o];return n}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=r-n,d=(i-n)/h,u=d*d,f=u*d,m=t*c,_=m-c,g=-2*f+3*u,p=f-u,b=1-g,E=p-u+d;for(let y=0;y!==a;y++){const k=o[_+y+a],R=o[_+y+l]*h,P=o[m+y+a],U=o[m+y]*h;s[y]=b*k+E*R+g*P+p*U}return s}}const IB=new si;class kB extends L_{interpolate_(t,n,i,r){const s=super.interpolate_(t,n,i,r);return IB.fromArray(s).normalize().toArray(s),s}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gm={9728:en,9729:yn,9984:j0,9985:Za,9986:fo,9987:Ei},_m={33071:qi,33648:El,10497:Es},sh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BB={CUBICSPLINE:void 0,LINEAR:Uo,STEP:Oo},oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NB(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Jl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),e.DefaultMaterial}function dr(e,t,n){for(const i in n.extensions)e[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function Si(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function OB(e,t,n){let i=!1,r=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(e);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(i){const u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):e.attributes.position;o.push(u)}if(r){const u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):e.attributes.normal;a.push(u)}if(s){const u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(e.morphAttributes.position=h),r&&(e.morphAttributes.normal=d),s&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function UB(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)e.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zB(e){let t;const n=e.extensions&&e.extensions[ce.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+ah(n.attributes):t=e.indices+":"+ah(e.attributes)+":"+e.mode,e.targets!==void 0)for(let i=0,r=e.targets.length;i<r;i++)t+=":"+ah(e.targets[i]);return t}function ah(e){let t="";const n=Object.keys(e).sort();for(let i=0,r=n.length;i<r;i++)t+=n[i]+":"+e[n[i]]+";";return t}function Mu(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HB(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const VB=new ie;class GB{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new uB,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new lP(this.options.manager):this.textureLoader=new mP(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new T_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return dr(s,a,r),Si(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const o=n[r].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let r=0,s=t.length;r<s;r++){const o=t[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,i){if(t.refs[n]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(i,r),r.name+="_instance_"+t.uses[n]++,r}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=t(n[i]);if(r)return r}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=t(n[r]);s&&i.push(s)}return i}getDependency(t,n){const i=t+":"+n;let r=this.cache.get(i);if(!r){switch(t){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,n)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(i,r)}return r}getDependencies(t){let n=this.cache.get(t);if(!n){const i=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,o){return i.getDependency(t,o)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[ce.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(So.resolveURL(n.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(t){const n=this,i=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const o=sh[r.type],a=hs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new nn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=sh[r.type],c=hs[r.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(f&&f!==d){const p=Math.floor(u/f),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let E=n.cache.get(b);E||(_=new c(a,p*f,r.count*f/h),E=new BD(_,f/h),n.cache.add(b,E)),g=new vd(E,l,u%f/h,m)}else a===null?_=new c(r.count*l):_=new c(a,u,r.count*l),g=new nn(_,l,m);if(r.sparse!==void 0){const p=sh.SCALAR,b=hs[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,k=new b(o[1],E,r.sparse.count*p),R=new c(o[2],y,r.sparse.count*l);a!==null&&(g=new nn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,U=k.length;P<U;P++){const w=k[P];if(g.setX(w,R[P*l]),l>=2&&g.setY(w,R[P*l+1]),l>=3&&g.setZ(w,R[P*l+2]),l>=4&&g.setW(w,R[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const n=this.json,i=this.options,s=n.textures[t].source,o=n.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,n,i){const r=this,s=this.json,o=s.textures[t],a=s.images[n],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return h.magFilter=gm[u.magFilter]||yn,h.minFilter=gm[u.minFilter]||Ei,h.wrapS=_m[u.wrapS]||Es,h.wrapT=_m[u.wrapT]||Es,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==yn,r.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=r.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let m=u;n.isImageBitmapLoader===!0&&(m=function(_){const g=new Oe(_);g.needsUpdate=!0,u(g)}),n.load(So.resolveURL(d,s.path),m,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Si(d,o),d.userData.mimeType=o.mimeType||HB(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=h,h}assignTexture(t,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[ce.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ce.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ce.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),t[n]=o,o})}assignFinalMaterial(t){const n=t.geometry;let i=t.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new x_,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(t.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new __,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Jl}loadMaterial(t){const n=this,i=this.json,r=this.extensions,s=i.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[ce.KHR_MATERIALS_UNLIT]){const d=r[ce.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,n))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new ee(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],on),a.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(n.assignTexture(a,"map",d.baseColorTexture,ze)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(n.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Jn);const h=s.alphaMode||oh.OPAQUE;if(h===oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===oh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yr&&(c.push(n.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new te(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==yr&&(c.push(n.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yr){const d=s.emissiveFactor;a.emissive=new ee().setRGB(d[0],d[1],d[2],on)}return s.emissiveTexture!==void 0&&o!==yr&&c.push(n.assignTexture(a,"emissiveMap",s.emissiveTexture,ze)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Si(d,s),n.associations.set(d,{materials:t}),s.extensions&&dr(r,d,s),d})}createUniqueName(t){const n=ye.sanitizeNodeName(t||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){const n=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(l){return xm(l,a,n)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=zB(c),d=r[h];if(d)o.push(d.promise);else{let u;c.extensions&&c.extensions[ce.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=xm(new hi,c,n),r[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(t){const n=this,i=this.json,r=this.extensions,s=i.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?NB(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const b=c[f];if(g.mode===wn.TRIANGLES||g.mode===wn.TRIANGLE_STRIP||g.mode===wn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new OD(_,b):new $e(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===wn.TRIANGLE_STRIP?p.geometry=pm(p.geometry,n_):g.mode===wn.TRIANGLE_FAN&&(p.geometry=pm(p.geometry,xu));else if(g.mode===wn.LINES)p=new WD(_,b);else if(g.mode===wn.LINE_STRIP)p=new Td(_,b);else if(g.mode===wn.LINE_LOOP)p=new $D(_,b);else if(g.mode===wn.POINTS)p=new qD(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&UB(p,s),p.name=n.createUniqueName(s.name||"mesh_"+t),Si(p,s),g.extensions&&dr(r,p,g),n.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)n.associations.set(d[f],{meshes:t,primitives:f});if(d.length===1)return s.extensions&&dr(r,d[0],s),d[0];const u=new br;s.extensions&&dr(r,u,s),n.associations.set(u,{meshes:t});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(t){let n;const i=this.json.cameras[t],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Ze(s_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new Md(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),Si(n,i),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const u=new ie;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new yd(a,l)})}loadAnimation(t){const n=this.json,i=this,r=n.animations[t],s=r.name?r.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let d=0,u=r.channels.length;d<u;d++){const f=r.channels[d],m=r.samplers[f.sampler],_=f.target,g=_.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,b=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],_=d[3],g=d[4],p=[];for(let b=0,E=u.length;b<E;b++){const y=u[b],k=f[b],R=m[b],P=_[b],U=g[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const w=i._createAnimationTracks(y,k,R,P,U);if(w)for(let S=0;S<w.length;S++)p.push(w[S])}return new eP(s,void 0,p)})}createNodeMesh(t){const n=this.json,i=this,r=n.nodes[t];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(t){const n=this.json,i=this,r=n.nodes[t],s=i._loadNodeShallow(t),o=[],a=r.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,VB)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);return h})}_loadNodeShallow(t){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=n.nodes[t],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new m_:c.length>1?h=new br:c.length===1?h=c[0]:h=new we,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=o),Si(h,s),s.extensions&&dr(i,h,s),s.matrix!==void 0){const d=new ie;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(h);r.associations.set(h,{...d})}return r.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const n=this.extensions,i=this.json.scenes[t],r=this,s=new br;i.name&&(s.name=r.createUniqueName(i.name)),Si(s,i),i.extensions&&dr(n,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)s.add(l[h]);const c=h=>{const d=new Map;for(const[u,f]of r.associations)(u instanceof ei||u instanceof Oe)&&d.set(u,f);return h.traverse(u=>{const f=r.associations.get(u);f!=null&&d.set(u,f)}),d};return r.associations=c(s),s})}_createAnimationTracks(t,n,i,r,s){const o=[],a=t.name?t.name:t.uuid,l=[];zi[s.path]===zi.weights?t.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(zi[s.path]){case zi.weights:c=Rs;break;case zi.rotation:c=Ls;break;case zi.translation:case zi.scale:c=Ds;break;default:i.itemSize===1?c=Rs:c=Ds;break}const h=r.interpolation!==void 0?BB[r.interpolation]:Uo,d=this._getArrayFromAccessor(i);for(let u=0,f=l.length;u<f;u++){const m=new c(l[u]+"."+zi[s.path],n.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){const i=Mu(n.constructor),r=new Float32Array(n.length);for(let s=0,o=n.length;s<o;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const r=this instanceof Ls?kB:L_;return new r(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WB(e,t,n){const i=t.attributes,r=new Wn;if(i.POSITION!==void 0){const a=n.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const h=Mu(hs[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new V,l=new V;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=n.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const _=Mu(hs[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;const o=new ci;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function xm(e,t,n){const i=t.attributes,r=[];function s(o,a){return n.getDependency("accessor",o).then(function(l){e.setAttribute(a,l)})}for(const o in i){const a=Su[o]||o.toLowerCase();a in e.attributes||r.push(s(i[o],a))}if(t.indices!==void 0&&!e.index){const o=n.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});r.push(o)}return de.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${de.workingColorSpace}" not supported.`),Si(e,t),WB(e,t,n),Promise.all(r).then(function(){return t.targets!==void 0?OB(e,t.targets,n):e})}const vm={type:"change"},Ad={type:"start"},D_={type:"end"},Oa=new Zo,ym=new Gi,$B=Math.cos(70*s_.DEG2RAD),Ie=new V,hn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lh=1e-6;class qB extends EP{constructor(t,n=null){super(t,n),this.state=Se.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new si,this._lastTargetPosition=new V,this._quat=new si().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vp,this._sphericalDelta=new Vp,this._scale=1,this._panOffset=new V,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new V,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jB.bind(this),this._onPointerDown=XB.bind(this),this._onPointerUp=YB.bind(this),this._onContextMenu=nN.bind(this),this._onMouseWheel=JB.bind(this),this._onKeyDown=QB.bind(this),this._onTouchStart=tN.bind(this),this._onTouchMove=eN.bind(this),this._onMouseDown=KB.bind(this),this._onMouseMove=ZB.bind(this),this._interceptControlDown=iN.bind(this),this._interceptControlUp=rN.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vm),this.update(),this.state=Se.NONE}update(t=null){const n=this.object.position;Ie.copy(n).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oa.origin.copy(this.object.position),Oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oa.direction))<$B?this.object.lookAt(this.target):(ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oa.intersectPlane(ym,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lh||this._lastTargetPosition.distanceToSquared(this.target)>lh?(this.dispatchEvent(vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Ie.setFromMatrixColumn(n,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,n){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(n,1):(Ie.setFromMatrixColumn(n,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ie.copy(r).sub(this.target);let s=Ie.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new te,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function XB(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function jB(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function YB(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(D_),this.state=Se.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function KB(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Se.DOLLY;break;case os.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Se.ROTATE}break;case os.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Ad)}function ZB(e){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function JB(e){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(e.preventDefault(),this.dispatchEvent(Ad),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(D_))}function QB(e){this.enabled!==!1&&this._handleKeyDown(e)}function tN(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Se.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Se.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Ad)}function eN(e){switch(this._trackPointer(e),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Se.NONE}}function nN(e){this.enabled!==!1&&e.preventDefault()}function iN(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rN(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sN={class:"toolbar"},oN={class:"toolbar-left"},aN={class:"model-info"},lN={class:"model-title"},cN={key:0,class:"status loading"},hN={key:1,class:"status error"},uN={key:2,class:"status ready"},dN={class:"toolbar-right"},fN={class:"control-group"},pN=["disabled"],mN=["disabled"],gN=["disabled"],_N=["disabled"],xN={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},vN={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},yN=["disabled"],bN={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},TN={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},SN={class:"control-group"},MN=["disabled"],CN={class:"control-group"},EN={class:"multi-select-wrapper"},wN=["disabled"],AN={class:"selected-text"},RN={key:0,class:"multi-select-dropdown"},LN=["value"],DN={class:"option-text"},PN={class:"content-area"},FN={key:0,class:"loading-overlay"},IN={key:0,class:"loading-progress"},kN={class:"progress-bar"},BN={class:"progress-text"},NN={key:1,class:"error-state"},ON={class:"error-message"},UN={key:2,class:"empty-state"};var P_=Ps({__name:"index",props:{model:{type:Object,required:!1},height:{type:String,required:!1,default:"600px"},enableMouseZoom:{type:Boolean,required:!1,default:!1}},setup(e){Ho(ot=>({"2a5fbc9c-height":ot.height}));const t=e,n=Yt(),i=Yt(!1),r=Yt(!1),s=Yt(""),o=Yt(0),a=Yt(!1),l=Yt(!1),c=Yt(!1),h=Yt(!1),d=Yt("standard"),u=Yt(["front"]),f=Yt(!1);let m=null,_=null,g=null,p=null,b=null,E=null,y=null,k=new Map,R=null,P=null,U=0;const w={top:{name:"顶部",position:[0,50,0]},front:{name:"前方",position:[0,20,50]},left:{name:"左侧",position:[-50,20,0]},right:{name:"右侧",position:[50,20,0]},back:{name:"后方",position:[0,20,-50]},bottom:{name:"底部",position:[0,-30,0]}},S=()=>{if(u.value.length===0)return"选择光源方向";if(u.value.length===1){const ot=u.value[0];return w[ot]?.name||"未知光源"}else return`已选择 ${u.value.length} 个光源`},L=()=>{f.value=!f.value},G=ot=>{ot.target.closest(".multi-select-wrapper")||(f.value=!1)},$=()=>{E!==null&&(cancelAnimationFrame(E),E=null),p&&(p.dispose(),p=null),g&&(n.value?.contains(g.domElement)&&n.value.removeChild(g.domElement),g.dispose(),g=null),b&&m&&(m.remove(b),M(b),b=null),k.forEach(ot=>{m&&m.remove(ot)}),k.clear(),y&&m&&(m.remove(y),y=null),m&&(m.clear(),m=null),_=null,h.value=!1},M=ot=>{ot.traverse(A=>{A instanceof $e&&(A.geometry&&A.geometry.dispose(),A.material&&(Array.isArray(A.material)?A.material.forEach(qt=>C(qt)):C(A.material)))})},C=ot=>{ot instanceof Jl&&(ot.map&&ot.map.dispose(),ot.normalMap&&ot.normalMap.dispose(),ot.roughnessMap&&ot.roughnessMap.dispose(),ot.metalnessMap&&ot.metalnessMap.dispose()),ot.dispose()},v=()=>{if(!n.value)return;$();const ot=n.value,A=ot.getBoundingClientRect(),qt=A.width,Lt=A.height;m=new kD,m.background=new ee(16316922),_=new Ze(45,qt/Lt,.1,1e3),g=new cB({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),g.setSize(qt,Lt),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.shadowMap.enabled=!0,g.shadowMap.type=$0,ot.appendChild(g.domElement),p=new qB(_,g.domElement),p.target.set(0,0,0),p.enableDamping=!0,p.dampingFactor=.05,p.enableZoom=t.enableMouseZoom,p.autoRotate=l.value,p.autoRotateSpeed=2,N(),K(),h.value=!0},N=()=>{if(!m)return;y&&m.remove(y),k.forEach(qt=>{m&&m.remove(qt)}),k.clear();let ot=.4,A=1;switch(d.value){case"bright":ot=.8,A=1.5;break;case"soft":ot=.6,A=.8;break;case"dramatic":ot=.2,A=2;break;default:ot=.4,A=1}y=new pP(4210752,ot),m.add(y),u.value.forEach(qt=>{const Lt=w[qt];if(Lt){const Xt=new S_(16777215,A);Xt.position.set(Lt.position[0],Lt.position[1],Lt.position[2]),Xt.castShadow=!0,Xt.shadow.mapSize.width=1024,Xt.shadow.mapSize.height=1024,Xt.shadow.camera.near=.5,Xt.shadow.camera.far=50,m&&m.add(Xt),k.set(qt,Xt)}})},D=()=>{N()},W=()=>{N()},K=()=>{!g||!m||!_||!p||(E=requestAnimationFrame(K),p.update(),g.render(m,_))},J=async()=>{if(!(!t.model?.url||!m)){i.value=!0,r.value=!1,s.value="",o.value=0;try{b&&(m.remove(b),M(b),b=null);const ot=new hB,A=Lt=>{Lt.lengthComputable&&(o.value=Lt.loaded/Lt.total*100)};if(b=(await new Promise((Lt,Xt)=>{ot.load(t.model.url,Lt,A,St=>{console.error("GLTFLoader error:",St),Xt(St)})})).scene,!b)return;m.add(b),b.traverse(Lt=>{Lt instanceof $e&&(Lt.castShadow=!0,Lt.receiveShadow=!0)}),nt(),i.value=!1}catch(ot){console.error("模型加载失败:",ot),r.value=!0,s.value=ot instanceof Error?ot.message:"未知错误",i.value=!1}}},nt=()=>{if(!b||!_||!p||!n.value)return;const ot=new Wn().setFromObject(b),A=ot.getCenter(new V),qt=ot.getSize(new V);b.position.sub(A);const Lt=Math.max(qt.x,qt.y,qt.z);if(Lt>0){const Xt=n.value.getBoundingClientRect(),St=Xt.width,re=Xt.height;_.aspect=St/re,_.updateProjectionMatrix();const It=_.fov*(Math.PI/180),Jt=Lt/(2*Math.tan(It/2))*2.5,be=new V(.7,.5,.7);be.normalize().multiplyScalar(Jt),_.position.copy(be),p.target.set(0,0,0),p.update(),R=_.position.clone(),P=p.target.clone(),U=Jt}},mt=()=>{!_||!p||!h.value||(R&&P?(_.position.copy(R),p.target.copy(P)):(_.position.set(10,8,10),p.target.set(0,0,0)),p.update())},Z=()=>{if(!_||!p||!h.value)return;const ot=new V;ot.subVectors(_.position,p.target).normalize();const A=_.position.distanceTo(p.target),qt=Math.max(A*.8,.5);_.position.copy(p.target).add(ot.multiplyScalar(qt)),p.update()},Q=()=>{if(!_||!p||!h.value)return;const ot=new V;ot.subVectors(_.position,p.target).normalize();const A=_.position.distanceTo(p.target),qt=Math.min(A*1.25,100);_.position.copy(p.target).add(ot.multiplyScalar(qt)),p.update()},pt=()=>{!p||!h.value||(l.value=!l.value,p.autoRotate=l.value)},ht=()=>{!b||!h.value||(c.value=!c.value,b.traverse(ot=>{ot instanceof $e&&(Array.isArray(ot.material)?ot.material.forEach(A=>{A.wireframe=c.value}):ot.material.wireframe=c.value)}))},dt=()=>{!n.value||!_||!g||Un(()=>{setTimeout(()=>{const A=n.value.getBoundingClientRect(),qt=A.width,Lt=A.height;if(qt>0&&Lt>0&&(_.aspect=qt/Lt,_.updateProjectionMatrix(),g.setSize(qt,Lt),b&&U>0&&p)){const Xt=new V;Xt.subVectors(_.position,p.target).normalize();const St=_.fov*(Math.PI/180),It=new Wn().setFromObject(b).getSize(new V),be=Math.max(It.x,It.y,It.z)/(2*Math.tan(St/2))*2.5;_.position.copy(p.target).add(Xt.multiplyScalar(be)),p.update(),U=be}},10)})},Kt=()=>{a.value=!a.value,Un(()=>{setTimeout(()=>{dt()},150)})},Ct=()=>{a.value=!1,Un(()=>{setTimeout(()=>{dt()},150)})},le=()=>{r.value=!1,s.value="",t.model&&J()},he=ot=>{ot.key==="Escape"&&a.value&&Ct()};return Tr(()=>t.model,ot=>{ot&&m&&J()},{immediate:!1}),Tr(()=>t.enableMouseZoom,ot=>{p&&(p.enableZoom=ot)}),Dl(()=>{v(),t.model&&J(),window.addEventListener("resize",dt),window.addEventListener("keydown",he),document.addEventListener("click",G)}),Go(()=>{$(),window.removeEventListener("resize",dt),window.removeEventListener("keydown",he),document.removeEventListener("click",G)}),(ot,A)=>(Tt(),bt("div",{class:vn(["glb-container",{fullscreen:a.value}])},[ut(" 工具栏 "),B("div",sN,[B("div",oN,[B("div",aN,[B("span",lN,Je(ot.model?.title||"3D 模型查看器"),1),i.value?(Tt(),bt("span",cN,"加载中...")):r.value?(Tt(),bt("span",hN,"加载失败")):ot.model?(Tt(),bt("span",uN,"已就绪")):ut("v-if",!0)])]),B("div",dN,[ut(" 基础控制按钮 - 按图片顺序排列 "),B("div",fN,[B("button",{onClick:Z,class:"control-button",title:"放大",disabled:!h.value},A[2]||(A[2]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)]),8,pN),B("button",{onClick:Q,class:"control-button",title:"缩小",disabled:!h.value},A[3]||(A[3]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M7 9h5v1H7z"})],-1)]),8,mN),B("button",{onClick:mt,class:"control-button",title:"重置视角",disabled:!h.value},A[4]||(A[4]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)]),8,gN),B("button",{onClick:pt,class:vn(["control-button",{active:l.value}]),title:"自动旋转",disabled:!h.value},[l.value?(Tt(),bt("svg",vN,A[6]||(A[6]=[B("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)]))):(Tt(),bt("svg",xN,A[5]||(A[5]=[B("path",{d:"M8 5v14l11-7z"},null,-1)])))],10,_N),B("button",{onClick:ht,class:vn(["control-button",{active:c.value}]),title:"线框模式",disabled:!h.value},A[7]||(A[7]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M6 2l3 6 5-4-3 7 4 2-7 1-2 4-1-7-6 3 4-5L2 6l5 1z"})],-1)]),10,yN),B("button",{onClick:Kt,class:"control-button",title:"全屏"},[a.value?(Tt(),bt("svg",TN,A[9]||(A[9]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",bN,A[8]||(A[8]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))])]),ut(" 光照模式下拉框 "),B("div",SN,[Zi(B("select",{"onUpdate:modelValue":A[0]||(A[0]=qt=>d.value=qt),onChange:D,disabled:!h.value,class:"lighting-select"},A[10]||(A[10]=[B("option",{value:"standard"},"标准光照",-1),B("option",{value:"bright"},"明亮光照",-1),B("option",{value:"soft"},"柔和光照",-1),B("option",{value:"dramatic"},"戏剧光照",-1)]),40,MN),[[k_,d.value]])]),ut(" 光线方向多选下拉框 "),B("div",CN,[B("div",EN,[B("button",{onClick:L,class:"multi-select-button",disabled:!h.value},[B("span",AN,Je(S()),1),(Tt(),bt("svg",{class:vn(["dropdown-icon",{open:f.value}]),viewBox:"0 0 24 24",fill:"currentColor"},A[11]||(A[11]=[B("path",{d:"M7 10l5 5 5-5z"},null,-1)]),2))],8,wN),ut(" 下拉选项 "),f.value?(Tt(),bt("div",RN,[(Tt(),bt(Cr,null,Vo(w,(qt,Lt)=>B("label",{key:Lt,class:"dropdown-option"},[Zi(B("input",{type:"checkbox",value:Lt,"onUpdate:modelValue":A[1]||(A[1]=Xt=>u.value=Xt),onChange:W},null,40,LN),[[B_,u.value]]),B("span",DN,Je(qt.name),1)])),64))])):ut("v-if",!0)])])])]),ut(" 内容区域 "),B("div",PN,[B("div",{ref_key:"sceneContainer",ref:n,class:"scene-container"},[ut(" 加载状态 "),i.value?(Tt(),bt("div",FN,[A[12]||(A[12]=B("div",{class:"loading-spinner"},null,-1)),A[13]||(A[13]=B("p",null,"正在加载 3D 模型...",-1)),o.value>0?(Tt(),bt("div",IN,[B("div",kN,[B("div",{class:"progress-fill",style:bm({width:o.value+"%"})},null,4)]),B("span",BN,Je(Math.round(o.value))+"%",1)])):ut("v-if",!0)])):ut("v-if",!0),ut(" 错误状态 "),r.value?(Tt(),bt("div",NN,[A[14]||(A[14]=B("div",{class:"error-icon"},"❌",-1)),A[15]||(A[15]=B("h3",null,"模型加载失败",-1)),B("p",ON,Je(s.value),1),B("button",{onClick:le,class:"retry-button"},"重试")])):ut("v-if",!0),ut(" 空状态 "),!ot.model&&!i.value&&!r.value?(Tt(),bt("div",UN,A[16]||(A[16]=[B("div",{class:"empty-icon"},"🎲",-1),B("h3",null,"没有模型可显示",-1),B("p",null,"请提供有效的 GLB/GLTF 模型文件",-1)]))):ut("v-if",!0)],512)]),ut(" 全屏覆盖层 "),a.value?(Tt(),bt("div",{key:0,class:"fullscreen-overlay",onClick:Ct},A[17]||(A[17]=[B("div",{class:"fullscreen-close-hint"},"点击任意位置或按 ESC 退出全屏",-1)]))):ut("v-if",!0)],2))}}),zN=`
.dark .content-area[data-v-2a5fbc9c] {\r
  background: #99999980 !important;
}
.dark .control-button[data-v-2a5fbc9c]:hover {\r
  background: #cccccc80 !important;
}
.dark .toolbar[data-v-2a5fbc9c] {\r
  background: #1d1d1d !important;
}
.dark .control-group[data-v-2a5fbc9c]{\r
  background-color: #000 !important;
}
.glb-container[data-v-2a5fbc9c] {\r
  background: white;\r
  border-radius: 8px;\r
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;\r
  overflow: hidden;\r
  height: var(--2a5fbc9c-height);\r
  transition: all 0.3s ease;\r
  position: relative;
}
.glb-container.fullscreen[data-v-2a5fbc9c] {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  z-index: 1000;\r
  border-radius: 0;\r
  height: 100vh !important;\r
  margin: 0;\r
  padding: 0;
}
.fullscreen-overlay[data-v-2a5fbc9c] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.8);\r
  z-index: -1;\r
  cursor: pointer;
}
.fullscreen-close-hint[data-v-2a5fbc9c] {\r
  position: absolute;\r
  top: 10px;\r
  right: 20px;\r
  color: white;\r
  font-size: 14px;\r
  padding: 8px 12px;\r
  background: rgba(0, 0, 0, 0.6);\r
  border-radius: 4px;\r
  z-index: 1001;
}
.toolbar[data-v-2a5fbc9c] {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 12px 16px;\r
  background: #f9fafb;\r
  border-bottom: 1px solid #e5e7eb;\r
  min-height: 60px;\r
  flex-wrap: wrap;\r
  gap: 8px;
}
.toolbar-left[data-v-2a5fbc9c] {\r
  display: flex;\r
  align-items: center;
}
.toolbar-right[data-v-2a5fbc9c] {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  flex-wrap: wrap;
}
.model-info[data-v-2a5fbc9c] {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;
}
.model-title[data-v-2a5fbc9c] {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #374151;
}
.status[data-v-2a5fbc9c] {\r
  font-size: 12px;
}
.status.loading[data-v-2a5fbc9c] {\r
  color: #3b82f6;
}
.status.error[data-v-2a5fbc9c] {\r
  color: #dc2626;
}
.status.ready[data-v-2a5fbc9c] {\r
  color: #10b981;
}
.control-group[data-v-2a5fbc9c] {\r
  display: flex;\r
  align-items: center;\r
  background: white;\r
  border-radius: 6px;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;
}
.control-button[data-v-2a5fbc9c] {\r
  padding: 8px;\r
  background: transparent;\r
  border: none;\r
  color: #6b7280;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border-right: 1px solid #e5e7eb;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  min-width: 36px;\r
  min-height: 36px;
}
.control-button[data-v-2a5fbc9c]:last-child {\r
  border-right: none;
}
.control-button[data-v-2a5fbc9c]:first-child {\r
  border-top-left-radius: 6px;\r
  border-bottom-left-radius: 6px;
}
.control-button[data-v-2a5fbc9c]:last-child {\r
  border-top-right-radius: 6px;\r
  border-bottom-right-radius: 6px;
}
.control-button[data-v-2a5fbc9c]:hover:not(:disabled) {\r
  background: #f9fafb;\r
  color: #374151;
}
.control-button.active[data-v-2a5fbc9c] {\r
  background: #3b82f6;\r
  color: white;
}
.control-button[data-v-2a5fbc9c]:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;
}
.icon[data-v-2a5fbc9c] {\r
  width: 16px;\r
  height: 16px;
}
.lighting-select[data-v-2a5fbc9c] {\r
  padding: 6px 8px;\r
  border: none;\r
  background: transparent;\r
  font-size: 13px;\r
  color: #374151;\r
  cursor: pointer;\r
  border-radius: 6px;\r
  min-width: 120px;
}
.lighting-select[data-v-2a5fbc9c]:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;
}
.lighting-select[data-v-2a5fbc9c]:focus {\r
  outline: none;\r
  background: #f9fafb;
}\r
\r
/* 多选下拉框样式 */
.multi-select-wrapper[data-v-2a5fbc9c] {\r
  position: relative;\r
  min-width: 140px;
}
.multi-select-button[data-v-2a5fbc9c] {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  width: 100%;\r
  padding: 6px 8px;\r
  border: none;\r
  background: transparent;\r
  font-size: 13px;\r
  color: #374151;\r
  cursor: pointer;\r
  border-radius: 6px;\r
  gap: 6px;
}
.multi-select-button[data-v-2a5fbc9c]:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;
}
.multi-select-button[data-v-2a5fbc9c]:hover:not(:disabled) {\r
  background: #f9fafb;
}
.selected-text[data-v-2a5fbc9c] {\r
  flex: 1;\r
  text-align: left;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;
}
.dropdown-icon[data-v-2a5fbc9c] {\r
  width: 14px;\r
  height: 14px;\r
  transition: transform 0.2s;\r
  flex-shrink: 0;
}
.dropdown-icon.open[data-v-2a5fbc9c] {\r
  transform: rotate(180deg);
}
.multi-select-dropdown[data-v-2a5fbc9c] {\r
  position: absolute;\r
  top: 100%;\r
  left: 0;\r
  right: 0;\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 6px;\r
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\r
  z-index: 100;\r
  max-height: 200px;\r
  overflow-y: auto;\r
  margin-top: 2px;
}
.dropdown-option[data-v-2a5fbc9c] {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 12px;\r
  cursor: pointer;\r
  transition: background 0.2s;\r
  font-size: 13px;\r
  color: #374151;
}
.dropdown-option[data-v-2a5fbc9c]:hover {\r
  background: #f9fafb;
}
.dropdown-option[data-v-2a5fbc9c]:first-child {\r
  border-top-left-radius: 6px;\r
  border-top-right-radius: 6px;
}
.dropdown-option[data-v-2a5fbc9c]:last-child {\r
  border-bottom-left-radius: 6px;\r
  border-bottom-right-radius: 6px;
}
.dropdown-option input[type="checkbox"][data-v-2a5fbc9c] {\r
  width: 14px;\r
  height: 14px;\r
  accent-color: #3b82f6;\r
  cursor: pointer;
}
.option-text[data-v-2a5fbc9c] {\r
  user-select: none;
}
.content-area[data-v-2a5fbc9c] {\r
  position: relative;\r
  height: calc(100% - 60px);
}
.scene-container[data-v-2a5fbc9c] {\r
  width: 100%;\r
  height: 100%;\r
  position: relative;\r
  overflow: hidden;\r
  background: #fafafa;
}
.loading-overlay[data-v-2a5fbc9c] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  background: rgba(255, 255, 255, 0.95);\r
  color: #6b7280;\r
  z-index: 10;
}
.loading-spinner[data-v-2a5fbc9c] {\r
  width: 40px;\r
  height: 40px;\r
  border: 4px solid #dbeafe;\r
  border-top: 4px solid #3b82f6;\r
  border-radius: 50%;\r
  animation: spin-2a5fbc9c 1s linear infinite;\r
  margin-bottom: 16px;
}
.loading-progress[data-v-2a5fbc9c] {\r
  margin-top: 16px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 8px;
}
.progress-bar[data-v-2a5fbc9c] {\r
  width: 200px;\r
  height: 4px;\r
  background: #e5e7eb;\r
  border-radius: 2px;\r
  overflow: hidden;
}
.progress-fill[data-v-2a5fbc9c] {\r
  height: 100%;\r
  background: #3b82f6;\r
  transition: width 0.2s ease;
}
.progress-text[data-v-2a5fbc9c] {\r
  font-size: 12px;\r
  color: #6b7280;
}
.error-state[data-v-2a5fbc9c] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #dc2626;\r
  padding: 20px;\r
  z-index: 10;
}
.error-icon[data-v-2a5fbc9c] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.error-state h3[data-v-2a5fbc9c] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #dc2626;
}
.error-message[data-v-2a5fbc9c] {\r
  font-size: 14px;\r
  color: #6b7280;\r
  text-align: center;\r
  margin-bottom: 16px;\r
  max-width: 400px;
}
.retry-button[data-v-2a5fbc9c] {\r
  padding: 8px 16px;\r
  background: #dc2626;\r
  color: white;\r
  border: none;\r
  border-radius: 6px;\r
  font-size: 14px;\r
  cursor: pointer;\r
  transition: background 0.2s;
}
.retry-button[data-v-2a5fbc9c]:hover {\r
  background: #b91c1c;
}
.empty-state[data-v-2a5fbc9c] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #6b7280;\r
  z-index: 10;
}
.empty-icon[data-v-2a5fbc9c] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.empty-state h3[data-v-2a5fbc9c] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #374151;
}
.empty-state p[data-v-2a5fbc9c] {\r
  font-size: 14px;
}
@keyframes spin-2a5fbc9c {
to {\r
    transform: rotate(360deg);
}
}\r
\r
/* 确保 Three.js 画布正确填充容器 */
[data-v-2a5fbc9c] canvas {\r
  display: block !important;\r
  width: 100% !important;\r
  height: 100% !important;\r
  cursor: grab;
}\r
\r
/* 响应式调整 */
@media (max-width: 768px) {
.toolbar[data-v-2a5fbc9c] {\r
    flex-direction: column;\r
    gap: 12px;\r
    padding: 16px;\r
    min-height: auto;
}
.toolbar-left[data-v-2a5fbc9c],\r
  .toolbar-right[data-v-2a5fbc9c] {\r
    width: 100%;\r
    justify-content: center;
}
.model-info[data-v-2a5fbc9c] {\r
    text-align: center;
}
.control-group[data-v-2a5fbc9c] {\r
    flex-wrap: wrap;
}
.lighting-select[data-v-2a5fbc9c] {\r
    min-width: 100px;\r
    font-size: 12px;
}
.multi-select-wrapper[data-v-2a5fbc9c] {\r
    min-width: 120px;
}
.multi-select-button[data-v-2a5fbc9c] {\r
    font-size: 12px;
}
.glb-container[data-v-2a5fbc9c] {\r
    height: 400px;
}
.content-area[data-v-2a5fbc9c] {\r
    height: calc(100% - 140px);
}
}\r
\r
/* 打印样式 */
@media print {
.toolbar[data-v-2a5fbc9c] {\r
    display: none;
}
.glb-container[data-v-2a5fbc9c] {\r
    box-shadow: none;\r
    border: none;
}
}\r
`;Fs(zN);P_.__scopeId="data-v-2a5fbc9c";P_.__file="packages/GLBLoad/index.vue";const HN={class:"toolbar"},VN={class:"toolbar-left"},GN={class:"image-info"},WN={class:"image-title"},$N={key:0,class:"image-count"},qN={class:"toolbar-right"},XN={class:"control-group"},jN=["title"],YN={key:0,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},KN={key:1,class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},ZN={class:"content-area"},JN={class:"image-display-area"},QN=["src","alt"],t4={key:1,class:"loading-overlay"},e4={key:2,class:"error-state"},n4={key:3,class:"empty-state"},i4={key:0,class:"thumbnail-nav"},r4={class:"thumbnail-container"},s4=["onClick","title"],o4=["src","alt"];var F_=Ps({__name:"index",props:{images:{type:Array,required:!1,default:()=>[]},height:{type:String,required:!1,default:"600px"}},setup(e){Ho(C=>({"cdb704d8-height":C.height}));const t=e,n=Yt(0),i=Yt(!1),r=Yt(!1),s=Yt(!1),o=Yt(!1),a=Yt({x:0,y:0}),l=Yt(1),c=Yt(0),h=Yt(0),d=Yt(),u=Yn(()=>t.images[n.value]||null),f=Yn(()=>({transform:`translate(${c.value}px, ${h.value}px) scale(${l.value})`,transformOrigin:"center center",transition:o.value?"none":"transform 0.2s ease"})),m=C=>{C>=0&&C<t.images.length&&(n.value=C,E(),r.value=!1)},_=()=>{const C=(n.value+1)%t.images.length;m(C)},g=()=>{const C=(n.value-1+t.images.length)%t.images.length;m(C)},p=()=>{l.value=Math.min(l.value*1.2,5)},b=()=>{l.value=Math.max(l.value*.8,.1)},E=()=>{l.value=1,c.value=0,h.value=0},y=async()=>{if(u.value)try{const v=await(await fetch(u.value.url)).blob(),N=URL.createObjectURL(v),D=document.createElement("a");D.href=N,D.download=u.value.title||`image-${n.value+1}`,D.click(),URL.revokeObjectURL(N)}catch(C){console.error("下载图片失败:",C)}},k=()=>{s.value=!s.value},R=()=>{s.value=!1},P=()=>{r.value=!1,i.value=!0},U=()=>{i.value=!1,r.value=!1,E()},w=()=>{i.value=!1,r.value=!0},S=C=>{const v=C.target;v.style.display="none"},L=C=>{C.button===0&&u.value&&(o.value=!0,a.value={x:C.clientX,y:C.clientY},C.preventDefault())},G=C=>{if(o.value){const v=C.clientX-a.value.x,N=C.clientY-a.value.y;c.value+=v,h.value+=N,a.value={x:C.clientX,y:C.clientY}}},$=()=>{o.value=!1},M=C=>{if(!(t.images.length<=1))switch(C.key){case"ArrowLeft":C.preventDefault(),g();break;case"ArrowRight":C.preventDefault(),_();break;case"Escape":s.value&&R();break}};return Dl(()=>{t.images.length>0&&(i.value=!0),window.addEventListener("keydown",M)}),Go(()=>{window.removeEventListener("keydown",M)}),(C,v)=>(Tt(),bt("div",{class:vn(["image-container",{fullscreen:s.value}])},[ut(" Header Toolbar "),B("div",HN,[B("div",VN,[B("div",GN,[B("span",WN,Je(u.value?.title||`图片 ${n.value+1}`),1),C.images.length>1?(Tt(),bt("span",$N,Je(n.value+1)+" / "+Je(C.images.length),1)):ut("v-if",!0)])]),B("div",qN,[B("div",{class:"control-group"},[B("button",{onClick:p,class:"control-button",title:"放大"},v[0]||(v[0]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)])),B("button",{onClick:b,class:"control-button",title:"缩小"},v[1]||(v[1]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),B("path",{d:"M7 9h5v1H7z"})],-1)])),B("button",{onClick:E,class:"control-button",title:"重置视图"},v[2]||(v[2]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)]))]),B("div",XN,[C.images.length>1?(Tt(),bt("button",{key:0,onClick:g,class:"control-button",title:"上一张"},v[3]||(v[3]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})],-1)]))):ut("v-if",!0),C.images.length>1?(Tt(),bt("button",{key:1,onClick:_,class:"control-button",title:"下一张"},v[4]||(v[4]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})],-1)]))):ut("v-if",!0),B("button",{onClick:y,class:"control-button",title:"下载图片"},v[5]||(v[5]=[B("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[B("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})],-1)])),B("button",{onClick:k,class:"control-button",title:s.value?"退出全屏":"全屏"},[s.value?(Tt(),bt("svg",KN,v[7]||(v[7]=[B("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"},null,-1)]))):(Tt(),bt("svg",YN,v[6]||(v[6]=[B("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"},null,-1)])))],8,jN)])])]),ut(" Content Area "),B("div",ZN,[ut(" Image Display Area "),B("div",JN,[B("div",{ref_key:"imageContainer",ref:d,class:"image-display",onMousedown:L,onMousemove:G,onMouseup:$,onMouseleave:$},[u.value?(Tt(),bt("img",{key:0,src:u.value.url,alt:u.value.title||`图片 ${n.value+1}`,class:"main-image",style:bm(f.value),onLoad:U,onError:w},null,44,QN)):ut("v-if",!0),ut(" Loading State "),i.value?(Tt(),bt("div",t4,v[8]||(v[8]=[B("div",{class:"loading-spinner"},null,-1),B("p",null,"正在加载图片...",-1)]))):ut("v-if",!0),ut(" Error State "),r.value?(Tt(),bt("div",e4,[v[9]||(v[9]=B("div",{class:"error-icon"},"❌",-1)),v[10]||(v[10]=B("h3",null,"图片加载失败",-1)),v[11]||(v[11]=B("p",null,"无法加载当前图片，请检查图片链接是否有效",-1)),B("button",{onClick:P,class:"retry-button"},"重试")])):ut("v-if",!0),ut(" Empty State "),!C.images.length&&!i.value?(Tt(),bt("div",n4,v[12]||(v[12]=[B("div",{class:"empty-icon"},"🖼️",-1),B("h3",null,"没有图片可显示",-1),B("p",null,"请提供有效的图片链接",-1)]))):ut("v-if",!0)],544)]),ut(" Thumbnail Navigation (使用绝对定位，只在多图片时显示) "),C.images.length>1?(Tt(),bt("div",i4,[B("div",r4,[(Tt(!0),bt(Cr,null,Vo(C.images,(N,D)=>(Tt(),bt("button",{key:D,onClick:W=>m(D),class:vn(["thumbnail-button",{active:D===n.value}]),title:N.title||`图片 ${D+1}`},[B("img",{src:N.url,alt:N.title||`缩略图 ${D+1}`,class:"thumbnail-image",onError:S},null,40,o4),v[13]||(v[13]=B("div",{class:"thumbnail-overlay"},null,-1))],10,s4))),128))])])):ut("v-if",!0)]),ut(" Fullscreen Overlay "),s.value?(Tt(),bt("div",{key:0,class:"fullscreen-overlay",onClick:R},v[14]||(v[14]=[B("div",{class:"fullscreen-close-hint"},"点击任意位置或按 ESC 退出全屏",-1)]))):ut("v-if",!0)],2))}}),a4=`
.dark .content-area[data-v-cdb704d8] {\r
  background: #99999980 !important;
}
.dark .control-button[data-v-cdb704d8]:hover {\r
  background: #cccccc80 !important;
}
.dark .toolbar[data-v-cdb704d8] {\r
  background: #1d1d1d !important;
}
.dark .control-group[data-v-cdb704d8]{\r
  background-color: #000 !important;
}
.image-container[data-v-cdb704d8] {\r
  background: white;\r
  border-radius: 8px;\r
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;\r
  overflow: hidden;\r
  height: var(--cdb704d8-height);\r
  transition: all 0.3s ease;\r
  position: relative;
}
.image-container.fullscreen[data-v-cdb704d8] {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  z-index: 1000;\r
  border-radius: 0;\r
  height: 100vh !important;\r
  margin: 0;\r
  padding: 0;\r
  border: none;
}
.image-container.fullscreen .content-area[data-v-cdb704d8] {\r
  background: white;\r
  height: calc(100vh - 60px);\r
  margin: 0;\r
  padding: 0;
}
.fullscreen-overlay[data-v-cdb704d8] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.8);\r
  z-index: -1;\r
  cursor: pointer;
}
.fullscreen-close-hint[data-v-cdb704d8] {\r
  position: absolute;\r
  top: 10px;\r
  right: 20px;\r
  color: white;\r
  font-size: 14px;\r
  padding: 8px 12px;\r
  background: rgba(0, 0, 0, 0.6);\r
  border-radius: 4px;\r
  z-index: 1001;
}
.toolbar[data-v-cdb704d8] {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 12px 16px;\r
  background: #f9fafb;\r
  border-bottom: 1px solid #e5e7eb;\r
  height: 60px;
}
.toolbar-left[data-v-cdb704d8] {\r
  display: flex;\r
  align-items: center;
}
.toolbar-right[data-v-cdb704d8] {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;
}
.image-info[data-v-cdb704d8] {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;
}
.image-title[data-v-cdb704d8] {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #374151;
}
.image-count[data-v-cdb704d8] {\r
  font-size: 12px;\r
  color: #6b7280;
}
.control-group[data-v-cdb704d8] {\r
  display: flex;\r
  align-items: center;\r
  background: white;\r
  border-radius: 6px;\r
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r
  border: 1px solid #e5e7eb;
}
.control-button[data-v-cdb704d8] {\r
  padding: 8px;\r
  background: transparent;\r
  border: none;\r
  color: #6b7280;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border-right: 1px solid #e5e7eb;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;
}
.control-button[data-v-cdb704d8]:last-child {\r
  border-right: none;
}
.control-button[data-v-cdb704d8]:first-child {\r
  border-top-left-radius: 6px;\r
  border-bottom-left-radius: 6px;
}
.control-button[data-v-cdb704d8]:last-child {\r
  border-top-right-radius: 6px;\r
  border-bottom-right-radius: 6px;
}
.control-button[data-v-cdb704d8]:hover {\r
  background: #f9fafb;\r
  color: #374151;
}
.icon[data-v-cdb704d8] {\r
  width: 16px;\r
  height: 16px;
}
.content-area[data-v-cdb704d8] {\r
  position: relative;\r
  height: calc(100% - 60px);\r
  display: flex;\r
  flex-direction: column;
}\r
\r
/* 主图片显示区域 */
.image-display-area[data-v-cdb704d8] {\r
  flex: 1;\r
  position: relative;\r
  overflow: hidden;
}
.image-display[data-v-cdb704d8] {\r
  width: 100%;\r
  height: 100%;\r
  position: relative;\r
  overflow: hidden;\r
  background: #f9fafb;\r
  cursor: grab;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;
}
.image-display[data-v-cdb704d8]:active {\r
  cursor: grabbing;
}\r
\r
/* 图片宽度适配模式 */
.main-image[data-v-cdb704d8] {\r
  width: 100%;\r
  height: auto;\r
  object-fit: contain;\r
  user-select: none;\r
  pointer-events: none;\r
  display: block;
}
.loading-overlay[data-v-cdb704d8] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  background: rgba(255, 255, 255, 0.8);\r
  color: #6b7280;
}
.loading-spinner[data-v-cdb704d8] {\r
  width: 32px;\r
  height: 32px;\r
  border: 4px solid #dbeafe;\r
  border-top: 4px solid #2563eb;\r
  border-radius: 50%;\r
  animation: spin-cdb704d8 1s linear infinite;\r
  margin-bottom: 16px;
}
.error-state[data-v-cdb704d8] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #dc2626;\r
  padding: 20px;
}
.error-icon[data-v-cdb704d8] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.error-state h3[data-v-cdb704d8] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #dc2626;
}
.error-state p[data-v-cdb704d8] {\r
  font-size: 14px;\r
  color: #6b7280;\r
  text-align: center;\r
  margin-bottom: 16px;\r
  max-width: 400px;
}
.retry-button[data-v-cdb704d8] {\r
  padding: 8px 16px;\r
  background: #dc2626;\r
  color: white;\r
  border: none;\r
  border-radius: 6px;\r
  font-size: 14px;\r
  cursor: pointer;\r
  transition: background 0.2s;
}
.retry-button[data-v-cdb704d8]:hover {\r
  background: #b91c1c;
}
.empty-state[data-v-cdb704d8] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  color: #6b7280;
}
.empty-icon[data-v-cdb704d8] {\r
  font-size: 48px;\r
  margin-bottom: 16px;
}
.empty-state h3[data-v-cdb704d8] {\r
  font-size: 18px;\r
  font-weight: 600;\r
  margin-bottom: 8px;\r
  color: #374151;
}
.empty-state p[data-v-cdb704d8] {\r
  font-size: 14px;
}\r
\r
/* 缩略图导航 - 使用绝对定位确保在移动端也能显示 */
.thumbnail-nav[data-v-cdb704d8] {\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  right: 0;\r
  backdrop-filter: blur(10px);\r
  border-top: 1px solid #e5e7eb;\r
  padding: 12px;\r
  z-index: 10;
}
.thumbnail-container[data-v-cdb704d8] {\r
  display: flex;\r
  gap: 8px;\r
  overflow-x: auto;\r
  padding: 4px;\r
  scrollbar-width: thin;\r
  justify-content: center;
}
.thumbnail-button[data-v-cdb704d8] {\r
  position: relative;\r
  flex-shrink: 0;\r
  width: 60px;\r
  height: 60px;\r
  border-radius: 6px;\r
  overflow: hidden;\r
  border: 2px solid transparent;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  background: white;
}
.thumbnail-button[data-v-cdb704d8]:hover {\r
  border-color: #d1d5db;\r
  transform: translateY(-2px);\r
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.thumbnail-button.active[data-v-cdb704d8] {\r
  border-color: #3b82f6;\r
  box-shadow: 0 0 0 1px #3b82f6;
}
.thumbnail-image[data-v-cdb704d8] {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;
}
.thumbnail-overlay[data-v-cdb704d8] {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.1);\r
  opacity: 0;\r
  transition: opacity 0.2s;
}
.thumbnail-button:hover .thumbnail-overlay[data-v-cdb704d8] {\r
  opacity: 1;
}
.thumbnail-button.active .thumbnail-overlay[data-v-cdb704d8] {\r
  opacity: 0;
}\r
\r
/* Custom scrollbar for thumbnails */
.thumbnail-container[data-v-cdb704d8]::-webkit-scrollbar {\r
  height: 6px;
}
.thumbnail-container[data-v-cdb704d8]::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
  border-radius: 3px;
}
.thumbnail-container[data-v-cdb704d8]::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 3px;
}
.thumbnail-container[data-v-cdb704d8]::-webkit-scrollbar-thumb:hover {\r
  background: #a1a1a1;
}
@keyframes spin-cdb704d8 {
to {\r
    transform: rotate(360deg);
}
}\r
\r
/* 移动端优化 */
@media (max-width: 768px) {
.toolbar[data-v-cdb704d8] {\r
    flex-direction: column;\r
    gap: 12px;\r
    padding: 16px;\r
    height: auto;
}
.toolbar-left[data-v-cdb704d8],\r
  .toolbar-right[data-v-cdb704d8] {\r
    width: 100%;\r
    justify-content: center;
}
.image-info[data-v-cdb704d8] {\r
    text-align: center;
}
.thumbnail-button[data-v-cdb704d8] {\r
    width: 50px;\r
    height: 50px;
}
.thumbnail-nav[data-v-cdb704d8] {\r
    padding: 8px;
}
.thumbnail-container[data-v-cdb704d8] {\r
    gap: 6px;\r
    padding: 2px;
}\r
\r
  /* 确保移动端缩略图导航可见 */
.content-area[data-v-cdb704d8] {\r
    padding-bottom: 0;
}
.image-display-area[data-v-cdb704d8] {\r
    padding-bottom: 78px; /* 为缩略图导航留出空间 */
}
}\r
\r
/* 全屏模式下的移动端适配 */
.image-container.fullscreen .image-display-area[data-v-cdb704d8] {\r
  padding-bottom: 0;
}
.image-container.fullscreen .thumbnail-nav[data-v-cdb704d8] {\r
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
.image-container.fullscreen .image-display-area[data-v-cdb704d8] {\r
    padding-bottom: 78px;
}
}\r
\r
/* Print styles */
@media print {
.toolbar[data-v-cdb704d8],\r
  .thumbnail-nav[data-v-cdb704d8] {\r
    display: none;
}
.image-container[data-v-cdb704d8] {\r
    box-shadow: none;\r
    border: none;
}
.image-display-area[data-v-cdb704d8] {\r
    padding-bottom: 0;
}
}\r
`;Fs(a4);F_.__scopeId="data-v-cdb704d8";F_.__file="packages/ImagePreview/index.vue";const l4={class:"text-to-speech"},c4=["disabled"],h4={key:0},u4={key:1},d4={key:2};var I_=Ps({__name:"index",props:{text:{type:String,required:!0},rate:{type:Number,required:!1,default:1},volume:{type:Number,required:!1,default:1},autoplay:{type:Boolean,required:!1,default:!1}},setup(e,{expose:t}){const n=e,i=Yt(!1),r=Yt(!1),s=Yt(0),o=Yt(0),a=Yt(n.rate);let l=null,c=0,h=0,d=null;const u=Yn(()=>o.value===0?0:Math.min(s.value/o.value*100,100)),f=(R,P)=>{if(!R?.trim())return 0;const U=(R.match(/[\u4e00-\u9fa5]/g)||[]).length,w=(R.match(/[a-zA-Z]+/g)||[]).length,S=U+w,G=200*P,$=S/G;return Math.max(1,Math.ceil($*60))},m=async()=>{if(!n.text?.trim())return!1;if(speechSynthesis)try{r.value=!0,l&&speechSynthesis.cancel(),o.value=f(n.text,a.value),l=new SpeechSynthesisUtterance(n.text.trim()),l.rate=a.value,l.volume=n.volume,l.pitch=1;const R=speechSynthesis.getVoices(),P=R.find(U=>U.lang.includes("zh")||U.lang.includes("cmn"))||R.find(U=>U.default);return P&&(l.voice=P),l.onstart=()=>{r.value=!1,i.value=!0,c=Date.now()-h*1e3,y()},l.onend=()=>{r.value=!1,i.value=!1,s.value=o.value,k(),h=0,l=null},l.onerror=U=>{r.value=!1,i.value=!1,k(),U.error!=="interrupted"&&console.error("语音播放错误:",U.error),l=null},speechSynthesis.speak(l),!0}catch(R){return r.value=!1,i.value=!1,console.error("播放失败:",R),!1}},_=()=>{speechSynthesis&&i.value&&speechSynthesis.speaking&&(speechSynthesis.pause(),i.value=!1,h=s.value,k())},g=()=>{speechSynthesis&&!i.value&&speechSynthesis.paused&&(speechSynthesis.resume(),i.value=!0,c=Date.now()-h*1e3,y())},p=()=>{speechSynthesis&&(speechSynthesis.cancel(),i.value=!1,r.value=!1,s.value=0,h=0,k(),l=null)},b=()=>{speechSynthesis&&n.text?.trim()&&(i.value?_():speechSynthesis.paused&&l?g():m())},E=R=>{if(R<.5||R>3)return;const P=i.value;a.value=R,o.value=f(n.text,R),P&&(p(),setTimeout(()=>{m()},200))},y=()=>{k(),d=window.setInterval(()=>{if(i.value){const R=(Date.now()-c)/1e3;s.value=Math.min(R,o.value)}},100)},k=()=>{d&&(clearInterval(d),d=null)};return Tr(()=>n.text,R=>{p(),R?.trim()?o.value=f(R,a.value):o.value=0,s.value=0,h=0},{immediate:!0}),Tr(()=>n.rate,R=>{R&&R!==a.value&&E(R)},{immediate:!0}),Tr(()=>n.autoplay,R=>{R&&n.text?.trim()&&!i.value&&setTimeout(()=>{m()},500)},{immediate:!0}),Go(()=>{p()}),t({play:m,pause:_,resume:g,stop:p,toggle:b,setRate:E,isPlaying:Yn(()=>i.value),currentTime:Yn(()=>s.value),totalTime:Yn(()=>o.value),progress:Yn(()=>u.value),rate:Yn(()=>a.value),loading:Yn(()=>r.value)}),(R,P)=>(Tt(),bt("div",l4,[N_(R.$slots,"default",{isPlaying:i.value,currentTime:s.value,totalTime:o.value,progress:u.value,play:m,pause:_,toggle:b,setRate:E,rate:a.value,loading:r.value},()=>[ut(" 默认的方形播放按钮 "),B("button",{onClick:b,class:vn(["default-play-button",{playing:i.value}]),disabled:!R.text||r.value},[r.value?(Tt(),bt("span",h4,"⏳")):i.value?(Tt(),bt("span",d4,"⏸️")):(Tt(),bt("span",u4,"▶️"))],10,c4)])]))}}),f4=`
.dark .content-area[data-v-d5229638] {\r
  background: #99999980 !important;
}
.dark .code-viewer[data-v-d5229638] {\r
  background: #99999980 !important;
}
.dark .control-button[data-v-d5229638]:hover {\r
  background: #cccccc80 !important;
}
.dark .toolbar[data-v-d5229638] {\r
  background: #1d1d1d !important;
}
.dark .control-button[data-v-d5229638]:hover {\r
  background: #cccccc80 !important;
}
.dark .control-group[data-v-d5229638] {\r
  background-color: #000 !important;
}
.text-to-speech[data-v-d5229638] {\r
  display: inline-block;
}
.default-play-button[data-v-d5229638] {\r
  width: 48px;\r
  height: 48px;\r
  border: 2px solid #e5e7eb;\r
  border-radius: 8px;\r
  background: #ffffff;\r
  color: #374151;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
  font-size: 16px;\r
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.default-play-button[data-v-d5229638]:hover:not(:disabled) {\r
  background: #f9fafb;\r
  border-color: #d1d5db;\r
  transform: translateY(-1px);\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.default-play-button[data-v-d5229638]:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
  transform: none;
}
.default-play-button.playing[data-v-d5229638] {\r
  background: #3b82f6;\r
  border-color: #3b82f6;\r
  color: white;
}
.default-play-button.playing[data-v-d5229638]:hover {\r
  background: #2563eb;\r
  border-color: #2563eb;
}\r
`;Fs(f4);I_.__scopeId="data-v-d5229638";I_.__file="packages/ToSpeech/index.vue";const p4={class:"info custom-block"},O4=JSON.parse('{"title":"API Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples/index.md","filePath":"examples/index.md"}'),m4={name:"examples/index.md"},U4=Object.assign(m4,{setup(e){return(t,n)=>(Tt(),bt("div",null,[n[2]||(n[2]=O_('<h1 id="api-examples" tabindex="-1">API Examples <a class="header-anchor" href="#api-examples" aria-label="Permalink to “API Examples”">​</a></h1><ul><li><a href="./Controller.html">Controller</a></li><li><a href="./View.html">View</a></li><li><a href="./WebSocket.html">WebSocket</a></li><li><a href="./Task.html">Task</a></li></ul>',2)),B("div",p4,[n[0]||(n[0]=B("p",{class:"custom-block-title custom-block-title-default"},"INFO",-1)),n[1]||(n[1]=B("p",null,"上述装饰器在收集过程中，会有按照以下流程进行收集。",-1)),U_(z_(ld),{content:decodeURIComponent("graph%20LR%0A%09A%5BConfig%5D%20--%3E%20B%5BDatabase%5D%0A%09B%20--%3E%20C%5BView%5D%0A%09C%20--%3E%20D%5BController%5D%0A%09D%20--%3E%20E%5BDocs%5D%0A%09E%20--%3E%20F%5BTask%5D%0A%09F%20--%3E%20G%5Bapp.run%5D%0A")},null,8,["content"])])]))}});export{ii as $,go as A,vo as B,CA as C,MA as D,vA as E,p1 as F,L4 as G,LA as H,OE as I,ny as J,Ru as K,km as L,$o as M,Om as N,_4 as O,aT as P,uT as Q,dn as R,bn as S,FA as T,qd as U,C4 as V,A4 as W,jg as X,Ku as Y,xE as Z,dE as _,O4 as __pageData,SA as a,ks as a$,Lu as a0,Vi as a1,Ud as a2,cy as a3,Eo as a4,Ff as a5,D4 as a6,TE as a7,BE as a8,Dr as a9,y4 as aA,S4 as aB,T4 as aC,x4 as aD,ku as aE,M4 as aF,v4 as aG,w4 as aH,E4 as aI,b4 as aJ,jo as aK,Is as aL,fl as aM,KM as aN,BC as aO,Xo as aP,ml as aQ,WM as aR,yg as aS,jS as aT,YS as aU,pr as aV,bf as aW,KS as aX,Vu as aY,XS as aZ,QS as a_,uC as aa,rC as ab,dC as ac,fC as ad,wg as ae,Ol as af,Vl as ag,gl as ah,$S as ai,Hu as aj,Rg as ak,Eg as al,GM as am,UM as an,sC as ao,mC as ap,Yo as aq,R4 as ar,N4 as as,qo as at,Ht as au,Wt as av,EA as aw,r1 as ax,jd as ay,Xd as az,bA as b,er as b0,gf as b1,Gu as b2,Tg as b3,Rh as b4,rM as b5,vc as b6,Qt as b7,ni as b8,a1 as b9,l1 as ba,jE as bb,oT as bc,yA as c,Le as d,U4 as default,_0 as e,We as f,ed as g,xl as h,xs as i,fT as j,Xu as k,Gt as l,GE as m,o1 as n,mA as o,kE as p,AE as q,Og as r,TA as s,oE as t,B4 as u,Im as v,HE as w,gx as x,fM as y,zu as z};
