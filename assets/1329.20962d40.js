const a=[.03,.03,0,.83,0,.57,.04,.07,.57,.32,.08,.38,.31,0,0,.39,.11,.24,.03,.54,.65,0,.32,.17,.14,0,.28,0,.11,.17,.02,.08,0,.1,.36,.07,0,.09,.01,0,.36,0,0,.34,.22,.73,.43,.01,0,.01,.61,.74,0,0,0,.08,.25,.02,.07,0,0,0,0,.21,.01,.01,0,.06,.01,.25,.59,.04,.05,.02,0,.41,.08,0,0,.02,0,.08,.31,0,.2,.01,0,.52,0,0,0,.43,.4,0,.88,.68,0,.32,.04,0,1,0,0,.38,0,.79,.68,.66,0,0,.59,.01,.26,0,.2,0,.53,0,0,.18,.78,.02,.06,.06,.77,0,0,.01,.03,0,.46,.02,.45,.02,.07,.14,.12,.04,.01,.85,0,.27,0,0,.46,.87,.69,.08,0,.19,0,.42,.77,.38,.15,.03,.01,.98,.2,0,.13,0,.58,.19,.65,0,0,0,.4,0,.75,0,.19,.01,0,0,.88,.18,.03,0,.71,.72,.41,0,0,.42,.11,.12,.62,.11,.21,.5,.72,0,0,0,0,0,.61,.01,.81,0,0,.98,0,0,.92,0,0,.41,.05,.1,.51,.01,.02,.37,.16,.11,0,0,0,0,0,0,.08,0,.63,.01,0,0,.13,.54,.32,0,.16,.35,.07,.42,.32,.36,.12,.02,.01,.26,.19,0,.06,.11,.46,.75,.07,0,0,.64,0,.67,.14,0,.03,0,.42,.13,0,0,.12,0,.05,0,.52,.01,.57,.04,0,0,0,.83,.39,0,0,0,.01,0,.05,0,.01,0,.11,0,0,.04,.19,0,0,0,.62,0,.42,.38,.18,0,.6,0,.12,.74,.01,.98,.61,0,.3,.65,.01,1,.06,.77,.03,0,0,.07,0,0,0,.87,.01,0,.25,.01,0,.05,.8,0,0,.02,.48,.46,.05,.71,0,0,0,.21,.02,0,.99,.19,0,0,.11,.01,0,.69,0,.49,.18,.01,0,.04,0,.69,0,0,.38,.38,.04,.29,.8,0,.21,0,0,.91,.23,.69,.61,.83,0,.11,.43,0,.49,0,.87,.25,.42,.38,.45,.01,.76,.47,0,0,0,.45,.25,.81,.17,0,0,.74,.15,.56,.28,.78,0,.02,.01,.6,.02,0,0,0,0,0,.02,0,.03,.9,0,0,.01,0,.25,0,0,.82,.44,0,0,.2,.1,.2,.01,.62,.35,.36,.04,0,.01,0,0,0,0,.01,0,.04,0,0,0,0,.07,0,.18,0,0,.73,.24,.73,0,0,.58,.26,0,0,0,0,.75,.28,.03,.03,0,0,.81,0,0,.53,.03,0,0,.73,0,0,0,0,0,.65,0,.52,0,0,.68,0,.09,.45,.1,.32,0,0,.02,.1,0,.21,.2,.73,0,0,0,.46,.9,0,0,0,0,.88,0,.1,0,0,.03,.14,0,0,.35,0,.52,.61,.02,.59,.24,0,.12,0,.05,.01,.42,.66,.83,.05,0,.06,.02,.29,.52,0,.17,.29,0,.04,.65,.47,0,1,.09,0,0,0,0,.47,0,.01,0,.06,0,.01,.67,.05,.18,.82,.4,.67,.01,.05,0,0,.8,.01,0,0,.05,0,0,.51,0,.15,0,.12,0,.05,0,0,0,0,.37,.63,.18,0,.02,0,0,0,0,.72,0,0,0,.01,0,.25,.18,0,.72,.81,.46,0,.27,.47,.68,.98,0,0,.24,.82,.69,.02,0,.54,.29,.51,.51,.2,0,0,.56,0,.01,0,0,0,0,.83,.29,.07,.14,0,0,0,.01,0,0,0,.63,0,.98,0,.98,0,0,.12,0,.29,.01,.29,0,0,0,0,.16,.52,.8,.36,.06,0,.01,.55,.75,.15,0,.77,0,0,0,.62,.97,.06,0,0,.92,.11,0,0,0,.02,.71,0,.56,.04,.27,.04,0,.08,0,0,0,.1,.03,0,.91,.65,.38,0,.86,.49,0,.15,.04,.15,.4,.23,.15,.44,.06,.4,.25,0,0,.28,.01,.01,.05,0,.19,0,0,.12,0,.17,.01,.13,0,.4,0,.74,.13,0,.01,.12,.36,.01,.15,0,.99,0,.61,.04,.45,.85,0,.18,.36,.71,0,.34,0,0,0,0,.89,0,0,.33,0,.77,.06,.84,0,.36,.02,.01,0,.02,0,0,0,.54,.74,0,0,0,0,0,.24,.45,0,.77,0,.04,0,0,0,0,0,0,.01,.02,0,0,0,.1,.47,.04,.01,.96,.86,.37,0,0,0,.09,0,0,.85,0,.66,.6,.02,0,.4,0,.28,.01,.11,.45,.46,0,.13,.86,.91,.31,.25,.04,.02,0,0,0,.03,.09,.29,0,.83,.02,.06,.82,.01,.02,.01,.09,1,.01,.01,.04,.4,.18,0,0,.2,.02,.24,.87,.01,.3,.01,.01,0,.94,.75,.02,.93,0,.22,.49,.17,.22,.29,0,.26,0,0,.95,.07,.49,0,0,0,0,0,0,0,.52,0,.04,0,0,0,.16,.82,.32,.65,0,.97,.03,.93,.05,.57,.14,0,.09,0,.76,.29,.58,.04,.11,.41,.04,.01,.02,0,0,.42,0,0,.02,.6,0,0,0,0,0,0,.84,0,0,.93,.79,.42,.03,.01,0,.02,0,.52,.45,0,.79,.83,.2,.98,.68,0,.21,0,.09,0,.23,0,.82,0,.35,.6,.47,0,.17,.07,.02,.01,0,0,.53,.91,0,.2,0,0,.28,0,.06,.12,.03,.2,.89,.48,0,0,.01,.03,0,.83,.4,.84,.89,.77,.03,.78,.86,.62,.31,.99,.52,.57,.15,.43,.94,0,0,.01,.06,.9,.3,.41,.04,.11,.89,0,.03,0,0,.21,.29,0,.16,.24,.16,.64,.36,.13,.01,.31,0,0,.04,.1,.49,.52,0,.03,.26,.63,.04,.36,.1,.04,0,0,0,.02,0,.88,.29,.09,.64,.48,0,.03,.52,.65,.56,0,.04,0,.04,0,.97,.01,.01,0,0,.38,.12,0,.84,0,0,.42,.03,.69,.96,0,0,.65,0,0,.03,.6,.01,0,.01,0,0,.02,.72,0,0,.01,0,.51,.67,0,.21,0,.61,0,.57,.12,.02,0,.94,0,.03,.04,.55,.03,0,.01,0,.18,.06,.01,.76,.36,.01,.02,.83,.42,0,0,0,.58,0,0,.26,.56,.01,0,.89,.16,.72,0,.49,.03,0,0,0,.18,0,0,0,.88,.04,.63,.61,.05,.7,.72,.1,.63,.28,0,.38,0,0,0,0,0,.12,0,.01,0,.46,0,.62,.02,.4,.18,.41,.79,.71,0,.32,0,0,.01,0,.71,.05,0,.73,0,.87,.02,0,0,0,0,0,.33,0,.01,0,.19,0,0,.52,0,.2,.34,.08,0,.06,0,0,0,.32,.18,0,0,.63,.25,.01,.37,0,.05,.04,0,.31,0,.82,0,0,0,.67,.52,.45,0,0,0,.23,.43,.15,.85,.34,0,.97,0,.85,.84,.02,.66,.15,0,0,0,0,0,0,.09,.12,.36,0,.12,0,.17,.83,0,.11,0,.62,0,0,0,.21,.02,.65,0,.97,0,.28,.16,.65,0,.63,.22,.88,.76,0,0,0,.71,.29,.39,0,.27,0,0,0,.06,.5,.81,0,0,.4,0,.43,0,0,0,0,.54,0,.01,0,0,.4,.03,.76,.01,0,.03,.54,0,0,0,0,.28,0,.71,.49,.96,.23,.02,.57,.31,0,.98,.01,.02,.42,0,.65,.59,0,.49,.02,0,0,0,0,.8,0,.08,0,0,.01,0,0,.37,.53,.17,.36,0,.01,.84,.57,0,.05,.01,0,.01,.53,0,.14,0,0,.13,.02,.21,.73,.34,0,.06,.19,0,0,0,0,.06,0,0,.31,.19,.93,0,0,.18,.17,.22,0,0,.03,.76,0,0,.19,0,0,.02,.65,1,0,.13,.55,0,.94,.14,.92,.03,.34,0,.99,0,.15,.16,.02,.22,.52,0,0,0,0,.4,.53,0,.63,0,0,.01,0,.36,.28,.64,.24,.9,0,0,0,.25,.22,0,0,0,.42,.62,.85,.44,.01,.02,.31,0,0,.02,.04,0,0,0,.16,0,.06,0,.45,0,0,0,.77,.13,0,.23,0,.29,0,0,.85,.57,0,.2,0,0,.02,.11,.04,.95,.48,.54,0,.37,.43,0,.01,0,0,0,.12,.21,.45,.02,.28,.01,0,.8,.79,0,.18,0,.04,.01,0,.05,0,.21,.68,0,.4,.35,.03,.41,0,0,.52,0,.34,0,0,0,0,0,0,0,0,0,.46,.49,.01,.12,.01,.08,0,0,0,.37,0,0,0,0,.2,.49,.53,0,.03,0,.45,.01,0,.02,.76,0,0,.39,0,.33,0,0,0,0,.02,.04,.26,0,0,0,.5,0,.63,0,0,0,.06,0,.02,.46,.25,0,.06,.03,.01,0,.29,0,0,0,0,.72,0,0,.7,.12,0,.67,.09,.2,0,0,0,0,0,.49,0,.11,0,.18,0,.27,.4,.34,.43,0,.35,0,.17,0,.12,.04,0,0,0,0,0,.59,.31,.08,0,0,.73,0,0,0,0,.73,0,.48,.17,0,.83,0,.03,0,0,0,0,0,.49,0,0,0,0,.03,0,.78,0,0,.31,0,.81,0,0,.76,0,.06,.3,.1,0,.02,.43,.25,.03,.77,0,0,.53,.53,0,0,.04,.09,0,0,0,.02,0,0,.45,.27,.09,0,.89,0,.68,0,0,.01,0,0,0,0,0,0,.03,.03,.75,0,0,.63,.06,.42,.51,.11,.01,.03,0,0,0,.33,.09,.01,0,.8,.3,.27,.36,0,.51,0,0,0,0,.09,0,0,0,.26,.08,.8,.79,0,.63,.01,0,.71,.01,.55,.61,.34,.91,0,0,.84,.01,0,0,0,0,.11,0,.39,0,0,0,.01,.01,0,.02,0,0,.27,.5,0,0,0,0,0,.01,.43,0,0,0,.05,0,.78,.34,0,.03,0,.05,0,0,0,0,0,0,0,.16,0,.93,.06,0,0,.29,.05,0,0,0,0,.01,0,0,0,0,.73,.63,.78,.52,.58,0,.02,.13,.94,0,.43,.82,.02,.81,.2,.79,.02,0,0,.13,.02,0,.01,.13,0,.02,0,.35,.41,0,.58,.46,0,0,0,.57,0,.1,0,.59,0,.2,0,0,.11,.41,.85,.02,.17,.02,0,.16,0,0,0,0,.16,.23,0,0,.02,.13,.26,.93,0,0,.81,0,0,.15,0,0,0,0,0,.08,0,0,0,.44,0,.03,.03,.1,.49,0,.44,.26,0,0,.87,0,.1,.47,.93,0,.06,.01,.04,.51,.04,.02,0,.58,.6,.19,0,.5,0,0,0,.01,0,0,0,0,0,.94,0,0,0,.15,.69,.19,.35,.01,0,0,0,.01,.86,0,0,.19,.62,.16,.84,0,.1,.53,.44,0,0,0,0,0,.31,.03,0,.81,.09,.03,0,0,0,.15,.1,0,0,0,.17,0,0,0,0,.2,0,0,0,0,0,.33,0,0,0,.01,.07,.4,0,0,0,0,0,0,.01,0,.12,0,.3,0,0,0,0,0,.04,0,0,.53,0,0,.3,0,.03,.7,0,0,0,0,.03,.74,.18,.96,0,.13,0,0,0,0,0,.22,.52,.01,.58,.01,.02,.08,0,.46,.24,0];export{a as pvalData};
