const a=[.3,-.04,-.01,0,-.06,.15,-.07,-.02,-.05,-.07,.08,.14,-.22,.01,.03,-.16,.23,.05,-.15,.04,.05,.13,-.09,.07,.01,-.09,.11,.05,-.05,.1,-.14,.14,.01,.14,.36,.2,.07,.04,-.07,-.08,.08,-.11,.04,-.04,-.14,.06,-.06,.19,.15,-.21,-.15,.25,.07,-.01,-.08,-.06,-.08,.12,-.19,.03,-.02,-.07,-.12,.1,.01,.14,-.05,.02,.02,.01,-.06,.06,-.11,.1,-.05,.19,.14,-.02,-.07,.2,.04,.1,.12,-.09,-.02,.08,-.11,-.17,.06,0,-.15,-.14,-.08,.1,.14,-.22,.04,.34,-.01,-.04,-.04,-.08,-.1,.02,-.21,-.08,.02,-.14,-.01,-.16,.1,-.22,-.12,.08,.05,.03,.02,.17,.15,-.04,-.1,.05,.26,.23,-.05,-.18,-.11,.14,.18,.01,-.11,-.14,.04,-.2,.17,.07,-.07,-.2,.15,.22,-.1,.15,-.14,-.1,.26,.24,-.04,.01,-.14,-.05,-.06,-.07,.04,.18,-.11,-.1,-.22,.25,.25,.02,-.09,-.09,.1,-.09,-.11,-.05,.08,.17,-.03,-.01,.33,.11,-.05,-.17,-.12,.22,.05,.12,-.07,0,-.1,.17,-.01,-.05,-.16,-.27,.29,.23,-.06,-.03,-.01,.01,-.03,-.08,-.07,.05,-.05,.01,.2,.15,-.12,-.09,.01,.16,.02,-.03,-.17,-.13,-.06,-.27,-.14,.06,.17,-.01,.14,.09,-.1,-.1,.25,.01,-.12,-.23,-.09,.04,-.14,0,-.08,.18,-.05,-.08,.07,.08,-.16,-.03,-.26,.32,.11,0,-.1,.26,-.12,.01,-.16,-.1,-.1,-.08,.09,.03,.06,.08,.03,-.06,-.09,-.04,-.07,-.07,-.05,-.03,-.03,-.05,-.11,-.25,-.08,-.09,.09,-.19,.2,-.14,-.03,0,.16,.19,.02,-.08,-.03,-.03,.05,0,-.12,.15,-.13,-.02,0,-.05,-.19,-.04,.03,.05,-.05,.06,-.05,-.25,-.07,-.15,.05,.03,-.02,.13,.01,-.19,.14,.01,.08,-.03,.15,-.15,-.04,-.1,-.11,-.03,-.08,-.19,-.08,.27,.01,-.2,-.17,-.26,-.03,-.19,-.11,.03,.09,-.08,-.28,-.18,-.03,-.19,.02,-.17,.09,-.06,0,.05,.11,.25,.17,-.07,-.02,.15,-.15,-.01,-.08,.08,.01,-.06,-.15,-.11,-.01,-.25,-.1,-.04,.15,-.15,-.07,-.02,.02,.05,-.07,.04,-.03,-.09,-.19,-.17,-.01,.07,.17,-.04,0,.05,.09,-.21,-.19,0,.08,-.08,-.17,-.09,-.03,-.13,.12,.03,.26,.01,.19,.11,.15,.03,-.05,-.04,-.06,-.24,-.05,-.03,-.03,-.04,.12,.04,-.15,-.11,-.05,-.15,-.06,-.04,-.14,-.08,-.02,-.05,-.06,-.07,-.11,-.01,-.08,-.1,-.01,.19,-.12,.02,-.15,-.08,.13,-.05,.24,-.04,.02,-.01,-.02,.02,-.16,-.19,-.21,-.03,-.03,.13,-.18,-.05,-.2,-.05,-.04,.07,-.15,-.09,-.17,.16,-.19,-.13,.01,-.12,-.02,.15,-.09,-.04,.08,-.08,.08,.01,.13,.02,.06,-.03,-.05,-.06,.09,-.05,0,.02,-.02,-.06,.08,.01,-.13,.03,.19,.16,-.22,-.02,-.02,-.05,.07,-.02,.02,-.02,.03,-.11,-.16,-.06,-.03,0,.12,-.04,.02,.2,-.15,-.11,.07,0,-.19,.04,-.04,-.08,-.23,-.07,-.08,-.02,-.11,.01,.01,0,0,-.04,-.09,-.08,-.15,-.03,-.16,.2,.12,-.16,-.11,-.06,.14,-.01,.04,-.09,.04,.33,-.03,.08,-.05,-.06,-.12,-.19,-.09,-.15,.31,.25,-.13,-.14,.02,.03,-.15,-.29,-.19,.06,.21,.06,.21,.03,-.14,-.12,-.07,0,-.01,.08,-.15,-.28,.19,-.2,.02,.05,-.04,.08,-.29,-.07,-.05,0,-.07,.08,.08,.11,-.01,-.05,.03,-.1,-.02,-.03,-.09,.02,-.25,.15,.23,.14,-.09,-.09,-.12,.05,.01,-.02,.22,.04,-.09,.01,-.08,-.12,-.18,.17,-.07,-.09,.02,-.1,.05,-.06,-.04,-.06,.01,.07,-.21,.11,.08,-.08,.12,.14,-.22,.01,-.1,-.07,-.07,-.13,-.2,.24,-.17,.12,-.11,-.01,-.11,.25,-.14,-.22,-.07,-.1,-.26,.03,.07,-.15,.08,-.15,.02,-.16,.06,-.02,.05,-.02,.18,.12,-.04,-.1,-.03,-.07,-.13,-.16,.13,.15,-.19,-.01,-.01,.08,0,0,-.17,-.06,0,-.02,.01,-.15,-.03,.12,.08,-.13,-.1,-.07,-.15,.24,.09,.1,-.12,-.16,-.05,-.05,.09,.05,.1,0,.05,0,.01,.32,.1,-.14,-.04,.02,.16,.17,-.09,-.27,.17,-.09,.28,.19,-.05,.19,-.11,-.09,-.05,-.06,-.01,-.13,.15,.16,.17,.08,-.05,-.05,.13,.01,-.04,-.07,-.16,-.04,-.09,-.03,-.01,-.06,.08,-.02,.02,.04,.1,.21,.26,-.09,.14,-.11,-.04,.01,-.17,-.16,.04,-.23,.06,.05,.07,.09,.19,0,-.12,.27,-.09,.03,-.06,-.01,.31,.06,.08,.02,.04,-.13,0,.05,.11,-.12,.1,.12,-.02,-.06,-.04,-.02,-.14,-.11,-.05,.25,-.06,-.05,-.1,.33,-.21,.13,-.07,-.03,-.03,-.25,-.05,.01,.29,-.08,-.01,-.1,-.14,.03,.06,.13,.15,-.08,-.08,.04,-.05,.12,-.02,-.14,-.03,-.09,-.17,-.01,.05,-.01,.09,-.11,-.05,.26,-.16,-.02,.25,-.09,-.07,.15,-.13,-.23,-.03,.09,.06,-.02,.07,.06,-.13,-.13,-.03,.02,-.02,-.02,.18,-.11,.02,.01,.13,-.15,.09,.08,.04,0,.27,.13,.03,.07,-.24,-.16,.3,-.06,-.14,.19,-.13,.1,-.01,.23,-.04,.11,.07,-.04,-.13,-.26,-.06,.18,-.07,-.02,-.03,-.03,-.03,-.17,.14,.27,-.16,-.17,-.02,.04,-.25,-.2,-.02,-.22,-.06,-.19,.12,.36,.04,.04,.05,-.12,-.07,-.03,-.01,-.15,-.05,-.16,-.13,-.13,-.04,-.08,-.07,-.11,.01,0,-.05,-.1,.06,.04,.36,-.06,.3,-.04,.12,-.18,.29,-.2,.18,.05,.3,-.16,-.18,.03,.18,-.08,-.12,.14,-.01,.02,0,-.17,-.07,-.06,.24,0,-.04,-.21,-.01,-.05,-.03,-.11,-.08,-.01,-.1,-.14,-.01,-.04,.22,-.05,-.05,-.12,-.02,.02,-.08,.12,.28,.01,-.13,-.08,-.16,.04,-.11,-.05,-.06,-.01,-.12,.11,-.03,0,-.16,.02,-.15,-.06,.07,.14,.09,-.14,.01,.06,.09,.05,-.06,-.04,-.2,-.09,-.11,0,-.06,-.1,.16,-.08,-.02,-.22,-.21,.28,.27,-.07,-.25,-.17,-.14,-.18,-.03,-.11,.01,-.01,.04,-.19,.12,-.01,-.1,.19,.13,.02,.18,.13,.23,.1,-.01,.05,-.07,.09,.03,-.05,-.06,.08,-.03,.09,-.16,-.04,-.03,-.1,-.05,-.15,0,.2,.3,-.13,-.13,-.09,0,-.15,-.07,-.06,-.03,-.09,-.12,.14,-.16,-.01,-.1,.02,.18,-.23,.12,-.02,.04,-.19,-.12,.04,.03,-.14,-.14,.09,.13,-.03,0,-.05,-.05,.27,-.04,.01,-.16,.04,.2,-.14,-.07,-.02,-.13,.03,-.02,.03,.02,-.06,-.01,-.13,-.03,-.06,.32,.12,.21,.07,.01,.12,.08,-.12,.1,-.11,-.08,-.05,-.07,.05,-.02,-.13,-.11,-.13,-.04,-.06,.06,.09,-.03,-.09,.03,-.07,-.03,.09,.03,.23,-.26,-.08,-.12,-.07,.21,.14,-.01,.04,-.06,0,.14,.02,.27,.13,-.08,.11,.13,.08,-.18,.09,-.05,-.01,-.03,-.09,.08,-.05,-.07,-.16,.3,.05,-.06,.35,.03,.02,-.07,.31,-.04,-.02,-.04,-.1,.08,.12,.02,-.02,-.07,-.21,.29,-.03,.28,.27,.01,-.02,.23,-.16,-.07,.12,-.03,-.06,-.03,-.12,-.2,.23,-.08,-.14,-.11,-.06,.02,.1,.01,-.12,-.2,-.14,.13,-.18,.07,.22,-.03,.01,-.16,.02,-.1,.01,.07,-.06,0,.25,-.04,-.07,-.1,.2,.23,.02,.19,-.05,-.14,-.12,.08,.03,-.08,-.1,-.04,.28,-.04,-.07,-.1,-.03,.1,-.1,-.07,.09,.11,-.13,.05,.3,.31,-.11,-.15,.01,-.1,-.15,.07,-.15,-.07,-.02,-.05,-.03,-.09,-.21,.12,.26,.01,-.06,.05,.05,.27,.02,.25,.01,-.1,.25,-.05,-.04,.18,-.1,.22,.02,-.18,-.02,-.09,-.07,.21,.01,-.02,-.15,-.13,-.07,.06,.15,-.08,.3,-.02,.05,-.06,.15,-.05,-.12,-.02,.24,-.05,.01,-.14,.18,.04,-.11,-.05,.3,-.03,.08,.09,.22,-.1,-.03,-.11,-.02,-.15,-.12,-.03,-.02,-.15,-.14,-.05,-.02,.03,.01,.11,-.06,.03,-.2,-.01,-.01,-.1,-.01,.03,-.04,-.14,.02,.13,-.07,.01,.18,-.03,-.19,-.15,.01,-.15,-.18,.03,-.08,-.07,.06,-.15,0,-.09,-.19,-.11,.01,-.07,.08,.12,-.04,-.14,-.26,.05,-.01,.03,-.06,.14,-.13,.36,.03,-.03,-.07,-.09,-.15,-.21,-.07,-.14,-.12,.08,-.13,.08,.04,-.2,-.09,-.17,-.11,.02,-.2,.26,.11,.19,-.03,-.13,-.02,-.4,-.03,-.04,-.11,-.18,-.07,-.03,-.04,-.09,.31,.01,-.06,-.34,-.03,-.1,-.06,.03,-.07,-.15,-.16,.04,.31,-.1,.15,-.04,.07,-.15,.13,.17,-.02,-.14,.01,.15,-.2,-.02,.18,-.06,-.08,.07,-.07,.23,0,-.08,.25,.09,.09,-.05,.25,.33,.05,.05,0,-.04,-.02,.04,-.01,.28,-.04,-.13,-.25,-.1,-.12,.15,.25,-.08,-.07,-.29,.06,-.15,-.14,.32,-.12,-.12,.09,-.13,.08,.34,-.17,.19,-.04,-.1,-.13,-.02,0,.11,-.14,-.07,-.06,.07,.34,-.09,-.06,.06,.17,-.05,-.01,-.15,.01,-.11,.14,-.07,.16,-.11,-.04,-.17,.07,-.1,-.04,-.01,-.11,-.11,-.07,-.2,-.02,.06,-.12,-.09,-.01,-.16,-.2,.09,-.22,.05,-.09,.05,-.02,-.13,.09,-.07,-.04,-.09,-.06,-.01,-.2,-.3,.07,-.08,-.15,.09,-.17,-.11,-.11,-.1,0,.03,-.09,-.26,-.27,-.08,-.02,.09,.05,-.12,.24,.16,.27,-.06,-.05,-.23,-.17,-.06,-.03,-.24,-.04,-.08,-.04,-.05,-.17,-.09,-.13,-.05,-.13,-.17,-.12,0,.09,-.19,-.09,-.15,-.17,.28,-.23,-.12,.06,-.13,-.17,.12,.07,-.15,-.11,-.06,-.05,-.12,-.2,.05,-.22,-.12,-.14,-.08,-.11,.3,-.02,-.24,.29,-.15,0,-.09,-.16,-.1,-.03,-.14,-.06,-.05,-.1,-.07,-.03,-.15,.13,.09,-.19,-.08,-.2,.05,-.18,.13,.01,.16,-.24,-.06,0,0,.02,.05,.15,-.01,-.09,-.15,-.07,.05,-.19,-.14,.11,-.11,-.17,-.15,-.13,.21,-.05,-.05,-.07,-.02,-.2,.04,.15,.01,-.2,.02,-.03,-.08,.09,-.2,.06,-.23,-.09,-.07,-.16,-.09,-.11,-.1,.05,-.13,-.15,-.15,-.08,.07,-.13,-.22,-.11,0,-.09,-.08,-.21,-.13,-.02,-.16,-.21,-.11,0,-.04,-.08,-.13,-.14,.04,-.1,-.14,-.13,-.07,-.15,.08,-.16,-.18,-.03,-.01,-.07,0,-.05,.17,-.02,.11,-.03,.1,-.18,-.11,.15,-.13,-.13,.17,-.12,.01,.21,-.05,-.1,-.03,.06,-.06,-.11,.08,.01,0,-.09,-.04,.04,.06,.03,-.12,.12,.05,.07,-.27,-.25,-.19,-.02,.01,-.03,-.11,-.04,-.09,.15,-.18,.05,-.05,.02,-.05,.28,-.04,-.1,.18,-.07,.06,.01,-.06,-.04,-.19,.03,-.15,-.1,.32,-.28,-.07,-.27,-.06,.14,.02,-.03,-.01,-.07,.03,-.08,.01,-.06,.04,-.2,-.08,-.11,-.17,-.12,-.12,.02,.07,-.01,.08,-.09,.01,.02,-.08,-.04,-.01,0,0,-.05,-.07,-.15,.06,.06,-.07,-.06,-.03,-.06,.1,-.03,-.11,.08,-.12,-.15,-.11,.21,-.04,.04,-.21,0,-.11,-.07,.06,-.13,.01,-.05,-.22,.24,-.14,-.15,-.09,.02,-.15,.08,-.09,.05,-.13,-.01,-.03,.03,-.08,.11,-.12,.04,-.15,-.02,-.18,-.07,.01,-.01,.02,-.1,-.01,-.35,.14,-.23,-.05,-.21,-.07,-.11,.01,.26,.28,.07,-.08,-.05,0,-.05,.02,.1,.09,-.25,-.1,.15,-.17,.11,0,.08,-.24,-.1,-.3,-.1,-.17,.01,-.05,.15,.15,-.09,-.26,-.18,-.07,-.09,.08,.04,-.07,.08,-.09,.02,.03,-.05,-.12,-.14,.21,.17,.06,.12,.15,-.1,-.14,.29,-.08,-.06,.04,.09,.24,-.01,-.07,-.12,-.33,.32,.02,.19,-.09,-.03,-.29,.03,-.05,-.26,-.17,.13,-.02,-.09,.21,-.11,-.03,-.06,-.04,-.03,.05,-.07,.08,.03,1,-.02,-.17,0,-.07,-.05,-.04,-.1,.2,.2,.03,-.08,.15,.06,-.19,.12,.06,.11,-.08,.06,.28,-.01,-.25,.19,.04,-.02,.02,.22,.05,-.06,.02,-.1,-.07,-.28,0,-.13,-.1,-.19,.35,.08,.07,.26,-.08,-.04,-.14,-.08,.01,.05,.04,-.01,-.09,.29,-.09,.11,.24,.01,.1,.01,0,-.23,.01,-.09,.29,-.21,-.02,.07,.03,-.16,.19,-.15,0,-.14,-.01,.15,-.07,.04,.22,-.02,-.23,-.07,-.15,-.06,-.08,.15,-.12,-.04,-.03,.16,-.08,.24,-.01,-.1,-.11,-.04,.03,-.1,-.01,.02,-.11,.07,.27,-.01,.12,-.24,.31,-.03,-.07,-.1,-.03,-.16,-.16,-.1,.07,-.1,.04,-.01,.3,0,-.1,0,-.11,-.03,-.13,-.06,.17,-.04,.22,-.12,-.01,-.09,.07,.13,-.03,-.05,.12,.19,.13,-.05,.11,-.21,-.1,-.03,.04,.25,-.13,-.09];export{a as rvalData};
