const a=[.44,.21,.05,.14,.1,.5,-.07,.31,0,-.03,-.26,.26,-.3,-.19,-.15,.23,.09,.03,-.28,.2,.05,.02,.02,-.21,0,.17,-.08,.09,.14,-.12,.08,-.08,.13,.56,.04,.31,.14,-.11,-.06,.14,-.09,.19,.13,.2,-.18,-.05,-.19,.15,-.06,.04,-.14,.92,.24,.1,.33,-.28,-.12,.78,.35,-.08,.19,.16,.18,.12,-.04,.06,.24,-.15,.06,.03,-.01,.07,.08,-.26,.17,.08,.09,.2,.08,-.04,-.04,-.07,-.11,.21,-.07,-.24,.07,-.11,-.19,-.03,.24,-.01,.06,.24,.03,-.24,-.13,.34,.08,.28,0,.18,.27,-.03,.2,-.26,-.05,-.21,.12,.2,.22,.06,-.07,.15,.05,.21,-.13,.15,-.15,.01,-.06,-.16,.21,.03,.25,.08,.1,.22,.07,.07,.18,.08,-.08,.04,.21,.48,.29,.04,.03,.59,.24,.66,.26,.12,.73,.17,.06,.36,.14,.03,.14,-.08,.15,.19,.22,.32,.07,.48,.04,-.18,.29,.37,-.12,-.05,.04,.13,.07,-.02,.23,0,.71,-.04,.24,.05,.14,.01,-.03,-.07,.31,.1,-.1,.14,.08,.02,.15,-.3,.3,.55,.23,.07,-.04,.17,-.21,.23,.16,.13,.16,.29,.38,-.02,-.16,-.08,.07,.29,-.14,.13,.02,.3,.11,-.33,.15,-.02,.12,.02,.79,-.01,.03,.12,.02,-.08,.28,.16,.14,.1,.05,.08,.24,.06,.35,.36,-.02,.01,-.02,.03,-.48,.7,-.12,-.19,.12,-.02,.2,-.11,.04,.22,.1,-.05,-.04,.12,.25,.01,.27,-.15,.23,0,.24,-.2,-.12,-.01,.22,.13,.07,.17,-.04,.24,.22,.2,-.22,.26,-.18,.33,.27,.21,.09,.04,.16,-.05,0,.28,-.14,-.05,.24,-.21,-.11,-.2,.28,-.08,-.23,.09,.34,.03,.04,-.02,.04,-.07,.15,.13,-.25,.24,.12,.01,-.07,.09,-.11,-.15,.17,-.02,.08,.26,.28,-.33,.11,-.15,-.38,.71,.33,.02,.23,.1,.06,-.07,.19,.09,-.02,.13,.21,.28,.23,.15,.06,.3,-.01,.21,.01,-.13,0,.13,.01,.21,-.07,-.08,.13,-.01,-.19,.17,.07,.01,-.06,.33,-.03,.22,.21,.42,.53,.25,-.07,-.13,.18,-.05,.01,.14,.15,-.13,.25,-.29,-.03,0,1,.05,.2,-.05,.13,-.18,-.02,.25,.23,.32,-.08,.21,.06,.44,.27,.09,-.02,.03,.19,.2,-.07,.06,.05,.09,.05,-.57,-.02,-.19,-.29,.07,-.08,-.12,.21,.11,-.13,.26,.06,.07,.2,-.15,-.02,.06,.23,.28,-.03,-.11,.11,.02,.35,.31,.21,.14,.27,-.39,.58,-.09,.35,-.48,.04,.09,.05,-.19,.1,.09,-.11,.22,.07,.34,.27,.02,-.2,.16,.1,.37,.34,.14,.22,.35,-.05,.18,.08,.04,.2,.17,-.21,.28,-.05,.08,-.03,.13,-.18,.14,.73,-.19,.12,.13,.06,.38,.07,.16,-.11,-.32,.03,.08,-.2,.08,.42,.5,.25,.01,-.08,-.16,.17,-.1,.28,-.02,.38,.05,.01,.19,.3,.18,.03,.05,-.06,.26,-.09,.12,.25,.1,.27,-.23,-.05,.15,.32,.29,.13,.08,.19,.18,.37,.04,.08,.19,.22,.33,.17,-.2,-.03,0,.51,.14,.34,.24,-.07,.11,-.09,-.14,.2,.72,.17,.58,-.04,.13,.23,.24,-.1,.26,.61,.61,.14,-.06,.31,.18,-.11,.08,-.57,-.01,-.03,.01,.63,-.04,.1,.26,-.21,.08,.01,.14,.08,-.41,-.21,.07,-.22,.05,.16,.06,.24,.16,-.08,-.16,.05,-.19,.42,-.23,.11,.08,-.05,.19,.27,.04,-.15,-.09,.03,.12,0,.49,.3,.31,.15,-.07,.04,.23,.25,.12,-.23,-.12,-.05,.14,.05,.2,-.12,-.02,.77,-.09,-.06,.16,.14,.4,.19,-.1,.2,-.09,.22,.31,.03,.18,-.2,.23,-.32,.18,.05,-.01,-.09,.51,.01,.19,.06,-.01,.13,.29,-.07,.2,.3,-.06,-.4,-.31,-.22,.16,.05,.25,.06,.15,.18,-.29,.37,-.01,.04,.17,.04,.27,.29,.18,-.21,.14,.41,.08,.16,.09,.02,-.03,0,.04,-.2,-.14,.12,.02,.2,.33,.03,.36,-.04,.15,.14,.18,0,.09,-.01,-.11,.32,.12,.08,.06,-.01,.24,.12,.3,-.03,.26,.57,.49,.06,.15,.11,.22,.2,-.01,.27,-.62,.68,.03,.43,.39,.09,.05,.23,.06,.19,-.04,.02,-.25,.09,.31,.34,-.08,.05,.06,.28,-.08,-.11,-.04,.02,.08,-.15,0,.18,.26,.14,-.28,0,-.16,-.26,-.25,.46,.2,.04,.12,.09,-.03,.14,.22,.07,-.18,.06,-.24,-.08,0,-.09,-.06,-.13,.21,.08,.03,.08,.33,.51,-.02,.02,.58,.24,-.32,.05,.22,.27,-.03,-.12,-.03,.07,.12,.12,-.01,.27,-.39,-.08,.67,.27,.28,.16,.69,.26,.18,.08,.06,.15,.16,0,-.11,.21,.3,.08,.34,.19,.21,.13,-.28,-.02,.09,.25,-.15,.11,-.1,.05,.25,-.02,.1,-.17,.2,-.08,.18,.25,.11,-.09,.24,.32,-.12,.17,.05,.09,.03,.12,.06,-.27,-.15,0,.13,.37,.31,.07,-.26,-.37,.05,.12,.24,-.02,.09,.2,.06,.42,-.06,.02,-.02,.01,-.12,.51,-.08,.16,-.04,-.46,.04,-.09,.15,-.18,.13,.06,.06,.1,.08,.22,-.11,.12,-.04,.37,.07,.14,-.01,.22,.08,-.03,-.17,.3,.26,-.13,.59,.11,.09,.06,.16,-.07,.27,.2,.24,.18,.01,-.08,.69,0,-.07,-.05,.14,-.03,.08,.27,.07,.27,-.03,.1,-.33,-.21,.36,.34,-.17,.05,-.26,.11,-.02,-.09,.13,.18,-.13,.69,-.03,.55,.21,.41,.2,.59,-.04,0,0,.18,.22,.25,.19,.13,-.11,.27,-.24,-.07,.06,.23,.11,.59,.06,.32,.2,.19,.06,-.02,.11,.06,-.07,.23,.11,.35,.21,.42,.14,.12,-.02,.3,.01,.01,.18,-.11,-.08,-.02,-.03,.07,.06,.31,-.08,.19,.15,.18,-.1,.1,-.16,.03,-.02,.24,.09,0,.16,-.23,.01,-.1,.35,-.22,-.07,.27,-.41,.25,.36,.12,.02,.11,.24,-.02,.13,-.08,-.15,.1,.51,.57,.45,-.06,.02,.3,-.06,-.14,.26,-.05,.31,.03,-.17,.17,0,.09,.17,.2,-.11,.51,.22,-.07,.32,-.04,.36,.07,-.08,.2,-.12,-.07,.25,.32,.11,.17,-.17,.13,.19,.12,-.03,.09,-.05,.56,-.14,.1,-.25,.09,.25,-.06,.18,-.01,-.16,.1,.03,.06,.05,-.47,.07,.06,.26,.24,-.05,-.19,.16,.04,-.02,.1,-.09,-.2,-.04,.01,.34,.15,.02,-.17,.54,-.25,.03,.17,.25,0,-.09,-.11,.15,.31,.64,.62,.09,.12,.02,-.02,.22,.59,.09,.64,-.08,-.02,.16,.3,.1,0,-.16,-.02,.1,-.03,.07,.08,-.08,.04,.26,.07,.08,.18,.09,.28,-.08,.42,.01,.12,.24,-.08,-.1,.14,.36,-.49,.28,.14,-.19,.02,-.27,-.08,.01,.35,.07,-.22,-.11,.31,.34,-.22,.37,.08,-.01,.3,-.03,.11,.13,.05,-.18,.21,.14,.1,.2,.69,.15,.14,.23,-.14,-.18,.32,.73,-.01,.07,.01,-.08,.33,.24,.68,.2,-.17,.16,.74,.11,.46,.65,.02,-.13,.91,.01,-.11,.1,.16,.14,.18,.14,.14,.4,-.19,.27,.21,-.19,0,.17,-.01,-.07,.08,-.06,.27,.23,-.09,.51,.05,-.01,.12,.07,.22,-.07,-.03,-.04,.12,.28,-.11,.14,.25,-.17,-.01,.34,.28,.09,.23,.28,.19,.17,.26,.2,.09,.37,-.36,.21,.09,.25,.29,.19,.1,.1,.08,.14,-.01,.74,.68,.41,-.23,-.14,.41,.33,.02,.15,.05,.02,.12,-.03,.01,.17,.32,.72,.03,.25,.04,.28,.74,-.06,.42,.12,.09,.61,.16,.07,.93,.36,.39,.3,.23,-.12,.1,.17,.14,.14,.18,.21,-.13,.49,-.15,-.07,.22,.57,.04,.1,.27,-.27,.04,0,0,.27,.19,-.09,.33,.51,-.08,.25,.1,.74,.07,-.04,.23,.53,.07,.24,.2,.48,.24,.12,.06,.16,.04,.21,.04,.2,.2,0,.04,-.1,.32,.22,.07,-.02,.33,.07,-.27,.32,-.02,0,.26,-.09,.09,.62,.19,.07,-.28,-.01,.26,-.17,.18,.14,.13,-.13,-.1,.1,.21,.11,.26,.04,.22,.12,-.15,.19,-.1,-.47,.16,-.08,-.09,-.11,-.16,.27,.41,-.03,.25,.22,.23,.05,-.37,.26,.15,.27,.16,.19,.26,.32,-.58,.03,.07,.08,.26,.24,.04,-.12,-.3,.04,-.05,-.05,-.12,-.08,.15,.2,.36,-.05,-.13,.02,.08,.12,.03,-.21,-.49,-.12,.37,.22,.52,.14,.53,.28,.12,-.05,.16,.52,.09,-.19,.18,-.16,-.08,.07,.15,-.18,.36,.1,-.33,.28,.11,.11,.6,.08,.26,-.03,-.17,-.03,.22,.07,-.03,.39,.16,.14,-.27,.12,.05,.1,-.13,0,.15,.25,.11,.23,.1,.12,.24,.46,.28,-.22,.27,.05,.06,.18,.51,.15,.14,0,.07,.1,.31,-.01,.03,.01,.11,.05,.18,.46,.08,-.3,.09,.1,.14,.33,.36,.24,.04,.26,-.05,.14,.26,.17,0,.1,.2,.03,.25,.13,.3,-.17,.13,.06,-.26,.11,.22,.08,.26,-.02,-.04,.35,.26,.09,.22,.11,.21,.13,.23,-.28,0,.11,.04,-.08,.02,.29,-.11,.04,.09,.18,-.05,.12,-.05,0,-.03,.05,-.15,-.36,.12,-.09,-.02,-.2,.18,.22,.1,.16,-.16,.12,.11,.53,.25,.06,.31,.12,.17,.05,.18,-.06,.26,.12,.32,.11,.08,.15,.05,.21,.13,.12,.02,.49,.17,-.16,.15,0,.21,.07,.68,.23,.16,-.03,.14,.11,-.13,.12,-.01,.23,.4,.26,-.01,-.01,-.12,-.1,.1,.02,.07,.23,.75,-.1,.07,.03,.17,-.12,.15,-.11,.04,.28,.01,.09,.03,-.03,.05,-.03,.17,-.02,.04,.08,0,.19,.17,.05,.15,-.07,.1,.2,.48,-.01,.07,.09,.01,.36,.08,.06,.05,0,-.17,-.05,.05,.2,.37,.21,.2,.16,.39,.16,-.16,.41,-.03,.23,-.2,.13,0,.32,.07,0,.24,.15,.1,-.21,.09,.02,.01,.16,.02,.22,.31,.32,.16,.06,.11,-.17,-.15,.26,-.02,.19,.38,.03,.34,-.12,.15,.18,.29,.22,-.06,.13,.15,.12,.15,.12,.13,.11,.13,.15,.16,.29,-.02,0,.18,-.31,.24,-.33,.12,.16,-.11,.19,.01,.07,-.13,.11,.28,-.11,.02,.04,-.19,.14,.07,-.1,-.01,.2,.09,-.1,.33,.19,-.23,-.18,.14,.22,.14,-.12,.04,.34,.16,-.06,-.17,-.13,-.05,-.07,.04,.07,.16,.03,-.17,-.07,.09,.01,.09,.06,.35,-.06,-.11,.3,-.46,-.02,-.09,.12,.47,.15,.26,-.05,.22,.07,-.02,.11,.71,-.05,.02,-.22,.06,-.03,.1,.15,.18,.09,.1,.21,.04,.18,-.06,.05,-.04,.12,-.08,-.06,.13,-.13,-.19,-.03,-.06,.01,.02,.23,.22,.09,-.18,.07,.04,.2,0,-.02,-.08,-.08,-.09,.12,.06,.11,-.04,-.27,.19,.04,.13,.19,.2,.31,.09,.18,.05,.17,.16,.09,-.38,.17,.25,.16,.33,-.03,-.19,.08,.07,-.07,.33,.24,.05,.16,.07,.06,.01,.04,.25,-.12,.21,-.05,.08,.02,.19,-.14,.59,.1,-.02,.24,.29,.08,.12,.33,.01,-.13,-.02,.05,.02,.74,.68,-.14,.21,-.12,.11,.16,-.26,.13,.14,.16,-.15,.05,.06,.08,.02,-.04,.17,.07,.1,.34,.23,.11,.12,.31,.01,.05,-.47,.27,.22,.42,-.03,-.08,.12,.11,.2,-.07,.13,-.03,.34,.28,-.01,-.1,.37,-.09,.46,-.05,-.48,.18,.24,.24,.18,.22,.02,-.02,.2,.27,.09,.72,-.06,.2,.23,.05,-.2,.27,.27,-.02,.36,.33,.21,.13,.14,.13,-.01,.27,.17,-.12,-.24,.02,-.23,-.17,.17,.06,-.35,-.17,.28,.22,-.23,.2,.27,.41,-.04,.18,.25,-.06,.35,.16,.22,-.05,-.11,-.14,.62,.2,.21,.11,.13,.13,.18,.06,.14,.03,.15,.24,.18,-.52,.17,.15,.16,.03,.12,.33,.25,.5,.08,.21,.04,.04,-.01,.13,.18,-.03,.05,.48,-.07,-.15,.36,-.02,-.14,.12,.15,-.08,.1,.18,.18,-.06,.02,.04,-.11,-.08,-.08,.03,.02,.36,-.4,-.04,.21,.09,.31,.12,.19,.15,.3,-.12,.02,.1,.15,.28,.1,.36,.18,.29,.19,-.07,.1,.12,.14,.13,.03,.13,.19,.11,.06,.1,-.01,.19,.05,.02,.14,.14,.15,.06,.17,.31,-.01,.04,-.08,.11,.75,.06,.06,-.16,.31,.29,.04,.19,-.11,0,.12,.2,.12,.35,.02,.31,.3,.09,-.1,.16,.18,-.44,.32,-.1,.12,.32,.12,.74,-.12,.25];export{a as rvalData};
