const a=[.71,.07,.04,.14,-.06,.64,-.02,.3,-.01,-.05,-.06,.31,-.44,-.08,0,.22,.21,-.05,-.43,.35,.03,-.04,.01,-.01,-.02,-.01,-.06,.07,.12,-.1,.1,.01,.04,.76,.16,.25,.12,-.03,-.2,.01,.03,-.01,.21,.17,-.31,-.03,-.12,.42,-.04,-.07,-.1,.81,.17,.05,.2,.01,-.08,.85,-.07,-.05,.29,.01,.06,.1,-.06,-.05,.07,-.08,.01,.09,.02,.07,.12,-.23,.03,.27,.16,.28,0,.19,.09,-.04,.03,.02,-.01,-.22,-.02,-.18,-.03,-.09,.16,-.19,.09,.11,.18,-.42,.05,.55,0,.31,-.08,.11,.11,-.05,.01,-.31,.03,-.17,.1,-.01,.3,-.07,-.14,.22,.02,0,.09,.03,.07,0,-.17,-.2,.34,-.08,.18,-.07,-.03,.22,.08,-.04,.14,.05,.04,-.02,.33,.33,.14,-.22,0,.82,.03,.89,0,.04,1,.16,.15,.26,.09,.02,.1,.14,.17,.36,.2,.17,-.15,.68,.12,-.01,.07,.08,-.24,-.12,.11,.18,.04,.06,.18,-.01,.91,.03,.17,-.06,-.04,.02,.02,-.15,.3,.04,-.04,.19,-.09,-.15,-.06,-.44,.4,.62,.15,.3,.08,.29,-.34,.19,.09,.07,0,.34,.44,.02,.01,0,-.04,.34,-.01,.09,-.06,.08,.15,-.49,.15,-.01,.22,-.03,.84,.14,-.11,.11,.05,-.13,.08,-.03,-.02,.09,-.14,-.02,.21,.05,.28,.02,-.02,-.11,-.08,-.01,-.7,.93,-.08,-.05,-.04,.02,.09,-.06,.02,.13,.17,.09,-.01,.12,.2,.08,.18,-.26,.09,-.13,.04,-.27,-.31,.14,-.01,-.04,.04,-.07,.12,.01,.16,.01,-.06,.01,-.07,.39,.25,.32,.01,-.01,-.11,-.22,-.09,.31,-.01,-.03,.09,-.21,.06,-.21,-.02,-.03,-.28,.08,.29,-.06,.04,-.2,-.01,.05,.1,.19,0,.44,.17,.01,.16,-.05,-.04,-.13,.3,-.14,-.1,.1,.09,-.05,-.01,-.22,-.46,.96,.08,.01,.07,-.02,.03,-.19,-.03,.13,-.01,-.01,-.02,-.03,.09,-.03,.02,-.04,0,.03,.05,-.3,-.12,.19,.01,.12,.01,-.03,.17,.03,-.16,.12,0,-.01,-.16,.17,.03,-.05,.08,.4,.63,-.04,-.01,.03,-.01,-.03,.02,-.01,.24,-.14,-.07,-.29,-.05,.17,.73,-.03,.2,-.08,.02,-.09,-.01,.32,.32,.29,-.25,-.01,-.03,.26,.16,.03,.04,.07,.04,.06,0,-.11,-.02,-.02,.05,-.77,.1,-.11,-.18,-.05,-.05,-.12,.01,-.01,-.1,.03,.01,.12,.06,-.25,-.03,.02,.03,.03,-.1,-.1,-.15,.01,.22,.36,-.02,.01,.12,-.44,.74,-.24,.19,-.53,.07,0,-.07,-.31,-.02,0,-.12,.26,.07,.46,.17,-.03,.01,.01,0,.36,.06,.01,.01,.55,-.06,.1,-.03,-.1,.33,.26,-.05,.09,.08,-.11,-.04,.05,-.18,.05,.62,-.14,.04,.08,.27,.36,.08,.04,-.11,-.28,.19,.07,-.12,.02,.57,.6,.04,.05,.12,.1,.1,-.18,.11,-.02,.09,.12,-.02,-.04,.1,.03,.03,0,-.05,.3,-.07,-.07,.17,0,-.06,-.18,.01,.09,.11,.14,-.02,.06,.05,.04,.31,.11,-.06,.2,.07,.09,-.01,-.11,-.04,.01,.52,.11,.32,.03,-.05,0,-.18,-.18,.14,.9,.09,.43,.06,.15,.11,-.07,-.07,.13,.83,.81,-.01,-.09,.16,.19,-.07,-.11,-.77,-.14,.1,-.1,.63,-.16,.01,.05,-.28,-.02,.01,.09,.05,-.5,-.09,-.04,-.07,.01,-.04,0,-.11,.18,-.03,-.16,.01,-.24,.37,-.34,.01,.04,.13,.02,-.04,-.01,-.24,-.15,-.11,.02,.17,.56,.05,.11,.06,-.05,-.03,.12,.11,.07,-.18,-.08,-.1,.03,.03,.38,-.04,-.09,.68,.04,0,.05,0,.44,.01,-.17,.02,.06,.27,.08,-.04,.16,-.36,.34,-.46,.16,-.07,.14,-.08,.66,.1,.1,.13,.05,-.12,.48,-.04,0,.07,.04,-.35,-.13,-.24,.15,-.03,.13,.08,.08,.28,-.23,.29,.04,.05,.21,.09,.02,.09,.02,-.39,.04,.51,.25,.01,.02,.05,.12,-.03,.05,-.29,-.08,-.02,.05,.02,.22,-.07,.43,-.12,-.07,.11,.1,.02,.2,0,-.12,.2,-.01,.01,-.04,.04,.32,.1,.15,-.01,.21,.5,.53,.21,-.04,.06,.24,.26,-.02,.06,-.75,.83,-.01,.55,.36,0,.26,-.03,.1,.21,-.2,.08,-.25,.22,.23,.55,-.09,.03,-.04,.2,.11,-.13,0,.01,.02,-.15,.04,.19,.05,.14,-.3,.04,-.3,-.24,-.07,.66,.03,.28,.13,-.02,-.11,.09,.04,.01,-.14,.01,-.27,-.04,.07,.03,-.17,-.11,.4,.02,0,-.1,.22,.75,-.13,.05,.48,.02,-.16,-.16,.11,.32,-.06,.08,-.1,.06,.09,-.09,.05,.04,-.58,-.09,.78,.08,.13,.04,.9,.04,.37,-.03,.19,-.05,.04,-.02,-.15,.31,.05,.03,.08,-.02,.3,0,-.2,-.1,-.06,.06,-.04,-.03,.01,-.03,.05,-.01,.02,-.17,.3,-.28,.11,.28,-.09,.1,.08,.15,-.15,.09,.07,-.04,.04,-.08,-.03,-.23,-.13,.01,0,.53,.46,.06,-.39,-.29,-.03,.13,.28,-.03,.23,-.07,-.06,.34,-.03,-.1,.02,.1,-.25,.61,-.1,.19,.06,-.59,-.02,.09,.06,-.11,.05,.08,.19,.01,.06,.21,-.21,.07,-.22,.25,-.11,.22,.1,.18,.04,-.17,-.09,.17,0,.01,.76,-.05,.05,.02,.25,-.16,.05,.18,.11,.1,.07,0,.87,-.11,.2,-.17,-.01,-.2,.12,.25,-.08,.08,.06,-.08,-.42,-.25,.23,.1,-.37,.25,-.33,.01,-.08,.09,.02,.04,-.11,.96,.02,.7,.02,.64,.09,.87,-.15,.11,-.08,.05,.03,.37,.06,.02,-.17,.26,-.27,-.11,.1,.03,.01,.76,.01,-.02,.04,.28,-.02,-.16,0,-.11,-.03,.19,-.1,.39,0,.55,-.06,-.05,-.19,.08,-.02,.12,.11,-.04,-.05,.01,.07,-.19,-.11,.13,-.02,.01,-.02,-.02,.08,.08,-.06,.09,-.02,.03,.07,-.03,.12,-.21,.09,-.39,.32,-.01,.02,0,-.03,-.03,0,.1,.09,.02,.14,-.14,.16,.08,-.18,.01,.67,.77,.35,-.14,.03,.09,.03,-.12,.11,-.01,.21,-.02,-.23,.11,-.16,.02,.22,.31,.09,.63,.23,-.24,.47,-.02,.35,.09,-.21,.29,-.15,.12,.34,.16,.1,-.01,-.24,.15,.02,.13,-.26,.08,-.12,.78,-.19,-.1,-.27,.15,-.06,-.15,.22,-.07,0,.08,.07,-.02,-.01,-.43,-.13,.25,.03,.25,0,-.11,.15,.15,.16,.04,-.04,-.4,.26,.08,.24,.17,-.01,-.24,.68,-.13,-.05,.12,.17,.08,.04,-.04,.07,.13,.55,.6,0,0,-.01,-.01,.02,.42,.02,.87,-.07,.11,.01,.4,-.1,.04,-.28,-.12,.03,-.03,-.06,.01,-.07,.05,.06,.06,-.19,.06,.02,.27,-.09,.38,.12,-.04,.26,-.07,-.16,.08,.2,-.72,.16,.09,-.25,.01,-.38,-.18,-.03,.21,-.06,.08,-.07,.53,.47,-.11,.41,.05,-.1,.17,.02,-.02,.08,-.01,-.27,.32,-.05,.04,.08,.93,.13,.01,.35,-.25,-.03,.08,.98,-.05,-.15,.08,-.09,.46,.25,.64,.02,-.28,-.02,.98,.06,.54,.92,.04,-.07,.75,.08,-.11,.02,.03,.09,.05,.11,-.15,.56,-.19,-.07,.1,-.19,-.07,.18,-.05,-.03,.02,-.11,.3,.03,-.04,.72,-.06,-.07,-.05,.03,.06,.03,.09,-.19,.02,.55,-.06,.08,.04,.01,.15,.35,.46,.07,-.02,.07,.15,.12,-.03,.18,.07,.5,-.41,.07,-.03,0,.54,-.03,-.03,.17,.27,.05,.09,.98,.95,.32,-.3,-.23,.23,.17,-.15,-.09,.02,-.01,-.02,.15,-.17,.23,.37,.98,-.03,-.01,.07,.22,.98,.07,.58,-.02,.01,.75,.02,.11,.64,.28,.44,.37,.09,-.27,.17,.08,.34,.01,.33,.05,-.37,.35,-.15,-.08,.21,.74,-.02,.03,.13,.05,.11,.07,.05,.49,.14,-.1,.11,.63,.09,.19,.11,.86,-.05,-.03,.25,.61,-.16,.17,.02,.36,.02,-.02,-.11,.07,-.05,.05,0,.2,.38,-.09,.07,-.13,.42,.09,-.01,.08,0,-.04,-.13,.01,-.28,-.05,.17,-.03,-.05,.85,.09,-.07,-.46,-.03,.05,-.47,.02,-.01,.08,-.19,-.1,.06,-.02,-.04,.05,.04,.19,.26,-.13,.18,.06,-.58,.19,-.12,.06,-.17,-.22,.16,.5,-.04,.26,.06,.15,-.07,-.62,.11,-.07,.11,.09,.05,.18,.11,-.76,.01,0,.04,.17,-.04,.16,.11,-.09,.13,-.07,.03,-.41,-.06,.06,.01,.25,-.05,-.06,-.01,.01,.06,.02,.04,-.69,-.1,.2,.08,.37,.09,.27,.1,.03,.09,.12,.7,-.02,-.11,.02,-.13,.05,.03,-.01,-.1,.37,-.03,-.2,.26,0,-.01,.71,-.04,.15,-.02,-.07,-.04,.21,.09,.04,.34,.24,.16,.06,.14,-.04,.03,-.18,-.08,.33,.16,.02,.07,-.03,.06,.2,.71,.21,-.39,.09,.03,-.03,-.01,.74,.07,.08,-.11,.06,.13,.46,-.06,.06,0,-.01,-.04,-.01,.25,.04,-.3,.05,-.12,.32,.38,.21,.08,.06,.2,-.04,.13,.15,.16,-.01,-.02,.07,.14,.08,.08,.1,-.27,-.01,.03,-.25,-.1,.01,-.07,.06,.09,-.1,.24,.05,.09,.1,-.11,.05,-.06,.21,-.26,0,.16,.02,.13,-.08,.17,-.1,.04,.06,-.02,-.26,.31,.03,-.06,.03,0,-.32,-.32,-.06,-.06,-.09,-.14,.02,.11,-.03,.26,-.13,-.07,-.09,.83,.17,.05,.17,.1,-.01,-.1,.12,.1,.1,.05,.17,-.01,-.03,.08,0,.04,.02,-.01,-.23,.43,.04,0,-.1,-.06,.01,-.02,.9,.08,-.05,.06,-.03,-.14,-.13,.14,-.12,.09,.12,.21,-.17,-.05,-.05,-.14,.01,-.03,-.05,0,.96,.07,-.03,-.05,.04,-.07,.03,.03,.03,.06,-.04,.14,.04,-.07,-.02,-.07,.03,.01,0,-.01,.09,.01,.02,0,.18,.03,-.14,.01,.09,0,.03,.09,.1,.07,.08,.12,-.02,-.02,-.26,.03,.03,.24,.17,.01,-.03,-.01,.45,.03,-.14,.31,.11,-.1,-.27,.23,-.02,-.07,.03,-.09,.13,.28,-.02,-.27,-.08,.01,.07,-.04,.07,0,.1,.52,.06,-.01,.08,-.14,-.09,.05,-.08,-.01,.32,-.04,.13,-.21,.03,.28,.1,-.04,-.2,.02,-.02,0,.02,.08,.03,.02,.05,-.04,.06,.13,.02,-.01,-.04,-.34,.09,-.43,.1,.12,-.08,-.01,-.12,.2,.05,.08,.12,.08,.07,.04,-.27,.01,.09,0,-.05,.04,.01,.01,.15,-.01,0,-.03,.08,.01,-.01,-.18,.16,.19,.02,-.09,-.11,-.04,-.07,-.13,-.13,.01,.11,-.04,-.09,-.02,-.02,.04,.05,-.04,.04,.19,.1,.46,-.44,0,0,.18,.21,.09,.04,.11,.01,-.04,-.07,-.05,.92,-.2,-.05,-.36,.04,.05,.02,.07,.07,.02,.14,.03,.07,.05,-.13,-.1,.02,.01,-.02,-.21,.14,-.04,-.2,.13,-.16,.12,.04,.24,.01,-.01,-.3,-.03,-.01,.25,-.03,.05,-.16,.02,-.05,.01,-.03,-.01,.05,-.08,.07,0,-.03,-.01,-.03,.39,.05,.02,-.03,.19,-.02,-.04,-.17,-.01,-.04,.13,.18,-.04,-.11,-.02,.01,.11,.18,.37,.12,.08,.04,.03,-.03,-.02,.09,-.09,0,-.04,-.04,.11,.04,-.15,.53,.06,.05,.1,.18,-.16,.1,.15,-.06,-.25,.08,.07,-.04,.99,.92,.05,.12,.06,.21,0,-.41,.04,.17,0,-.17,.01,.02,.2,-.06,-.02,.02,.02,-.13,.18,.03,.11,.02,.44,-.02,.1,-.58,.08,-.01,.3,-.02,-.01,.01,.02,.02,-.14,.04,-.1,.2,.1,.06,-.1,.1,.09,.53,-.13,-.58,.19,.11,.06,.09,.08,.01,-.16,.05,.08,-.08,.9,.01,.29,.03,-.06,-.31,.25,.01,-.17,.21,.37,.09,-.01,.06,-.01,-.03,.23,.1,-.23,-.19,.1,-.16,-.13,.26,-.02,-.4,-.09,.07,.14,-.38,.07,.08,.59,-.11,.1,.49,-.1,.17,.08,.19,-.01,-.22,-.08,.85,.32,.08,.13,.1,.02,.03,.15,.09,-.06,.04,.01,.01,-.66,.08,-.01,-.07,-.18,.2,.38,.16,.57,.01,.1,-.03,.06,.01,.19,.11,.11,.03,.63,-.2,-.15,.57,.14,-.19,.06,.04,-.11,.1,.08,.17,-.12,-.05,.06,-.01,-.19,-.09,.01,.01,.3,-.14,.13,.06,-.04,.43,.08,.01,.02,.22,-.28,.07,.32,0,.08,.02,.48,.09,.23,.02,-.11,.1,-.06,.01,.07,.07,.05,0,.12,.23,.02,.16,.03,.06,0,-.02,.03,-.05,-.07,-.05,.09,-.06,-.02,-.06,-.04,.96,-.03,.06,-.16,.09,.17,-.08,.11,-.04,.14,.02,.17,.08,.1,.09,.3,.02,-.04,-.14,.24,.15,-.45,.57,-.16,-.08,-.05,0,.9,-.22,.12];export{a as rvalData};
