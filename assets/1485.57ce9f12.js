const a=[.11,-.1,-.26,-.05,-.23,.23,0,.55,.2,-.02,-.27,.02,-.08,.07,-.36,-.01,-.16,-.09,.06,.06,-.04,-.27,.1,-.46,-.13,-.06,-.33,.31,-.15,-.39,.05,-.14,-.12,-.22,-.24,.04,-.28,-.27,.13,-.04,-.13,-.16,-.09,.11,.05,-.13,-.27,0,-.39,.48,.07,.1,-.02,-.17,.57,-.22,.05,.19,.18,-.41,.31,-.05,.03,-.01,-.28,-.34,-.03,-.37,.06,-.05,.11,-.31,.42,-.22,-.29,-.21,-.16,.3,-.08,-.35,.04,-.4,.02,-.12,.04,-.28,-.09,.01,.17,-.13,.53,.11,.54,.37,-.07,.35,.11,-.17,.12,.31,-.08,.01,.36,-.1,.43,.06,-.24,-.2,-.02,.23,-.07,.54,.22,.1,.23,-.24,-.31,-.28,0,-.04,.07,-.22,-.02,.13,.24,.32,-.17,.11,-.4,-.28,.76,.73,.08,.63,-.36,.05,.73,.24,-.25,-.21,.05,-.18,.12,-.07,.01,.24,.02,.2,.18,.13,-.04,.42,-.03,-.01,.69,.57,-.08,0,-.06,-.35,.7,.26,-.06,.24,.43,.26,-.18,-.31,.42,-.23,.06,-.37,.63,.53,.11,-.32,.04,-.39,.37,-.22,-.13,-.12,.08,-.34,.39,.2,-.04,.1,.33,.03,.01,.51,-.03,.29,.17,-.12,.16,.12,-.04,-.13,-.23,.18,-.25,.02,.15,.28,.19,.63,.58,.12,.63,-.37,.05,-.28,.16,-.12,.15,.55,-.4,-.09,.33,.36,.15,-.2,.23,-.27,.72,-.24,.52,.37,.15,.04,-.18,-.19,-.09,.01,-.38,-.28,.29,-.03,.45,-.46,.69,.65,.45,.52,-.04,.18,-.21,-.06,.44,-.1,.56,.21,-.01,-.05,.04,0,.24,-.33,-.03,.5,.22,.04,.19,.4,-.34,.05,-.08,-.21,-.01,.1,-.18,-.11,-.02,0,-.4,.41,-.18,-.39,.68,-.25,-.24,.16,.71,.12,-.35,-.28,.4,-.05,.49,.48,-.04,.46,.47,-.1,-.13,-.01,.21,.36,.08,-.27,-.17,-.02,.03,-.04,.34,.35,.44,-.28,-.24,-.06,-.06,-.04,.27,.38,.53,.52,-.12,.17,-.05,.22,-.3,-.03,.63,.67,.03,.09,.22,.67,.09,.22,.09,-.09,-.22,-.18,-.49,.28,.25,.03,.41,-.21,.12,0,-.28,-.13,.07,.63,-.05,.65,.16,.6,.07,.68,.08,-.19,.28,-.2,-.06,-.32,-.18,-.09,.64,-.15,.2,.07,.22,-.26,.2,-.13,-.38,-.11,.09,.38,.16,.4,-.09,-.01,-.07,.62,.04,.14,-.03,-.06,.18,.16,-.17,.06,.04,-.03,0,-.08,-.12,.19,.15,-.26,-.21,-.1,.09,.22,-.07,.48,-.03,.12,.4,-.07,-.36,.02,.17,.18,-.1,.08,.34,0,.52,.02,.03,-.26,.68,.02,.1,-.17,-.23,-.02,-.28,-.31,-.18,.01,.38,.65,.68,.37,-.04,.03,.69,-.34,.2,0,-.23,.17,.29,-.1,.05,-.14,.29,.37,-.29,.05,-.01,-.12,.32,.38,.09,.37,-.03,.15,-.31,-.23,.39,-.08,-.19,.1,.08,.35,.23,.4,.06,.01,0,-.18,-.22,-.32,-.12,-.16,.68,-.02,.03,.26,-.11,-.26,.26,-.35,-.02,.35,.25,.42,.44,.41,-.26,-.13,.03,.04,.32,.39,-.13,-.29,.63,-.11,-.16,.72,.67,.08,.13,-.13,-.14,.25,.16,.12,-.12,.32,.1,.49,-.03,.06,.31,-.42,.37,.8,.44,-.1,-.3,-.18,.38,.09,-.09,.03,.27,-.04,.05,.18,.77,.63,.12,.7,.1,.14,.54,.18,.37,.05,-.02,.53,.02,-.24,-.18,.16,.29,-.25,0,.04,-.39,-.27,-.19,-.2,-.1,.1,-.19,.49,-.16,.14,-.07,-.32,.33,.55,-.01,.04,.11,-.16,.47,-.08,-.03,-.22,-.02,.52,-.14,-.31,-.11,.21,.39,-.22,-.24,.1,.16,.42,.48,-.44,-.27,-.09,-.23,-.29,-.02,.04,.1,0,.56,.11,-.02,-.32,.22,.41,-.2,-.29,-.21,.42,-.19,-.36,.69,.01,-.07,-.02,-.06,-.27,.26,.52,.13,.2,-.25,.51,-.26,.04,.41,.27,.39,.15,.64,-.01,.03,.41,.12,.51,-.05,-.08,.14,.41,.27,.41,-.01,.74,.46,-.22,.28,-.25,-.11,.29,-.12,.12,.48,-.06,.05,.5,-.11,.03,.73,-.21,-.01,.08,-.31,-.18,-.05,.01,-.26,-.11,-.15,.52,.06,.09,.06,.48,-.02,-.22,.14,-.04,-.02,-.34,.38,.71,.1,-.29,.07,-.07,.13,.34,-.35,-.08,.41,.16,.04,-.07,-.02,.58,-.02,.04,.41,-.02,-.05,.36,-.04,.09,.07,.13,-.07,.49,.32,-.21,.16,-.21,-.14,-.18,.08,-.34,-.05,.61,.29,.51,.16,-.15,.23,.2,-.04,-.04,.56,.18,-.26,.02,-.38,-.32,.17,-.44,.02,-.02,-.02,.49,-.04,-.01,.49,.78,-.31,-.07,.29,.05,-.22,-.02,-.11,-.35,.01,.12,.12,-.29,.45,.22,.03,.06,-.05,.1,-.11,.12,.23,-.47,.02,-.12,-.39,-.24,-.06,.19,-.4,-.31,.09,.11,-.18,.01,.47,.47,-.2,.04,.66,-.07,.52,.51,-.14,.49,-.26,.14,.06,.03,-.11,.31,.49,.34,.23,-.26,-.24,.51,.29,-.33,-.13,-.39,-.19,.04,.08,.28,.23,-.04,.02,-.05,-.19,.19,.3,0,.48,-.04,.15,.05,-.02,-.18,.17,.59,.04,-.47,-.21,-.25,-.12,-.04,.58,-.21,-.2,-.29,.07,.45,-.18,-.11,.23,-.25,.41,.13,.11,-.15,-.14,.52,-.01,-.17,.23,-.38,-.04,.67,-.31,-.09,-.23,-.19,.36,-.16,.16,-.37,.16,.15,.08,.23,.5,.52,.57,.05,.26,-.27,.16,.05,.35,.61,-.14,.09,.43,.74,.31,-.03,-.03,.69,.35,.5,-.09,.33,-.02,.02,-.3,.01,.06,-.11,-.29,.2,.46,.15,.03,.46,-.05,.21,.15,.51,.05,.04,-.01,-.06,-.02,-.2,.27,.07,.12,-.16,-.04,-.03,-.16,.82,-.2,.71,-.1,-.33,-.4,.29,.06,.28,.09,.72,.76,-.05,.38,-.01,.31,-.22,.02,-.25,.14,-.35,-.02,.48,.55,-.15,-.23,-.2,-.19,.16,.47,0,.06,-.12,-.2,.36,.38,-.09,.36,.33,.51,-.08,-.05,-.26,.64,0,.44,.28,.72,-.29,-.13,.12,-.13,.21,-.04,-.08,.41,.18,.11,.02,.05,.44,.06,.12,-.28,.31,-.53,.11,-.01,-.14,.57,.66,.46,.15,-.19,.7,-.23,.54,.53,.66,.66,-.02,-.01,.47,.35,.67,.82,.54,-.02,.52,-.28,.25,-.14,.07,.15,.02,-.08,.03,-.09,-.39,-.04,-.17,-.06,.06,-.08,.26,.47,-.25,.35,.07,.28,.38,.42,-.12,-.11,.31,-.05,.51,.02,.36,.03,-.07,-.08,-.15,.72,-.07,.09,.65,.09,.38,-.24,.38,-.02,-.03,.66,-.32,-.4,.04,.04,.68,.01,.1,-.08,-.05,.49,.08,-.02,.67,-.03,0,-.02,.27,.33,-.06,-.29,.03,.12,-.29,.29,.34,-.36,.17,-.23,-.03,.57,.28,.25,-.29,.1,.27,-.27,.84,.06,-.3,-.06,-.1,-.11,.06,.38,-.38,-.05,.15,-.25,-.02,-.18,.26,-.09,-.12,-.19,.13,.59,.44,0,-.07,.58,-.25,.59,-.18,-.25,.1,-.15,.16,.1,.2,-.08,.49,.4,0,-.37,-.2,.16,-.3,.4,-.22,-.33,-.46,-.16,-.08,-.05,.06,.03,-.29,.48,-.02,.5,-.01,-.27,.04,.03,-.23,-.01,.4,.03,.27,-.16,-.22,-.05,-.28,.07,.01,-.24,-.09,-.11,.13,-.07,.04,.31,.02,0,.6,-.03,.5,.09,-.05,-.08,-.02,.11,.38,-.02,-.03,-.15,-.15,.04,.29,.7,-.1,.14,.67,.35,-.23,-.33,-.05,-.19,-.08,.72,.2,-.01,.66,-.01,-.12,-.28,-.32,-.18,-.19,-.02,.46,.43,.11,-.13,-.07,.14,-.05,.14,-.41,-.21,.26,.05,-.1,.59,.23,.44,-.19,-.07,.71,-.17,-.31,-.07,.59,-.04,.44,-.2,-.07,-.24,.27,.15,-.19,.15,.01,-.02,.47,.04,-.34,.3,.43,-.38,.55,.04,.03,-.3,.03,-.08,-.06,.06,-.02,-.33,-.1,-.21,.12,0,-.08,-.15,-.01,.13,.09,.02,.25,.23,.49,-.08,.03,.32,-.02,.67,.11,.12,-.24,-.03,.73,-.2,.4,-.36,-.27,.48,-.02,-.19,.08,.18,-.57,.11,.6,-.14,.12,.57,-.05,.28,.24,.06,.49,-.06,-.02,-.24,-.14,-.03,.06,.31,-.15,-.02,.33,.61,.44,.31,.03,-.12,.26,-.06,.24,-.06,.15,-.18,-.36,.24,.46,-.26,-.15,.49,-.24,.26,.27,.4,.33,.39,.22,-.28,-.19,.28,.41,.01,.33,.61,.41,-.34,-.12,.11,-.3,-.04,-.04,.65,.2,-.02,-.29,.73,-.05,-.07,.17,.33,.03,-.22,-.27,.29,.08,-.2,.38,-.04,-.06,.43,.75,.36,.38,.22,.74,.58,.69,.49,.87,.35,.23,.05,.72,.65,.82,.29,.74,-.05,-.15,.09,.55,.57,-.23,.61,.54,.66,.7,.35,.65,-.24,.71,.77,-.06,.68,.13,.17,-.04,.56,.26,.64,.43,.64,.53,-.28,-.31,.71,-.18,-.26,-.17,.72,-.16,-.49,-.19,.36,-.36,.01,.48,-.46,.18,.12,-.1,.2,.45,.1,-.33,.18,-.23,.46,-.16,-.02,.15,-.19,.21,-.09,0,-.04,-.05,-.05,-.22,-.04,.29,.02,.47,-.23,-.07,.08,.07,.6,.13,.43,-.29,.71,-.12,-.09,.88,-.07,-.01,.08,.34,.1,.49,-.01,-.04,-.2,.05,.13,.43,-.08,-.05,.01,.3,-.01,-.3,.61,.25,-.03,0,.08,.41,.52,.03,.71,-.28,.16,.15,.31,.4,.59,-.01,.6,.28,-.06,.29,1,.29,.57,.42,.08,.38,.86,.01,.34,.48,.15,.12,-.08,.13,0,.03,.15,.1,-.22,.49,.09,.5,-.28,.39,.33,-.24,0,-.32,-.41,.53,.08,-.24,-.21,.14,.21,-.21,.48,.51,.4,.11,-.17,-.11,-.04,-.13,-.07,-.48,.31,.14,.63,.24,.17,-.06,.54,.09,.36,-.23,0,.53,-.05,.19,.11,.16,.42,.43,.01,-.31,.07,.1,.16,.08,-.18,.49,.12,-.38,.14,.05,-.08,-.1,-.05,-.12,.44,.65,.04,.28,-.44,-.04,-.02,-.09,.08,.09,.02,.02,.69,-.4,.44,-.36,.53,-.02,.09,.04,.23,.46,.54,-.52,-.1,-.2,-.03,-.12,-.06,.65,-.2,.68,-.27,.58,.04,-.24,-.1,.08,.1,.39,-.17,-.19,-.07,-.04,-.22,.38,.37,-.15,.11,-.07,.06,.3,.46,.18,.62,.17,.02,.05,-.01,.56,-.29,.62,.01,-.13,.01,.2,-.29,.05,.36,-.2,.48,-.01,.57,-.02,.15,.19,.16,-.01,.4,-.12,.53,.54,.41,-.19,-.1,.1,.2,-.07,.11,-.03,.42,-.13,.42,.55,.37,.74,.01,-.33,-.27,.11,-.01,.43,-.2,.54,.35,.5,.24,.39,-.37,.69,.2,-.05,.14,.06,-.19,.28,.07,-.15,-.2,.36,-.14,.43,.28,-.39,.39,.58,-.28,.44,.31,-.2,.05,-.04,-.16,-.34,.69,.06,-.52,-.29,0,0,-.25,-.18,.15,.26,-.01,-.01,-.27,-.01,.38,.32,.46,-.29,-.22,-.39,0,-.36,.21,-.5,.22,-.23,.02,.01,.28,.09,-.16,-.1,-.19,.5,.5,-.06,.11,.21,.72,.24,.51,.04,.06,.25,.02,-.07,.01,-.07,-.17,-.23,-.08,-.13,-.04,.23,.05,.05,-.3,-.14,.01,.02,.57,-.02,.47,-.12,-.17,.14,-.08,.01,.18,0,.32,.26,.13,-.29,-.31,.1,-.12,.61,-.3,-.27,-.1,-.1,-.28,-.21,-.5,-.22,.4,-.17,.4,.46,.07,-.33,-.04,-.16,.24,.2,.58,.2,.02,.24,-.06,-.02,.5,-.37,-.22,.28,-.19,.19,.61,.16,.23,-.23,-.04,-.22,-.33,-.37,.03,-.02,.28,.03,-.03,-.02,.68,-.11,.39,.1,-.29,.25,.3,.52,-.25,.54,-.17,.01,.05,.03,-.05,-.04,.06,-.24,.45,.45,.69,.02,.09,-.3,.54,.56,-.2,-.22,.03,-.08,-.25,-.01,.68,.29,.47,.12,-.08,.69,.42,.24,-.07,.06,.14,.7,.29,.45,.29,.56,-.29,.09,-.04,-.19,-.27,.63,.53,.62,.07,.02,.25,-.13,-.05,.4,-.06,-.03,.22,.19,-.13,.25,-.11,-.35,-.08,.59,.15,.06,-.03,.24,-.09,-.3,.06,.25,-.02,-.15,.42,.11,-.09,-.21,-.37,.63,.36,.36,.36,.07,-.08,-.12,-.35,-.2,-.11,-.27,.26,.01,-.13,.54,-.03,.3,-.02,-.08,-.05,.01,-.17,-.28,.54,-.11,.17,-.05,-.01,0,-.06,.06,.48,.06,-.28,-.22,-.14,-.27,-.21,-.25,-.3,.01,.01,.22,.13,.36,-.15,.6,-.38,.01,-.05,-.15,-.26,-.06,.68,-.23,.11,.28,-.29,-.32,.43,-.07,.3,-.35,.1,-.34,-.15,-.12,-.29,-.13,-.21,.49,-.14,.46,.19,-.36,.43,.09,-.17,-.01,-.37,.61,.09,.08,.46,-.15,-.17,-.13,.52,-.18,.46,.41,.16,.04,-.2,.01,-.25,-.05,.05,.16,.08,-.32,.55,-.12,-.16,-.07,.15,-.27,-.17,-.34,-.3,-.29,-.57,.37,-.29,-.3,-.21,-.22,-.24,-.22,.74,.17,-.16,.55,-.02,-.31,.05,-.27,.73,-.04,.16,.2,-.26,-.02,-.31,-.09,-.39,.68,-.21,.52,-.11,.2,.09,.13,-.32,-.01,-.19,-.13,-.08,.15,.22,.37,-.23,.12,0,.31];export{a as rvalData};
