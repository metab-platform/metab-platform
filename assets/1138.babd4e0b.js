const a=[.02,-.24,-.17,.06,-.13,.28,-.01,.51,-.08,.1,-.42,-.08,.12,.05,-.48,.1,-.28,.1,-.03,.08,.07,-.16,.17,-.59,-.27,-.04,-.41,0,.42,-.56,.07,-.26,-.13,.12,-.39,.09,-.43,-.62,-.03,-.26,-.11,-.08,.07,-.01,.01,-.62,-.33,-.07,-.24,.35,-.05,.07,-.27,-.23,.41,-.46,-.18,.26,.28,-.17,.24,-.09,.04,.1,.03,-.31,-.04,-.62,-.07,.03,.05,-.28,.46,.07,-.15,-.12,-.28,.29,-.35,-.16,-.06,-.14,-.05,-.01,-.02,-.15,-.01,0,.16,-.33,.52,.11,.36,.23,-.24,.42,-.01,-.28,.28,.41,-.02,-.05,.22,-.03,.31,-.05,-.25,-.26,-.12,.13,-.15,.25,-.03,.11,.04,-.25,-.01,-.25,.12,-.16,.04,-.04,-.04,.22,.39,.27,-.13,.42,-.35,-.38,.63,.32,.05,.26,-.27,.15,.46,.24,-.43,.1,.08,.08,.24,-.01,.08,.07,.07,.57,.15,.1,-.07,.17,.02,-.22,.57,.61,.24,-.19,-.19,-.56,.6,.29,.09,.32,.41,.38,-.18,-.36,.52,-.11,.01,-.15,.63,.47,.31,-.28,.09,-.49,.51,-.23,-.16,.02,.11,-.41,.36,.29,-.27,-.07,.52,.02,.06,.46,-.01,.25,.14,-.21,.23,.08,-.11,-.12,-.35,-.05,-.34,-.1,.05,.26,.35,.6,.35,.18,.59,-.53,-.11,-.45,.23,.19,.04,.53,-.37,-.41,.39,.31,.11,-.21,.29,-.34,.61,-.34,.22,.37,-.01,.16,-.37,-.2,-.02,.02,-.45,-.51,.25,-.07,.28,-.59,.47,.61,.4,.29,-.09,-.06,.07,.02,.33,.13,.42,.31,.09,-.02,.15,-.05,.11,-.33,-.22,.51,.12,.09,.57,.31,-.16,.08,-.21,-.14,-.24,-.23,-.35,-.21,-.19,.03,-.45,.35,-.12,-.21,.56,-.53,-.39,.12,.55,-.02,-.54,-.44,.38,-.09,.37,.47,-.07,.2,.39,.14,-.4,-.09,.04,.47,.06,-.21,-.31,-.06,-.12,.25,.23,.1,.72,-.45,.01,.07,.02,.08,.24,.47,.35,.55,-.17,.06,.08,-.07,-.52,-.05,.36,.58,-.02,.5,.28,.57,.09,.23,.18,-.08,-.22,-.26,-.21,.42,.16,-.11,.33,.08,.05,-.06,-.46,-.21,.09,.61,.06,.38,.22,.51,-.06,.58,-.19,-.4,.15,-.11,-.1,-.3,-.18,.07,.64,-.18,.07,.12,.2,-.33,.32,-.08,-.08,-.04,-.12,.54,.25,.35,.11,.15,-.18,.58,-.11,.04,-.1,.04,-.03,.13,-.09,-.04,-.09,-.11,-.13,.17,-.17,.18,.11,-.19,-.28,.02,.54,.38,.01,.51,-.14,.03,.43,-.01,-.48,-.09,.14,.25,-.2,.07,.37,-.13,.21,-.22,.12,-.05,.55,.2,.1,-.31,-.18,.04,.11,-.29,-.28,-.06,.59,.38,.49,.51,-.13,.02,.64,-.37,.14,.05,-.16,.15,.25,-.03,.15,-.11,0,.32,-.27,.05,.03,-.23,-.03,.29,.12,.38,-.14,.54,-.28,-.36,.51,.05,-.1,.06,.07,.44,.15,.1,.07,.09,-.05,-.26,-.33,-.42,-.16,-.21,.66,-.09,-.11,-.03,-.25,-.46,.21,-.49,.04,.35,-.04,.44,.47,.55,.11,-.18,-.2,-.08,.21,.4,-.07,-.21,.38,-.2,0,.49,.56,.54,-.08,-.13,-.09,.23,.53,-.05,-.23,.34,.08,.39,.02,.33,-.11,0,.29,.35,.46,.08,-.08,-.11,.23,.16,.16,-.03,-.04,-.03,-.02,.04,.52,.4,.1,.42,.01,.14,.5,.09,.83,-.08,.04,.54,.11,-.39,-.21,.08,.27,-.41,-.26,.4,-.55,-.34,-.22,-.38,.03,.05,-.13,.47,-.13,.01,-.26,-.2,.47,.49,-.09,-.02,.07,-.2,.34,.02,-.08,-.19,-.18,.2,.01,-.25,.02,.05,.38,-.04,-.24,-.1,.3,.49,.3,-.51,-.24,.07,-.14,-.45,.01,.05,.03,-.07,.52,.1,.04,-.2,.33,.08,-.02,-.2,-.07,.14,.05,-.43,.5,.06,-.13,.4,.03,-.48,.25,.45,.15,-.09,-.18,.3,-.2,-.11,.42,.3,.43,-.1,.61,-.18,.07,.45,.24,.33,.07,-.3,-.08,.42,.08,.06,-.09,.4,.24,-.23,.24,-.08,-.21,-.07,-.02,.08,.83,0,.1,.32,-.12,-.01,.53,-.18,-.09,-.01,-.6,-.25,.17,-.09,-.2,.14,-.26,.48,-.16,-.1,-.14,.5,.1,-.04,0,.06,-.2,-.51,.25,.51,.04,-.2,.11,.13,-.02,.74,-.21,-.06,.58,.01,-.09,-.03,-.04,.45,.07,.22,.72,.09,.15,.25,-.15,-.08,-.15,.1,.03,.44,.34,-.13,.13,-.17,-.02,.01,-.04,-.38,-.06,.35,.16,.16,.07,.08,.24,.07,-.06,.04,.39,.13,-.45,-.01,-.11,-.06,-.07,-.25,-.17,.08,-.06,.14,-.1,-.11,.3,.57,-.46,.13,-.07,.04,-.46,-.02,-.1,-.41,-.03,.04,.01,-.52,.31,.43,-.18,0,-.04,.32,-.33,.07,.17,-.23,.05,-.09,-.02,-.37,-.05,.23,-.15,-.3,.02,.16,-.14,.15,.81,.68,-.11,.01,.67,-.05,.29,.28,-.19,.49,-.16,-.06,-.14,.07,-.19,.3,.46,.29,.24,-.34,-.07,.53,.24,-.7,-.07,-.33,-.24,.15,.19,.34,.18,-.04,-.06,.04,-.34,.29,-.01,-.06,.45,-.09,.04,.18,-.11,.08,.15,.49,.07,-.29,-.22,-.15,-.3,-.01,.52,-.19,-.05,-.38,-.22,.16,-.16,.05,.48,-.34,.39,.06,.13,-.25,-.1,.26,-.11,-.26,.17,-.21,.2,.54,-.43,-.07,-.34,-.31,.34,-.2,.16,-.31,.08,.08,-.16,.19,.49,.5,.42,-.12,.23,-.26,.19,.05,.74,.66,-.12,.04,.41,.48,.33,-.09,.07,.65,.71,.48,.31,.3,-.17,.07,-.42,-.21,0,-.07,-.46,.08,.6,.34,.12,.41,-.07,.34,.08,.47,.08,-.04,-.07,.11,-.06,-.18,.16,-.17,-.04,-.09,.03,-.1,-.06,.6,-.09,.59,.11,-.42,-.27,.48,.03,.39,.08,.44,.59,.02,.7,0,.15,-.13,.12,-.11,.05,-.3,.06,.47,.47,-.33,-.29,-.05,.02,.18,.41,.07,-.02,-.05,-.3,.3,.47,-.04,.41,.03,.29,-.25,-.18,-.22,.4,.03,.49,.22,.53,-.17,-.03,.46,.01,.24,-.1,0,.34,.09,.23,0,.06,.25,.17,-.01,-.17,.46,-.59,.01,.15,-.26,.47,.58,.48,.01,-.13,.64,-.28,.46,.24,.47,.42,-.08,-.15,.38,.19,.46,.57,.39,-.06,.77,-.11,.08,.13,.11,-.03,.02,-.03,.01,-.09,-.48,-.18,-.14,-.07,0,-.33,.34,.49,-.47,.55,.17,.03,.22,.75,-.1,.03,.07,-.1,.41,-.07,.59,-.11,.08,-.15,-.07,.49,-.03,.06,.52,.18,.21,-.35,.38,-.18,-.11,.35,-.28,-.39,.02,-.12,.67,-.04,0,-.02,.03,.33,-.05,.05,.28,.06,-.07,.02,.18,.7,-.08,-.53,-.1,.13,-.22,.39,.35,-.33,-.14,-.26,-.02,.42,.28,.4,-.32,.17,.08,-.46,.34,.27,-.25,.01,-.04,-.1,0,.32,-.21,-.05,.15,-.13,.09,.22,.39,-.09,-.01,-.25,.32,.52,.51,0,.05,.43,-.05,.48,-.08,-.08,.04,-.16,.11,.05,.18,.01,.57,.39,-.04,-.03,-.14,.1,-.3,.35,-.11,-.01,-.62,-.27,-.18,-.11,-.08,-.02,-.57,.47,-.11,.45,-.03,-.25,.06,-.14,-.1,-.01,1,.13,.58,-.01,-.3,-.03,.14,.12,.08,-.12,-.54,-.09,-.11,.03,.33,.32,.17,-.09,.66,.07,.42,.05,.02,-.1,.1,.11,.47,-.11,.07,-.12,-.18,.07,.03,.32,-.2,.13,.54,.28,-.12,-.51,-.18,-.11,-.07,.55,.06,-.07,.45,0,-.08,-.29,-.48,.15,-.32,.33,.34,.42,.2,-.08,-.2,.08,.06,.13,.01,-.23,.15,-.05,-.12,.57,.24,.54,-.18,-.17,.62,-.13,-.32,-.07,.29,-.26,.59,-.06,.04,-.09,.34,.3,-.02,-.14,.09,.07,.42,.18,-.52,.61,.45,-.37,.45,-.01,.09,-.09,-.04,0,.06,-.04,.09,-.46,-.1,-.21,.12,.07,.06,-.21,.14,.07,.03,.05,.1,.26,.44,-.13,.03,.49,-.03,.42,.19,0,-.1,.05,.46,-.23,.36,-.41,-.35,.42,-.15,-.25,.06,.08,-.45,.34,.43,.2,-.05,.27,.04,.42,.22,-.24,.6,.06,-.06,-.19,-.27,-.12,-.12,.28,-.08,-.02,.29,.59,.64,.25,.12,.09,.25,-.09,.22,-.04,.07,-.22,-.58,.33,.9,-.34,-.19,.25,-.25,.25,.31,.42,.02,.3,-.13,-.38,.11,.2,.54,.13,.08,.51,.58,-.29,-.07,-.12,-.46,-.11,-.16,.56,.16,.37,-.07,.64,-.1,-.03,0,.09,.2,-.05,-.42,.09,.15,-.28,.44,-.14,.12,.39,.42,.1,-.1,.37,.28,.25,.43,.4,.38,.11,.08,.2,.3,.38,.31,-.01,.58,-.06,-.2,.03,.2,.22,-.21,.44,.13,.38,.43,.16,.31,-.13,.33,.42,-.15,.34,-.08,-.11,-.09,.33,.01,.29,.15,.54,.53,-.39,-.37,.51,-.12,-.14,-.03,.54,.02,-.49,-.28,.04,-.63,.2,.36,-.19,.12,-.07,-.17,.13,.59,.11,-.52,.19,-.18,-.02,.12,-.07,-.01,-.08,.33,-.25,-.15,-.19,-.11,-.19,-.3,-.13,.3,-.01,.48,-.15,0,.1,-.09,.3,.13,.47,-.51,.42,0,-.05,.4,0,.17,-.05,0,-.03,.16,-.14,-.16,-.2,-.13,-.02,.49,-.14,-.01,-.13,.46,-.09,-.2,.4,.03,.06,.01,-.15,0,.62,-.13,.33,-.15,.07,-.14,.25,.13,.4,-.01,.71,-.05,.11,.13,.4,-.03,.57,.14,-.13,.4,.53,.03,.48,.21,.25,.29,-.09,.04,.05,-.02,.13,.2,-.17,.58,.18,.25,-.27,.51,.41,-.21,-.23,0,-.23,.35,.2,-.06,-.11,.17,-.11,-.43,.5,.51,.37,0,-.34,.03,-.04,.02,-.08,-.27,.71,.05,.39,.3,.07,-.12,.49,-.03,.53,-.16,-.09,.49,-.14,.13,-.1,.23,.6,.32,.07,-.24,.24,.34,.21,-.14,.02,.49,.19,-.4,.04,.09,-.17,-.13,-.16,.04,.4,.48,-.01,-.08,-.61,.06,-.09,-.14,.02,.15,.06,-.09,.45,-.24,.28,-.61,.35,-.11,-.07,.1,-.01,.4,.28,-.31,-.18,-.27,-.1,-.09,-.31,.35,-.02,.49,-.25,.38,-.14,-.35,-.04,.24,.32,.25,-.28,-.26,-.12,.21,-.24,.37,.37,-.22,.09,-.01,.11,.17,.46,.33,.33,.1,-.15,.01,.03,.32,-.09,.35,.11,-.18,-.06,.33,-.22,.1,-.03,-.14,.38,.08,.27,-.07,-.03,.24,-.03,.03,.74,-.07,.29,.29,-.05,.01,0,.17,-.02,.08,.51,-.26,.72,-.02,.15,.47,.39,.52,-.08,-.2,-.18,-.08,-.12,.05,-.33,.37,.19,.15,.29,.39,-.1,.32,.24,-.02,.09,-.03,-.26,.12,-.07,-.04,.05,.29,-.39,.14,.03,-.51,.3,.52,-.11,.1,.33,-.21,-.08,-.07,-.18,-.6,.65,.12,-.55,-.6,-.08,.06,-.13,0,.18,.56,.11,-.09,-.02,-.11,.03,-.04,.2,-.22,-.17,-.24,-.01,-.37,.05,-.27,.12,-.29,.11,-.14,.01,-.05,-.21,-.12,-.05,.35,.39,-.25,.05,-.06,.5,.25,.22,0,.01,.15,.12,.08,-.09,.01,-.28,-.1,-.15,-.23,-.01,.11,-.23,.01,-.51,-.11,-.12,.16,.22,.04,.46,.1,-.12,.31,-.06,.07,-.05,-.16,.19,.09,.06,-.25,-.28,.23,-.21,.42,-.44,-.19,-.11,-.01,-.24,-.12,-.17,-.48,.02,.24,.09,.37,.17,.19,-.06,-.16,.02,.22,.27,.3,-.11,.12,-.08,-.08,.52,-.41,-.32,.4,-.14,.2,.38,0,.11,-.31,.03,-.22,-.31,-.34,.07,-.07,.18,.05,-.04,-.13,.61,-.03,.59,-.08,-.38,.22,.29,.57,.16,.4,-.15,-.08,.02,-.03,.1,.09,.06,-.43,.44,.11,.28,.05,.01,-.23,.18,.56,-.17,-.05,.07,.12,-.36,-.01,.63,-.01,.55,.36,.05,.31,.5,-.12,-.18,-.06,.23,.54,.14,.5,-.11,.21,-.2,.4,.05,.01,-.35,.35,.6,.64,-.06,-.16,.22,-.22,-.14,.41,.13,-.16,.12,.11,.08,-.14,-.09,-.21,.07,.62,.27,-.01,-.12,-.04,.06,-.15,.15,-.21,-.1,.18,.37,.28,-.03,-.19,-.44,.52,.23,.34,.25,-.03,-.03,-.04,-.23,0,-.16,-.25,.12,-.23,-.02,.68,-.04,.16,.34,-.24,.1,-.04,-.24,-.46,.55,-.06,.16,.1,-.29,.23,.07,.02,.51,.29,-.41,-.15,-.16,-.33,-.36,-.39,-.19,.14,-.02,.26,.23,.17,-.07,.61,-.36,-.15,-.06,-.09,-.24,-.02,.38,-.23,.02,-.2,-.24,-.39,.42,.02,.48,-.1,-.09,-.35,-.06,.02,-.15,-.13,-.22,.16,-.23,.38,-.16,-.33,.05,.06,-.31,-.06,-.34,.26,-.33,.09,.57,-.42,-.05,-.08,.46,-.1,.3,.09,-.02,-.01,-.08,.12,-.21,-.2,.06,.14,.09,-.19,.51,-.02,-.22,-.01,0,-.35,-.11,-.55,-.27,-.36,-.52,.48,-.27,-.29,-.16,-.09,-.24,-.14,.43,.16,-.48,.33,-.01,-.24,.08,-.27,.31,-.05,.2,.04,-.19,-.06,-.1,.01,-.29,.42,-.11,.27,-.02,-.08,.17,.61,-.47,0,-.31,-.09,-.11,.08,-.16,.35,-.13,.11,-.05,.16];export{a as rvalData};
