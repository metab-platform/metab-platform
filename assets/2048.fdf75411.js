const a=[-.06,.32,.35,-.1,.44,.23,.14,.11,.34,.09,.2,.07,-.17,-.51,.31,.09,.29,-.08,-.09,.09,-.1,-.26,.1,.24,.37,.52,-.2,.19,.16,-.17,.35,-.16,.45,.09,.01,.3,.5,.36,.28,.33,-.17,.44,.34,-.06,.02,.3,-.01,-.01,-.09,.32,.19,.2,.38,.55,.41,.32,.2,.27,.29,.29,.33,.42,.59,-.07,-.05,-.26,.58,.3,-.09,.01,.1,.24,.31,-.32,.45,-.05,.01,.28,.35,-.17,-.24,.24,-.01,.47,-.2,-.26,.43,.14,-.36,.32,.21,0,.38,-.33,0,-.06,-.4,.02,-.12,.33,-.21,.59,.36,-.18,.44,.08,.02,.05,.54,.42,.11,.33,.01,-.29,-.04,.47,-.08,-.18,-.29,.4,-.02,-.3,.26,.02,.12,.32,.4,-.19,-.23,.48,.18,-.02,.01,.27,.14,.05,.34,.21,-.12,.1,.51,.21,.48,.47,.3,.18,.11,-.02,.51,-.24,.56,.2,.14,.28,.23,.15,-.09,.17,-.07,.31,.12,.49,.01,.11,.35,.18,.16,-.22,.07,.4,.24,-.28,.16,-.12,.36,-.12,.12,-.12,.27,.45,-.08,-.02,-.17,.28,.33,-.04,.27,.31,.21,-.02,-.1,.3,-.04,.5,.48,.5,.42,.32,-.01,-.24,.26,.43,.49,.22,-.35,.37,0,.36,.34,-.23,.18,.34,.1,.44,.26,.21,-.06,.24,-.15,-.04,.44,.28,.25,.54,.27,.5,.25,-.13,.27,.08,.04,-.17,.37,.34,-.05,.26,.26,.07,0,.14,.34,.31,.15,.07,.37,.13,-.05,.31,.09,-.18,.14,-.25,.39,.03,.49,-.14,.01,.2,.07,.33,.16,.03,.33,.5,0,.37,-.25,.52,0,.43,.06,-.16,.48,.42,.44,-.09,-.07,.36,.4,-.08,.25,-.12,.29,-.27,.34,.44,-.14,.47,.25,-.09,.07,.16,.5,.13,.29,.31,.19,-.18,.31,.27,.01,.38,-.23,-.1,.17,.24,.1,.53,.08,.12,.39,-.25,-.22,.28,.14,.27,.33,.16,.4,.1,.46,.06,.31,.57,.21,.31,.53,-.23,.06,.31,-.25,.48,.1,.06,-.29,.41,-.3,.41,-.04,-.09,.5,.21,-.17,.22,.51,.39,-.04,.29,.27,.23,.55,.05,.24,.3,-.2,.36,.22,-.08,.41,.35,.35,.05,.22,.01,-.12,-.3,.31,.45,.22,.09,-.03,-.3,.25,.14,.18,.29,.04,.43,.03,.29,.09,.01,.16,.14,.13,.26,-.14,-.05,.45,.46,.47,-.28,.04,.03,-.04,.38,-.33,-.15,-.22,.02,-.22,-.01,.42,.45,.16,-.18,.3,.42,.51,.38,.39,-.26,-.28,.47,.19,.15,.5,.3,.25,-.31,.33,.39,-.06,-.06,.12,.45,.4,0,.17,-.03,.09,.11,.39,.09,.24,.43,-.05,.52,.49,.5,.49,.44,.48,.18,.36,.33,.38,.46,.15,-.24,.31,.54,-.44,-.01,-.06,-.2,-.16,.52,.23,.37,.48,.51,-.34,.25,.15,.17,-.28,-.2,-.37,.55,.11,.46,.4,.15,.27,.5,.47,.26,.5,-.21,.52,.44,.43,.37,.24,.18,.39,-.05,.06,.28,-.08,.13,.06,-.11,.47,.46,.2,.09,.26,.08,.33,-.18,.41,.3,.48,-.2,0,.49,.43,.31,.51,.05,.47,.05,.34,-.28,.22,.4,.27,.46,-.21,.41,0,-.16,.22,.2,.31,.24,.13,.49,.33,.19,-.08,.22,.2,.35,.15,.21,-.1,.16,-.01,.12,-.26,-.03,-.12,-.2,.23,.02,.48,.08,-.23,.5,.47,.41,.42,-.09,-.35,.01,-.25,-.04,.49,-.21,.16,.2,.07,.05,-.17,.12,.25,-.11,.38,.41,.18,-.02,.39,.4,-.24,-.28,.19,.33,-.13,.21,.5,.28,.49,.32,.39,.39,-.11,.49,-.15,.04,.02,.4,.15,-.33,.4,.35,.38,.32,.22,.45,.35,.37,.32,-.31,.16,-.14,.14,.03,.17,.49,-.1,.29,0,.11,.38,.13,-.13,.1,.05,.11,.23,.1,.11,-.06,.18,.1,.49,.04,-.33,-.28,-.14,.28,.33,.47,.5,.17,.24,-.26,.21,.36,-.28,.21,.08,.52,-.08,.5,.07,.47,-.05,-.42,.24,.5,.5,.1,.28,-.07,-.28,.02,.39,.28,.54,.2,.21,.2,.23,.13,.47,.44,.42,.08,.2,-.16,.31,-.05,.5,.43,-.35,.1,.22,-.08,.13,.54,.17,.38,-.14,.5,.54,.08,-.08,-.11,0,-.3,.11,.07,.29,.23,.45,-.22,.43,.24,.42,.3,-.11,-.2,-.18,.25,.22,-.2,.52,.09,.24,.26,-.15,-.23,.16,.21,-.24,-.06,.21,.52,.49,.01,.34,.17,-.17,-.3,.03,.42,-.27,.35,.45,.02,.44,.25,.46,-.2,.16,.09,.25,.3,-.17,-.08,.01,-.05,.44,.44,.16,.37,.16,0,-.22,.29,.51,.17,0,.11,.44,-.13,.09,-.17,.51,.28,.11,.45,.52,-.06,-.1,.26,-.08,.08,.47,.31,.26,-.17,.35,.21,.45,.22,.35,.04,.07,.56,.39,.47,.3,.25,-.08,-.27,-.33,.04,.41,.35,.49,-.26,.46,.47,-.28,.21,.02,.3,-.24,.51,.47,.32,.39,-.14,.19,.13,.3,-.12,.45,-.36,.32,.13,-.41,-.18,.08,.42,.12,.29,.16,.27,-.07,.49,-.07,.36,-.1,-.15,-.05,.49,.2,-.17,.02,-.07,.09,.34,.3,-.24,.38,.35,-.15,.1,-.1,.49,.12,-.12,.47,-.01,.05,-.18,.5,.02,.12,.32,.18,.11,.35,0,.52,.52,-.05,-.22,-.08,.03,-.2,.26,.12,.12,-.15,.24,.01,.26,0,.15,.16,.27,-.02,.28,-.18,.49,.14,.48,.36,.15,.2,.15,.49,.16,.5,-.42,-.27,.37,.42,-.02,-.18,-.06,.26,.47,.22,.01,.23,-.13,.24,.41,.27,.26,.11,.2,.13,-.07,-.19,-.21,.4,.2,.06,.05,.08,-.09,.03,-.04,-.1,.25,.47,.41,.19,.41,.42,.17,.29,.4,.31,.43,.31,-.47,.35,-.03,.52,.48,.11,.17,.04,.36,.08,.18,.21,.49,.11,-.01,.16,-.01,.07,.08,.35,.14,.51,-.15,.42,.06,.51,-.03,.16,-.01,.41,.27,.06,.15,-.31,.01,-.19,-.05,.18,-.37,.46,.02,.21,.27,.19,.46,.53,.14,-.27,.3,.29,.12,-.01,.22,.19,.41,.38,.1,.36,.14,-.1,.17,.1,.09,-.02,-.04,.14,-.02,.15,-.01,.04,-.02,.05,.08,-.07,.1,-.03,.47,.28,-.01,.1,-.23,.38,-.11,-.08,.17,.42,.05,.29,.35,.17,.11,.53,.06,.36,-.11,.26,-.26,.16,.34,.07,.55,.45,.05,.33,0,.11,.41,-.23,-.1,.18,.23,0,-.02,-.15,.35,.25,.47,.16,.33,.13,.01,-.14,.17,-.01,.48,-.11,.09,.04,.39,.16,.25,-.24,.38,.31,-.08,.28,.3,.37,.37,-.03,.4,.47,.16,.39,.46,.23,-.18,.11,.28,.31,-.08,.16,-.23,-.28,.45,.09,-.27,.52,-.21,.28,.5,.16,.06,.53,.43,.07,-.19,.05,.24,.34,.34,.34,.16,.45,.22,-.28,.41,.25,.18,-.24,-.06,-.21,.37,.29,.45,-.31,.32,-.01,.19,-.17,.16,.01,.29,.17,.04,.03,.51,.48,-.18,.15,.37,.53,-.08,.29,-.11,.5,-.01,-.09,.02,.53,.28,.42,.14,.33,.03,.18,-.21,.36,.43,-.02,.19,.27,.15,.27,.2,.35,.24,.13,.15,.42,.08,.56,.42,.47,.42,.14,.11,-.39,.3,.54,.05,.45,.23,.33,.06,.09,-.16,.19,.12,-.17,.24,.48,.43,-.08,.37,.1,-.04,-.09,-.01,.48,.11,-.2,.49,.47,-.42,-.12,.49,.12,.55,.21,.54,-.02,.44,.28,.23,.45,.12,-.18,.01,.34,.11,.08,.48,.31,.08,.1,.38,.31,.28,.26,.26,-.12,-.19,.16,.14,-.25,-.13,.53,.02,.35,.49,.42,.06,.11,.26,.42,.53,.43,.03,.3,-.18,.06,.13,.47,.19,.54,-.06,.16,.22,.17,.2,.4,-.25,.14,.48,-.31,.39,.13,.12,-.1,.37,-.28,-.2,.36,.16,.51,.01,.58,.02,.22,.08,.29,.04,.08,-.12,.53,.21,.48,.23,.08,.19,.37,.04,.2,.18,.07,.47,.52,.59,-.1,.12,.02,.44,.29,.46,.48,.39,.13,.12,.13,.36,.25,-.06,.47,-.03,.42,.37,-.45,.2,-.06,.16,.2,.36,.43,.17,.21,-.05,-.28,-.08,.22,-.11,.3,.48,.41,-.19,.02,.48,-.03,.25,.01,-.03,.05,.04,-.12,.57,.36,-.36,-.09,.25,.28,-.04,-.01,.5,.11,-.14,.34,.37,.51,.44,-.09,.43,.22,.52,-.01,.34,.44,.46,-.23,.17,-.02,.28,.77,.34,.12,-.11,-.22,.27,.3,.43,.19,.01,0,-.02,.37,-.04,-.14,.07,.16,.25,.37,.3,.05,-.02,.54,.62,.32,.47,.35,.45,.48,.08,.14,.28,.38,-.3,.28,.04,.04,.44,.49,.3,.28,.26,-.4,.05,.48,.49,.36,.11,.05,.43,0,-.13,.33,-.05,.25,.18,.02,.22,0,.18,.42,.02,-.16,.44,0,.23,.55,.25,.43,.47,.04,.04,.41,-.04,.28,.4,.03,.44,.23,.28,-.16,-.24,.15,.43,-.05,-.02,.15,.4,.52,.41,.44,.15,.03,-.1,0,.09,.23,-.09,.38,.61,.13,-.02,.08,.4,.22,-.07,-.05,-.17,.5,-.09,.55,.48,.45,.07,.18,.42,.06,.57,.2,.5,.41,.16,.1,.35,.09,.42,.27,.37,-.03,.28,.09,.02,.21,.35,-.06,.18,.45,.26,-.33,.46,.48,.31,-.07,.32,.47,.02,-.19,.41,-.1,-.08,.42,-.03,.52,.19,.09,.23,.43,.33,.01,.1,.45,.15,.11,-.27,-.02,.41,.38,.28,.55,-.01,.2,.46,.47,.38,.49,.2,.45,.55,.46,.34,-.05,.31,.47,-.04,.43,.12,.53,.48,.14,.2,.48,.24,.36,.4,-.01,-.13,.45,.32,.39,.27,.4,.39,.29,-.05,.54,.43,.36,.52,.31,.47,.24,-.24,.5,.29,.03,.04,.52,.35,.49,.36,.41,.1,.38,.38,.54,-.14,-.02,.3,.12,.23,.4,.33,.35,.39,-.01,.26,.29,.28,.53,.51,-.1,-.04,.37,.35,.36,.36,.1,.03,.43,.45,.3,.52,.42,.55,.29,.57,-.2,.54,.03,.23,.06,.11,.14,.24,.38,.03,.5,.13,.41,.01,.29,.47,.53,.48,.54,.51,.06,.24,.14,.27,.38,-.22,-.22,.5,.44,.41,.01,.48,.05,-.01,.42,.26,.53,.15,.1,.42,.37,.48,.43,.11,.4,.43,.53,.37,-.22,.52,.07,-.01,.51,-.08,.47,-.04,.4,.6,.06,.48,-.25,.26,.21,.33,.24,.26,.35,.14,-.19,.36,.05,-.07,.07,.48,.45,.33,.11,.45,.19,.29,.59,.46,.42,-.09,-.02,.09,.48,-.08,-.42,-.16,.3,.29,.29,.43,.38,.17,-.09,.37,.39,-.19,.39,-.02,.46,.51,.37,-.03,-.25,0,.02,.25,.32,.46,.42,.43,.08,.3,.37,.51,.24,.16,-.21,.06,.5,-.21,.36,.22,.39,.36,.13,.48,.29,.57,-.16,.05,.01,.3,-.16,-.25,.25,-.42,-.18,-.06,-.02,.09,.03,.12,.44,.48,.11,.46,.38,-.1,.38,.03,-.24,-.33,.08,.48,.44,.53,.15,.06,.46,.09,.39,.43,.3,.07,.54,.43,.42,.4,.39,.22,-.01,.41,.49,.5,.18,-.12,.11,.04,.46,.09,.47,.06,.47,.48,.48,.34,.36,.46,.44,.06,.41,-.05,-.25,.43,.15,-.23,.19,.52,.42,.53,.33,.14,.21,.39,.31,.21,-.05,.19,-.07,.27,.24,.31,-.19,.24,.23,.52,.02,.36,.14,-.01,.05,-.1,-.32,-.22,.52,-.06,.15,.41,.15,.32,.47,.09,-.24,.01,.03,.53,-.29,.11,.42,.5,.37,.2,.47,-.04,.5,-.11,.5,.28,.41,.38,.25,.34,.16,.1,.04,-.39,-.36,-.06,.54,.57,.43,.39,.08,-.1,.44,.35,.19,.38,.05,.09,.49,.3,.07,.56,.54,.09,.34,.35,.51,.5,-.13,.08,.3,.4,.41,.2,-.18,.33,-.01,-.26,.13,.41,-.17,.1,.43,.13,.05,.52,0,.23,-.23,.59,-.18,.24,.21,.07,-.13,-.02,.34,.13,.09,.05,.21,.03,.49,.48,.35,-.06,.39,.42,.49,.45,.52,-.1,.04,.32,.47,.09,.03,-.04,-.06,.18,.49,.5,.02,.4,.06,.32,.39,.17,.38,.07,.05,-.44,.12,.11,.18,.39,.4,.35,.51,.41,.11,.36,.16,.12,.26,.05,.07,.46,.44,.34,-.14,-.4,.31,.46,.17,.45,.24,.51,.32,.33,.52,-.32,.45,.49,.49,.28,.55,.23,.49,.2,.28,.18,.37,.48,.37,.5,.47,.46,-.08,.47,.1,.29,.22,.42,.48,.48,.44,.45,.02,.5,.43,.27,-.39,.46,.27,.43,-.02,0,.46,.69,.45,.55,-.26,.12,-.11,.16,.44,.23,.41,1,.52,-.16,-.15,.09,-.13,-.22,.22,.31,.09,.01,.49,.28,.13,.45];export{a as rvalData};
