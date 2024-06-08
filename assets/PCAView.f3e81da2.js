import{_ as b,g as C,r as c,a as h,b as p,c as r,d as s,e as t,w as i,h as _,p as $,f as U,i as u}from"./index.572a4137.js";const k=C({setup(){const e=c("pca"),a=c("all"),v=c("B cell"),y=c("B cell"),m=c(""),g=c(""),o=l=>{console.log(l)},n="B cell, CD4 T cell, CD8 T cell, CLP, CMP, DC cell, Erythrocyte, GMP, Granulocyte, HSPC, Macrophage, Megakaryocyte, MEP, Monocyte, NK cell".split(", ").map(l=>({value:l,label:l})),f=c(n);return{algorithm:e,comparison:a,algorithmChange:o,options:f,cellType:v,cellType2:y,imgUrl1:m,imgUrl2:g,submit:()=>{a.value==="all"?(m.value=`/imgs/analysis/analysis1/${e.value}/all/young_${e.value}.png`,g.value=`/imgs/analysis/analysis1/${e.value}/all/aged_${e.value}.png`):a.value==="cells"?(m.value=`/imgs/analysis/analysis1/${e.value}/cell vs cell/young ${v.value} vs ${y.value} ${e.value}.png`,g.value=`/imgs/analysis/analysis1/${e.value}/cell vs cell/aged ${v.value} vs ${y.value} ${e.value}.png`):a.value==="ages"&&(m.value=`/imgs/analysis/analysis1/${e.value}/aging/aging ${v.value} ${e.value}.png`,g.value="")}}}}),d=e=>($("data-v-1d73591a"),e=e(),U(),e),T={class:"pca-view"},S=d(()=>s("h1",null,"Dimensionality Reduction",-1)),P={class:"select-area"},B={class:"select-list"},M={class:"select-item"},N=d(()=>s("div",{class:"label"},"Algorithm:",-1)),V=u("PCA"),A=u("TSNE"),x={class:"select-item"},D=d(()=>s("div",{class:"label"},"Comparison:",-1)),E=u("All cell types"),I=u("between different cells"),R=u("between different ages"),j={key:0,class:"select-item"},G=d(()=>s("div",{class:"label"},"Cell type:",-1)),Y={key:1,class:"select-item"},F=d(()=>s("div",{class:"label"},"Cell type:",-1)),H=d(()=>s("div",{style:{margin:"0 8px"}},"VS",-1)),K=u("Submit"),L=d(()=>s("div",{class:"select-help"}," \u{1F58A} Note: You can perform dimensionality reduction here. Select dimensionality reduction algorithm, comparison groups and then cell type of interest. MetaB will use R functions and packages prcomp and Rtsne to perform the analysis. You can view the results below after clicking Submit. ",-1)),q={key:0,class:"img-result"},z={key:0,class:"image-container"},J={key:1,class:"image-container"};function O(e,a,v,y,m,g){const o=h("a-select-option"),n=h("a-select"),f=h("a-button"),w=h("a-image");return p(),r("div",T,[S,s("div",null,[s("div",P,[s("div",B,[s("div",M,[N,t(n,{ref:"select",value:e.algorithm,"onUpdate:value":a[0]||(a[0]=l=>e.algorithm=l),style:{width:"200px"},onChange:e.algorithmChange},{default:i(()=>[t(o,{value:"pca"},{default:i(()=>[V]),_:1}),t(o,{value:"tsne"},{default:i(()=>[A]),_:1})]),_:1},8,["value","onChange"])]),s("div",x,[D,t(n,{ref:"select",value:e.comparison,"onUpdate:value":a[1]||(a[1]=l=>e.comparison=l),style:{width:"200px"}},{default:i(()=>[t(o,{value:"all"},{default:i(()=>[E]),_:1}),t(o,{value:"cells"},{default:i(()=>[I]),_:1}),t(o,{value:"ages"},{default:i(()=>[R]),_:1})]),_:1},8,["value"])]),e.comparison==="ages"?(p(),r("div",j,[G,t(n,{ref:"select",value:e.cellType,"onUpdate:value":a[2]||(a[2]=l=>e.cellType=l),style:{width:"200px"},options:e.options},null,8,["value","options"])])):_("",!0),e.comparison==="cells"?(p(),r("div",Y,[F,t(n,{ref:"select",value:e.cellType,"onUpdate:value":a[3]||(a[3]=l=>e.cellType=l),style:{width:"140px"},options:e.options},null,8,["value","options"]),H,t(n,{ref:"select",value:e.cellType2,"onUpdate:value":a[4]||(a[4]=l=>e.cellType2=l),style:{width:"140px"},options:e.options},null,8,["value","options"])])):_("",!0),t(f,{type:"primary",class:"submit-button",onClick:e.submit},{default:i(()=>[K]),_:1},8,["onClick"])]),L]),e.imgUrl1!==""||e.imgUrl2!==""?(p(),r("div",q,[e.imgUrl1!==""?(p(),r("div",z,[t(w,{src:e.imgUrl1},null,8,["src"])])):_("",!0),e.imgUrl2!==""?(p(),r("div",J,[t(w,{src:e.imgUrl2},null,8,["src"])])):_("",!0)])):_("",!0)])])}var W=b(k,[["render",O],["__scopeId","data-v-1d73591a"]]);export{W as default};
