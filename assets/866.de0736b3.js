const a=[.02,-.05,-.12,.03,-.01,.12,-.03,.4,-.17,.27,-.45,-.02,.06,.01,-.5,.14,-.1,.07,.08,.02,0,-.28,.2,-.6,-.33,-.07,-.43,.18,.11,-.54,.08,-.39,-.09,.06,-.49,-.06,-.32,-.54,.08,-.13,-.22,-.06,.05,.15,.09,-.48,-.36,-.21,-.38,.31,0,.11,-.01,-.22,.48,-.45,-.28,.27,.39,-.34,.28,-.03,.04,-.01,-.11,-.16,.01,-.55,.06,.08,-.02,-.23,.42,.08,-.07,-.16,-.26,.34,-.16,-.18,-.05,-.31,-.09,-.03,.09,-.35,-.07,-.03,.13,-.3,.74,.07,.25,.39,-.08,.27,.03,-.22,.16,.39,0,-.01,.28,-.03,.32,-.11,-.4,-.42,-.16,.11,-.14,.38,.09,.15,.06,-.22,-.22,-.22,-.21,-.23,-.06,-.1,.08,.08,.28,.17,.01,.21,-.17,-.29,.59,.45,.03,.41,-.29,.01,.65,.2,-.27,.02,.16,.01,.25,-.05,0,.15,-.1,.4,.13,-.01,-.05,.26,-.08,-.16,.53,.73,.18,-.02,-.11,-.58,.71,.29,-.04,.27,.24,.33,-.17,-.25,.3,-.28,-.02,-.18,.66,.6,.12,-.36,-.07,-.53,.4,-.22,-.29,-.12,.15,-.28,.35,.15,-.12,.08,.53,.11,.16,.44,-.06,.18,.18,-.17,.19,.17,0,-.24,-.31,-.01,-.26,.04,-.03,.33,.31,.56,.35,.09,.57,-.53,.04,-.36,.23,-.08,.04,.5,-.43,-.37,.35,.31,.16,-.19,.26,-.26,.61,-.28,.4,.4,-.02,.12,-.25,-.11,-.02,-.02,-.48,-.47,.36,-.09,.46,-.58,.48,.66,.29,.38,.01,.02,-.01,.08,.33,-.04,.5,.12,.17,-.23,.06,-.13,.18,-.18,-.15,.78,.04,.17,.48,.3,-.19,.11,-.06,-.21,-.14,0,-.22,-.1,-.14,.11,-.4,.37,-.14,-.37,.66,-.49,-.38,.14,.59,-.12,-.55,-.35,.37,-.25,.31,.5,-.09,.26,.26,.09,-.29,-.12,.1,.38,.03,-.13,-.29,-.02,-.07,.06,.02,.25,.67,-.46,0,.06,-.06,-.01,.33,.4,.4,.72,-.07,.08,.04,.07,-.4,-.04,.52,.59,-.01,.48,-.01,.55,.05,.26,.01,-.02,-.21,-.21,-.18,.3,.09,-.34,.31,.05,.15,-.04,-.33,-.11,.05,.7,.06,.51,.14,.57,0,.57,0,-.36,.29,-.09,-.05,-.17,-.33,-.05,.66,-.35,.05,.02,.26,-.24,.48,-.07,-.28,-.05,-.21,.24,.33,.32,.19,.08,-.04,.72,-.05,-.05,-.14,.03,.16,-.05,-.04,.03,-.11,-.09,-.06,.04,-.2,.09,.02,-.13,-.37,-.04,.54,.24,.08,.51,-.02,-.19,.45,.02,-.35,-.01,.11,.25,-.07,.07,.39,-.05,.47,-.06,.17,-.17,.67,-.07,.09,-.28,-.19,-.11,-.22,-.27,-.2,-.08,.52,.57,.47,.25,-.21,-.04,.74,-.27,.23,.01,-.12,.12,.35,0,.2,-.23,.17,.38,-.23,.04,-.16,-.13,.06,.27,.06,.28,-.17,.3,-.45,-.22,.46,-.09,-.05,.04,.06,.42,.21,.09,.04,.09,.02,-.25,-.46,-.3,-.09,-.08,.78,-.19,-.09,-.03,-.16,-.44,.18,-.4,.1,.17,.21,.38,.37,.44,-.09,-.05,-.04,-.05,-.01,.51,.06,-.27,.49,-.1,-.12,.61,.66,.45,.04,-.26,-.05,.18,.49,-.14,-.18,.51,.16,.38,.11,.11,.19,-.28,.5,.43,.47,-.02,-.03,-.02,.28,.01,.12,-.04,.04,.13,-.14,.07,.54,.45,.13,.57,.04,.06,.52,.07,.6,-.09,-.02,.78,.09,-.36,-.22,.21,.25,-.38,-.03,.25,-.52,-.27,-.15,-.24,-.02,.15,-.24,.54,-.17,.03,-.08,-.34,.33,.33,.07,-.02,.03,-.08,.54,-.02,.01,-.11,-.16,.39,.01,-.17,0,-.02,.49,-.16,-.25,.1,.26,.41,.27,-.47,-.16,.07,-.17,-.33,-.01,-.11,-.09,.04,.39,.13,-.14,-.14,.32,.22,-.1,-.13,.02,.23,.03,-.42,.71,-.12,-.14,.21,0,-.38,.21,.44,.13,-.01,-.11,.38,-.13,.02,.34,.27,.22,.03,.57,.03,.16,.57,.24,.34,.06,-.3,-.07,.42,.05,.19,-.19,.61,.27,-.39,.32,-.15,-.31,.08,.03,.21,.69,-.03,-.09,.3,-.02,.01,.61,-.13,-.2,.03,-.48,-.09,.09,-.09,-.1,.1,-.16,.76,.02,.05,.03,.47,-.04,-.07,-.2,.05,-.09,-.5,.37,.75,.06,-.14,.11,-.08,.06,.56,-.28,-.19,.49,.09,-.06,-.03,-.12,.35,-.07,.1,.64,.02,.12,.09,-.08,.06,.03,.08,.04,.35,.17,-.07,.1,-.07,.03,-.1,-.05,-.45,-.09,.41,.23,.17,.18,.05,-.02,.16,-.05,-.13,.31,.18,-.35,0,-.29,-.13,0,-.44,-.03,.15,-.07,.31,-.09,-.02,.29,.71,-.35,.08,.13,.05,-.59,-.01,-.36,-.42,.02,-.07,-.16,-.4,.4,.38,-.05,-.18,-.03,.22,-.18,-.02,-.04,-.2,-.01,-.05,-.14,-.24,-.16,.25,-.15,-.29,.12,.13,-.18,-.03,.73,.63,-.03,.02,.78,.01,.3,.28,-.1,.73,-.19,-.07,-.01,.13,-.08,.34,.45,.35,.2,-.47,-.22,.48,.26,-.58,-.11,-.25,-.14,.17,.07,.32,.03,-.02,-.05,.05,-.24,.12,.09,-.07,.74,.01,.03,.15,-.07,-.12,.16,.52,.02,-.37,-.16,-.16,-.11,-.18,.38,-.25,-.19,-.29,-.13,.37,-.13,-.09,.49,-.25,.44,.15,.15,-.33,-.14,.31,-.09,-.35,.22,-.37,-.03,.54,-.47,.01,-.47,-.36,.28,-.29,.09,-.36,-.09,.13,0,.14,.73,.78,.3,-.23,.17,-.21,-.08,-.01,.59,1,-.15,.02,.43,.55,.17,-.05,.16,.79,.54,.76,.1,.21,-.14,.03,-.35,-.18,0,-.03,-.33,.2,.52,.08,.19,.42,-.02,.17,.05,.51,.15,.04,-.11,.13,.01,-.16,-.08,-.08,.03,-.09,-.04,-.24,-.1,.73,-.12,.57,.09,-.43,-.43,.47,.17,.22,.06,.54,.6,-.03,.54,-.05,.2,-.12,.18,-.04,.12,-.24,.08,.75,.46,-.07,-.19,-.07,.03,.11,.41,.12,.01,-.01,-.13,.16,.5,-.05,.4,.18,.25,-.19,-.12,-.15,.39,-.14,.43,0,.54,-.18,-.03,.35,.02,-.01,-.17,-.18,.45,.05,.19,.15,.15,.22,.02,-.02,-.29,.38,-.63,-.04,.03,-.39,.41,.58,.41,-.02,-.13,.63,-.26,.4,.21,.44,.68,-.02,-.08,.44,.27,.55,.68,.46,-.02,.64,-.09,.19,.04,-.03,.2,.16,.14,.12,-.03,-.43,-.07,-.05,.01,.11,-.14,.23,.25,-.44,.24,.18,.11,.21,.64,-.07,.04,.17,0,.49,.01,.52,-.09,.1,-.14,-.09,.63,-.26,.04,.56,.19,.25,-.28,.24,-.07,-.14,.42,-.24,-.54,.15,-.09,.8,.06,0,-.05,.09,.36,-.08,.06,.33,-.05,-.19,-.07,.28,.54,-.16,-.52,-.02,.03,-.31,.49,.2,-.24,-.16,-.08,.03,.49,.34,.37,-.27,-.01,.08,-.31,.53,.27,-.23,-.06,-.27,-.06,.01,.35,-.32,.02,.2,-.29,-.03,-.06,.46,-.01,-.2,-.13,.22,.38,.42,-.05,-.02,.35,-.19,.55,-.29,-.18,-.17,-.01,.04,-.02,.07,.01,.56,.43,.01,-.3,-.2,.22,-.36,.41,-.14,-.2,-.57,-.17,-.15,-.23,-.01,-.04,-.48,.73,-.16,.58,0,-.18,.03,-.2,.01,-.12,.66,.06,.35,-.08,-.36,-.06,-.06,.2,.01,-.22,-.25,-.04,.05,-.19,.18,.39,.12,-.11,.69,-.02,.37,.16,.01,-.2,-.03,.12,.39,-.18,-.02,-.07,-.26,.06,.16,.53,-.04,.21,.57,.17,-.16,-.38,-.11,-.27,-.04,.64,.13,-.14,.74,0,-.08,-.22,-.37,.2,-.23,.16,.27,.28,-.08,-.11,-.12,.17,.03,.2,-.18,-.24,.07,-.02,-.09,.55,.28,.31,-.07,-.02,.6,-.1,-.2,-.18,.52,-.13,.47,-.26,.04,-.02,.33,.17,-.01,-.12,.01,-.01,.67,.04,-.51,.58,.73,-.2,.63,-.05,.12,-.02,-.1,-.09,-.02,.11,.02,-.36,-.06,-.23,.22,0,-.07,-.08,0,.07,.08,-.04,.1,.25,.69,-.12,-.13,.36,-.06,.44,.13,-.02,-.13,-.15,.5,-.29,.41,-.43,-.27,.44,-.05,-.27,.23,.07,-.67,.21,.48,-.05,.06,.27,.02,.36,.15,-.35,.46,-.14,-.06,-.11,-.14,-.15,.09,.5,-.1,.03,.3,.79,.41,.04,.14,-.03,.32,-.17,.11,-.11,.04,-.27,-.47,.35,.75,-.26,-.19,.33,-.16,.19,.24,.34,.17,.46,-.11,-.26,.04,.19,.34,.14,.36,.63,.48,-.24,-.02,-.02,-.42,.02,-.07,.65,.17,.21,-.12,.59,-.13,-.19,.06,.14,.05,-.31,-.39,-.07,-.01,-.24,.4,-.12,.17,.3,.43,.16,-.04,.22,.36,.38,.52,.42,.46,.07,.11,.05,.32,.53,.44,.13,.64,-.3,-.4,-.09,.13,.19,-.18,.48,.19,.4,.55,.29,.36,-.28,.38,.48,-.11,.38,0,-.08,-.08,.41,.06,.53,.08,.61,.53,-.29,-.53,.57,-.2,-.08,-.09,.64,.04,-.36,-.18,.06,-.53,-.11,.4,-.23,.28,.02,-.09,.14,.47,.25,-.4,.14,-.18,.21,.02,-.17,.13,-.25,.24,-.11,-.03,-.13,0,-.2,-.33,-.17,.33,-.03,.73,-.17,-.05,.22,-.01,.5,.23,.67,-.49,.54,.03,-.08,.47,-.04,.14,-.05,-.06,-.01,.36,.01,-.23,-.14,-.13,-.05,.42,-.3,-.09,0,.45,-.15,-.35,.42,.08,.02,.13,-.11,.02,.56,-.05,.45,-.28,.15,.01,.24,.06,.47,-.05,.56,-.06,.02,.17,.61,-.03,.57,.09,-.07,.34,.62,.06,.25,.3,.24,.45,.02,-.02,.06,-.04,.12,.07,-.08,.55,.22,.18,-.26,.36,.65,-.35,-.18,-.2,-.27,.33,.13,-.16,-.1,.13,.03,-.5,.74,.72,.31,-.01,-.41,.04,.03,-.11,-.06,-.39,.58,-.01,.36,.15,.08,-.08,.72,-.04,.5,-.1,-.06,.5,-.03,.17,.01,.06,.58,.36,.01,-.17,.2,.09,.16,.01,-.04,.74,.13,-.33,.03,.16,-.02,.01,-.08,-.09,.44,.53,0,.16,-.58,.05,-.07,-.04,-.1,.12,.02,-.09,.47,-.29,.29,-.52,.5,-.02,.01,.16,.08,.42,.27,-.2,-.08,-.23,.01,-.27,-.26,.4,-.25,.56,-.22,.44,-.05,-.37,-.12,.24,.3,.09,-.25,-.17,-.1,.05,-.17,.2,.32,-.1,.11,-.2,-.01,-.04,.54,.26,.31,.08,.06,-.02,-.01,.41,-.35,.45,.2,-.15,-.05,.24,-.18,-.08,.07,-.09,.33,.14,.43,-.03,-.12,.19,-.11,.03,.64,-.19,.46,.37,.07,.04,-.04,.09,.11,0,.46,-.04,.67,-.03,.22,.46,.37,.61,-.12,-.16,-.08,.01,-.03,.33,-.19,.27,.2,.22,.3,.35,-.37,.46,.18,-.04,.16,-.05,-.11,.07,-.02,-.1,-.07,.26,-.48,.27,.26,-.43,.32,.38,-.12,.26,.17,-.05,-.01,-.01,-.1,-.53,.73,.11,-.62,-.56,-.11,-.06,-.12,.04,.13,.47,0,0,-.16,-.11,.26,.19,.28,-.19,-.07,-.06,-.07,-.33,.22,-.35,-.06,-.36,.18,-.16,.06,.01,-.38,-.05,-.04,.21,.44,-.11,.27,-.02,.54,.19,.3,-.02,-.02,.21,.13,.11,-.04,.02,-.18,-.14,-.12,-.14,-.15,.2,-.23,-.02,-.35,0,-.06,-.02,.31,.09,.37,-.06,-.12,.22,-.14,-.05,.07,.03,.21,.15,.1,-.24,-.21,.09,-.07,.36,-.36,-.21,-.06,-.06,-.15,-.09,-.31,-.35,.05,.02,.14,.4,.28,-.06,-.07,-.11,.03,.2,.33,.33,-.15,.18,-.04,.08,.75,-.44,-.46,.41,-.15,-.07,.47,.05,-.05,-.23,.06,-.11,-.24,-.31,.13,-.04,.27,.03,0,-.1,.78,-.01,.48,-.1,-.35,.19,.14,.76,.02,.53,-.09,-.05,.16,.04,.03,0,0,-.41,.6,.11,.3,.03,.05,-.18,.2,.73,-.39,-.01,-.03,.03,-.25,-.08,.77,.02,.76,.28,.1,.36,.57,.06,-.14,-.12,.1,.74,.16,.46,-.07,.2,-.14,.22,-.04,.03,-.26,.33,.55,.64,-.07,-.13,.13,-.11,-.08,.41,.06,-.09,.11,.07,.08,.02,-.01,-.2,.08,.58,.45,.03,0,-.04,-.05,-.1,.17,-.09,.01,.05,.65,.16,.04,-.16,-.37,.64,.07,.33,.23,.02,-.14,.06,-.31,-.03,-.17,-.16,.13,-.2,.02,.57,-.11,.19,.22,-.12,.03,0,-.23,-.43,.77,-.15,.29,-.08,-.32,.06,0,.08,.71,.07,-.31,-.11,-.03,-.36,-.24,-.21,-.2,.09,-.02,.25,.22,.31,-.03,.7,-.49,-.05,-.02,-.06,-.19,-.05,.49,-.21,-.15,-.09,-.24,-.49,.31,.08,.38,-.13,.02,-.46,-.09,-.07,-.11,-.01,-.17,.31,-.14,.33,-.11,-.33,.03,-.06,-.34,-.19,-.36,.46,-.13,-.06,.42,-.29,-.18,.01,.72,-.1,.37,.22,-.11,-.03,-.09,.2,-.15,-.05,.05,.2,.12,-.07,.42,-.05,-.07,-.05,.02,-.24,-.08,-.41,-.29,-.26,-.62,.58,-.29,-.26,-.14,-.1,-.21,-.12,.5,.25,-.44,.37,0,-.24,.02,-.19,.44,.09,.26,.11,-.15,-.02,-.24,-.19,-.37,.62,-.04,.39,-.1,.03,.12,.4,-.37,-.11,-.29,-.16,.07,-.13,-.07,.37,-.16,.11,0,.23];export{a as rvalData};
