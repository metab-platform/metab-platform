const a=[-.06,-.11,-.03,-.1,-.05,.21,-.01,.54,.31,.17,.02,-.08,.05,-.14,-.06,-.1,-.11,-.1,.03,.01,.03,-.28,.2,-.21,.13,.09,-.41,.13,-.11,-.48,.16,-.15,.09,-.3,-.06,.01,-.12,-.05,.07,-.13,-.1,-.07,.05,-.06,.15,-.04,-.07,-.03,-.35,.54,.24,-.13,-.15,.04,.49,.07,.24,.03,.01,-.07,.36,.03,.19,0,-.26,-.47,.11,-.13,.01,-.12,.06,-.27,.51,-.15,-.15,-.04,-.21,.36,.08,-.32,-.01,-.12,.04,-.04,-.16,-.13,.05,.22,.04,0,.3,.2,.68,-.03,-.03,.31,-.07,-.27,.09,.39,-.23,.19,.25,-.18,.38,.1,-.33,-.22,.14,.28,-.04,.5,.11,-.12,.16,-.1,-.02,-.4,.05,.2,.09,-.03,.12,.18,.18,.4,-.08,.12,-.49,-.07,.74,.48,.04,.62,-.26,-.13,.52,.25,-.37,-.25,.11,-.23,.15,.06,-.1,.22,.1,.03,.33,.07,.17,.58,.06,.01,.64,.39,-.27,-.19,-.04,-.06,.54,.33,.18,.34,.65,.37,-.06,-.42,.55,.04,-.1,-.3,.57,.32,.27,-.26,.12,-.46,.44,-.03,-.14,-.16,.09,-.25,.36,.35,-.05,-.08,.44,-.04,-.03,.65,.05,.43,.32,.11,.29,.25,-.15,-.14,0,.35,-.03,-.05,-.03,.35,.16,.63,.56,.04,.62,-.14,.05,-.07,0,.12,-.03,.62,-.35,-.2,.37,.28,.22,.03,.32,-.06,.69,-.34,.35,.22,.05,-.09,-.17,.01,.14,-.11,-.16,-.06,.06,.02,.4,-.22,.59,.41,.61,.55,-.1,.22,-.2,-.19,.41,-.11,.51,.23,.11,.01,.06,.27,.09,-.19,-.15,.2,.54,.12,.17,.35,-.24,.11,.05,-.16,-.16,-.07,0,.1,.14,-.01,-.49,.41,.13,-.34,.57,-.42,.08,.05,.53,.37,-.32,-.09,.37,-.11,.62,.49,.14,.53,.53,.06,.06,-.13,.26,.44,.11,-.09,-.23,.1,0,.06,.32,.34,.3,-.04,-.05,-.11,.08,-.12,.19,.42,.47,.33,.05,.23,.02,.06,-.08,.13,.51,.49,.1,-.07,.29,.5,.1,.3,.05,-.07,-.44,-.05,-.52,.36,.34,.11,.53,-.01,-.06,-.04,-.09,.04,.1,.5,.07,.38,.33,.3,-.03,.52,-.12,.13,.25,-.09,.15,-.15,-.07,.08,.43,-.14,.04,-.02,-.03,-.07,.2,-.16,-.35,-.15,.2,.44,.25,.34,-.12,.08,-.04,.42,-.09,.06,.03,-.04,.19,.26,-.13,.03,.18,.1,.23,.1,-.13,.4,.37,-.08,-.29,-.02,-.09,.17,-.26,.21,.16,.3,.43,.02,-.16,.22,.32,.18,.1,-.12,.11,.24,.26,-.1,.12,-.08,.56,.14,.03,.08,-.33,.19,.04,-.12,-.03,.03,.4,.35,.63,.44,.18,.13,.56,-.15,.26,.15,-.04,.3,.28,-.01,.05,-.16,.35,.4,-.13,.18,.05,-.39,.48,.48,-.13,.15,-.09,.19,-.25,-.09,.26,.4,.01,.25,-.05,.36,.24,.37,-.16,.16,-.13,.06,-.21,-.13,-.12,-.23,.5,.26,.3,.52,.07,-.44,.35,-.1,.05,.6,.24,.33,.57,.38,-.14,-.03,0,0,.32,.15,-.01,-.04,.5,0,.25,.48,.41,-.11,.25,0,-.02,.05,-.03,.33,-.04,.36,.22,.22,-.02,.23,.28,-.32,.27,.66,.38,.09,-.22,.01,.39,.11,-.04,-.15,.13,-.14,.08,.22,.74,.49,0,.42,-.08,.11,.42,.17,.29,-.02,.05,.34,.14,-.39,-.15,.02,.11,-.37,.02,-.15,-.43,-.07,.02,-.07,.1,.15,-.13,.26,-.3,-.03,.08,-.25,.18,.65,-.1,.23,.02,.06,.36,.1,.08,0,.21,.22,0,-.11,-.08,.09,.41,0,-.22,-.1,.28,.31,.62,-.2,-.08,-.02,-.29,-.13,.13,.12,.04,.05,.67,-.2,.37,-.07,.16,.45,.17,-.12,-.03,.37,-.01,-.47,.44,0,-.18,-.21,-.03,-.14,.31,.63,.34,.16,-.06,.55,-.16,-.16,.4,.19,.45,.09,.49,-.21,.07,.2,.21,.52,-.03,-.07,.09,.44,.29,.45,.23,.48,.51,-.22,.18,-.02,-.26,.09,.01,.14,.33,.06,.25,.6,-.31,-.25,.55,0,.25,.13,-.14,-.18,-.08,.18,-.09,.07,-.04,.25,.01,.02,.13,.3,.16,-.03,.27,-.03,.07,-.46,.28,.39,.28,-.12,-.13,-.07,.14,.19,-.25,.06,.35,.06,-.11,.02,.22,.61,-.11,.03,.2,.13,-.18,.42,-.07,.13,.13,-.01,-.03,.63,.5,-.05,.01,-.16,-.16,-.05,0,-.4,.25,.43,.2,.65,.11,-.11,.22,.24,.06,-.16,.62,.18,-.12,.25,-.14,-.05,.13,-.29,-.17,.11,-.18,.42,.09,-.03,.5,.58,-.12,.08,.11,.3,0,.18,-.05,-.47,-.08,.06,.3,-.11,.33,.34,-.15,.07,-.26,0,.02,.41,.22,-.46,.15,-.1,-.14,-.36,.2,.36,-.38,-.04,.2,.34,-.2,-.05,.29,.33,.01,-.11,.49,-.1,.61,.58,-.02,.3,-.01,.1,0,.07,.04,.33,.42,.38,.17,-.17,-.28,.3,.35,-.16,.06,-.4,.01,.06,-.07,.35,.25,-.02,-.13,.17,-.11,.31,.49,-.07,.19,.11,.11,-.13,.09,-.2,.16,.47,0,-.46,-.24,-.07,-.37,-.02,.67,.08,-.03,-.08,-.04,.35,-.27,-.09,.17,-.03,.2,-.01,.07,-.22,-.1,.73,0,-.25,.26,-.08,.11,.54,-.12,.11,-.23,-.27,.54,-.05,.17,-.42,.29,.11,-.02,.3,.22,.29,.7,-.01,.4,-.08,.22,.01,.2,.33,-.23,.01,.23,.57,.15,.16,.04,.5,.34,.25,-.15,.52,-.02,-.05,-.43,.29,.06,0,-.07,.1,.45,.22,.14,.47,.05,.25,.15,.49,-.01,.09,-.09,.13,.05,.08,.43,-.08,.12,-.12,-.18,.18,-.21,.63,-.26,.56,-.2,-.45,-.29,.15,.07,.36,.08,.43,.55,.06,.37,-.04,.16,-.09,.15,-.04,-.01,-.14,.12,.22,.66,-.03,-.05,-.07,-.06,-.06,.55,-.01,.18,.01,-.29,.32,.36,.03,.17,.18,.6,.11,.08,-.23,.57,0,.26,.29,.54,-.26,.05,.01,-.04,.41,.14,.13,.36,.19,.16,.05,-.06,.61,.12,.08,-.36,.17,-.25,-.1,.08,.12,.52,.51,.54,.36,.04,.55,-.34,.63,.7,.68,.34,-.12,-.14,.45,.38,.61,.68,.52,.1,.47,-.2,.21,-.05,.09,.02,.03,.06,-.09,-.17,-.29,-.24,-.16,.01,-.05,-.09,.42,.58,-.35,.43,-.01,.45,.16,.2,-.1,0,.24,-.09,.47,-.08,.33,.22,.15,-.15,-.18,.6,-.05,.11,.46,.18,.49,-.04,.59,-.14,.05,.46,-.1,-.33,-.13,.1,.51,-.09,-.02,-.04,.01,.44,.33,.06,.78,.18,.13,-.14,.1,.3,.16,-.43,-.18,.37,-.01,.3,.32,-.44,.22,-.07,-.09,.44,.2,.24,-.09,.05,.33,-.03,.52,.11,-.09,-.17,-.06,-.24,.13,.4,-.41,-.03,.1,-.24,.15,-.12,-.03,.03,-.09,-.03,.26,.67,.28,.18,.12,.54,-.09,.27,.02,-.01,.18,.06,.22,.31,.24,.02,.55,.48,.17,-.29,-.07,.11,-.04,.39,0,-.24,-.25,-.26,-.15,-.05,-.03,.12,-.1,.18,-.12,.28,.14,-.07,.02,.04,-.08,.21,.35,-.07,.3,.03,-.13,.13,.07,.13,-.12,.06,-.21,.08,.08,-.13,.05,.21,.21,.14,.43,-.14,.43,.02,-.17,.24,.36,-.11,.42,.22,.12,.03,-.02,.24,.22,.54,-.2,-.07,.47,.49,-.24,-.13,-.15,.04,-.14,.53,.13,.15,.36,-.12,-.11,-.11,-.11,-.36,-.03,-.15,.61,.46,.24,.12,-.16,.02,.19,.24,-.38,-.18,.33,.04,.13,.4,.28,.27,-.03,-.11,.73,.05,-.54,.02,.25,.1,.38,-.18,0,-.14,.23,.14,-.04,.35,-.11,-.11,.19,.06,-.47,.14,.13,-.53,.33,.26,.05,-.09,.37,.26,-.06,-.05,-.13,-.12,0,.06,.09,-.12,.1,-.24,.01,.2,-.1,.23,.17,-.01,.17,-.14,.02,.33,-.1,.56,.3,-.08,-.04,.04,.51,-.32,.39,-.46,-.34,.58,-.2,.06,.08,.33,-.31,.29,.58,.02,-.05,.34,-.02,.34,.2,.28,.51,.09,-.21,-.07,-.17,-.02,-.04,.24,-.07,.08,.41,.3,.53,.32,.22,.15,.41,.15,.34,-.05,.2,-.05,-.16,.3,.37,-.05,-.12,.46,-.11,.12,.21,.22,.17,.38,.38,-.08,-.22,.26,.31,.07,.18,.4,.44,-.17,-.03,.14,-.41,-.2,.07,.46,.06,-.23,-.3,.59,-.29,.13,.26,.49,.16,-.17,-.13,.66,.24,-.13,.45,-.12,-.09,.52,.73,.43,.47,.34,.57,.43,.62,.35,.73,.53,.33,.23,.64,.36,.64,.4,.66,.16,.01,.19,.69,.78,.15,.54,.51,.48,.43,.16,.57,-.14,.66,.69,0,.82,.46,.27,.04,.51,.37,.31,.57,.35,.56,-.1,-.01,.52,-.25,-.06,-.3,.57,-.01,-.37,-.01,.41,-.11,-.01,.5,-.46,.05,.21,.02,.01,.41,.03,-.13,.33,-.32,.28,-.05,.06,-.06,-.04,.37,.03,-.17,.08,-.12,-.05,.03,0,.33,.23,.27,-.04,.07,.04,-.19,.56,.27,.27,-.1,.52,-.02,-.16,.71,-.1,-.17,-.08,.52,-.06,.22,-.03,.21,-.04,.12,.16,.39,-.08,.14,-.05,.24,.08,-.29,.48,.36,-.06,-.12,.2,.49,.45,-.16,.53,-.25,.31,.15,.4,.56,.5,.2,.6,.46,.27,.45,.63,.45,.57,.63,.07,.28,.62,.27,.49,.45,-.11,-.02,-.11,.18,.14,.3,.07,.33,-.04,.44,-.26,.69,-.11,.47,.23,.02,.24,-.15,-.45,.66,.06,-.13,-.07,.03,.26,.06,.21,.29,.42,.21,-.09,-.01,.06,-.14,-.07,-.45,.13,.21,.69,.35,.38,-.04,.27,.27,.47,-.06,.16,.43,.17,.33,.19,.2,.29,.22,.06,-.08,.18,.16,.3,.19,-.25,.25,.26,-.3,.2,.06,-.01,-.05,.15,.01,.33,.64,.12,.34,-.21,-.03,.13,.09,.28,.26,-.11,.31,.7,-.41,.57,-.13,.28,.07,.28,.1,.36,.6,.67,-.48,.04,.04,.06,-.19,-.15,.61,-.03,.48,-.12,.65,.2,.02,-.07,.03,0,.58,.08,0,.01,-.14,0,.61,.52,.02,.33,-.05,.28,.53,.35,.3,.72,.3,-.01,.23,.07,.5,-.17,.52,.1,-.09,.15,.06,-.05,.29,.35,-.18,.66,.09,.55,.22,.36,.27,.35,.06,.22,-.1,.48,.57,.41,-.1,-.11,.12,.34,.09,-.08,.1,.22,-.17,.47,.67,.36,.5,.14,-.08,-.13,.21,.07,.26,-.1,.68,.5,.53,-.02,.4,-.18,.42,.32,.15,.3,.26,-.05,.43,.23,.05,-.24,.56,-.04,.39,-.04,-.17,.45,.67,-.13,.37,.33,-.13,.04,.04,.04,-.14,.51,.23,-.21,-.09,.25,.12,-.11,-.03,.07,.08,.07,.22,-.27,-.03,.37,.34,.51,-.08,-.01,-.24,-.11,-.1,.21,-.43,.35,-.13,.08,.33,.5,-.16,-.01,-.1,-.13,.5,.43,.08,.13,.42,.48,.37,.61,.17,-.09,.32,-.15,.13,.25,-.08,.01,-.04,.03,-.06,-.02,.35,.21,.23,-.47,-.11,-.01,.06,.29,-.19,.5,-.22,-.16,.17,.06,.06,0,-.03,.39,.41,.34,-.04,-.12,-.03,.06,.59,-.46,-.4,-.16,.14,-.07,-.01,-.28,-.06,.42,0,.42,.56,0,-.25,.25,0,.3,.34,.59,.22,.29,.33,-.02,.12,.2,-.37,-.21,.18,-.02,.36,.54,.13,.42,-.06,.11,-.03,-.11,-.16,.15,.08,.34,-.01,-.08,.23,.44,-.16,.24,.2,-.04,.38,.29,.33,-.03,.5,.01,.11,-.08,.04,-.11,-.14,-.02,.06,.18,.66,.69,.16,.27,-.17,.54,.37,-.17,-.2,.02,-.17,-.02,.22,.45,.39,.28,.02,-.04,.62,.26,.13,-.09,.26,.28,.47,.37,.45,.47,.68,-.09,-.01,.09,-.09,-.08,1,.5,.63,.1,.24,.21,-.1,-.21,.13,0,-.14,.3,.35,.09,.29,-.01,-.31,-.01,.63,-.03,-.07,-.13,.17,.07,-.07,.1,.29,.02,.03,.15,.22,.1,-.04,-.45,.47,.56,.49,.46,.32,-.12,.15,-.1,-.08,-.05,-.08,.42,.24,-.07,.5,.09,.39,-.14,-.2,-.16,.18,-.39,-.12,.28,-.02,.05,.03,.19,.29,-.21,.08,.24,.2,-.13,-.04,.01,-.19,-.11,-.13,-.11,.1,.11,.34,.08,.31,-.07,.51,-.17,-.07,-.18,-.17,-.05,.06,.48,-.03,.11,.34,-.16,-.32,.54,-.11,.39,-.38,-.05,-.38,.04,.04,-.09,-.08,-.03,.43,-.11,.57,.29,-.27,.71,.08,-.07,.17,-.09,.23,.11,-.06,.48,-.1,-.07,.09,.31,0,.21,.44,.34,-.2,0,.12,-.08,-.14,.23,.25,.16,-.17,.63,-.04,.02,.07,.43,-.1,-.06,-.21,-.25,-.11,-.39,.22,-.16,-.06,-.07,-.01,-.09,-.04,.49,.19,.04,.43,-.22,-.07,-.1,-.1,.51,.05,.18,.21,-.04,.18,-.17,.01,-.35,.47,0,.2,.12,.28,.2,.05,-.4,.11,-.18,-.06,-.1,.35,.02,.16,-.01,-.06,.08,.42];export{a as rvalData};
