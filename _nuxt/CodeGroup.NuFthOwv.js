import b from"./TabsHeader.kP88pQzO.js";import{d as u,N as c,l as f}from"./entry.n7me8pNP.js";const d=(n,i)=>n.type&&n.type.tag&&n.type.tag===i,o=u({data(){return{activeTabIndex:0,counter:0}},render(){var r,s;const n=((s=(r=this.$slots)==null?void 0:r.default)==null?void 0:s.call(r))||[],i=n.map((e,p)=>{var a,t,v;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((t=e==null?void 0:e.props)==null?void 0:t.label)||`${p}`,active:((v=e==null?void 0:e.props)==null?void 0:v.active)||!1,component:e}});return c("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[c(b,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:i,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),c("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,p)=>{var a,t;return c("div",{style:{display:p===this.activeTabIndex?"block":"none"},class:{"":!d(e,"code")&&!d(e,"pre")}},[d(e,"code")||d(e,"pre")?e:c("div",{class:{"preview-canvas":!0}},[((t=(a=e.children)==null?void 0:a.default)==null?void 0:t.call(a))||e.children])])}))])}}),h=f(o,[["__scopeId","data-v-9265bf89"]]);export{h as default};
