const a=[.11,-.03,-.13,.14,-.11,.32,.17,.53,.28,-.23,-.08,-.08,-.03,-.02,-.18,.03,-.02,-.12,-.01,.12,.04,-.43,.01,-.21,.08,.13,-.53,.1,.05,-.53,.25,-.29,0,-.01,-.09,-.02,-.16,-.15,.23,-.03,.01,.05,-.08,-.08,.03,-.1,-.16,.15,-.2,.42,.16,0,-.19,.02,.49,.01,.15,.27,.04,.02,.39,.12,.16,0,.11,-.51,.12,-.25,.13,-.1,-.06,-.17,.62,-.1,-.03,-.08,-.01,.36,-.16,-.24,0,.14,-.05,.18,-.11,-.39,.19,.01,.03,-.09,.41,.1,.51,.08,-.09,.36,.04,-.13,.11,.48,-.01,.15,.32,-.01,.42,.05,-.14,-.08,.17,.26,.13,.42,.25,.13,-.01,-.08,-.07,-.47,.18,.2,.03,-.17,.07,.09,.06,.3,.03,.22,-.53,-.13,.52,.31,-.06,.47,-.22,.12,.6,.36,-.52,-.1,.19,-.06,.29,.17,.06,.14,.05,.29,.32,0,.13,.43,.03,.08,.54,.37,-.02,0,-.02,-.19,.35,.21,-.04,.37,.46,.37,.09,-.51,.39,.18,.13,-.35,.46,.42,.2,-.37,.1,-.49,.53,-.06,0,.17,-.02,-.36,.5,.26,-.07,-.01,.19,-.1,.05,.5,.03,.46,.33,-.11,.3,-.05,-.02,-.31,-.06,.38,-.09,-.03,.12,.32,0,.54,.6,.05,.52,-.1,-.06,-.09,.24,.28,-.01,.5,-.49,-.24,.35,.36,.25,.01,.33,-.11,.57,-.49,.3,.12,.05,.1,.02,-.21,-.29,.08,-.14,-.18,0,.06,.46,-.22,.63,.64,.46,.42,.03,.22,-.18,-.09,.27,-.21,.48,.29,.09,-.06,-.07,.34,.08,-.4,-.09,.32,.35,.17,.46,.4,-.16,.2,.12,.02,-.19,.07,-.08,-.2,.06,-.02,-.52,.48,.01,-.21,.55,-.27,.02,.1,.58,.25,-.38,-.1,.21,-.27,.39,.47,.14,.3,.37,-.06,.02,-.21,.21,.41,.03,-.23,-.34,-.1,.07,.14,.17,.43,.48,-.1,.13,.02,-.01,.01,.1,.42,.28,.37,-.18,.07,.21,.02,-.27,.18,.3,.59,.13,.03,.11,.58,.03,.31,.25,-.07,-.38,-.01,-.48,.45,.08,-.2,.54,-.14,.07,0,-.14,-.08,-.08,.63,-.09,.63,.32,.48,.11,.6,-.03,-.06,.26,-.06,.01,-.29,.08,0,.54,-.09,.11,.11,.11,-.13,.29,.06,-.38,-.04,.26,.38,.28,.29,-.19,.15,-.01,.51,.05,0,.06,-.05,.09,.16,-.17,-.12,.09,.08,-.04,-.11,.06,.08,.04,-.21,-.32,-.05,.12,-.05,-.18,.53,-.09,.29,.35,-.12,-.25,-.01,.29,.32,-.15,-.01,.34,0,.26,.07,.14,-.22,.54,.09,.01,-.07,-.33,-.09,.02,-.12,-.1,-.18,.42,.26,.57,.35,.22,.17,.49,-.15,-.06,.1,-.11,.22,.26,.18,.25,-.01,.18,.29,-.18,.18,.14,-.2,.34,.42,-.06,.36,.04,.29,-.25,-.09,.39,.18,-.13,.18,.15,.46,-.01,.23,.01,-.03,-.21,-.02,-.14,-.17,.04,-.19,.61,.12,.07,.25,-.11,-.36,.31,-.13,-.07,.43,.15,.49,.21,.26,-.02,-.22,.06,-.07,.19,.03,-.07,-.06,.21,-.13,-.01,.62,.54,.1,.13,.02,.08,.18,.26,.21,-.08,.36,.18,.47,.15,.3,.22,-.17,.17,.61,.46,.07,-.19,-.14,.3,.05,.33,.04,.11,-.24,.02,.27,.61,.26,.04,.51,.17,.18,.49,.12,.36,-.05,-.16,.36,-.14,-.34,-.23,.07,.29,-.33,-.03,-.01,-.35,-.13,-.12,-.22,.08,-.18,-.19,.44,-.13,.23,-.13,-.38,.37,.48,.01,-.03,.03,-.06,.19,-.09,-.11,-.2,.01,.14,-.01,-.22,-.06,-.16,.44,.06,-.26,.07,.27,.51,.41,-.19,-.18,.23,-.29,-.16,-.06,.07,-.02,.03,.48,.01,.11,-.26,.28,.26,.01,-.04,-.2,.4,-.34,-.6,.5,.13,.07,-.04,.08,-.13,.12,.48,.07,.03,-.2,.4,-.22,.13,.22,.22,.26,.04,.6,-.11,.15,.34,.18,.45,-.02,-.09,.02,.47,.18,.26,.11,.61,.36,-.27,.39,.2,-.31,.05,-.19,.2,.49,.18,-.03,.4,-.01,-.07,.48,-.12,.12,.16,-.28,-.21,-.04,0,-.23,-.08,-.06,.39,-.04,.18,-.02,.57,.32,.08,.31,.09,-.03,-.45,.28,.4,.33,-.06,.1,.07,.17,.3,-.04,.06,.45,.35,.06,.15,.17,.41,-.01,.07,.33,-.05,0,.18,-.05,.24,-.02,.09,.2,.45,.38,-.23,.25,-.23,-.01,-.12,.05,-.51,.15,.5,.26,.27,-.02,-.03,.3,.13,-.14,.07,.46,.15,-.15,.01,.07,-.13,-.01,-.38,.04,-.1,.01,.35,.08,-.11,.46,.57,-.18,.03,.01,.1,.05,.1,-.18,-.38,-.08,.15,.31,-.16,.28,.39,.05,.03,-.2,.33,-.01,.07,.08,-.47,.19,-.21,-.16,-.5,.07,-.04,-.45,-.28,.07,0,-.2,.19,.49,.66,-.05,.08,.59,.02,.31,.51,-.08,.42,-.16,-.1,-.06,.11,-.23,.2,.58,.39,.21,-.42,-.25,.48,.22,-.25,.08,-.53,-.13,.26,.17,.4,.25,.07,-.11,.04,-.04,.4,.29,-.11,.34,-.04,.11,.18,.08,-.1,.28,.66,.04,-.32,-.06,-.1,-.03,.17,.49,-.05,-.05,-.09,.07,.35,-.05,-.07,.23,-.11,.49,-.12,0,-.21,-.18,.3,.13,-.38,.3,.04,.07,.69,-.17,-.05,-.13,-.41,.53,-.1,.06,-.46,.35,.01,-.03,.3,.38,.29,.55,.07,.42,-.08,.12,-.05,.34,.37,-.27,.23,.52,.57,.32,.14,.02,.6,.5,.38,-.09,.32,0,.09,-.55,.08,.2,.11,-.25,.18,.53,.25,.07,.37,.18,.08,-.06,.46,.03,-.11,-.08,-.1,-.07,-.01,.33,-.02,.12,-.06,0,.17,-.07,.57,.01,.51,.01,-.38,-.29,.1,.07,.34,.11,.55,.63,.07,.51,-.15,0,.01,.07,-.16,.13,-.17,-.07,.34,.49,-.16,-.17,-.02,.09,.12,.48,-.11,.13,-.02,-.15,.34,.34,.21,.4,.1,.48,-.05,-.01,-.04,.58,.09,.55,.15,.49,-.19,.06,.14,0,.31,.13,-.11,.32,.15,.19,0,.13,.23,-.01,.01,-.32,.39,-.34,.03,.17,.05,.27,.3,.58,.25,-.07,.52,-.4,.5,.31,.56,.37,.17,.09,.25,.33,.51,.57,.42,-.13,.67,-.14,.11,.05,-.03,.11,.09,.05,-.02,.09,-.36,-.01,-.03,-.02,.1,-.06,.32,.4,-.31,.44,.08,.31,.21,.37,.04,.07,.02,.08,.42,-.07,.39,.17,.04,0,-.24,.49,-.06,.05,.55,.18,.49,-.11,.45,-.08,.06,.48,-.21,-.26,-.02,.12,.63,.05,-.08,-.21,-.05,.44,.15,.05,.39,.01,-.04,.01,.24,.5,.13,-.32,.1,.07,.02,.25,.57,-.51,.32,-.17,.06,.49,.37,.34,-.25,.16,.31,-.18,.58,.17,-.03,.04,-.23,0,.13,.44,-.31,-.03,-.01,-.42,.29,-.06,.27,-.01,-.32,-.27,.25,.48,.54,.11,0,.42,-.14,.47,.07,-.15,.31,-.13,.1,.19,.11,-.16,.46,.41,-.06,-.17,-.14,.04,-.02,.47,.01,-.11,-.23,-.08,-.12,-.05,.15,.12,-.16,.36,-.1,.51,.12,-.13,-.05,.17,-.14,.18,.42,.09,.43,.04,-.14,.02,.2,.18,.04,.03,-.3,-.01,.06,.02,.24,.39,.04,-.08,.64,.02,1,.09,0,.18,.11,.01,.49,.16,.08,-.08,.03,.14,.37,.37,-.11,-.11,.54,.32,-.1,-.21,.05,.23,-.09,.64,-.04,-.03,.35,-.01,0,-.12,-.19,-.16,-.25,-.01,.38,.33,.12,-.04,.12,-.02,.1,.17,-.09,-.25,.32,.07,.03,.47,.27,.52,-.22,-.24,.57,-.11,-.07,-.17,.36,-.04,.54,-.02,.2,-.19,.44,.17,.11,.34,.06,.06,.39,-.02,-.39,.41,.32,-.54,.25,.16,.06,-.18,.11,-.03,-.01,.06,.02,-.19,.03,-.1,.09,.06,-.13,-.06,-.01,.24,.23,.23,.12,.09,.35,.03,.1,.31,-.23,.64,.17,.07,-.18,.13,.5,-.3,.18,-.6,-.51,.41,.09,-.01,.13,.28,-.15,.26,.49,.02,.04,.45,.06,.38,.34,.18,.41,.15,-.08,-.19,-.08,-.05,.08,.01,.13,.12,.37,.36,.55,.15,.04,.1,.25,.13,.31,.1,.13,-.05,-.33,.37,.39,-.11,-.23,.3,-.15,.19,.09,.31,.07,.32,.34,-.16,-.05,.37,.47,-.08,.07,.54,.35,-.38,.08,-.05,-.34,-.18,.05,.24,.39,-.04,.01,.53,-.06,-.04,.29,.31,-.05,-.1,-.04,.2,.18,-.22,.43,.04,.01,.55,.51,.17,.37,.15,.55,.53,.64,.33,.62,.3,.23,-.05,.38,.35,.55,.32,.64,.23,-.13,.21,.25,.42,-.28,.47,.17,.3,.26,.22,.25,-.08,.35,.4,-.02,.4,-.03,-.05,.02,.49,.2,.3,.29,.58,.54,-.13,-.13,.7,-.04,-.18,-.07,.57,-.07,-.42,-.08,.25,-.22,.31,.5,-.39,.2,.17,.03,.17,.39,.12,-.19,.21,-.35,.26,-.03,.07,.11,.09,.33,.07,.02,-.05,-.08,-.23,0,.01,.25,.14,.34,.03,.19,.18,.12,.52,.01,.3,-.21,.54,.07,.03,.58,-.07,-.12,.05,.22,.2,.36,-.07,.2,.01,.25,.16,.32,-.16,.06,-.06,.23,.11,-.43,.44,.18,.14,.12,-.17,.22,.63,.02,.31,-.4,.19,.06,.32,.3,.51,.07,.48,.2,.02,.34,.5,.13,.47,.17,.15,.51,.47,.09,.32,.26,-.06,.24,-.15,.1,.07,.14,-.03,.25,0,.6,.02,.43,-.1,.43,.17,.05,.18,-.21,-.24,.48,.13,-.22,.04,.14,.23,.06,.4,.43,.45,.19,-.3,.09,.1,.02,-.07,-.53,.39,.16,.41,.44,.19,-.08,.41,.15,.44,-.19,.12,.6,-.12,.21,.13,.42,.25,.32,.21,-.49,.35,.34,.35,.05,-.05,.37,.32,-.21,.23,.29,.2,-.19,-.08,.07,.37,.48,.08,.21,-.27,.03,.1,-.16,.3,.25,.06,.08,.47,-.49,.38,-.24,.45,0,.05,.13,.26,.43,.5,-.39,-.04,-.07,.13,.06,-.23,.54,.02,.58,-.28,.47,.05,.02,-.01,.31,.1,.54,-.02,-.1,-.09,.01,-.16,.45,.52,-.12,.11,.06,.31,.29,.5,.34,.42,.32,.17,.27,-.07,.46,-.15,.26,.08,-.01,-.03,.35,-.24,.09,.23,.07,.43,.08,.37,.07,.34,.33,.35,.21,.42,.05,.33,.47,.15,-.07,.13,.28,.18,.15,.25,-.05,.39,-.27,.27,.5,.43,.46,-.11,-.16,-.21,.17,.04,.22,-.29,.53,.32,.51,.19,.52,-.13,.53,.39,-.18,.1,-.15,-.14,.36,.06,.13,-.08,.37,.14,.34,-.01,-.1,.48,.46,-.12,.27,.39,-.12,.04,.06,-.06,-.2,.36,.23,-.28,-.09,.17,.23,-.11,-.05,.26,.36,.27,.05,-.13,.2,.22,.13,.26,-.16,-.18,-.49,.17,-.05,.15,-.36,.33,-.3,.05,.08,.29,.17,-.25,-.15,-.07,.45,.36,-.24,.26,.08,.52,.41,.48,.13,.12,.11,-.06,-.06,0,-.14,-.23,-.08,-.02,-.04,-.03,.21,.01,.26,-.61,-.07,-.07,.29,.18,-.08,.42,-.07,-.16,.37,-.1,.15,.02,.04,.31,.35,.07,-.1,-.2,.2,-.22,.39,-.61,-.26,-.12,-.06,-.16,-.04,-.03,-.12,.26,.12,.38,.5,.38,.11,.15,-.03,.2,.46,.57,.15,-.02,.21,.05,.07,.39,-.49,-.13,.37,.1,.33,.51,.11,.37,-.18,.26,-.16,-.22,-.19,.03,.1,.18,.19,-.22,0,.53,.01,.28,.2,-.11,.36,.5,.39,-.03,.38,-.2,-.13,.09,.14,.04,.04,.14,-.09,.38,.28,.34,.1,.07,.02,.26,.41,0,-.22,-.12,.2,-.09,-.07,.59,.17,.37,-.01,.17,.35,.32,-.02,-.28,.29,-.08,.5,.3,.44,.18,.29,-.04,.28,.17,-.03,-.1,.43,.51,.56,-.01,.11,.25,.12,.01,.1,-.07,.03,.32,.28,.09,.09,.04,-.35,.25,.53,.19,.07,-.04,.32,.13,-.23,-.1,.19,.08,-.01,.36,.06,-.06,.01,-.53,.55,.51,.5,.4,.09,-.1,-.18,-.05,.03,-.03,-.2,-.04,0,.05,.58,-.02,.36,-.07,.08,-.02,.16,-.23,-.17,.42,-.03,.09,-.05,-.08,.09,0,-.29,.42,.1,-.16,-.08,-.23,-.35,-.23,-.21,-.07,.2,.14,.08,.14,.4,.06,.51,-.21,.07,.05,-.04,-.06,.2,.53,-.05,-.02,.12,-.34,-.21,.53,.12,.17,-.32,.06,-.21,-.07,.21,-.18,.08,-.13,.38,-.16,.53,.03,-.39,.24,.02,-.42,.17,-.11,.49,.05,-.04,.36,-.14,.08,-.06,.33,0,.49,.12,.34,-.09,.04,.09,-.12,-.03,.27,.02,.11,-.07,.48,.2,-.24,.2,.05,-.13,.02,-.26,-.29,-.14,-.29,.47,-.11,-.07,.01,-.05,-.13,-.08,.46,.17,-.16,.42,-.08,-.1,.11,-.22,.3,-.04,.24,.31,-.05,.13,-.22,.05,-.44,.54,-.14,.46,.13,.15,.17,.28,-.47,-.04,-.2,-.26,0,.27,.03,.18,-.05,.14,.07,.44];export{a as rvalData};
