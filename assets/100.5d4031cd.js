const a=[.04,.05,.3,.07,.35,.39,.34,.49,.27,.18,.09,.02,-.13,-.38,.02,.07,.14,-.05,-.22,.22,-.19,-.74,.14,-.17,.2,.43,-.77,.35,.28,-.81,.51,-.64,.4,.36,-.05,.19,.18,-.07,.28,.22,-.15,.43,.47,-.02,.08,-.18,-.11,-.04,-.54,.52,.07,.13,-.09,.31,.74,.09,.14,.58,0,.42,.91,.42,.57,.04,-.22,-.72,.53,-.18,-.16,-.02,-.05,.05,.84,-.3,.34,.01,-.23,.93,.05,-.25,-.25,.42,-.03,.45,-.18,-.65,.43,.02,-.42,.15,.59,.04,.59,-.24,-.02,.17,-.41,-.22,-.05,1,-.01,.55,.61,.05,.7,0,-.31,-.38,.4,.54,.12,.57,.13,-.23,-.22,.16,.11,-.71,-.19,.37,-.07,-.37,.29,.02,.05,.61,.3,.01,-.46,.2,.5,-.06,.02,.49,-.02,0,.59,.3,-.71,.17,.57,.29,.64,.45,.31,.02,0,.25,.68,-.08,.59,.44,.09,.11,.53,.57,-.22,.03,-.14,-.02,.43,.63,-.02,.53,.61,.9,.3,-.64,.4,.46,.28,-.43,.48,.14,.4,-.63,.12,-.74,.83,.36,-.07,.14,.11,-.01,.67,.14,.03,.19,.52,-.01,.05,.75,-.07,.82,.76,.3,.71,.34,-.01,-.54,.03,.68,.25,-.01,-.28,.68,-.07,.67,.82,-.08,.44,-.03,-.08,.13,.55,.59,.07,.51,-.64,-.66,.49,.58,.5,.37,.4,.26,.59,-.63,.54,.37,-.03,.01,.03,.26,-.17,.32,-.07,-.28,.22,-.03,.66,-.08,.44,.55,.54,.23,.03,.23,-.04,.04,.53,-.35,.74,.31,.53,-.14,-.06,.53,.21,.08,-.12,.37,.62,.54,.34,.68,-.23,.46,0,.42,-.35,-.04,.26,.29,.19,-.02,-.66,.83,.45,-.55,.75,-.78,.11,-.26,.5,.39,-.68,.17,.51,-.56,.28,.68,.41,.22,.47,.51,0,-.15,.25,.35,.1,.23,-.53,-.15,.24,.13,-.24,.71,.54,-.16,.52,.01,-.19,.28,.12,.36,.31,.49,.32,.27,.5,-.08,-.07,.49,.27,.54,.39,-.17,-.04,.52,-.37,.44,.2,-.04,-.68,-.13,-.59,.48,-.11,-.48,.76,.42,-.14,-.09,.13,.36,.09,.8,.39,.43,.7,.43,.28,.52,-.36,.11,.37,-.22,.53,.14,.27,.1,.47,-.42,-.05,-.15,.28,.25,.81,-.01,-.48,-.1,.22,.39,.84,.51,-.02,.47,-.07,.62,-.03,.09,-.07,.04,.06,.31,-.15,-.03,.36,.34,.47,-.14,.13,.01,-.07,.24,-.69,-.15,-.1,.02,-.26,.39,.44,.37,.61,0,.01,.49,.6,.38,.29,-.35,.05,.49,.37,.01,.56,.16,.76,-.27,.34,.17,-.47,-.08,.23,.23,.2,-.08,.48,.18,.39,.35,.35,.18,.55,.25,-.1,.41,.38,.75,.67,.53,.59,.03,.37,.69,.21,.42,.17,-.55,.45,.66,-.48,.26,-.09,.2,-.7,.26,.58,.37,.4,.49,-.3,.92,-.08,.11,-.13,-.07,-.42,.27,-.36,.22,.34,-.01,.64,.4,.45,.4,.28,-.82,.69,.07,.36,.58,.41,.26,.51,.09,.08,.24,-.03,.02,-.14,.01,.46,.31,.23,-.2,.35,.48,.55,.02,.47,.31,.52,.08,.37,.43,.17,.86,.71,.29,.53,.24,.37,-.46,.52,.53,.89,.44,-.18,.35,.17,0,.57,.21,-.11,.24,.06,.51,.69,.22,-.02,.28,.29,.49,.49,.13,.3,-.03,-.17,.52,-.25,-.72,-.15,0,.37,-.73,.39,.2,-.7,.25,.36,.19,.49,-.19,-.44,.24,-.22,-.06,.18,-.55,.16,.4,-.08,-.14,.03,-.15,.55,-.15,.37,.28,.17,-.05,.4,.25,-.09,-.52,.61,.11,-.2,.16,.66,.39,.74,.01,.26,.64,-.48,.12,-.12,.04,-.13,.55,.39,-.27,.45,.24,.66,.28,.35,.37,.33,.54,.13,-.75,.58,-.19,.05,.14,-.01,.07,.12,.75,-.11,0,.27,.26,-.29,.16,.36,.1,.52,.04,.43,-.15,.28,.47,.66,.09,-.17,-.56,-.33,.8,.19,.58,.39,.52,.35,-.64,.4,.53,-.62,.29,.1,.55,.29,.45,-.22,.72,-.09,-.48,.39,.35,.4,.19,-.17,-.11,-.14,.02,.24,.49,.3,.54,.09,.19,-.04,.39,.53,.46,.32,0,-.15,-.84,.57,.37,.67,.35,-.18,.17,.02,.28,.25,.42,.64,.4,-.32,.44,.48,.31,.03,-.1,.31,-.22,.3,-.04,.3,.3,.41,-.25,.45,.5,.67,.26,.14,-.11,-.04,.2,.1,-.74,.57,.34,.25,.4,.06,.04,.09,.16,-.23,-.02,.49,.53,.15,-.09,.32,.06,-.22,-.54,-.12,.37,-.38,.39,.35,-.2,.62,.59,.13,.02,.23,.01,-.02,.33,-.59,-.76,-.1,-.11,.29,.04,.21,.77,-.01,-.4,-.23,.42,.19,.1,-.27,-.32,.41,-.07,.32,-.75,.38,.33,-.27,.12,.48,-.15,-.44,.39,.39,.55,.39,.32,.65,-.08,.4,.43,.32,.63,.29,-.32,-.05,.5,.28,.65,.64,.89,.03,-.53,-.64,.31,.6,-.22,.42,-.59,.29,.59,.01,.74,.01,.25,-.49,.62,.17,.38,.51,-.23,.47,-.09,.02,.02,.34,-.44,.42,.49,-.43,-.58,.02,.31,-.05,.28,.36,.18,-.05,.27,-.21,.36,-.15,.07,.16,.24,.51,-.04,.08,-.38,-.14,.32,.3,-.69,.67,.42,-.13,.53,-.38,.48,-.34,-.61,.71,-.13,-.03,-.62,.45,-.13,-.08,.28,.55,.42,.63,-.22,.81,.34,-.22,-.25,.36,.39,-.44,.28,.38,.32,.11,.12,.06,.64,.65,.53,.19,.31,-.2,.4,-.78,.38,.02,.52,.06,.21,.8,.12,.54,.23,.47,-.21,-.34,.76,.38,-.14,-.23,-.2,.37,.37,.35,-.28,-.07,-.04,.2,.32,.12,.62,.07,.54,.29,-.76,-.39,.08,.59,.43,.16,.48,.38,-.08,.63,-.21,-.17,.24,.52,.36,.33,.26,.34,.52,.74,.19,.11,.45,.45,-.41,.82,-.09,.58,.46,-.08,-.08,.29,.41,.17,.36,.42,.32,-.07,-.11,.4,.12,.26,-.25,.44,.08,.51,.25,.46,.31,.37,-.03,.2,.05,.58,.05,.13,.17,-.42,-.06,-.58,.25,-.13,-.41,.42,-.02,.07,.44,.75,.51,.45,.4,-.68,.5,.44,.37,.27,.14,.16,.61,.62,.3,.68,.24,-.14,.63,-.03,.05,.2,0,.1,0,.07,.14,.1,-.21,-.05,.18,-.1,.04,-.27,.78,.59,-.67,.43,-.02,.53,.2,.33,0,.53,.23,.26,.71,-.05,.42,.52,.05,.19,-.09,.42,-.15,.19,.46,.11,.74,.18,.44,.07,0,.16,.26,-.63,-.04,.03,.64,.01,-.06,-.27,.36,.56,.46,.26,.36,.11,-.1,-.33,.2,.63,.36,-.75,.06,.01,.14,.73,.5,-.58,.31,.2,-.04,.59,.64,.76,.17,-.16,.38,.14,.31,.62,.39,.29,-.55,.09,.04,.89,-.48,.14,-.23,-.74,.52,-.1,.14,.48,-.53,.19,.65,.35,.31,.5,.42,.28,-.46,.42,.27,.26,.34,.24,.04,.46,-.07,-.32,.74,.86,-.1,-.46,-.5,-.04,.16,.6,.33,-.06,-.1,-.19,.09,-.3,.11,-.09,-.16,.53,-.17,.43,.45,.31,-.26,.22,.34,.47,.41,.37,.26,.34,-.11,-.01,.44,.6,.32,.23,-.2,.4,-.29,.14,-.06,.76,.4,-.05,.55,.28,.48,.33,.24,.33,.42,.06,.69,.34,.19,.42,.35,.52,.59,.29,.13,-.43,.48,.69,-.07,.05,.08,.39,-.11,.51,-.13,.01,.18,-.29,.3,.24,.1,-.23,.19,.13,.26,.07,-.16,.47,.11,-.15,.59,.61,-.12,-.17,.72,.15,.49,.43,.69,.29,.27,.2,.57,.39,.01,-.35,.12,.17,.57,0,.46,.3,.58,.31,.54,.43,.31,.35,.55,.03,-.84,.55,.47,-.76,.01,.53,.04,.32,.55,.33,.03,.08,.31,.11,.39,.32,-.01,.32,.01,-.02,.05,.47,.27,.54,.02,.16,.53,.1,.12,.57,-.52,.43,.61,-.4,.29,.2,.18,-.59,.56,-.81,-.71,.72,.1,.25,-.08,.6,-.06,.26,.23,.23,-.08,.27,-.02,.68,.32,.28,.54,.12,.23,.28,-.05,-.05,.18,-.04,.5,.58,.78,.17,.56,-.23,.56,.34,.69,.35,.68,.15,.11,-.03,-.17,.89,.44,.28,-.37,.49,.24,-.27,.42,.08,.31,.58,.44,.18,.3,.45,.25,-.24,.04,.41,.28,.13,.51,.41,-.77,-.24,.49,.21,.23,.14,.15,.36,-.04,.01,.67,.49,-.19,-.13,-.14,.19,.13,-.15,.8,-.03,-.08,.78,.57,.58,.43,.17,.52,.48,.7,.4,.55,.51,.55,-.15,.11,.04,.3,.65,.59,.04,-.19,-.3,.25,.39,.22,.33,-.13,-.04,-.06,.29,-.07,-.18,.09,.16,-.12,.32,.28,-.24,-.07,.82,.61,.45,.49,.57,.79,.2,-.03,.58,.16,.28,-.17,.57,-.04,-.25,.3,.44,-.13,.19,.74,-.54,.18,.53,.37,.37,.35,.21,.09,.22,-.23,.49,0,.04,.2,.02,.59,-.12,.03,.17,-.22,-.25,.18,-.01,.39,.55,.62,.47,.46,.15,-.01,.81,.03,.63,-.19,.15,.49,.25,.41,-.03,-.04,.06,.25,-.13,-.04,0,.36,.4,.42,.31,.53,-.34,-.06,-.09,.35,.23,-.42,.7,.6,.33,.05,.02,.34,.81,-.22,-.1,-.66,.62,-.08,.73,.47,.74,-.06,.46,.31,0,.33,.31,.37,.71,-.02,.03,.76,.19,.56,.51,.19,.21,.49,.04,.02,.14,.44,-.11,.41,.4,.82,-.23,.61,.29,.38,.31,.25,.36,.04,-.09,.67,-.02,.05,.46,.03,.48,.04,.55,.64,.44,.38,-.21,.19,.45,.21,.04,-.58,.44,.56,.51,.18,.68,-.09,.51,.35,.76,.31,.41,.73,.39,.68,.52,.18,.23,.54,.41,-.07,.39,.07,.61,.49,.23,.58,.48,-.02,.48,.35,.07,-.24,.42,.47,.56,.59,.24,.42,-.15,.02,.4,.33,.33,.5,.35,.43,.57,-.59,.77,-.12,.17,.11,.53,.38,.62,.7,.63,-.01,.37,.3,.53,-.27,-.43,.53,.17,.43,.12,.57,.09,.22,-.33,.39,.28,.63,.25,.33,-.13,-.19,.12,.59,.62,.31,-.09,-.02,.54,.4,.84,.6,.54,.61,.12,.55,-.22,.78,-.07,.27,-.1,.03,-.07,.21,.22,.16,.47,.18,.66,-.08,.41,.6,.53,.55,.55,.47,.42,.18,.34,.55,.28,.09,-.04,.53,.55,.52,.4,.31,.39,-.22,.54,.73,.61,.35,.01,.28,.25,.52,.4,.28,.15,.63,.74,.54,-.06,.78,-.05,.1,.59,-.27,.59,-.23,.32,.67,-.06,.49,-.24,.54,.07,.55,.15,.09,.53,.36,-.2,.4,.49,-.17,.01,.46,.32,-.14,.47,.52,-.05,.06,.43,.45,.28,-.17,.2,.34,.49,-.06,-.28,0,.45,.36,.28,.29,.33,-.07,-.13,.27,.52,-.42,.43,-.37,.49,.49,.5,-.07,-.32,-.07,-.13,.44,.35,.28,.6,.51,.2,.59,.55,.43,.3,.2,-.01,.03,.52,-.14,.21,.32,.31,.31,-.01,.62,.28,.56,-.8,.01,-.11,.16,-.21,-.08,.4,-.44,-.23,.26,-.12,.08,-.06,.07,.62,.57,-.07,.29,.2,.08,.27,.1,-.84,-.6,-.15,.49,.26,.42,.35,-.31,.44,.44,.56,.69,.43,.44,.58,.28,.45,.86,.66,.48,-.26,.63,.34,.55,.51,-.67,-.34,.29,.43,.31,.81,.21,.58,.21,.67,.27,.2,.17,.56,-.07,.6,.01,-.33,.5,.52,.04,.52,.43,.23,.69,.51,.52,.37,.58,.29,.08,.11,.13,.2,.31,.29,.16,.17,.4,.19,.42,-.15,.2,-.07,.37,-.32,-.03,-.22,-.06,.21,-.03,.56,.3,.56,.25,.49,.08,.13,-.07,-.1,.54,-.08,.48,.63,.77,.16,.1,.35,.23,.46,-.17,.27,.39,.76,.78,-.06,.05,.18,.43,.09,-.16,-.23,-.04,.62,.57,.57,.43,-.15,-.43,.6,.73,.36,.34,-.13,.03,.46,.21,-.01,.37,.44,.15,.53,.16,.49,.41,-.68,.38,.61,.8,.54,.02,-.37,.36,-.07,.09,-.04,.27,-.18,-.13,.48,.74,-.09,.72,.23,.09,0,.55,-.39,-.04,.52,-.1,.18,0,.07,.31,.21,-.01,.62,.34,.2,.39,.26,-.28,.19,.09,.3,.44,.4,.09,.28,.56,.41,.44,-.09,.13,-.11,.23,.38,.54,.09,.3,-.29,.17,.18,-.24,.48,.19,.08,-.55,0,-.28,-.02,.5,.31,.34,.35,.78,-.08,.61,.04,-.35,.06,-.2,-.13,.44,.2,.47,-.23,-.45,.53,.03,.14,.47,.53,.41,.56,.03,.56,-.4,.45,.54,.35,.06,.63,.32,.54,.26,.49,.31,.21,.46,.37,.25,.41,.05,-.16,.25,-.17,.67,-.24,.28,.41,.4,.25,.39,.09,.69,-.05,.21,-.4,.25,.33,.21,-.02,-.05,.67,.3,.36,.57,-.38,.01,-.55,.5,.42,.35,.44,.33,.51,.12,-.74,.17,-.36,-.22,.18,.3,-.26,.12,.34,.37,.01,.7];export{a as rvalData};
