(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{77775:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(68527),a=n(9008),i=n(59499),s=n(4730),o=n(25888),p=n(85893),d=["children","fluid"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=4,y=24,m=24,f=60;function h(e){var t=e.children,n=e.fluid,a=(0,s.Z)(e,d);return(0,p.jsx)(r.rj,l(l({maxW:"1920px",templateColumns:"repeat(12, 1fr)",gridGap:(0,o.u)(c,y),px:n?0:(0,o.u)(m,f),width:"100%",mx:"auto"},a),{},{children:t}))}h.defaultProps={fluid:!1};var b=n(90456),x=["side","title","desc","stack","image","href"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j,w=function(e){var t=e.side,n=e.title,a=e.desc,i=e.stack,o=e.image,d=e.href,u=(0,s.Z)(e,x);return(0,p.jsxs)(h,g(g({fluid:!0,templateColumns:"repeat(4, 1fr)",mb:10},u),{},{children:[(0,p.jsx)(r.P4,{colSpan:{base:4,sm:1},children:(0,p.jsx)(r.xv,{color:"white",opacity:.5,children:t})}),(0,p.jsxs)(r.P4,{colSpan:{base:4,sm:3},children:[o&&(0,p.jsx)(b.Ee,{width:"36px",mb:4,src:o,alt:n}),(0,p.jsxs)(r.X6,{as:d?"a":"h3",href:d,size:"md",display:"flex",alignItems:"center",children:[n,d&&(0,p.jsx)(b.Ee,{ml:2,src:"/arrow-link.svg",alt:"link to ".concat(n),transform:"translateY(1px)"})]}),a&&(0,p.jsx)(r.xv,{my:2,children:a}),i&&(0,p.jsx)(r.xv,{color:"white",opacity:.5,children:i})]})]}))},T=n(67294),k=n(5286),O=n(98504),M=n(31078),S=function(e){return"".concat(e.slice(0,4),"...").concat(e.slice(e.length-4,e.length))},E=function(){var e=(0,T.useState)(!1),t=e[0],n=e[1],a=(0,O.Z)().width,i=(0,k.mA)().address,s=(0,k.F6)({address:i}).data,o=(0,k.c9)({addressOrName:i}).data,d=(0,T.useState)(!1),u=d[0],l=d[1],c=(0,T.useRef)(),y=(0,M.Z)(c),m=y.elX,f=y.elY,h=a<=768;return(0,T.useEffect)((function(){n(!0)}),[]),(0,T.useEffect)((function(){c.current&&l(!(!m&&!f))}),[m,f,c]),!(h||!i||!t)&&(0,p.jsx)(r.xu,{ref:c,position:"fixed",zIndex:9999,pointerEvents:"none",top:0,left:0,width:"full",height:"full",color:"white",fontSize:"sm",textTransform:"uppercase",children:(0,p.jsxs)(r.kC,{position:"absolute",alignItems:"center",bg:"white",color:"black",borderRadius:"xl",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",fontWeight:"semibold",px:3,py:1,pl:o?1:3,transform:"translate(".concat(m+5,"px, ").concat(f+20,"px)"),style:{opacity:u?1:0},children:[o&&(0,p.jsx)(b.Ee,{width:"16px",height:"16px",borderRadius:"full",src:o,alt:i,mr:2}),s||S(i)]})})},C=n(71383),A=n(70917),F=n(97375),I=n(50029),P=n(87794),N=n.n(P),_=n(16552),R=n(65113),z=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OnlyOneMintAllowed","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PX_SIZE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"colors","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasAddressMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_seed","type":"uint256"}],"name":"render","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"seeds","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]'),D={contractAddress:"0xe46C0F1843756dCe9B8D39bca3c44ee0262cBd71"}.contractAddress,Z=function(e){var t=e.name,n=e.isOpen,a=e.onClose,i=(0,T.useState)(!1),s=i[0],o=i[1],d=(0,T.useState)(!1),u=d[0],l=d[1],c=(0,k.mA)().address,y=(0,k.PJ)({addressOrName:D,contractInterface:z,functionName:"mint"}).config,m=(0,k.GG)(y),f=m.data,h=m.write,x=(0,k.do)({addressOrName:D,contractInterface:z,functionName:"hasAddressMinted",args:c}),v=x.data,g=x.isLoading,j=(0,T.useCallback)((0,I.Z)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return");case 2:return o(!0),e.next=5,f.wait();case 5:o(!1),l(!0);case 7:case"end":return e.stop()}}),e)}))),[f]);return(0,T.useEffect)((function(){j()}),[f,j]),(0,p.jsxs)(_.u_,{isOpen:n,onClose:a,isCentered:!0,children:[(0,p.jsx)(_.ZA,{}),(0,p.jsxs)(_.hz,{bg:"white",textColor:"black",p:12,borderRadius:"3xl",textAlign:"center",children:[(0,p.jsx)(b.Ee,{mx:"auto",mb:6,width:"96px",src:"/bonhomme.gif",alt:"Free 3x3 NFT"}),(0,p.jsxs)(r.xv,{fontWeight:"semibold",mb:2,children:["Thanks, ",t]}),(0,p.jsx)(r.xv,{color:"blackAlpha.700",children:"As you've come all this way and even connected your wallet, it's only right to give you something in return. You can mint one of my 3x3 generated NFTs for free."}),u?(0,p.jsxs)(r.xv,{my:4,children:["Success!"," ",(0,p.jsx)(r.rU,{href:"https://rainbow.me/".concat(c),children:"Check your wallet"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(R.zx,{_hover:{bg:"blackAlpha.900"},bg:"black",color:"white",fontWeight:"normal",textTransform:"uppercase",fontSize:"sm",borderRadius:"lg",py:6,mt:4,mb:2,onClick:h,isLoading:s,disabled:g||v,children:v?"You already minted one":"Mint for free"}),null!==f&&void 0!==f&&f.hash?(0,p.jsx)(r.rU,{opacity:.7,href:"https://etherscan.io/tx/".concat(null===f||void 0===f?void 0:f.hash),fontSize:"12px",children:"view transaction"}):(0,p.jsx)(r.rU,{opacity:.7,href:"https://etherscan.io/address/".concat(D),fontSize:"12px",children:"view contract"})]})]})]})},W=(0,A.F4)(j||(j=(0,C.Z)(["\n  from {transform: rotate(0deg);}\n  to {transform: rotate(360deg)}\n"]))),X=function(){var e=(0,F.qY)(),t=e.isOpen,n=e.onOpen,a=e.onClose,i=(0,T.useState)(!1),s=i[0],o=i[1],d=(0,k.mA)().address,u=(0,k.F6)({address:d}).data;return(0,T.useEffect)((function(){o(!0)}),[]),!!s&&(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)(Z,{name:u||S(d),isOpen:t,onOpen:n,onClose:a}),(0,p.jsx)(r.xu,{as:"button",onClick:n,type:"button",cursor:d?"pointer":"default",transition:"0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)",_hover:{transform:"scale(1.03)"},children:(0,p.jsxs)(r.kC,{alignItems:"center",justifyContent:"center",position:"relative",children:[d&&(0,p.jsx)(r.kC,{alignItems:"center",justifyContent:"center",position:"absolute",top:0,left:0,right:0,bottom:0,animation:"".concat(W," infinite 2.5s paused linear"),_hover:{animationPlayState:"running"},children:(0,p.jsx)(b.Ee,{maxWidth:"none",position:"absolute",width:{base:"full",lg:"135%"},src:"/blurs.png",role:"presentation",animation:"".concat(W," infinite 5s linear")})}),(0,p.jsx)(b.Ee,{borderRadius:"full",width:{base:"80%",lg:"full"},src:"/profile.png",alt:"Bonhomme"})]})})]})};function B(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.default,{children:(0,p.jsx)("title",{children:"Bonhomme - FullStack Developer"})}),(0,p.jsx)(E,{}),(0,p.jsxs)(r.xu,{py:"115px",px:4,maxWidth:500,mx:"auto",children:[(0,p.jsxs)(h,{fluid:!0,templateColumns:"repeat(4, 1fr)",mb:10,alignItems:"center",children:[(0,p.jsx)(r.P4,{colSpan:1,children:(0,p.jsx)(X,{})}),(0,p.jsx)(r.P4,{colSpan:3,children:(0,p.jsxs)(r.xu,{children:[(0,p.jsx)(r.X6,{as:"h1",size:"lg",children:"Maxime Bonhomme"}),(0,p.jsx)(r.xv,{children:"Product-focused Fullstack Developer"}),(0,p.jsx)(r.rU,{color:"white",opacity:.5,href:"https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2",children:"bonhomme.eth"})]})})]}),(0,p.jsxs)(r.xu,{mb:14,children:[(0,p.jsx)(r.X6,{as:"h2",size:"md",mb:2,children:"About"}),(0,p.jsx)(r.xv,{children:"GM, I'm Max. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping."})]}),(0,p.jsxs)(r.xu,{mb:14,children:[(0,p.jsx)(r.X6,{as:"h2",size:"md",mb:10,children:"Work Experience"}),(0,p.jsx)(w,{href:"https://iyk.app",side:"2022 - present",title:"Senior Frontend Engineer \u2013 IYK",desc:"Building the Whole Wide World\ufe61",stack:"TS \u2022 Next \u2022 Nest \u2022 Stitches \u2022 Mobx \u2022 Turbo"}),(0,p.jsx)(w,{href:"https://everpress.com/",side:"2020 - 2022",title:"Full Stack & Technical Lead \u2013 Everpress",desc:"Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.",stack:"React \u2022 Redux \u2022 Symfony \u2022 AWS"}),(0,p.jsx)(w,{side:"2016 \u2013 2020",title:"Front End Engineer \u2013 Freelance",desc:"Worked with a range of large and small agencies, start-ups and individuals to build products. Clients included Marvel App, United Nations, Netflix, Dropbox Design.",stack:"React \u2022 Redux \u2022 Styled Components \u2022 Framer Motion"}),(0,p.jsx)(w,{href:"https://neverbland.com/",side:"2014 \u2013 2016",title:"Front End Engineer \u2013 Neverbland",desc:"Part of a tight-knit team of designers, developers and critical thinkers, I built MVP products and marketing experiences for start-ups.",stack:"React \u2022 Redux \u2022 CSSModules \u2022 Three.js"}),(0,p.jsx)(r.X6,{as:"h2",size:"md",mt:14,mb:10,children:"Side Projects"}),(0,p.jsx)(w,{image:"/tamiko.svg",side:"Ongoing",title:"Tamiko",desc:"Tamiko are non-fungible friends that live completely on-chain. You can hatch, feed, breed and evolve them.",stack:"Solidity \u2022 ERC721 \u2022 ERC1155 \u2022 Next.js"}),(0,p.jsx)(w,{href:"https://kineticspectru.ms/",image:"/kineticspectrum.png",side:"2022",title:"Kinetic Spectrums",desc:"Generative on-chain NFTs. A collection of dynamic, ever changing artworks.",stack:"Solidity \u2022 ERC721 \u2022 Next.js"}),(0,p.jsx)(r.X6,{as:"h2",size:"md",mt:14,mb:10,children:"Links"}),(0,p.jsx)(w,{side:"Github",title:"@maximebonhomme",href:"https://github.com/maximebonhomme",mb:4}),(0,p.jsx)(w,{side:"Etherscan",title:"bonhomme.eth",href:"https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2",mb:4}),(0,p.jsx)(w,{side:"Foundation",title:"@bonhomme",href:"https://foundation.app/@bonhomme?tab=owned",mb:4}),(0,p.jsx)(w,{side:"Twitter",title:"@pixel_arts",href:"https://twitter.com/pixel_arts",mb:4})]})]})]})}},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(77775)}])}},function(e){e.O(0,[899,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);