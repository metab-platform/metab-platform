const a=[.21,-.09,-.05,-.08,-.05,.43,.06,.77,.29,.22,.01,-.08,-.16,-.14,-.13,.1,.07,-.13,-.17,.19,-.03,-.5,.19,-.25,.18,.12,-.71,.08,-.08,-.77,.31,-.45,.09,.16,-.05,.11,-.1,-.09,.01,-.26,-.14,.02,.11,.03,.01,-.12,-.18,.09,-.44,.54,.28,.11,-.21,.04,.52,.07,.14,.42,-.06,.01,.67,.03,.23,.03,-.34,-.61,.21,-.23,-.06,.05,.01,-.2,.77,-.24,-.07,-.01,-.19,.71,.01,-.22,-.01,-.01,.12,.04,-.15,-.49,.15,.09,-.01,.01,.45,.01,.76,0,.01,.16,-.04,-.12,-.02,.73,-.1,.25,.32,0,.43,-.05,-.48,-.46,.14,.28,.12,.55,.08,.02,-.04,-.17,.09,-.52,0,.32,0,-.28,.3,.08,.1,.43,-.01,.19,-.42,-.08,.81,.4,.16,.58,-.15,-.05,.61,.16,-.52,.14,.19,.19,.3,.19,.28,.25,.08,.16,.45,.14,.25,.8,.09,.21,.82,.55,-.29,.01,0,-.12,.56,.37,.06,.44,.81,.7,.03,-.47,.47,.1,.24,-.34,.76,.4,.14,-.41,.19,-.74,.75,.01,-.1,-.04,.1,-.42,.38,.19,.04,.17,.66,.09,.07,.98,-.1,.58,.48,.1,.32,.38,-.03,-.38,.15,.51,-.02,.1,-.03,.36,-.01,.69,.71,-.12,.83,-.17,.03,-.04,.38,.32,.03,.82,-.46,-.47,.32,.34,.24,.04,.35,-.05,.9,-.43,.43,.17,-.07,.02,-.15,-.09,-.18,.25,-.26,-.16,.21,.08,.62,-.26,.7,.59,.81,.74,-.01,.21,-.14,.01,.59,-.39,.52,.29,.18,-.17,-.09,.48,.17,-.3,-.18,.25,.68,.19,.3,.42,-.26,.17,.1,.12,-.32,.14,.03,-.01,.07,-.13,-.67,.73,.15,-.44,.71,-.65,.16,-.12,.44,.26,-.62,-.04,.45,-.39,.63,.5,.09,.69,.6,.13,.11,-.03,.4,.35,.23,-.14,-.43,-.03,.01,.08,.04,.46,.45,-.04,.13,-.02,-.13,.26,.14,.35,.39,.42,-.01,.15,.08,-.06,-.15,.15,.45,.44,.04,-.1,.13,.43,-.01,.31,-.01,-.18,-.7,-.2,-.53,.34,.39,-.17,.71,.01,-.14,-.02,-.14,-.04,.08,.69,.08,.4,.38,.55,.23,.44,-.08,.18,.26,-.19,.15,-.22,.15,.08,.39,-.44,0,.06,.18,-.06,.52,-.12,-.5,-.17,.2,.51,.61,.45,-.06,.11,-.05,.55,.01,.02,-.01,.02,.14,.14,-.1,-.08,.07,.01,.19,-.14,-.05,.28,.24,-.14,-.45,-.09,-.04,.07,-.27,.28,.12,.26,.54,-.05,-.16,.17,.35,.21,-.04,-.03,.13,.21,.33,.02,.2,-.18,.71,0,.36,-.07,-.33,-.07,.21,-.13,-.12,-.19,.43,.33,.69,.5,.34,.23,.66,-.16,.34,.09,-.02,.5,.33,.18,.23,.11,.34,.53,-.2,.08,.26,-.33,.6,.54,-.16,.12,-.01,.23,-.56,-.07,.58,.43,.04,.19,0,.69,.16,.28,-.1,.12,-.16,.02,-.46,-.11,.12,.01,.61,.2,.33,.71,.05,-.7,.36,-.13,.08,.74,.34,.19,.53,.42,-.13,-.11,-.01,-.04,.2,.12,.09,-.01,.39,-.1,.29,.59,.52,.03,.19,-.04,.12,.12,.13,.3,-.19,.68,.36,.29,.13,.23,.33,-.37,.59,.69,.72,.1,-.26,0,.22,.11,.13,.17,-.05,.06,.06,.27,.82,.38,.05,.48,.24,.41,.41,.1,.44,-.11,-.03,.39,-.2,-.72,-.09,-.03,.29,-.73,.02,-.09,-.72,-.05,-.02,-.16,.22,-.1,-.32,.32,-.13,-.06,-.02,-.42,.12,.81,0,-.06,.02,-.09,.62,0,.05,-.08,.36,.25,.05,-.16,-.05,-.17,.48,-.11,-.13,.12,.34,.26,.61,-.2,-.09,.18,-.29,-.15,.03,.12,-.1,.11,.77,-.07,.34,-.16,.51,.53,.28,-.03,-.03,.56,-.07,-.71,.52,-.02,.01,-.18,-.06,-.15,.12,.99,-.09,.13,-.11,.76,-.27,.08,.49,.25,.43,.11,.39,-.07,.24,.38,.3,.6,-.14,-.17,-.1,.69,.23,.46,.17,.6,.61,-.55,.33,.12,-.37,.07,.09,.22,.45,.06,-.15,.61,-.13,-.2,.53,-.02,.19,.2,-.2,-.11,-.08,.15,-.14,.09,0,.43,.03,.21,0,.27,.33,.13,.2,.02,-.16,-.77,.37,.46,.36,-.05,-.07,.08,.14,.34,-.29,.02,.68,.29,-.17,.08,.19,.77,.06,0,.3,-.17,.2,.35,.15,.27,.06,.06,.05,.81,.64,-.06,.18,-.18,-.06,-.1,.14,-.69,.34,.47,.29,.7,.04,.07,.22,.16,-.11,-.01,.78,.21,-.1,.07,-.05,-.24,-.03,-.43,0,.08,-.13,.48,.01,-.13,.56,.64,-.13,.08,0,.01,-.12,.2,-.29,-.78,-.01,.13,.21,-.18,.27,.6,.08,-.18,-.23,.22,0,.22,-.07,-.44,.16,-.14,-.03,-.54,.16,.42,-.4,-.08,.19,-.09,-.29,.28,.41,.45,.08,.28,.6,.02,.57,.8,-.05,.45,-.1,-.19,.02,.17,-.03,.36,.41,.74,.07,-.44,-.46,.26,.31,-.26,.03,-.46,-.05,.24,-.01,.41,.24,.05,-.27,.26,.02,.27,.69,-.12,.33,-.13,.05,-.08,0,-.27,.18,.59,-.14,-.54,-.21,-.08,-.12,.21,.78,-.1,-.09,-.07,-.1,.44,-.24,.05,.2,-.03,.41,-.11,-.02,-.4,-.09,.47,.16,-.52,.3,.01,-.11,.63,-.3,.17,-.44,-.45,.69,-.15,.19,-.53,.31,.08,-.05,.09,.41,.35,.84,-.13,.55,-.05,-.05,-.14,.36,.46,-.33,.28,.31,.68,.23,.16,-.04,.59,.56,.37,-.13,.44,-.07,.32,-.73,.33,.06,.09,-.17,.29,.71,.2,.2,.66,.06,.02,-.04,.62,.06,-.12,-.06,-.12,.05,.17,.36,-.2,-.08,-.07,.18,.13,.03,.65,.08,.57,.24,-.78,-.26,.24,.12,.43,.2,.51,.6,.08,.63,-.11,.03,.06,.2,-.04,.35,-.17,.11,.38,.99,-.15,-.18,.03,.03,-.07,.77,-.09,.35,.09,-.07,.06,.36,.09,.27,.1,.77,.14,.03,-.28,.71,.17,.15,-.01,.58,-.05,.12,-.03,.05,.37,.12,.04,.57,.2,.25,.11,.05,.52,-.01,.05,-.6,.36,-.28,-.14,.05,.15,.42,.4,.76,.36,.06,.68,-.51,.8,.74,.67,.4,.16,.14,.59,.49,.73,.76,.69,-.03,.59,-.06,.24,.09,-.01,.05,-.04,.04,.06,.02,-.29,-.05,-.04,-.15,.09,-.1,.62,.55,-.64,.56,.01,.69,.3,.37,-.04,.13,.05,.03,.46,-.04,.3,.22,.18,.11,-.19,.51,-.08,.17,.37,.05,.65,-.02,.75,-.07,.03,.41,-.15,-.66,-.17,.1,.6,.03,.03,-.19,.08,.52,.38,.01,.61,.06,.19,-.24,.21,.49,.11,-.69,.07,.27,.03,.6,.34,-.47,.32,-.11,-.1,.47,.49,.6,-.18,-.01,.31,-.11,.49,.38,-.03,.21,-.33,.02,.01,.73,-.51,.08,-.11,-.51,.27,-.21,.07,.06,-.3,-.12,.31,.77,.17,.18,.09,.73,-.3,.51,.21,-.1,.26,.05,.17,.17,.11,-.3,.74,.71,-.14,-.35,-.47,.02,.05,.52,.01,-.06,-.31,-.09,.06,-.15,.02,.04,-.24,.39,-.23,.47,.08,-.1,-.13,.16,-.06,.17,.47,.35,.47,.05,-.08,.11,.35,.24,.27,.05,-.46,.03,.11,.04,.14,.55,.12,-.02,.46,.24,.5,.27,.22,.39,.49,.08,.66,.1,.13,.06,-.08,.22,.38,.4,.07,-.12,.39,.48,-.21,-.2,-.06,.07,-.06,.64,-.04,.11,.36,-.17,.23,-.17,-.16,-.3,-.16,-.17,.71,.57,-.04,.12,.11,.03,.25,.29,-.3,-.11,.46,.19,.15,.32,.37,.34,-.04,-.2,.89,.04,-.28,-.24,.34,-.02,.4,.09,.04,-.06,.39,.33,.16,.41,.28,.27,.42,.01,-.77,.34,.33,-.71,.28,.22,0,-.05,.53,.17,.04,.08,.26,-.15,.03,-.03,.04,.26,.14,-.02,-.05,.18,.21,.23,.17,.14,.4,.07,.22,.4,-.4,.75,.28,-.04,-.09,.27,.51,-.58,.52,-.73,-.52,.82,.08,-.01,.02,.36,-.29,.2,.72,-.09,.05,.47,0,.43,.41,.22,.66,.19,.14,-.09,-.11,-.05,.17,.21,.12,.18,.59,.33,.59,.03,.23,.24,.51,.09,.55,.22,.09,-.23,-.3,.72,.51,-.04,-.22,.42,-.18,.08,.14,.06,.06,.52,.42,-.14,.2,.29,.26,-.18,.28,.43,.32,-.25,.06,.02,-.7,-.22,.09,.4,.06,-.18,-.09,.75,-.06,.08,.34,.7,-.04,-.1,-.2,.5,.17,-.21,.55,.01,-.1,.7,.68,.43,.31,.14,.52,.42,.65,.29,.66,.44,.33,-.1,.53,.28,.55,.41,.6,.08,-.15,.1,.58,.57,.15,.28,.33,.46,.3,.24,.52,-.09,.63,.63,-.18,.67,.49,-.17,.02,.61,.35,.44,.41,.43,.63,-.08,-.05,.67,.06,-.04,-.15,.62,-.07,-.42,-.13,.28,-.19,.1,.63,-.43,.13,.18,-.05,.32,.33,.06,-.11,.21,-.26,.38,0,0,.18,.15,.52,.16,-.01,-.05,-.16,-.13,.01,.2,.45,.26,.47,.06,.19,.11,.08,.79,.09,.44,-.27,.5,.11,.17,.65,0,-.05,-.03,.34,.11,.19,-.01,.33,.02,.15,-.03,.51,-.26,-.08,-.07,.26,.16,-.3,.53,.35,.07,.01,.06,.29,.62,-.14,.44,-.46,.33,.14,.42,.39,.58,-.13,.52,.33,.06,.2,.55,.25,.57,.45,-.02,.44,.55,.37,.48,.29,.08,.14,.01,.06,.15,.46,.01,.5,.03,.61,-.26,.59,-.09,.39,.22,.15,.36,-.13,-.16,.69,.04,-.16,0,.07,.23,-.06,.36,.46,.46,.29,-.26,.01,.06,.21,-.06,-.54,.34,.32,.6,.31,.43,.02,.39,.11,.7,-.07,.07,.56,.09,.39,.15,.2,.25,.45,.2,-.17,.2,.25,.32,.16,.15,.42,.22,-.36,.15,.19,.03,-.16,.07,.2,.33,.76,.12,.33,-.26,-.03,.02,.01,.33,.21,.28,.33,.68,-.51,.58,-.18,.4,.07,.24,.1,.44,.84,.67,-.33,-.02,.12,.13,-.3,-.3,.64,.17,.54,-.22,.71,.12,.07,-.19,.23,0,.58,.01,-.06,-.03,-.23,-.04,.78,.62,-.09,-.04,.06,.45,.44,.57,.36,.6,.3,.22,.28,-.07,.6,-.05,.39,-.06,-.03,-.01,.04,-.09,.15,.3,.04,.62,-.04,.54,.24,.34,.25,.35,.11,.35,.2,.69,.57,.26,.02,-.07,.14,.32,.22,.13,.02,.36,-.15,.43,1,.41,.44,-.08,-.05,-.14,.18,.01,.37,-.18,.61,.54,.49,.04,.5,-.16,.46,.34,-.14,.31,-.08,-.07,.44,.01,.09,-.23,.83,-.1,.47,.04,-.08,.53,.79,-.26,.38,.34,-.22,.05,.06,.02,-.18,.57,.22,-.23,-.11,.36,.09,-.11,-.15,.25,.18,.13,.04,-.17,.04,.4,.26,.42,-.1,0,-.28,-.07,.03,.28,-.48,.34,-.35,.16,.48,.71,.04,-.21,-.03,-.15,.45,.36,.01,.34,.46,.48,.52,.6,.09,.29,.19,.01,.07,.23,-.06,-.16,-.06,-.01,-.11,0,.44,.14,.28,-.72,-.12,-.1,.07,.21,-.13,.67,-.16,-.26,.29,-.19,.14,.1,.06,.34,.35,-.05,.05,-.18,.19,-.04,.63,-.76,-.39,-.08,.13,-.14,.01,-.13,-.07,.35,.18,.37,.58,.11,.04,.37,-.03,.26,.65,.58,.31,-.01,.41,-.03,.19,.37,-.5,-.45,.17,.08,.31,.63,.19,.5,-.08,.3,-.12,-.17,-.19,.24,.06,.29,.07,-.22,.27,.47,-.04,.5,.12,-.03,.39,.29,.39,-.01,.45,-.05,-.01,.08,.08,.06,.26,.32,.09,.32,.7,.65,.09,-.16,-.03,.51,.46,-.39,-.11,-.06,-.03,-.05,.05,.49,.24,.4,.07,.08,.62,.39,.27,-.1,.35,-.02,.59,.35,.56,.28,.57,-.02,.13,.1,-.18,-.04,.67,.62,.7,.15,.16,.18,.07,.03,.06,-.11,-.1,.31,.34,.24,.24,-.18,-.46,.16,.67,.04,.27,-.05,.14,.08,-.12,.08,.28,.05,-.1,.33,.12,.16,.03,-.58,.55,.55,.71,.51,.16,-.2,.34,-.06,-.02,-.02,-.11,.14,.04,.06,.59,-.14,.47,-.01,.05,-.09,.26,-.24,-.16,.43,-.07,.25,-.06,-.06,.28,.13,.11,.44,.37,-.09,-.01,-.04,-.17,-.17,-.24,-.06,.18,.05,.11,.13,.37,.01,.4,-.13,.11,-.13,.03,.01,.19,.46,.09,-.12,.16,-.17,-.48,.66,.11,.3,-.51,.12,-.51,-.04,.14,-.08,.04,-.03,.61,-.04,.6,.05,-.3,.43,-.07,-.22,.09,-.05,.4,.05,-.07,.44,-.32,.05,.12,.38,.06,.31,.07,.35,-.11,.07,.19,-.06,0,.31,.27,.17,-.06,.78,0,-.07,.19,.47,-.06,.01,-.21,-.14,-.07,-.43,.39,-.32,-.01,.01,.08,-.11,.01,.47,.31,-.17,.33,-.28,-.05,.29,-.16,.46,-.07,.29,.12,-.03,.24,-.26,.16,-.51,.63,.06,.21,.14,.26,.18,.08,-.6,.14,-.33,-.17,.25,.2,-.22,0,-.04,.33,.08,.59];export{a as rvalData};
