const a=[.21,.06,.22,.03,.16,.45,.2,.55,.22,.17,.07,.09,-.25,-.31,-.01,.08,.11,-.09,-.27,.21,-.06,-.71,.13,-.2,.09,.25,-.72,.28,.15,-.75,.46,-.55,.31,.42,-.01,.25,.12,-.12,.19,.26,-.06,.26,.38,-.02,.04,-.18,-.16,.03,-.56,.5,.01,.21,-.09,.16,.72,.09,.11,.65,-.04,.26,.92,.37,.42,.02,-.28,-.72,.37,-.22,-.18,-.03,.02,.07,.76,-.36,.16,.1,-.16,.92,0,-.29,-.14,.2,-.02,.26,-.2,-.65,.24,-.02,-.29,.09,.56,0,.53,-.08,.04,.11,-.27,-.06,-.08,.89,.01,.41,.51,.11,.59,-.05,-.31,-.43,.3,.45,.13,.59,.14,-.12,-.17,.02,-.03,-.65,-.14,.24,-.04,-.47,.3,0,.15,.51,.16,-.07,-.42,.11,.57,.1,.04,.56,.04,-.04,.68,.2,-.65,.19,.43,.33,.43,.28,.4,.13,.08,.11,.56,-.04,.43,.47,.11,.19,.56,.57,-.25,.15,-.06,-.04,.5,.5,.02,.5,.52,.87,.33,-.57,.42,.28,.35,-.47,.5,.23,.24,-.64,.1,-.7,.81,.23,-.12,.13,.1,-.06,.62,.02,.08,.27,.53,.03,0,.75,-.15,.67,.66,.26,.53,.3,.02,-.47,.02,.59,.14,.1,-.16,.61,0,.62,.81,-.14,.5,-.1,-.03,.04,.63,.54,.05,.51,-.6,-.6,.35,.5,.4,.24,.29,.15,.64,-.55,.55,.32,.03,-.02,-.09,.2,-.3,.39,-.14,-.18,.19,-.04,.7,-.18,.46,.61,.5,.34,.02,.28,0,.02,.58,-.4,.7,.23,.38,-.16,-.06,.48,.24,-.02,-.09,.32,.57,.39,.28,.56,-.26,.27,.02,.39,-.28,.08,.18,.25,.05,-.07,-.64,.87,.38,-.56,.77,-.67,.04,-.27,.45,.37,-.62,.09,.5,-.54,.32,.61,.29,.29,.4,.39,.06,-.03,.32,.37,.14,.11,-.45,-.1,.29,.09,-.18,.68,.44,-.06,.32,.03,-.28,.35,.05,.38,.3,.43,.25,.31,.29,-.05,-.14,.31,.29,.47,.29,-.16,.06,.45,-.27,.37,.24,-.17,-.68,-.09,-.59,.51,.03,-.33,.71,.27,-.14,-.12,.05,.31,.08,.74,.3,.44,.58,.57,.34,.45,-.22,.01,.4,-.23,.42,.04,.23,.1,.39,-.48,.02,-.1,.3,.15,.68,-.06,-.56,-.06,.15,.38,.82,.46,-.1,.26,-.04,.6,.02,.1,-.06,.05,.07,.29,-.14,-.01,.35,.31,.43,-.26,.08,.13,.03,.11,-.61,-.1,-.11,.08,-.29,.29,.4,.3,.62,0,-.1,.44,.44,.22,.2,-.26,.08,.42,.37,.09,.38,.01,.78,-.27,.42,.05,-.4,-.13,.02,.12,.13,-.14,.45,.32,.39,.34,.23,.25,.54,.1,-.01,.29,.22,.72,.52,.33,.42,.07,.4,.61,.13,.3,.18,-.45,.45,.58,-.34,.23,-.06,.19,-.71,.16,.56,.35,.25,.42,-.16,.9,-.04,.12,-.16,-.13,-.23,.15,-.38,.12,.38,.09,.59,.32,.45,.44,.26,-.74,.56,-.02,.24,.48,.48,.23,.42,.16,-.01,.2,-.03,.08,-.14,.09,.35,.15,.23,-.19,.34,.54,.53,0,.4,.23,.35,.12,.24,.42,.09,.81,.55,.32,.36,.22,.44,-.45,.64,.56,.9,.19,-.23,.22,.16,-.02,.39,.29,.06,.32,.15,.46,.68,.23,.02,.44,.37,.56,.45,.06,.2,-.02,-.08,.45,-.37,-.73,-.15,-.1,.47,-.73,.32,.08,-.6,.15,.28,.2,.46,-.23,-.33,.27,-.25,-.05,.11,-.58,.11,.48,-.05,-.09,.09,-.17,.65,-.2,.31,.19,.13,.15,.2,.13,-.2,-.39,.6,-.03,-.18,.27,.48,.35,.68,-.12,.16,.49,-.43,.06,-.09,.02,-.05,.49,.42,-.11,.37,.13,.63,.37,.3,.2,.19,.63,.07,-.71,.58,-.18,.07,.03,.01,.02,.01,.76,-.11,.02,.14,.37,-.27,.3,.31,.22,.56,.03,.36,-.01,.22,.39,.47,.2,-.25,-.41,-.25,.79,.11,.53,.32,.63,.45,-.64,.44,.37,-.51,.27,-.02,.38,.19,.25,-.24,.65,0,-.33,.4,.22,.32,.25,-.23,-.1,-.19,.02,.11,.34,.19,.55,.04,.28,-.06,.31,.37,.29,.24,.02,-.1,-.77,.53,.46,.56,.15,-.16,.25,.07,.16,.22,.33,.6,.44,-.21,.28,.35,.38,.08,-.13,.21,-.32,.34,-.03,.38,.36,.34,-.13,.24,.45,.56,.14,.22,-.14,0,.05,.26,-.72,.42,.48,.39,.53,.03,-.02,.07,.13,-.15,-.03,.48,.42,.12,-.1,.2,-.14,-.18,-.51,.03,.19,-.24,.43,.32,-.16,.56,.65,.05,-.05,.17,.02,-.05,.32,-.46,-.79,-.07,.02,.17,-.01,.22,.69,.15,-.38,-.24,.33,.07,.09,-.21,-.4,.37,-.04,.17,-.7,.26,.24,-.39,.02,.35,-.2,-.43,.4,.3,.44,.23,.37,.59,-.05,.37,.48,.19,.57,.21,-.29,.1,.34,.23,.54,.61,.91,-.01,-.43,-.68,.25,.48,-.23,.25,-.54,.18,.43,.08,.62,-.02,.24,-.47,.48,.17,.23,.5,-.14,.47,-.11,-.03,.1,.31,-.5,.3,.49,-.38,-.6,-.07,.17,.02,.24,.44,.01,-.1,.14,-.15,.35,-.19,.1,.14,.12,.46,-.04,.03,-.37,-.11,.32,.35,-.63,.6,.28,-.25,.55,-.25,.34,-.36,-.52,.63,-.06,-.02,-.61,.38,-.14,-.04,.24,.53,.38,.58,-.26,.64,.21,-.2,-.18,.26,.35,-.37,.39,.29,.42,.19,.17,-.06,.58,.52,.52,.07,.33,-.12,.48,-.72,.4,0,.39,-.03,.26,.68,.02,.41,.28,.32,-.23,-.35,.75,.32,-.2,-.15,-.19,.34,.21,.42,-.23,-.02,-.04,.29,.28,.13,.66,.2,.62,.34,-.78,-.32,.12,.5,.37,.34,.52,.44,-.07,.53,-.36,-.05,.15,.39,.19,.36,.16,.2,.44,.74,.13,-.02,.29,.26,-.28,.81,-.16,.5,.26,.02,-.07,.21,.24,.22,.29,.46,.31,-.08,-.1,.42,.13,.15,-.22,.46,0,.33,.08,.28,.34,.27,.04,.25,.02,.43,.06,.07,.31,-.36,-.08,-.61,.2,-.19,-.27,.19,.04,.04,.36,.74,.48,.27,.5,-.71,.48,.55,.37,.35,.28,.3,.56,.6,.41,.66,.34,-.09,.59,-.03,.13,.11,-.03,.04,-.06,-.01,.22,.1,-.23,.11,.12,-.16,.15,-.24,.71,.56,-.62,.4,-.02,.52,.25,.24,-.04,.31,.14,.22,.64,.01,.23,.5,-.01,.29,-.16,.49,-.17,.09,.4,.04,.69,.06,.44,.03,.04,.35,.15,-.72,-.1,.09,.57,.02,.01,-.29,.27,.62,.45,.16,.45,-.05,.08,-.26,.18,.52,.25,-.67,.18,.1,-.02,.72,.36,-.55,.26,.12,.02,.56,.69,.71,.15,-.15,.33,.08,.41,.52,.22,.37,-.51,.12,.02,1,-.49,.1,-.18,-.72,.33,-.2,.17,.36,-.49,.18,.46,.42,.2,.37,.29,.36,-.4,.55,.25,.18,.32,.16,-.02,.38,.03,-.43,.69,.84,-.13,-.44,-.52,-.11,.02,.57,.16,-.06,-.17,-.05,.17,-.29,.18,-.03,-.26,.51,-.14,.42,.34,.16,-.2,.19,.15,.34,.32,.43,.18,.18,-.03,-.06,.31,.41,.41,.08,-.12,.34,-.16,.2,-.1,.77,.23,-.05,.46,.36,.44,.39,.35,.18,.41,.14,.62,.24,.26,.26,.26,.38,.64,.33,.25,-.44,.42,.6,-.1,-.04,.09,.23,-.11,.54,-.04,.13,.21,-.2,.4,.1,.01,-.25,.18,.01,.35,.12,-.16,.35,.25,-.17,.44,.51,-.23,-.15,.6,.27,.39,.35,.55,.27,.2,.11,.62,.3,.02,-.31,.3,.11,.41,.01,.25,.1,.55,.27,.33,.39,.4,.43,.57,-.09,-.77,.44,.45,-.81,.03,.46,-.01,.15,.48,.11,.06,.1,.4,.03,.22,.26,.07,.4,.04,.11,.03,.38,.39,.34,.06,.2,.54,.16,.14,.51,-.48,.48,.47,-.21,.17,.2,.33,-.65,.48,-.74,-.66,.68,.22,.1,-.04,.47,-.19,.19,.33,.15,.03,.42,-.02,.52,.41,.25,.48,.06,.33,.16,-.06,.02,.28,-.06,.33,.46,.68,.18,.52,-.17,.42,.26,.58,.24,.55,.2,.08,-.05,-.24,.91,.39,.17,-.34,.41,.18,-.18,.36,.04,.25,.57,.43,.07,.32,.37,.18,-.26,.08,.39,.15,.08,.37,.41,-.7,-.25,.42,.31,.28,.02,.08,.45,-.02,.04,.65,.47,-.21,-.18,-.23,.22,.11,-.16,.74,.06,-.07,.83,.54,.55,.33,.02,.52,.49,.68,.41,.61,.52,.46,-.26,.18,.13,.38,.59,.55,.02,-.21,-.27,.32,.45,.1,.27,.03,.12,.13,.35,.08,-.19,.22,.25,-.12,.39,.32,-.25,-.06,.76,.49,.49,.48,.5,.72,.11,-.03,.62,.19,.18,-.14,.64,-.06,-.2,.26,.31,-.17,.14,.71,-.55,.15,.53,.33,.44,.24,.2,.02,.24,-.17,.47,-.01,-.03,.22,.04,.55,-.04,.05,.16,-.13,-.2,.06,.1,.37,.39,.56,.3,.29,.17,.17,.78,-.06,.57,-.2,.29,.29,.35,.49,.02,-.09,.05,.28,0,.13,.01,.24,.24,.38,.28,.46,-.34,-.07,-.06,.36,.24,-.33,.69,.48,.42,.04,.11,.34,.75,-.14,.08,-.65,.52,.03,.63,.46,.65,-.08,.38,.29,-.06,.25,.38,.25,.63,.08,.07,.7,.31,.44,.45,.25,.23,.32,.05,.01,.05,.36,-.03,.42,.2,.69,-.33,.63,.18,.35,.23,.18,.23,-.05,-.17,.69,-.07,-.05,.29,.07,.4,-.03,.49,.59,.4,.41,-.15,.15,.36,.29,.04,-.55,.3,.51,.5,.1,.58,-.01,.5,.36,.64,.2,.38,.73,.35,.58,.51,.1,.19,.61,.26,-.12,.25,0,.47,.45,.29,.52,.33,-.02,.39,.26,.01,-.25,.33,.4,.41,.63,.26,.44,-.22,-.04,.35,.26,.17,.32,.42,.42,.57,-.65,.69,-.16,.32,.11,.47,.27,.55,.62,.69,-.13,.33,.24,.4,-.3,-.41,.6,.19,.48,-.01,.59,.15,.13,-.38,.22,.06,.54,.12,.29,-.06,-.37,.12,.5,.55,.24,-.03,.05,.41,.43,.73,.44,.48,.5,.23,.41,-.18,.76,-.02,.28,-.15,.13,-.04,.15,.12,.1,.37,.23,.65,-.11,.45,.5,.43,.42,.46,.29,.28,.21,.39,.6,.27,.04,-.03,.37,.54,.33,.25,.3,.28,-.3,.53,.73,.49,.4,0,.17,.14,.52,.36,.44,.07,.63,.67,.58,.01,.68,-.09,.27,.43,-.29,.51,-.26,.26,.61,-.06,.34,-.27,.55,.09,.65,.18,.05,.47,.44,-.24,.41,.39,-.14,-.01,.38,.26,-.13,.51,.36,-.12,.09,.26,.25,.14,-.26,.21,.2,.31,-.04,-.32,0,.48,.39,.34,.18,.23,-.14,-.23,.12,.44,-.41,.36,-.44,.31,.48,.49,.04,-.36,-.02,-.12,.41,.42,.22,.48,.56,.34,.48,.61,.31,.39,.16,.06,-.01,.47,-.12,.17,.27,.29,.28,.03,.52,.37,.43,-.72,-.06,-.05,.07,-.09,-.08,.38,-.44,-.27,.25,-.12,.06,.03,.1,.53,.5,-.02,.1,.09,.11,.2,.24,-.78,-.62,-.13,.35,.14,.25,.15,-.23,.36,.28,.47,.62,.33,.27,.44,.22,.3,.8,.62,.42,-.29,.53,.19,.44,.49,-.66,-.36,.16,.28,.34,.75,.23,.47,.15,.52,.22,.1,.05,.43,-.05,.47,.02,-.27,.51,.51,.07,.55,.36,.21,.57,.36,.42,.17,.56,.22,.07,.12,.07,.17,.39,.4,.17,.3,.49,.31,.3,-.15,.06,.08,.44,-.39,-.05,-.2,-.05,.08,0,.52,.2,.46,.21,.34,.22,.2,.11,-.04,.43,-.15,.56,.54,.73,.18,.18,.19,.07,.25,-.23,.17,.4,.71,.72,-.06,-.02,.13,.46,.23,-.07,-.34,-.05,.49,.43,.37,.39,-.09,-.48,.43,.69,.22,.41,-.09,.11,.26,.08,-.01,.33,.3,-.04,.5,.12,.37,.28,-.67,.47,.48,.81,.49,-.01,-.38,.24,-.14,.07,.01,.18,-.12,-.09,.31,.67,-.15,.57,.18,.21,-.04,.41,-.23,-.1,.49,-.09,.13,.07,.02,.19,.29,.03,.55,.2,.14,.23,.2,-.26,.17,.03,.16,.26,.28,-.04,.31,.54,.22,.36,-.07,.27,-.05,.24,.24,.35,.25,.11,-.25,.23,.1,-.24,.44,.26,-.04,-.53,.13,-.29,-.02,.33,.18,.2,.28,.8,.03,.53,.13,-.36,.13,-.2,-.11,.34,.08,.48,-.04,-.31,.48,-.02,.14,.35,.48,.24,.46,.07,.47,-.2,.26,.4,.19,.13,.44,.37,.43,.07,.47,.25,.15,.29,.31,.15,.24,.01,-.14,.15,-.17,.55,-.21,.16,.22,.19,.12,.19,.26,.55,-.06,.31,-.36,.08,.42,.13,.17,-.09,.52,.21,.18,.42,-.39,.01,-.56,.62,.27,.45,.34,.31,.3,-.07,-.78,.21,-.27,-.31,.22,.2,-.15,.16,.18,.45,-.05,.64];export{a as rvalData};
