const a=[.31,0,-.2,.05,-.22,.29,.1,.06,-.09,-.07,-.01,.36,-.15,.14,-.1,.11,.04,.17,.04,.21,.05,.21,-.14,-.05,-.05,-.16,.16,-.11,.04,.12,-.06,.24,-.1,.22,.16,.04,-.19,-.17,.01,-.18,.33,-.14,-.15,.19,0,-.1,.13,.41,.26,-.26,-.1,.18,-.12,-.29,0,-.13,-.03,.15,-.11,-.06,-.09,-.04,-.31,.05,.35,.19,-.15,-.13,.22,-.09,-.18,-.16,-.04,0,-.14,.19,.18,-.05,-.23,.31,.07,.03,-.06,-.08,.28,.2,-.07,.06,.16,-.25,.05,-.12,-.17,.13,.39,.11,.12,.13,.44,-.06,-.01,-.22,-.03,-.07,-.18,-.03,-.14,-.21,-.08,-.09,-.11,-.15,-.14,.26,.34,-.12,.05,.23,.32,-.06,-.08,.22,.08,.21,-.03,-.17,-.03,.43,.12,-.21,-.06,.17,-.02,-.2,.04,.25,-.05,-.3,.11,.22,-.14,.15,-.14,-.08,.2,.09,.16,.42,-.11,.15,-.22,-.09,-.07,.05,-.04,.07,.13,.35,.06,-.12,-.05,-.18,-.23,.01,-.13,-.04,-.08,.2,.11,-.11,.3,.2,-.05,.14,-.15,.19,.14,.1,-.12,-.18,.02,.14,-.04,-.27,-.03,-.01,-.1,.02,-.17,.31,.18,-.04,-.04,-.14,-.15,-.2,-.1,-.03,.11,.35,-.21,-.12,-.2,-.03,.12,-.02,-.11,-.16,-.12,-.03,-.06,-.08,.3,-.13,.15,-.09,-.03,-.11,.18,.02,-.09,-.19,-.07,-.22,-.02,-.21,-.04,.17,.13,.02,.08,.07,-.07,-.27,-.29,.18,-.05,-.09,-.09,-.07,-.13,-.1,.03,.09,-.08,-.02,.16,-.13,.04,-.01,-.02,.15,0,.28,-.11,.03,-.16,.02,-.03,-.26,-.2,.05,-.11,-.12,.32,-.17,.04,-.08,.1,0,.36,.2,-.2,-.36,-.19,.17,.06,0,-.24,.3,-.08,.05,-.2,.12,.05,-.22,-.1,-.16,.01,.3,.14,-.18,-.09,-.03,-.22,-.14,-.1,.08,-.29,-.18,-.14,-.16,.33,-.07,.22,.05,.13,-.21,.19,-.07,-.12,-.18,-.03,.14,.27,-.15,-.27,0,-.31,-.36,-.12,.35,-.11,-.17,-.2,.05,-.09,.25,.07,.02,.18,-.03,.29,-.16,.12,-.02,.3,.07,-.01,.16,-.16,-.09,.17,.06,-.24,-.21,-.21,.02,-.16,.05,-.18,.03,.22,.09,.04,-.28,-.01,-.15,-.19,-.2,.05,-.3,.03,-.18,-.01,.17,.08,-.24,-.01,-.05,.21,-.08,-.11,.16,.03,.05,.02,-.16,-.09,.03,.08,.15,.04,-.04,-.03,.08,-.12,.08,-.1,-.08,-.27,-.17,-.05,-.23,-.16,-.19,.26,-.03,.25,-.1,.28,.27,-.29,-.11,-.07,-.03,-.16,-.18,-.18,-.02,-.37,.1,.31,-.25,.23,-.03,-.14,-.09,-.07,.08,-.03,-.22,.25,-.21,.05,-.18,-.17,-.29,.17,.03,-.03,.15,-.03,.1,-.17,-.31,-.07,-.15,-.22,-.01,-.15,-.07,-.12,.2,-.36,-.13,-.16,-.15,.08,.2,-.21,-.14,.18,.18,-.06,.21,.22,-.19,.18,-.1,-.28,-.17,.18,-.01,-.09,.22,.06,.04,.22,-.28,-.24,-.22,.07,.04,0,-.13,-.29,-.22,-.17,.15,-.22,-.14,-.07,-.11,-.34,.21,-.15,-.02,.23,-.25,.23,.33,-.04,.01,-.21,-.15,-.23,-.11,.01,.19,.03,.21,-.1,-.13,-.19,.08,.31,-.08,-.15,-.1,-.19,.23,-.16,.14,-.41,.37,.08,-.16,.01,-.14,.06,-.18,.09,.13,.04,.24,-.1,-.11,-.21,-.1,-.12,-.21,-.24,-.12,.32,.16,.12,-.02,.28,.28,-.16,-.02,-.21,.1,.22,.07,.08,.1,-.28,-.03,-.07,-.2,-.29,-.28,-.21,-.23,.22,.03,-.02,.14,-.37,.22,.07,-.04,-.04,-.05,.09,-.2,.07,-.1,-.27,-.25,-.18,-.03,-.11,-.22,.04,.25,-.21,-.04,.24,.12,-.15,.16,-.25,-.08,-.19,-.11,.23,-.2,-.08,-.02,-.05,-.14,-.07,.25,-.2,-.28,.08,-.18,.04,-.18,-.18,.09,-.21,.1,.03,.37,.13,.03,.01,-.13,-.13,-.02,-.16,-.24,-.17,-.01,.04,.25,.02,.11,-.03,.16,.15,.33,-.2,.08,-.13,.02,.01,.02,.04,-.05,.07,-.25,-.11,-.07,-.11,.16,-.04,0,.22,-.09,.1,-.08,.26,-.18,-.09,-.26,.18,.27,-.09,-.22,-.13,.13,-.15,-.07,.02,.06,-.17,-.12,-.17,.06,-.11,.23,0,.29,-.05,-.14,-.17,.24,-.05,.08,-.06,.04,-.19,-.18,.31,.06,-.2,.3,-.01,-.15,.15,.02,.14,-.16,-.14,.09,.09,.3,.2,-.19,.14,-.06,.02,.19,-.22,.22,-.08,-.05,-.12,-.28,.24,-.09,.14,-.05,.27,.12,-.17,-.01,-.07,-.1,.03,.14,.04,.16,-.11,.11,.06,-.08,-.19,-.22,.01,-.13,.04,.21,.21,-.22,.4,.01,-.08,-.04,-.12,-.06,-.19,.12,-.12,-.18,-.01,-.07,.22,.12,-.11,.22,-.11,-.19,.16,-.12,.22,.21,.26,.17,-.23,-.03,.13,.04,.02,-.24,.01,.11,-.13,-.1,.01,-.35,-.33,-.12,.22,.24,.25,.22,-.16,.19,.01,.3,-.23,-.05,-.16,-.04,-.25,.3,.11,-.18,-.27,-.16,0,-.04,.35,.11,.38,.27,-.15,-.15,-.17,.13,-.27,-.13,.19,-.09,-.02,.06,-.02,-.22,-.12,-.02,-.14,.21,.05,.05,.02,.18,-.07,.41,.05,.06,.03,.25,.04,-.13,.14,.18,-.03,-.17,-.13,-.21,.25,.08,.17,.1,.17,-.2,.14,.19,.04,.25,-.1,-.22,.22,.1,-.04,-.05,-.19,.04,.23,-.26,-.22,.18,-.22,.19,.03,.19,-.15,-.03,.1,.07,.06,.01,-.1,.31,-.13,-.27,.06,.04,.31,.03,.28,.26,.08,.01,.31,.15,-.03,.01,.19,.05,-.07,-.09,.07,.21,.2,-.23,.04,-.2,-.27,-.06,.04,.15,-.12,-.06,-.18,-.01,.04,-.09,-.1,-.18,.06,-.14,-.11,-.2,.09,.25,.07,.03,.2,-.04,.18,-.07,.2,-.1,.17,.11,.27,.02,-.19,.1,.04,.04,0,.08,.2,-.06,-.04,.1,-.14,-.22,.24,-.21,-.11,.04,-.04,-.28,-.21,-.12,-.13,.15,-.07,-.02,-.05,-.16,.13,.2,.07,-.11,.18,-.11,-.08,-.09,.03,.01,.04,.01,.27,.17,-.14,-.15,-.17,.15,-.14,.08,-.09,-.15,0,-.02,-.04,0,-.09,-.02,.23,-.2,-.07,.35,-.07,.25,-.1,-.16,-.07,-.03,-.05,-.07,-.29,-.05,.21,-.1,-.15,-.07,.05,.22,.27,-.11,-.3,-.03,-.12,-.04,-.08,.09,-.13,-.12,.05,-.04,.07,.04,-.09,.07,.14,.14,.17,.1,-.11,.3,.01,-.11,-.09,.04,.11,-.06,-.12,-.03,.31,.02,-.15,-.16,-.04,-.01,-.27,-.06,-.2,-.11,.15,-.04,-.08,.07,.1,.08,0,-.13,-.15,.03,-.03,-.04,.1,-.21,-.04,-.02,.14,.01,.15,.02,.03,-.07,-.2,-.24,.2,-.17,-.08,.03,-.03,.04,.17,-.11,.04,.28,-.23,-.04,-.2,.13,.23,-.18,-.18,.16,.02,.1,.07,-.25,.33,-.06,-.28,.11,-.02,-.22,.2,.25,-.18,-.03,-.05,.05,-.12,-.04,.19,-.06,-.12,.24,-.27,.25,-.27,-.2,-.04,.23,-.18,-.13,.11,.13,.02,-.03,-.14,-.02,-.22,.02,-.12,.19,-.09,-.15,-.17,-.07,.36,.05,.11,-.07,-.05,-.15,.18,-.15,.21,-.03,.07,.08,-.11,-.17,.06,.16,.08,-.11,-.26,-.1,.27,-.16,-.14,.12,.18,.33,-.15,.27,-.12,.15,-.13,.18,-.11,-.18,-.13,-.08,.17,.43,0,-.16,-.14,.07,.17,.2,.19,.26,-.03,-.06,.19,-.02,-.11,.13,-.28,-.2,-.25,-.13,-.21,.2,.12,.04,-.23,-.34,-.21,.06,-.08,-.1,.09,.05,.02,-.13,-.01,.18,-.25,-.2,.03,-.29,-.04,.09,.15,.04,-.24,.35,.05,-.22,-.16,.25,.22,-.04,.15,-.26,.12,-.17,.29,-.25,-.23,-.07,-.21,.2,-.13,.01,-.13,.09,.2,-.11,-.24,.08,.19,-.14,.03,.17,.21,.1,-.01,.09,.2,.05,.11,0,-.32,.14,-.2,-.24,-.19,-.03,.17,.2,-.19,-.17,-.25,-.04,.17,.12,.15,-.07,-.12,.26,-.19,-.1,.09,.12,.31,.11,-.14,.03,.08,-.19,.24,-.16,.1,.04,-.1,-.09,.1,.13,-.08,.23,-.26,-.01,-.17,.01,-.11,-.02,-.11,.21,.1,.01,-.12,.29,-.18,-.03,.01,.19,-.18,-.05,.12,.15,-.15,-.03,-.22,-.08,.14,.01,.15,-.18,-.15,-.28,-.11,0,.11,-.01,.23,-.18,.01,.19,-.23,.11,-.26,-.13,.33,-.08,.13,-.13,-.09,-.02,-.21,.16,-.05,.32,-.02,-.04,.08,.01,-.23,-.19,-.29,.12,-.07,-.18,-.1,.07,.03,.21,.08,.17,-.13,-.19,-.12,-.13,.12,.08,-.12,.12,-.1,-.11,.11,.16,-.1,-.15,-.23,-.16,-.19,-.06,-.12,-.07,.2,-.13,-.09,-.07,-.19,.1,-.09,.01,-.23,-.06,-.01,-.07,.18,-.03,-.19,-.26,-.19,.1,.14,.01,.02,.06,.1,.08,.03,.13,-.19,-.24,-.38,.05,-.15,-.23,-.04,-.15,.11,-.11,-.18,.11,.12,.13,-.21,-.03,-.12,-.12,-.16,-.26,-.13,-.15,.15,-.11,.17,.24,-.16,-.16,.07,.28,.11,-.2,.01,.03,-.02,-.01,.08,.12,.1,.01,-.02,.09,-.3,.02,.07,-.11,.15,.05,-.26,-.11,-.17,-.06,.1,.33,-.1,-.09,-.06,-.26,.08,-.14,.2,-.08,.12,.23,.08,-.13,.3,.07,.17,-.06,-.25,-.11,-.09,-.08,.09,.1,.05,-.09,.3,.18,-.08,-.24,-.07,.1,-.14,-.07,.07,.22,.06,.19,-.19,-.03,-.17,-.16,-.07,-.14,.16,-.23,-.06,-.09,-.08,-.12,-.07,-.12,-.1,-.01,.06,-.08,-.15,-.31,.06,-.04,.03,.06,-.04,-.04,.02,-.01,-.22,-.03,.22,-.22,-.24,-.1,-.02,.09,-.16,-.14,.09,-.21,-.1,-.24,-.14,.03,-.24,-.13,.01,-.03,-.07,.04,-.15,.1,-.15,.21,-.04,.28,.22,-.06,-.26,.07,-.28,.03,-.03,-.09,-.14,-.18,-.16,-.04,-.34,-.24,-.16,.1,.01,-.15,-.07,-.21,-.05,.15,-.13,-.36,.19,-.02,-.08,-.23,-.18,-.15,.05,.01,-.34,-.11,-.09,-.14,-.13,-.34,-.1,.08,-.19,-.34,-.01,-.14,.17,-.28,-.21,.19,-.26,-.15,.08,.04,-.24,-.04,-.29,-.18,-.2,-.12,-.18,-.16,-.25,.37,0,-.23,.02,-.02,-.14,-.34,-.07,-.05,.09,0,.1,-.05,-.28,-.24,.09,.27,-.15,-.12,-.12,-.22,-.1,-.04,-.15,-.11,-.05,-.17,-.25,-.15,.07,-.2,-.02,-.07,.01,-.27,-.16,-.26,-.07,.05,-.25,-.09,-.08,.14,-.27,-.2,-.3,-.26,-.14,-.15,-.14,-.14,.2,.11,-.02,-.16,-.08,-.11,.08,-.1,-.35,-.16,.29,-.39,.22,-.11,-.37,-.03,-.12,-.08,-.29,-.17,-.16,-.17,-.11,0,-.26,-.19,-.3,-.13,.19,-.14,.12,.07,-.18,-.1,-.21,-.19,-.23,-.18,0,-.19,.08,-.1,.12,-.2,-.07,-.04,-.02,-.04,-.03,-.43,.17,.14,.05,-.04,-.14,-.1,0,-.1,-.06,-.07,-.16,-.11,-.13,-.09,.04,.23,-.07,-.19,.03,.21,-.3,-.35,-.32,-.18,-.26,-.18,.24,-.15,-.32,.16,-.21,.07,-.12,-.3,-.13,.36,-.03,-.02,-.03,.09,.12,-.31,-.07,-.19,.13,-.15,-.27,-.19,.23,.03,-.03,-.05,-.3,.04,-.22,.03,-.02,-.06,.01,-.29,.02,-.2,0,.01,.1,.14,.12,-.14,-.06,.21,.11,.01,-.11,.12,-.03,.22,-.12,-.19,-.18,-.17,-.19,.19,-.34,.08,0,.18,-.11,-.22,-.18,-.22,0,-.15,-.07,0,-.05,-.16,.02,.21,-.17,-.09,-.15,-.1,-.09,-.14,-.04,-.34,-.19,-.23,.1,.15,-.24,.22,-.12,.19,-.08,-.05,-.1,-.18,-.16,-.22,-.23,-.21,-.18,.14,-.17,-.09,-.08,-.2,.07,-.04,.09,-.1,-.15,-.13,.05,-.03,.04,-.02,-.26,-.35,.23,.08,-.06,.17,.22,-.03,.21,-.09,.01,-.17,-.21,.03,.13,.03,-.08,0,.1,1,-.3,.04,.05,-.07,-.06,-.12,-.16,.12,.24,.16,-.17,-.11,-.18,-.04,-.12,-.01,-.18,-.12,-.19,.28,-.14,-.1,-.18,-.17,-.05,-.09,-.07,-.16,.04,-.02,.2,.03,-.03,.19,-.2,-.21,-.06,-.17,.04,.04,-.04,-.14,-.08,.14,-.05,.15,-.16,-.14,-.21,.03,-.19,.02,.05,.05,-.26,-.21,.12,.01,-.07,-.16,-.06,-.25,-.07,-.24,.15,-.01,.11,-.2,-.2,.02,-.09,.05,-.15,-.19,.06,.17,.03,-.25,.25,-.05,.08,.01,.05,-.14,-.31,.05,.16,.02,.01,0,-.19,-.21,-.23,.16,-.29,-.27,-.17,-.07,-.15,-.16,0,-.15,-.17,.05,.16,.16,.2,-.03,-.25,-.06,.1,-.11,.23,0,-.19,-.19,-.12,.35,-.08,.05,.14,-.13,-.28,-.16,-.19,-.19,-.24,-.21,-.07,-.11,-.11,.15,-.1,.06,-.06,-.29,-.16,.05,-.01,.21,-.01,-.25,.1,-.23,-.12,-.18,.05,-.15,-.13,.22,-.16,-.12,-.24,.05,-.24,.07,-.18,-.13,-.08,.14,-.23,-.06,-.2,-.18,-.17,-.24,.23,-.19,.1,.03,-.03,-.14,-.15,-.17,-.23,-.24,.08,-.16,-.22,.02,.2,-.18,.22,-.22,.06,-.04,-.09,0,-.21,-.26,.25,-.13,.16,-.08,-.22,.04,-.06,-.22,-.23,.31,.11,.24,.21,-.05,.1,-.25,.11,.09,-.2,.23,-.08,-.13];export{a as rvalData};
