const a=[-.1,-.07,-.04,-.06,-.03,.01,-.06,.35,.05,.11,-.41,-.08,0,-.12,-.37,-.01,-.17,-.09,.02,-.13,.05,-.3,.13,-.54,-.17,-.02,-.41,.11,-.35,-.44,.08,-.35,-.08,-.08,-.31,-.03,-.18,-.29,.18,.05,-.17,-.04,-.16,.04,.21,-.21,-.23,-.38,-.7,.64,.11,-.05,-.02,-.04,.52,-.28,-.1,.1,.36,-.31,.25,.06,.17,-.02,-.51,-.43,.04,-.38,-.12,-.01,.09,-.21,.4,-.25,-.1,-.15,-.28,.27,.23,-.74,-.13,-.34,.11,-.09,-.06,-.44,-.17,-.04,-.02,0,.51,.1,.35,.31,-.14,.23,-.01,-.24,-.08,.29,.06,.12,.43,-.04,.52,-.02,-.25,-.19,-.18,.4,.02,.58,.22,-.02,-.04,-.11,-.28,-.42,-.36,-.1,.18,-.25,.01,.06,.09,.45,-.02,-.01,-.46,-.18,.49,.34,.11,.74,-.35,-.05,.61,.35,-.44,-.24,.13,-.17,.16,-.16,-.15,.16,-.01,-.05,.11,.02,.09,.3,-.02,-.11,.4,.47,-.23,-.15,-.22,-.38,.67,.45,0,.36,.28,.33,-.05,-.57,.36,-.16,-.11,-.51,.44,.42,.12,-.59,.04,-.48,.45,-.15,-.18,-.24,.15,-.03,.43,.24,-.04,0,.42,-.13,-.05,.38,0,.27,.24,-.07,.31,.23,-.12,-.34,-.15,.05,-.14,-.06,-.01,.28,.09,.72,.47,.19,.44,-.37,-.06,-.26,.08,-.11,.16,.29,-.64,-.24,.27,.45,.28,-.12,.18,-.17,.53,-.48,.39,.49,.19,.12,-.26,.07,.11,-.13,-.4,-.3,.26,-.18,.53,-.43,.34,.48,.18,.27,-.07,.26,-.19,-.06,.53,-.22,.54,.05,.09,-.06,.15,.09,.38,.02,-.02,.49,.21,.15,.06,.5,-.43,.06,-.03,-.23,-.22,.17,-.09,.16,.22,.11,-.52,.4,.01,-.68,.66,-.33,-.12,0,.56,-.04,-.37,-.25,.51,-.3,.34,.56,-.06,.23,.36,-.13,-.33,-.22,.27,.4,-.1,-.09,-.32,.17,-.04,-.11,.15,.47,.43,-.37,-.14,.04,-.04,-.2,.23,.41,.72,.5,.17,.44,0,.02,-.31,.05,.72,.58,-.07,.09,.09,.58,-.06,.15,-.17,-.01,-.25,-.12,-.62,.12,0,-.15,.32,-.15,.09,-.16,-.17,.07,.18,.57,-.09,.51,.24,.5,-.1,.55,-.05,-.13,.39,-.23,.19,.04,-.25,.08,.51,-.19,.03,-.06,.14,-.15,.21,-.04,-.54,.04,.03,.21,.15,.26,-.1,.06,-.21,.63,-.23,.01,-.18,.04,.14,.06,-.21,0,.05,.01,.19,.12,-.08,.19,.1,-.09,-.29,.01,.15,.11,-.12,.25,.17,.03,.57,-.07,-.37,.22,.29,.18,.15,-.09,.37,.2,.37,-.03,.15,-.24,.65,-.13,-.08,-.09,-.35,.11,-.18,-.19,-.07,.12,.38,.45,.37,.23,-.09,-.01,.71,-.08,.03,-.01,-.13,.2,.39,-.06,.05,-.3,.54,.28,-.16,-.03,-.09,-.27,.11,.52,-.01,.15,-.04,.06,-.52,-.13,.2,.08,.08,.05,-.04,.37,.21,.22,.03,0,-.12,-.04,-.21,-.21,-.14,-.19,.66,-.12,-.05,.22,-.04,-.39,.3,-.26,.16,.21,.58,.29,.51,.35,-.4,.17,-.02,-.06,.11,.34,.04,-.22,.86,-.02,-.01,.47,.44,.11,.32,-.13,-.01,.23,-.05,-.02,-.1,.34,.19,.31,.01,-.01,.57,-.59,.37,.53,.41,-.01,-.35,-.01,.13,.19,.01,-.14,.19,-.01,.11,-.01,.63,.85,.11,.57,-.13,-.02,.52,-.03,.2,-.06,.04,.54,.09,-.36,-.53,.02,.03,-.38,.3,-.13,-.38,-.17,-.04,.06,.08,.14,-.26,.27,-.22,.01,.29,-.37,.3,.34,.08,.21,.21,-.11,.46,-.04,.2,.05,-.02,.36,.07,-.12,-.03,-.09,.56,-.15,-.6,-.09,.29,.25,.59,-.42,-.14,.1,-.35,-.18,.13,0,.14,.2,.38,-.01,-.03,-.01,.12,.22,-.1,-.08,.05,.33,.01,-.4,.52,-.3,-.18,-.11,-.09,-.22,.27,.37,.22,.11,-.1,.27,-.09,-.15,.31,.14,.23,.1,.47,-.17,.02,.39,.24,.31,.09,-.22,-.02,.51,.14,.48,-.14,.59,.25,-.36,.36,-.26,-.29,.06,-.01,.18,.33,.04,.16,.61,-.19,-.09,.49,-.12,-.12,.01,-.11,-.25,.06,.03,-.09,-.12,-.06,.46,.09,.01,.03,.34,-.08,-.17,.09,-.16,0,-.4,.4,.58,.24,-.09,-.05,-.14,.09,.14,-.25,-.06,.2,.04,-.11,0,-.07,.33,-.04,-.11,.3,.1,-.03,.21,-.08,.24,.3,-.13,-.02,.25,.23,-.07,.02,-.17,-.17,-.1,-.05,-.4,-.02,.47,.34,.26,.18,-.05,-.02,.11,-.02,-.04,.28,.22,-.18,0,-.39,-.22,0,-.52,-.14,.19,-.24,.37,0,-.1,.4,.68,-.24,0,.08,.08,-.3,-.09,-.32,-.44,.11,-.06,.08,-.2,.3,.34,-.14,-.23,-.14,-.07,.14,.1,.07,-.46,-.15,-.06,-.29,-.43,-.18,.34,-.43,-.18,.16,.16,-.34,-.1,.33,.41,-.03,-.1,.65,-.2,.53,.26,-.04,.49,-.06,-.13,0,.09,.12,.41,.46,.29,.05,-.33,-.41,.31,.44,-.36,-.12,-.58,-.02,.06,-.23,.4,.02,-.05,.02,.09,-.15,.11,.06,-.06,.46,-.04,.02,-.03,.02,-.35,.18,.36,.06,-.72,-.25,-.17,-.18,-.23,.39,-.05,-.12,-.18,.03,.39,-.23,-.07,.16,-.13,.41,0,.06,-.21,-.1,.49,.04,-.44,.14,-.35,.07,.46,-.42,.19,-.23,-.33,.29,-.11,.07,-.56,.1,.05,-.18,.19,.43,.52,.37,-.32,.23,-.14,.05,-.05,.16,.53,-.23,-.08,.19,.45,.05,-.13,.02,.66,.22,.51,-.3,.3,-.11,-.15,-.36,-.12,-.06,.03,-.13,.23,.33,-.06,.12,.18,.05,.21,.04,.49,.09,.18,-.11,.07,.07,-.14,.04,.06,.09,-.14,-.2,-.16,-.27,.69,-.24,.66,-.11,-.44,-.6,.31,.28,.08,.03,.53,.5,.05,.21,-.1,.16,-.22,.13,0,.02,-.18,.2,.46,.4,.09,-.15,-.1,-.08,.07,.49,.04,.12,.03,-.27,.2,.36,-.06,.09,.13,.26,-.02,-.18,-.27,.32,-.08,.24,.08,.52,-.16,-.01,.14,-.02,-.01,-.2,-.01,.14,.13,.24,.01,.01,.39,-.1,-.02,-.14,.12,-.51,-.08,.04,-.12,.51,.65,.49,-.02,-.06,.44,-.4,.26,.3,.38,.52,-.11,-.16,.57,.38,.44,.7,.32,.17,.52,-.2,.2,-.03,.14,.03,.05,.1,.06,-.1,-.43,-.12,-.14,-.08,-.04,-.24,.29,.33,-.33,.18,.03,.08,.14,.22,-.08,.02,.17,0,.49,-.03,.3,.08,.02,-.2,-.19,.62,.01,-.07,.51,.18,.3,-.23,.27,-.14,-.05,.41,-.19,-.4,.06,.02,.66,-.06,-.05,-.14,.01,.49,-.01,.05,.54,-.07,-.05,-.06,-.02,.25,-.2,-.36,-.16,.16,-.33,.54,.34,-.62,.03,-.04,.07,.54,.26,.13,-.07,.01,-.01,-.09,.6,.01,-.13,-.19,-.36,-.16,.2,.33,-.41,-.02,.08,-.29,-.11,-.3,.05,.04,-.31,.13,.27,.39,.24,-.01,-.14,.35,-.21,.51,-.18,-.07,-.01,-.15,.09,0,.1,.03,.53,.48,.05,-.58,-.26,.06,-.31,.41,-.14,-.37,-.39,-.25,-.03,-.18,-.06,-.04,-.15,.46,-.05,.41,-.03,-.12,.02,-.11,.02,-.06,.32,-.14,.18,-.17,-.37,.07,-.16,.15,-.16,-.3,.08,.03,.01,-.04,-.06,.32,.15,.03,.59,-.19,.37,0,-.2,-.1,.14,-.02,.44,-.17,-.03,-.04,-.09,.29,.21,1,-.21,.08,.54,.46,-.12,-.22,-.24,-.06,.05,.5,.1,-.09,.7,.04,-.17,-.13,-.25,-.3,.07,-.18,.27,.11,.05,-.08,-.3,.11,.12,.24,-.41,-.56,.17,-.06,.03,.43,.33,.25,.05,.31,.53,-.02,-.31,.14,.53,.03,.48,-.36,-.02,.07,.19,-.09,-.1,.06,-.15,-.14,.43,.04,-.42,.29,.44,-.39,.71,.17,-.03,-.02,-.1,.09,-.09,.01,-.15,-.25,-.01,-.04,.09,-.16,-.06,-.21,-.06,-.05,-.08,.08,.17,.15,.44,-.2,-.09,.36,-.05,.31,.22,-.11,-.12,-.09,.55,-.1,.52,-.38,-.48,.33,-.15,-.04,.07,.23,-.66,.18,.36,-.29,-.13,.33,.11,.29,.04,-.08,.42,-.23,-.19,-.08,-.1,.02,-.01,.58,-.17,.08,.39,.57,.5,.15,.24,-.01,.55,-.2,.12,-.16,.07,-.2,-.25,.28,.36,-.17,-.09,.72,-.11,.03,.43,.22,.12,.43,.12,-.19,-.19,.19,.24,.07,.17,.62,.47,0,.02,.32,-.35,-.09,-.02,.67,.1,-.14,-.39,.43,-.19,.01,.16,.06,.15,-.16,-.41,.24,.12,-.21,.42,-.21,-.12,.51,.65,.41,.34,.24,.54,.6,.62,.41,.71,.32,.26,.15,.29,.41,.39,.28,.73,.02,-.13,-.1,.24,.5,-.07,.68,.2,.27,.49,.3,.33,-.18,.38,.42,-.12,.53,.14,.33,.04,.56,.28,.43,.38,.43,.57,-.2,-.38,.47,-.28,-.11,-.17,.63,-.13,-.4,.03,.3,-.37,-.11,.54,-.43,-.02,.2,.03,.04,.19,.08,-.28,.33,-.31,.23,-.15,-.4,.05,-.3,.18,-.33,-.01,0,.02,-.17,-.23,-.14,.25,.15,.5,-.01,-.16,-.04,-.14,.54,.15,.48,-.2,.49,-.01,-.2,.6,.06,-.11,-.04,.18,-.05,.22,-.1,-.09,-.02,.04,.11,.46,-.23,.1,.07,.52,-.18,-.46,.55,.29,-.01,-.09,.16,.34,.55,-.06,.37,-.27,.36,.14,.38,.36,.55,.09,.38,.37,.03,.26,.7,.2,.55,.16,0,.45,.64,.13,.45,.65,.12,.13,-.06,-.03,.02,.04,-.04,-.06,-.02,.44,-.17,.48,-.15,.32,.41,-.42,-.01,-.29,-.45,.62,.29,-.2,.02,.11,.27,-.23,.53,.5,.42,.25,-.11,-.09,.09,-.32,-.03,-.59,.21,.13,.69,.11,.35,-.04,.57,.05,.39,-.09,.06,.63,.22,.36,.18,-.03,.53,.5,.02,-.2,.11,-.18,.25,.37,-.21,.48,.12,-.23,.18,.2,-.02,-.13,.26,.06,.38,.6,.1,.53,-.42,-.18,.06,.17,.04,.11,-.15,-.09,.8,-.48,.57,-.33,.53,.05,.22,.21,.43,.37,.49,-.38,.08,-.16,.08,-.42,-.33,.64,-.11,.52,-.18,.67,.16,-.3,-.22,.07,.14,.38,-.03,-.01,.09,-.19,-.03,.23,.35,.05,.18,-.04,.03,.15,.51,.25,.7,.25,.02,.14,.11,.49,-.19,.89,-.11,-.04,.21,.22,-.04,.03,.28,0,.62,-.08,.79,.21,0,.23,.01,0,.3,-.23,.42,.66,.26,-.05,-.15,.05,.5,.04,-.08,.29,.32,-.06,.64,.4,.3,.86,.27,-.19,-.11,.21,.05,.48,.04,.57,.49,.68,.18,.38,-.27,.38,.28,.1,.39,.19,.04,.29,.02,.01,-.18,.24,-.44,.65,.3,-.47,.35,.38,-.12,.65,.14,-.21,.13,.06,-.04,-.37,.65,.13,-.52,-.3,-.01,.01,-.17,-.22,.01,-.01,-.09,-.05,-.29,-.08,.6,.55,.77,-.16,.06,-.07,-.23,-.25,.47,-.59,.12,-.33,.21,-.09,.05,-.14,-.09,-.04,-.21,.25,.43,.12,.24,.12,.6,.29,.64,.03,-.12,.22,.01,0,.2,-.19,-.01,-.1,-.07,-.06,.05,.49,.01,.15,-.35,-.01,.11,-.19,.16,.12,.21,-.22,-.21,.14,0,-.04,.14,-.19,.45,.45,.18,-.19,-.14,-.16,.12,.3,-.34,-.46,.04,-.02,-.13,-.09,-.36,-.29,.32,-.13,.34,.65,.1,-.22,-.01,-.07,.18,.3,.66,.23,-.11,.48,.05,.16,.47,-.59,-.21,.21,-.13,-.07,.54,.06,.09,-.18,.06,.08,-.14,-.24,.21,-.11,.44,-.08,-.06,.03,.59,0,.29,-.01,-.25,.33,.32,.54,-.09,.43,.06,.24,.09,-.09,.06,-.16,-.07,-.3,.45,.22,.34,.01,.14,-.26,.17,.59,-.19,-.18,-.02,-.21,-.13,.14,.61,.15,.52,-.11,.07,.34,.38,-.02,.03,-.07,.11,.74,.44,.4,.18,.25,-.05,-.17,0,-.24,-.17,.54,.5,.62,-.11,-.12,.07,-.11,.07,.39,.02,-.08,.29,.29,-.05,.29,-.05,-.35,-.02,.61,.22,-.06,.04,.04,-.01,-.05,.24,.13,.07,-.03,.37,-.04,.07,-.04,-.53,.51,.38,.48,.24,.15,-.24,-.07,-.47,-.1,-.2,-.09,.33,.1,-.04,.5,.19,.37,.04,-.16,0,.13,-.26,-.2,.5,.02,.06,.01,.12,-.03,-.21,-.02,.48,.04,-.19,-.12,.2,-.54,.06,-.05,-.18,.01,-.06,.28,.32,.4,-.05,.55,-.45,.13,0,-.07,-.05,-.09,.44,-.24,.02,.23,-.16,-.33,.28,.04,.29,-.36,-.2,-.35,.02,-.04,-.08,-.04,-.1,.51,-.07,.43,.31,-.42,.35,.02,-.1,.07,-.33,.26,.05,-.05,.37,-.05,-.3,.11,.54,-.11,.29,.29,.01,-.06,-.1,.12,-.14,-.18,.21,.22,.19,-.05,.25,-.04,.13,-.16,.28,-.17,-.05,-.18,-.62,-.18,-.55,.4,-.21,-.22,-.1,-.11,-.06,-.02,.56,.25,-.05,.2,0,-.16,-.11,-.15,.34,.1,.28,.12,-.05,.1,-.35,-.05,-.51,.58,-.01,.4,-.15,.14,.2,-.04,-.46,0,-.19,-.36,-.19,.15,.17,.35,-.17,-.06,.03,.44];export{a as rvalData};
