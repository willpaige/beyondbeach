import{n as e,o as t}from"./chunk-vNrZSFDR.js";import{t as n}from"./react-KkzZQhs-.js";import{t as r}from"./jsx-runtime-BiDZswiL.js";import{n as i,t as a}from"./cn-Cg8KJ7WD.js";import{n as o,t as s}from"./Badge-DNOFKTcl.js";import{n as c,t as l}from"./Button-Chrrx8FH.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as ee}from"./Section-BzIPQDFn.js";function v({children:e,className:t}){return(0,y.jsx)(`div`,{className:a(`max-w-[var(--width-page)] mx-auto`,t),children:e})}var y,b=e((()=>{y=r(),i(),v.__docgenInfo={description:``,methods:[],displayName:`PageContainer`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),x,S=e((()=>{x=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim()})),C,w=e((()=>{C=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()})),T,te=e((()=>{T=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase())})),E,ne=e((()=>{te(),E=e=>{let t=T(e);return t.charAt(0).toUpperCase()+t.slice(1)}})),D,O=e((()=>{D={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`}})),k,A=e((()=>{k=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1}})),j,M,N,P=e((()=>{j=t(n()),M=(0,j.createContext)({}),N=()=>(0,j.useContext)(M)})),F,I,L=e((()=>{F=t(n()),O(),A(),S(),P(),I=(0,F.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=N()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,F.createElement)(`svg`,{ref:c,...D,width:t??l??D.width,height:t??l??D.height,stroke:e??f,strokeWidth:m,className:x(`lucide`,p,i),...!a&&!k(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,F.createElement)(e,t)),...Array.isArray(a)?a:[a]])})})),R,z,B=e((()=>{R=t(n()),S(),w(),ne(),L(),z=(e,t)=>{let n=(0,R.forwardRef)(({className:n,...r},i)=>(0,R.createElement)(I,{ref:i,iconNode:t,className:x(`lucide-${C(E(e))}`,`lucide-${e}`,n),...r}));return n.displayName=E(e),n}})),V,H,U=e((()=>{B(),V=[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]],H=z(`arrow-right`,V)})),W=e((()=>{B(),U(),P(),L()}));function G({href:e,children:t,className:n}){return(0,K.jsxs)(`a`,{href:e,className:a(`inline-flex items-center gap-[7px] text-[12px] font-semibold tracking-[0.08em] uppercase`,`text-[var(--theme-accent-hover,var(--color-accent-dk))] no-underline`,`transition-[gap] duration-200 hover:gap-3`,n),children:[t,(0,K.jsx)(H,{size:13,strokeWidth:2.5})]})}var K,q=e((()=>{K=r(),i(),W(),G.__docgenInfo={description:``,methods:[],displayName:`ArrowLink`,props:{href:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),J,Y,X,Z,Q,$;e((()=>{J=r(),m(),b(),p(),c(),o(),q(),f(),_(),Y={title:`Design System/Theming`,tags:[`autodocs`]},X={render:()=>(0,J.jsxs)(`div`,{className:`p-8 space-y-8`,children:[(0,J.jsx)(`h2`,{className:`font-heading text-2xl font-semibold mb-4`,children:`Brand Colours`}),(0,J.jsx)(`div`,{className:`grid grid-cols-5 gap-4`,children:Object.entries(h).map(([e,t])=>(0,J.jsxs)(`div`,{className:`text-center`,children:[(0,J.jsx)(`div`,{className:`w-full aspect-square rounded-xl border border-black/5 mb-2`,style:{background:t}}),(0,J.jsx)(`div`,{className:`text-xs font-semibold`,children:e}),(0,J.jsx)(`div`,{className:`text-xs text-[var(--color-muted)]`,children:t})]},e))}),(0,J.jsx)(`h2`,{className:`font-heading text-2xl font-semibold mb-4 mt-12`,children:`Category Themes`}),(0,J.jsx)(`div`,{className:`grid grid-cols-5 gap-4`,children:Object.keys(u).map(e=>{let t=u[e];return(0,J.jsxs)(`div`,{className:`rounded-xl overflow-hidden border border-black/5`,children:[(0,J.jsx)(`div`,{className:`h-24`,style:{background:t.accent}}),(0,J.jsxs)(`div`,{className:`p-3`,children:[(0,J.jsx)(`div`,{className:`text-sm font-semibold`,children:t.label}),(0,J.jsx)(`div`,{className:`text-xs text-[var(--color-muted)]`,children:t.accent}),(0,J.jsxs)(`div`,{className:`text-xs text-[var(--color-muted)]`,children:[`Hover: `,t.accentHover]})]})]},e)})})]})},Z={render:()=>(0,J.jsx)(`div`,{className:`space-y-0`,children:[`white`,`sand`,`warm`,`accent`,`ink`,`ocean`].map(e=>(0,J.jsx)(ee,{bg:e,className:`px-8 py-12`,children:(0,J.jsxs)(v,{children:[(0,J.jsx)(d,{label:`bg="${e}"`,title:`Section heading`,accentText:`with accent.`}),(0,J.jsx)(`p`,{className:`text-sm mt-2`,style:{color:`var(--section-text-muted)`},children:`Body text automatically adapts to the background theme.`}),(0,J.jsxs)(`div`,{className:`flex gap-3 mt-4`,children:[(0,J.jsx)(l,{variant:`primary`,size:`sm`,children:`Primary`}),(0,J.jsx)(G,{href:`#`,children:`Arrow link`})]})]})},e))})},Q={render:()=>(0,J.jsxs)(`div`,{className:`p-8 space-y-6`,children:[(0,J.jsx)(`h2`,{className:`font-heading text-2xl font-semibold`,children:`Category Theming`}),(0,J.jsx)(`p`,{className:`text-sm text-[var(--color-muted)] mb-6`,children:`Wrapping components in a CategoryThemeProvider switches their accent colours automatically.`}),Object.keys(u).map(e=>(0,J.jsxs)(g,{theme:e,className:`flex items-center gap-4 p-4 rounded-xl border border-black/5`,children:[(0,J.jsx)(`div`,{className:`w-1 h-10 rounded-full`,style:{background:`var(--theme-accent)`}}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`div`,{className:`text-sm font-semibold`,children:u[e].label}),(0,J.jsxs)(`div`,{className:`flex gap-2 mt-2`,children:[(0,J.jsx)(s,{variant:`themed`,children:e}),(0,J.jsx)(l,{variant:`primary`,size:`sm`,children:`Book Now`})]})]})]},e))]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h2 className="font-heading text-2xl font-semibold mb-4">Brand Colours</h2>
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(colors).map(([name, value]) => <div key={name} className="text-center">
            <div className="w-full aspect-square rounded-xl border border-black/5 mb-2" style={{
          background: value
        }} />
            <div className="text-xs font-semibold">{name}</div>
            <div className="text-xs text-[var(--color-muted)]">{value}</div>
          </div>)}
      </div>

      <h2 className="font-heading text-2xl font-semibold mb-4 mt-12">Category Themes</h2>
      <div className="grid grid-cols-5 gap-4">
        {(Object.keys(categoryThemes) as CategoryTheme[]).map(key => {
        const t = categoryThemes[key];
        return <div key={key} className="rounded-xl overflow-hidden border border-black/5">
              <div className="h-24" style={{
            background: t.accent
          }} />
              <div className="p-3">
                <div className="text-sm font-semibold">{t.label}</div>
                <div className="text-xs text-[var(--color-muted)]">{t.accent}</div>
                <div className="text-xs text-[var(--color-muted)]">Hover: {t.accentHover}</div>
              </div>
            </div>;
      })}
      </div>
    </div>
}`,...X.parameters?.docs?.source},description:{story:`Colour palette`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-0">
      {(['white', 'sand', 'warm', 'accent', 'ink', 'ocean'] as const).map(bg => <Section key={bg} bg={bg} className="px-8 py-12">
          <PageContainer>
            <SectionHeading label={\`bg="\${bg}"\`} title="Section heading" accentText="with accent." />
            <p className="text-sm mt-2" style={{
          color: 'var(--section-text-muted)'
        }}>
              Body text automatically adapts to the background theme.
            </p>
            <div className="flex gap-3 mt-4">
              <Button variant="primary" size="sm">Primary</Button>
              <ArrowLink href="#">Arrow link</ArrowLink>
            </div>
          </PageContainer>
        </Section>)}
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Section background themes`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-6">
      <h2 className="font-heading text-2xl font-semibold">Category Theming</h2>
      <p className="text-sm text-[var(--color-muted)] mb-6">
        Wrapping components in a CategoryThemeProvider switches their accent colours automatically.
      </p>
      {(Object.keys(categoryThemes) as CategoryTheme[]).map(key => <CategoryThemeProvider key={key} theme={key} className="flex items-center gap-4 p-4 rounded-xl border border-black/5">
          <div className="w-1 h-10 rounded-full" style={{
        background: 'var(--theme-accent)'
      }} />
          <div>
            <div className="text-sm font-semibold">{categoryThemes[key].label}</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="themed">{key}</Badge>
              <Button variant="primary" size="sm">Book Now</Button>
            </div>
          </div>
        </CategoryThemeProvider>)}
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Category theme applied to components`,...Q.parameters?.docs?.description}}},$=[`ColourPalette`,`SectionBackgrounds`,`CategoryThemes`]}))();export{Q as CategoryThemes,X as ColourPalette,Z as SectionBackgrounds,$ as __namedExportsOrder,Y as default};