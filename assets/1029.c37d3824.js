const a=[.62,.11,.19,.09,.11,.54,-.07,.1,.01,-.02,.06,.34,-.4,-.26,.17,.27,.34,-.01,-.44,.31,.03,-.01,-.04,.18,.07,.1,.01,.05,.08,.04,.15,.06,.17,.6,.19,.34,.35,.16,-.14,.18,.13,.14,.23,.27,-.28,.13,-.06,.4,.08,-.12,-.02,.64,.24,.18,.15,.14,-.02,.63,-.06,.1,.23,.18,.17,.05,.03,.05,.18,.11,.07,-.08,.07,.25,.09,-.22,.18,.32,.22,.19,.11,.21,.08,.06,-.05,.13,.01,-.22,.07,-.18,-.17,.05,.1,-.01,-.05,-.02,.2,-.5,-.05,.55,0,.19,-.08,.2,.09,-.02,0,-.38,0,-.17,.22,.07,.32,-.03,-.13,.15,.04,.17,.06,.1,.02,.06,-.28,-.24,.39,-.14,.13,-.06,.16,.06,.17,.18,-.03,-.06,-.1,-.06,.51,.22,.1,-.26,.12,.59,.13,.66,.05,.12,.78,.09,.15,.15,.1,-.16,.18,.03,.06,.45,.03,.05,-.12,.75,.14,.15,-.06,.08,-.25,-.17,-.02,.06,.15,.14,.11,.07,.79,.1,.05,-.16,-.08,.08,-.01,0,.14,.2,-.08,.16,-.13,.06,-.02,-.48,.38,.65,.06,.22,.15,.11,-.3,.14,.11,.22,.04,.28,.38,.02,.11,.07,.17,.35,0,.12,-.08,-.03,.06,-.53,.01,.19,.35,.17,.64,.16,-.19,-.03,.11,-.09,.08,-.07,.02,.26,-.11,.18,.05,.13,.21,-.08,.04,-.12,.08,.13,-.64,.8,.18,.11,-.06,.08,.11,.14,-.09,.03,.05,.02,.02,.15,.24,.03,.04,-.32,.05,-.19,.16,-.3,-.12,.13,-.01,.12,.11,-.13,.07,.11,.13,-.02,-.02,.06,-.06,.4,.33,.26,.21,.11,.05,-.27,.05,.26,.13,.05,-.02,-.07,.14,-.22,-.11,.04,-.09,.29,.13,0,-.13,-.24,.12,.02,.03,.2,.11,.33,.29,.01,.17,.11,.03,-.16,.31,-.05,-.09,.19,-.04,.11,.12,-.16,-.48,.75,.07,.02,-.01,-.09,.13,-.11,.06,.15,.11,.1,-.08,-.11,.23,-.05,.01,-.12,-.11,.08,.06,-.42,-.07,.29,.09,.18,-.02,-.01,.16,.08,-.24,.15,.22,.16,-.14,.06,.06,-.09,.15,.21,.59,-.13,.07,.1,.03,-.01,.1,.13,.23,-.05,-.18,-.28,-.01,0,.56,.19,.14,-.03,.08,-.19,-.07,.17,.26,.1,-.13,.05,.01,.15,.22,-.05,.12,.09,.01,.1,.01,-.11,.11,.17,.15,-.78,.22,-.11,-.17,.14,-.02,.04,-.07,-.07,-.11,-.09,.09,.13,-.02,-.2,.1,.13,.05,.11,.06,-.16,-.19,.11,.17,.35,.08,.1,.01,-.48,.58,-.07,.26,-.49,-.04,.21,.14,-.35,-.06,-.1,-.26,.11,.12,.51,.02,.15,-.08,.13,.16,.36,.08,.06,.08,.48,-.01,.08,.17,.02,.22,.24,0,.1,-.07,-.12,-.09,-.05,-.1,.26,.34,-.05,.14,.21,.13,.2,.15,-.02,-.23,-.29,.16,.23,-.09,.25,.67,.58,-.04,.15,.22,.03,.28,-.03,.13,.2,.18,-.01,.03,-.05,0,-.11,.07,.09,-.08,.32,-.21,-.08,.29,.15,-.14,-.25,.1,-.01,.03,-.01,.08,.12,.15,-.06,.17,.2,.1,.16,.11,-.05,.08,-.06,.03,.04,.46,0,.16,.05,-.05,.15,-.16,-.19,.16,.72,.2,.38,.14,.24,-.02,-.16,-.17,.08,.74,.68,-.03,-.1,-.08,.27,.06,-.16,-.79,.01,.1,-.2,.51,.01,.09,-.02,-.09,.19,.18,.25,.13,-.55,-.04,-.11,-.01,.05,.16,.02,-.1,0,-.15,-.14,-.12,-.17,.3,-.31,.09,.17,.06,-.02,.04,.17,-.25,-.19,-.14,.07,.18,.65,.04,.05,.03,.14,.14,.17,.18,.31,-.21,-.07,-.15,.12,-.09,.25,.02,.08,.53,.06,.1,.18,.1,.4,.11,-.11,-.06,.05,.44,-.05,-.06,.38,-.33,.18,-.41,.11,.11,.05,-.02,.76,-.14,.09,.04,.04,-.2,.53,-.07,-.03,.11,-.04,-.46,-.08,-.2,.08,.02,.11,.18,.02,.15,-.2,.3,.16,.06,.2,.05,.12,-.11,.13,-.32,-.01,.48,.15,-.07,.21,.16,.19,.12,.01,-.37,-.15,.16,.08,.22,.16,.02,.51,-.07,-.13,.13,.15,-.01,.23,.06,.01,.14,-.1,.07,.11,-.05,.31,.02,-.08,.16,.29,.21,.59,.21,.08,.15,.02,.19,0,-.07,-.78,.58,-.16,.68,.35,.03,.15,.1,-.06,.09,-.15,.14,-.31,.23,.2,.57,-.05,.13,-.05,.22,.03,-.23,-.1,-.14,.05,-.13,-.08,.06,.16,.39,-.24,.16,-.14,-.18,-.09,.62,.06,.27,.14,.17,-.12,.09,-.05,.24,-.15,.02,-.22,.11,.1,.05,-.01,-.16,.43,.01,.25,-.15,.2,.79,-.06,.09,.36,.21,-.13,-.17,.2,.41,-.09,.03,0,.15,0,.02,.18,.07,-.55,-.11,.59,-.05,.05,.14,.81,-.03,.3,-.13,.05,.14,0,.14,-.13,.4,.16,.16,.07,-.02,.18,-.02,-.12,-.11,-.17,.04,.14,.1,.07,.13,.11,-.12,-.06,-.28,.23,-.25,.17,.47,-.04,.09,.12,.13,-.1,.18,.09,.15,0,0,-.1,-.3,-.03,-.03,.16,.56,.38,-.09,-.24,-.27,.17,.24,.34,-.12,.14,-.17,.13,.26,-.05,-.12,.09,.1,-.25,.68,-.1,.22,.2,-.66,-.13,.17,.15,-.06,.12,.06,.34,-.09,.16,.19,-.19,.11,-.12,.18,-.13,.06,.13,.13,.23,-.21,-.08,-.03,-.14,-.03,.74,-.12,-.07,-.14,.3,-.17,-.02,-.03,.02,.03,-.02,.15,.73,.01,.3,-.1,.13,-.02,-.1,.09,-.09,.19,-.02,.07,-.59,-.35,.14,.18,-.42,.21,-.42,.04,.05,.07,.09,.12,-.15,.79,.12,.66,-.08,.64,-.05,.64,.01,.16,-.2,.09,-.01,.37,0,-.11,-.15,.03,-.18,-.15,.19,.13,.12,.69,.18,.04,-.01,.12,.18,.02,.11,0,-.19,.11,-.06,.44,.12,.58,0,-.02,-.08,.08,-.02,.01,.29,.03,.08,-.1,-.11,-.25,-.08,.04,.01,.14,-.2,.06,-.03,.18,.04,.01,-.18,.06,.08,-.03,.06,-.28,0,-.29,.18,.16,-.01,.03,-.06,-.12,-.12,-.01,.18,.14,-.01,-.12,.02,.03,-.29,-.11,.74,.79,.23,-.13,-.04,-.02,-.05,-.15,-.01,-.06,.13,-.14,-.29,.03,-.25,.1,.18,.31,.06,.68,.17,-.23,.52,-.01,.25,-.06,-.1,.12,-.14,.13,.24,-.07,.24,.04,-.26,.15,-.02,.22,-.34,.25,-.16,1,-.19,-.14,-.16,.22,-.12,-.18,.22,.11,-.13,.1,.02,0,.19,-.38,-.33,.36,-.05,.27,.01,-.11,.18,.09,.23,.1,-.07,-.42,.3,.12,.12,-.01,.11,-.08,.76,-.14,.07,-.01,.11,.13,.07,.13,-.01,.03,.39,.45,.19,.03,.08,.21,-.03,.35,.18,.73,-.05,.11,.04,.29,.01,-.03,-.35,-.11,.06,-.06,-.18,.1,-.06,.16,.08,-.1,-.24,.18,.12,.06,-.13,.18,.11,.08,.24,.08,-.18,.23,.18,-.69,.09,0,-.11,.03,-.33,-.25,.1,.16,.08,.03,.16,.5,.54,-.19,.5,.06,.08,.11,.07,-.1,.23,.18,-.28,.25,.1,.14,-.15,.77,-.04,.14,.35,-.28,-.02,.16,.79,.1,.08,.17,0,.47,.12,.46,.03,-.15,-.09,.78,0,.53,.76,.09,-.04,.55,-.04,-.01,.09,.15,.14,.1,.22,-.2,.65,-.28,-.12,.04,-.07,.16,.27,-.02,-.09,-.13,-.11,.26,-.06,-.07,.68,.17,.17,-.01,.18,-.01,-.05,-.13,-.18,.16,.55,-.07,.14,.15,-.05,.15,.28,.55,.2,-.11,.1,.04,.22,.04,.03,.2,.52,-.39,-.01,.04,-.09,.41,.07,.06,.14,.11,.14,.14,.78,.77,.32,-.31,-.09,.12,.11,-.05,-.17,.15,.04,.11,.17,-.17,.3,.45,.75,.2,.14,.2,.12,.79,0,.5,.03,.15,.75,.1,0,.39,.29,.46,.24,.13,-.28,.02,.12,.27,.14,.21,-.01,-.27,.24,-.09,.01,.08,.81,.15,0,.17,.08,.1,-.03,.12,.5,.09,-.04,.06,.57,.15,-.01,.09,.68,.11,0,.24,.66,-.17,.26,.14,.34,-.05,-.14,-.15,.11,.01,.04,.11,.09,.27,-.21,.15,.07,.26,-.12,.19,.14,-.05,.14,-.26,-.05,-.36,-.06,.11,.04,.17,.61,-.02,-.21,-.54,-.11,-.08,-.57,.15,.13,.12,-.03,-.11,.22,-.12,.09,-.07,.05,.02,.22,-.06,.3,.04,-.63,.03,.07,.01,-.19,-.24,.12,.57,.04,.19,-.04,.14,-.04,-.69,.04,-.01,.04,-.05,-.04,.18,.21,-.83,-.06,-.11,-.01,.24,-.09,.19,.03,-.09,.03,-.16,.08,-.39,-.1,-.04,-.09,.08,-.16,-.12,-.1,-.06,.14,-.03,.07,-.55,-.15,.15,.09,.26,.09,.16,.03,.24,.15,.02,.64,.15,-.11,-.06,-.09,.22,.22,-.03,.09,.31,-.03,-.22,.24,.16,.2,.63,-.17,.03,.21,-.03,-.05,.14,.06,.08,.32,.15,.1,.12,.07,.19,-.02,-.18,.1,.26,.03,.08,.03,.07,.13,.21,.72,.14,-.36,.05,.27,-.09,.06,.67,-.05,.03,-.21,.08,.15,.42,-.02,.07,.05,.15,.06,.13,.08,.09,-.17,.04,-.24,.26,.28,.14,.1,.13,.08,.02,.13,.04,.18,-.14,.02,.1,.17,.07,.09,.05,-.19,-.19,.05,-.28,-.03,-.08,-.06,-.03,.06,-.07,.18,-.09,.14,.02,-.11,-.03,-.05,.14,-.3,-.05,.1,.07,.09,.07,.04,-.18,.06,.23,-.05,-.33,.32,.11,-.11,.08,-.01,-.31,-.35,.05,0,.07,-.05,-.05,.04,.03,.35,-.02,-.05,.08,.68,.22,.04,-.01,.1,-.08,-.08,.14,.02,0,.15,.1,.15,.16,.02,.11,.11,.15,.04,-.41,.26,.12,.01,0,-.1,.07,.08,.7,.01,.03,.27,.04,-.01,-.05,.18,.01,.08,0,.06,.01,.05,.15,-.01,.21,.1,-.02,.06,.8,.18,-.15,-.07,0,.15,-.03,-.05,.12,0,.02,.03,.05,.04,.13,.11,.16,.03,.07,-.04,.01,-.07,.16,-.06,.17,.17,-.04,.06,.05,-.05,.18,.28,.04,0,.25,0,-.03,.14,-.24,-.06,.08,.31,.08,.07,-.05,.09,.47,.14,-.18,.26,.09,-.16,-.21,.25,-.05,-.03,.16,.02,.15,.3,-.02,-.21,-.12,.11,.11,.07,.13,.1,-.05,.44,0,.02,.13,-.13,-.1,.11,.01,.04,.18,.15,-.02,-.16,.03,.11,.09,-.16,-.11,.19,.15,.17,.18,.08,.15,0,.04,.01,-.08,.11,.11,-.06,.02,-.36,.08,-.42,.25,.14,.1,.12,-.06,.08,.18,.05,.05,.22,.1,-.11,-.18,-.04,-.05,.07,.04,.16,.2,.21,-.01,.05,.17,.17,.18,.05,.15,-.09,.07,.08,.09,-.09,-.12,-.03,-.01,-.07,-.13,.2,.23,.03,-.14,.17,.03,.03,-.03,.05,.11,.24,.1,.38,-.45,-.04,.03,.07,.21,.22,.11,.13,-.06,-.02,-.05,.1,.8,-.17,-.06,-.29,.14,.01,.16,.1,.23,.2,.08,0,.13,.17,-.01,-.08,.02,.07,-.13,-.21,-.01,-.19,-.2,.05,-.12,0,-.07,.29,0,.04,-.27,.11,.18,.11,.11,-.07,-.07,0,-.09,.13,.16,.13,.13,.08,.04,0,-.02,-.02,.11,.34,.15,.21,-.05,.16,-.01,-.09,-.16,-.05,.11,.24,.08,.05,-.08,-.11,.15,.05,.12,.28,.07,.26,.12,.17,.17,.2,.16,-.1,-.01,-.05,-.07,.2,-.03,-.12,.27,.16,.23,.12,.14,-.23,.1,.1,.11,-.16,.17,.19,-.01,.78,.74,.21,.03,0,.11,.14,-.37,.22,.11,-.08,-.16,-.07,-.08,.15,.15,0,-.07,-.02,-.19,.12,.14,.03,-.12,.37,.01,.19,-.62,-.02,.01,.22,.06,-.06,.15,-.1,.08,-.07,.24,-.15,.09,-.01,.08,0,.09,.21,.5,-.33,-.68,.18,.14,.12,.17,.11,.12,-.14,.12,0,-.06,.75,-.11,.24,.09,.13,-.36,.31,.15,-.25,.21,.29,.2,.14,.15,-.12,-.08,.2,.1,-.25,-.14,.07,-.11,-.08,.3,.15,-.47,-.02,.14,-.04,-.17,.04,.01,.66,-.12,.19,.45,.14,.07,.03,.14,-.01,-.07,-.1,.65,.36,.04,.03,.31,.18,.15,.18,.27,.18,.21,.09,.15,-.69,.05,.04,.06,-.25,.24,.37,.08,.5,.17,.18,-.08,.07,.03,.22,.28,.13,-.04,.69,-.28,-.07,.59,.15,-.13,.11,.15,-.03,.27,.06,.21,-.18,-.04,.14,-.03,-.25,-.02,.06,.17,.24,-.06,.03,-.02,.19,.45,.18,-.03,.16,.21,-.27,.13,.26,.09,.19,.17,.62,.14,.27,.14,.06,-.04,.02,.17,.15,.06,.24,.14,.33,.25,.21,.38,-.01,.12,.16,.11,.1,.11,.04,-.09,.12,.14,.04,-.22,.12,.78,.18,-.06,-.19,.12,.25,.07,.17,-.07,.17,.1,.08,.16,.05,.24,.36,.04,-.1,-.03,.33,.16,-.48,.58,-.2,-.02,-.06,.16,.76,-.14,.12];export{a as rvalData};
