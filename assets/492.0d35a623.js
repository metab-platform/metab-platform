const a=[.32,.12,.07,-.02,.03,.3,.25,-.09,-.18,.01,-.04,.95,-.25,-.02,-.02,.07,-.1,.14,.11,.2,.02,.19,-.11,-.05,-.09,-.08,.35,.07,-.05,.26,.06,.39,.05,.22,.26,.17,.06,-.08,.14,.06,.01,-.06,.12,.13,-.14,-.04,.15,.37,.01,-.1,.03,.37,.22,-.09,.24,-.1,.01,.25,-.13,-.03,.09,.18,-.09,-.05,.12,.17,.03,-.05,.05,.01,-.3,.14,-.04,-.09,.02,.22,.03,.08,.07,.16,.02,-.01,.03,-.07,.51,.19,-.15,.07,.04,-.16,.2,-.01,-.19,.03,.59,-.06,-.03,.24,.51,.02,-.17,.04,.33,-.29,-.02,-.04,-.23,-.27,.02,.11,-.1,.07,0,-.11,.65,.08,.25,.18,.08,-.14,-.22,.04,.26,.09,-.06,-.1,.12,.18,.13,-.01,-.09,.08,.06,.01,.11,.06,-.01,-.36,.22,.2,.02,.14,-.14,-.13,.3,.15,.14,.36,-.03,-.17,.02,-.19,.05,.16,-.17,.18,-.23,.57,.08,-.06,.01,.06,-.34,.06,-.2,-.01,-.02,.23,.16,-.14,.43,.08,-.09,-.15,-.13,.08,.16,.08,-.05,.06,-.33,.25,-.02,.05,-.05,-.1,.09,.28,.05,.51,.09,-.06,.26,-.1,-.04,.15,.08,.32,.05,.56,-.18,-.1,-.02,-.03,.06,.23,-.17,-.09,-.04,-.08,-.21,-.01,.6,-.01,.25,-.03,.02,-.27,.16,-.04,-.07,-.02,.19,0,-.04,-.02,-.06,.24,.47,.01,.04,-.25,-.03,.09,-.29,.3,-.01,-.09,.08,.13,.06,-.02,-.14,-.01,-.19,-.16,.18,-.24,.03,-.03,.13,.15,.26,.27,.06,-.06,-.18,-.09,.08,.09,-.19,.2,-.1,.02,.14,.02,.1,-.05,-.08,.03,.72,.21,.04,.09,-.03,.18,.07,.03,.05,-.01,-.05,-.02,-.22,-.11,.11,-.13,.09,0,.36,.44,-.05,-.22,-.03,-.04,-.06,.12,-.15,.33,-.42,-.09,.05,.13,.49,-.06,.76,-.16,.13,.02,.18,-.09,-.09,-.39,-.08,.23,.43,-.08,-.04,.18,.1,-.16,-.1,.77,-.01,0,.01,.03,.05,-.01,.06,.01,-.04,-.02,.34,-.23,.17,.06,.13,.04,-.13,.3,-.01,.13,.01,.03,.01,.09,-.18,-.04,.09,-.11,-.03,0,.25,.1,-.09,-.2,-.08,-.14,.21,.08,-.1,-.49,-.04,-.29,.06,-.06,.26,-.02,.14,-.29,.1,-.18,-.29,.12,.14,.44,-.02,-.14,0,.06,.1,.24,.29,-.23,.1,.23,-.17,.21,.2,.17,.15,-.36,.21,-.26,-.23,.09,.24,-.08,0,-.11,.48,.1,.09,-.18,-.02,-.09,-.06,.17,-.05,.02,.04,-.13,.12,.14,.49,.15,.02,.14,-.03,-.35,.11,-.06,.28,-.2,-.14,-.02,.04,-.13,-.12,.11,-.24,.15,-.14,.33,-.08,-.08,-.21,.01,.03,.24,.04,-.13,-.13,.09,-.04,.11,.09,-.07,-.09,.14,-.15,-.08,.02,.16,-.16,-.1,.08,.03,.21,-.09,0,.13,-.1,.03,-.11,.24,-.15,.07,.27,-.01,-.28,.02,.24,.08,0,.02,0,-.17,.17,.16,-.03,-.01,.17,-.18,-.12,-.1,.1,-.01,.12,.07,.11,1,-.28,-.02,.11,-.03,.04,-.04,.2,.21,.05,-.02,.16,-.17,.02,-.12,.27,.09,.07,.06,0,.09,-.14,.02,-.08,.13,.25,-.13,.06,-.11,.15,.13,.18,.14,.14,.4,.1,.24,-.02,.03,-.14,.01,-.42,-.12,.4,.36,.17,.14,.03,.8,-.02,.09,-.34,.16,.2,.16,.15,.14,.13,-.12,-.05,0,.05,.15,-.05,-.22,.15,-.09,-.17,.14,.06,.2,-.12,-.19,-.04,-.1,.02,-.09,.23,-.08,.09,.08,-.18,-.1,.06,.07,-.19,.24,-.13,0,.21,.4,-.07,0,.07,0,.07,.04,.15,.04,-.09,.01,.03,.07,-.25,.12,-.11,0,.22,-.02,.23,-.02,.11,.34,.1,.15,.18,.23,.13,-.03,-.12,.04,-.1,-.02,-.14,-.02,.07,-.09,-.17,.31,.11,.01,.16,.15,.12,.64,-.34,.09,.01,-.2,-.25,-.17,.06,-.01,.29,.21,.07,-.07,-.18,.21,-.17,0,.25,.18,.32,.07,-.03,-.1,.14,.05,.13,.1,-.16,.08,-.01,.28,.01,-.17,-.24,.06,.13,.11,.07,.21,.09,.45,.18,.06,-.12,-.12,-.28,.32,.06,.18,.37,.11,-.05,-.02,.06,-.15,-.41,.03,.09,.01,.17,.21,.02,-.09,.02,-.01,.05,.2,.15,-.27,.24,-.22,.34,.18,.18,.07,-.06,-.26,-.14,-.11,.18,-.24,.06,.13,.23,.19,-.04,.04,.18,.06,.3,-.21,-.25,.51,-.09,-.11,-.14,.09,.07,-.09,-.06,-.11,.11,.18,.27,.09,.19,.42,.13,-.04,-.13,-.04,0,-.04,.09,-.21,.03,.14,.21,.14,-.01,.22,-.27,.02,.2,-.03,.35,.13,.46,.07,.01,.1,.07,.14,.22,.11,.23,.15,-.01,.17,.09,-.01,-.02,-.17,0,.22,.11,.11,.11,.26,.02,.31,.02,-.24,.09,.07,.02,.46,.48,0,.12,.07,-.04,.03,.14,.21,.14,.18,.07,0,-.05,.15,.06,-.15,-.12,.06,-.39,.24,-.28,.03,.08,-.04,-.09,.11,.17,.06,.18,-.06,.16,.19,.09,-.14,-.25,-.05,.03,.04,.25,.06,-.19,.05,-.25,-.01,.15,.16,.04,-.05,-.01,-.02,-.01,.45,.28,.57,0,-.01,.39,.08,.23,.05,-.25,-.12,.11,.05,-.27,.22,-.21,.16,.05,.17,-.16,-.01,.15,.07,.22,.14,-.14,.23,-.06,0,0,.05,.14,-.05,.22,.33,-.11,-.18,.03,.34,0,.03,.05,.17,-.07,.14,.18,.35,.28,.03,0,-.03,-.02,-.03,.01,-.02,.11,-.18,-.06,-.17,-.11,.02,.13,-.41,.09,-.13,.17,-.08,.09,.39,.01,-.26,.34,-.01,.26,0,.22,-.08,.18,.14,.19,-.02,.05,.03,.27,.01,-.16,-.15,.1,-.1,-.07,.09,.06,.07,.41,.02,.08,.2,-.04,.09,.03,-.02,.02,-.2,-.02,.09,.28,.04,.3,.21,.08,-.15,-.02,.11,-.26,.2,.33,-.14,-.16,-.16,.08,.22,-.07,-.04,0,.08,-.02,.15,-.02,-.04,-.08,-.07,.07,.07,-.04,.19,-.05,-.27,-.15,.21,-.01,.05,-.11,-.23,-.16,.12,-.08,.03,-.02,-.18,.1,-.23,-.03,-.24,.03,.28,.43,.13,-.21,-.08,-.07,-.14,-.06,-.03,-.31,-.22,-.39,.01,.24,-.05,.2,.22,.02,.09,.27,.18,-.1,.31,.05,.09,.06,.13,.08,.04,-.13,.25,.11,-.01,-.09,.04,-.11,.24,-.26,-.23,.05,-.14,.32,-.07,-.07,-.17,.26,.14,-.05,.17,-.03,-.11,.12,-.16,-.02,.07,-.18,-.08,.23,.02,.29,-.02,.13,.14,.01,-.06,.73,-.05,-.25,.11,.11,.08,.06,-.09,.06,.33,-.28,-.13,-.03,0,.22,-.22,.11,.1,-.04,.11,.22,.13,.21,-.17,.02,.14,.12,-.04,.34,.24,-.15,-.05,.08,0,-.1,-.13,.16,-.15,-.35,0,-.04,.27,.09,-.1,-.19,.03,-.01,.02,-.04,-.06,.03,-.16,.06,-.08,.01,.15,.14,.44,-.24,-.01,-.1,-.1,.2,-.04,.15,-.1,-.15,-.06,.24,-.03,.35,0,-.12,.03,-.14,-.03,.22,.2,-.12,.1,0,-.15,.4,.06,-.06,-.08,.25,.04,-.09,.39,-.14,.17,.03,.27,-.09,.19,.07,-.26,.22,.17,.15,-.02,.07,-.02,.25,-.07,.33,.33,-.13,.05,.33,-.07,-.02,.08,.02,-.1,-.04,.04,-.06,.33,-.01,.04,.1,-.43,-.03,.08,-.18,-.01,.04,.06,.3,-.11,-.13,.36,.02,-.01,-.05,.14,-.02,-.06,-.03,.14,.03,.37,-.06,-.05,.07,.13,.19,.16,.24,.08,.15,.02,.19,.16,.08,-.11,.14,.22,-.18,-.04,.13,.07,.07,-.09,.01,.14,.25,-.07,.01,.26,.29,.26,.19,.03,.17,.24,.06,0,-.07,.06,.03,-.11,-.12,.04,.23,.26,.03,-.01,.06,0,.27,.19,.25,-.09,-.07,.29,-.07,-.14,.23,.29,.44,-.06,-.06,.06,-.13,.02,.11,.06,-.07,0,-.07,.17,.24,.17,-.07,.39,-.04,-.04,.02,-.03,-.05,-.15,-.03,.35,.09,-.4,-.07,.35,-.06,-.14,-.01,.32,.08,.02,.11,.23,.12,.01,-.03,.09,.01,-.04,.1,.09,-.13,-.04,-.09,-.08,-.11,-.19,.26,.01,.06,-.01,-.01,.36,-.02,.12,0,.04,-.06,.06,0,-.02,.05,.22,-.18,.03,-.19,-.21,.05,-.1,.12,-.03,.08,.12,-.01,.13,.05,-.03,-.06,.14,-.11,.04,.09,.08,-.12,-.32,-.04,-.03,.03,-.1,-.01,.04,.14,.02,-.03,-.08,.08,-.07,-.27,-.05,-.09,0,.17,-.06,.08,.07,-.31,.02,-.17,-.02,.07,-.02,.08,.04,.02,.08,-.05,.03,-.2,.07,.02,.01,.1,-.09,-.01,.01,.03,.11,-.06,.11,-.24,.05,0,.06,-.04,.11,.07,.02,.02,.22,.06,.14,.04,-.33,-.12,.05,.01,.12,0,-.08,-.1,-.08,.01,.32,.11,.13,.37,.33,.19,-.04,-.03,-.12,.09,-.19,-.09,.23,-.11,-.08,-.14,.15,.02,.09,0,-.07,0,.12,-.02,0,-.05,-.13,.23,.35,-.05,0,.02,.02,-.09,-.1,.39,-.08,.04,0,.06,.03,.19,-.09,.29,-.15,-.09,-.06,.06,-.18,.19,.04,.05,-.17,.37,.19,.1,.03,-.08,-.08,.13,.29,.09,.2,-.06,.15,.05,.15,.05,.1,.1,-.12,.14,.01,-.16,.04,.04,.14,.14,0,-.2,.11,.04,.1,-.07,.05,.09,-.02,.2,.11,.12,-.04,-.01,-.07,-.11,-.14,.04,.02,-.02,-.11,.09,.1,-.14,-.24,-.13,.04,-.42,-.27,.02,-.08,.03,-.12,.07,.05,-.05,.22,-.01,.09,.04,.23,.07,.2,.09,.01,-.08,-.11,.07,.04,.11,.14,-.1,.1,.1,.06,.07,.03,.16,-.19,-.12,-.09,0,.04,-.09,-.24,-.03,0,.19,.06,-.08,-.02,0,-.16,-.02,.01,-.04,-.05,-.06,0,.06,.07,.01,.21,.1,.09,-.16,-.04,.3,-.1,-.05,.15,.02,-.05,-.05,.19,.15,-.02,.02,-.18,-.03,-.07,.19,-.08,-.04,.12,-.05,-.09,-.16,-.15,.1,-.16,.05,-.04,-.09,-.16,.04,.03,-.04,.12,.09,.05,.13,-.24,-.09,.16,-.06,-.3,-.24,.03,-.01,-.11,0,0,-.05,-.08,-.13,.19,-.06,-.02,-.19,.08,-.03,-.18,.08,-.12,.18,.12,-.01,-.23,-.14,.1,-.06,-.08,-.09,-.14,.12,0,.04,.11,.35,-.26,-.21,-.1,.01,-.1,.23,-.04,.15,-.23,.07,-.04,-.12,-.02,-.15,.07,.08,.12,.19,.35,.17,-.03,0,.01,.01,-.07,.01,-.1,-.09,-.12,.07,-.2,.14,.02,.05,-.06,-.2,-.18,.01,-.03,-.06,-.02,-.03,-.17,-.24,-.18,.08,.15,.22,.22,.12,.01,.1,.1,.03,.03,-.08,-.12,.01,-.18,-.25,.01,-.09,-.03,-.33,-.11,.08,.1,-.09,.09,.09,.09,.04,-.08,.05,.08,-.26,.07,.07,-.12,-.11,.32,-.03,.09,.1,.13,.33,.16,-.09,.1,-.03,.05,-.09,-.06,.31,.15,-.3,-.04,.07,.01,.21,.13,.28,.22,.12,-.17,.18,-.09,.12,-.02,.07,-.1,.1,-.38,-.24,-.25,.11,-.02,-.04,.03,-.12,.37,.1,-.15,-.12,-.07,.06,-.01,.08,-.09,.07,-.02,-.03,.04,.07,0,.08,-.21,.15,-.15,.02,-.01,-.07,.07,-.05,.1,.06,-.03,.02,-.22,.06,-.27,-.01,.06,.26,.13,-.29,.02,-.12,.14,.12,-.07,-.15,.08,-.07,.09,.03,-.01,.13,.16,.02,-.35,-.19,.14,.13,-.35,-.02,.09,.06,-.01,0,.04,.04,.31,.05,-.1,.08,.3,-.29,.23,.33,.06,.07,-.01,.12,-.01,-.14,.03,.09,-.1,-.28,-.25,.12,.33,-.09,-.05,.02,.16,-.02,-.11,-.1,.05,-.05,.26,-.18,-.07,-.27,-.07,.01,.16,.18,.05,-.06,-.15,-.12,-.2,.01,0,-.04,-.03,.22,.07,.09,.2,.2,-.15,-.2,.24,-.08,-.06,.09,.19,-.06,-.15,-.05,-.08,-.06,.29,.04,-.05,-.11,.08,-.29,.36,.03,-.21,.19,.08,.04,-.07,.19,-.13,0,-.05,-.05,-.23,-.09,-.14,-.07,-.18,.2,.09,-.24,-.01,-.06,.02,-.24,-.14,-.02,.31,-.1,-.04,.22,-.02,.23,.08,.17,-.04,-.08,.17,.25,.11,.08,0,.05,.03,.13,.19,.11,.06,.02,-.1,-.03,-.19,0,-.03,-.07,.02,.23,.16,.08,.1,-.07,-.05,-.13,-.07,.38,.33,.07,-.2,-.21,.38,-.13,-.03,.22,-.16,-.2,-.11,.04,-.24,.1,.02,-.18,-.01,.11,.07,.18,.07,.21,-.19,0,.12,-.05,.02,.15,.05,.1,.09,.05,-.06,.26,.11,-.09,.12,-.05,.08,.02,.24,-.08,.17,.07,.04,-.25,.04,.16,-.12,-.01,.02,-.08,.02,.22,-.01,.14,.08,0,-.03,-.05,-.08,.02,-.09,-.08,.09,0,.03,-.07,-.04,.36,.09,-.01,.08,.06,.26,-.02,.04,.12,-.21,.19,-.08,.03,-.06,.16,.13,-.15,-.04,.1,.23,.22,-.2,.08,-.3,.07,.02,0,.29,-.1,.04];export{a as rvalData};
