const a=[0,0,0,.53,0,.82,0,.98,0,.04,0,.68,.71,0,0,.71,.02,.61,.12,.63,.28,0,.94,0,0,0,0,.86,.02,.01,0,0,0,.16,.51,.11,0,0,0,0,.96,0,0,.38,.1,0,.14,.04,.59,0,.02,.5,.12,0,0,0,0,.36,.01,0,0,0,0,.67,.06,0,0,0,.51,.62,.27,0,0,0,0,.9,.23,0,0,.02,0,0,.9,0,.06,0,0,.26,0,0,.74,.59,.02,0,.5,.91,0,.01,.11,0,.91,0,0,.71,0,.14,.74,.33,0,0,.81,0,.56,0,.02,0,.71,0,0,0,.91,.11,.05,.74,.33,0,0,.01,.01,0,.1,0,.52,.26,.03,.8,.95,0,0,.51,0,.47,0,0,.75,.05,.72,.21,0,.07,0,.96,.97,.74,.56,.74,.7,.32,.01,0,.14,0,.76,0,0,0,0,0,.4,0,.89,.01,.15,.05,0,0,.69,.36,0,0,.94,.4,.97,0,0,.89,.89,.96,.59,.02,.22,.38,.48,0,0,0,0,.09,.73,0,0,0,0,.89,0,0,.17,.01,.02,.98,.14,0,.08,0,.39,0,.63,.95,.01,.07,0,0,0,0,0,0,.29,0,.04,.03,.99,.38,0,0,.08,.75,0,.03,.88,.94,0,0,.42,.27,.12,.02,.51,.1,.33,.51,.58,.15,0,.05,0,.69,.74,0,.25,0,.33,.91,0,0,.17,0,.06,0,.05,0,.11,.03,0,0,0,.4,.66,0,0,.49,.15,.06,0,0,.09,0,.37,0,.38,.01,.26,0,0,.16,.44,0,.01,0,.72,.67,.5,0,.01,.57,.25,0,.06,0,.82,.01,0,.46,.47,.76,.31,.75,.86,.78,0,.02,0,.15,0,0,.78,.03,0,.02,.75,.01,0,0,.07,.15,0,.98,.01,0,.03,0,0,0,.03,.99,0,0,.26,.05,0,.03,0,.01,.26,.05,0,0,0,.14,0,0,0,.15,.19,.82,.18,0,.33,0,0,.13,.66,.03,0,.34,.01,.06,0,0,.93,.36,.77,.98,.81,.27,.53,0,.03,.88,0,0,0,.56,.19,.22,.25,0,0,.11,.06,.69,.09,.3,0,0,.07,.6,0,0,0,0,0,0,.07,0,.81,.79,0,0,.11,.01,.89,0,.23,.73,0,0,0,.46,.05,0,.22,.17,0,.99,.43,0,0,0,0,0,0,0,0,.11,.01,0,0,0,.01,0,.01,0,0,.9,.76,.21,.01,0,.89,0,0,0,0,0,.04,.81,0,.29,0,0,.24,0,0,.51,.29,0,0,.13,0,.02,0,0,0,0,.01,.51,.01,0,0,0,.56,.67,.15,0,0,0,.96,.78,0,.1,.26,.16,0,0,0,.12,.38,0,0,0,0,.38,0,.51,.01,.04,.97,.95,0,0,.08,0,.27,.71,0,.66,.58,.03,.34,0,.34,.99,.29,.06,.6,.79,.24,.11,0,.57,.76,.37,.59,.4,.07,.21,.42,.45,0,.23,.13,0,0,0,0,.33,0,.14,.01,.74,0,.2,0,.43,.68,.26,.43,.96,.59,.39,0,0,.01,.01,0,0,.58,0,.01,.01,.04,.54,0,.23,0,0,0,0,.11,0,.76,.94,.67,0,.58,0,0,0,0,.64,0,0,0,.09,0,0,.85,0,.43,.32,.62,0,.61,.4,.25,.84,0,.03,.98,.62,.26,.29,.49,.29,.94,0,0,.36,0,0,.64,0,0,.01,.11,0,0,.49,.04,0,.61,0,0,.45,.04,0,0,0,.74,0,.26,0,.81,0,0,.84,0,.53,.42,.38,0,0,0,.87,.01,.64,.39,.28,0,0,0,.55,.4,0,0,0,0,0,0,.35,.76,.02,0,0,.84,.1,0,0,0,.04,.25,.01,.14,.6,.65,.08,.04,.03,0,0,0,.4,0,0,.58,.97,.1,0,.34,.01,0,.48,.42,.63,.22,.48,.1,.98,.12,.53,.73,0,0,.26,0,0,0,0,0,0,0,.18,0,.34,0,.78,0,.29,.82,.44,0,0,0,.36,.57,0,0,0,.39,0,.02,.08,.06,0,0,.74,.11,.01,0,.9,.03,0,0,.06,0,0,0,.17,.69,.06,.02,.92,0,.83,.2,0,.35,1,0,.1,0,.07,.12,0,0,0,0,.01,.38,.06,0,.98,0,0,0,0,0,0,0,0,.47,.01,0,0,0,0,0,0,.38,.87,.58,.01,0,0,0,1,0,.36,.13,0,.98,0,.31,0,.38,0,.21,.32,.72,.34,.59,0,.93,.08,.76,.48,.37,.53,.09,0,0,0,.57,.57,.01,0,.11,.02,0,.81,.42,.01,0,.23,.38,.05,.68,.75,.11,.04,0,0,.1,0,.05,.12,0,.98,.05,.05,.09,.68,.54,.25,.48,.5,.16,.49,.29,.55,.02,0,.18,0,0,.52,.42,0,0,.11,0,0,0,0,0,.92,0,.08,0,0,.26,.43,.79,.5,.42,0,.04,.84,.73,.83,.48,.26,.03,.04,0,.01,.24,.68,.04,.88,.32,.49,0,0,0,0,.62,0,0,.4,.46,0,0,0,0,0,0,.92,0,0,.66,.33,.91,0,.62,.76,.84,0,.9,.06,.51,.95,.36,.03,.89,0,0,.76,0,.61,0,.55,.29,.27,0,.44,.6,.2,0,.16,.64,.01,0,0,0,.96,.34,.48,.02,0,0,.05,0,.68,.77,.41,0,.89,.79,.02,0,.01,.21,.03,.69,.38,.41,.71,.1,.63,.93,.86,.85,.73,.24,.15,.18,.04,.15,.25,.53,0,.27,.63,.44,.04,0,0,.01,.54,0,.43,0,0,.76,.09,0,.65,.53,1,.29,.72,.37,.03,.78,0,0,1,0,.98,.04,0,.38,.6,.48,.34,.72,.01,.01,0,.88,0,.01,.28,0,.02,0,.83,.38,0,.43,.27,.46,0,0,0,0,0,0,.59,.01,0,0,0,.51,0,0,.17,0,0,.78,0,.8,.87,0,.44,.04,.01,0,0,.95,.01,0,0,0,0,.31,.16,0,0,.04,0,.01,0,0,0,0,.95,0,.28,.4,.01,0,.82,.03,.08,.19,0,.08,0,.04,0,.01,.69,.01,.96,.22,0,.7,.49,.49,0,0,.03,.21,0,0,.16,.77,.1,0,.45,.47,0,0,.74,0,.01,0,.12,.4,.01,.01,0,.26,.5,.69,.81,.5,.53,0,0,.13,.01,0,.02,0,0,0,0,.91,.9,0,.06,0,.12,0,.25,0,.26,.19,.03,.96,.01,0,.44,0,0,.57,0,.38,.01,0,.76,0,.41,.02,0,0,0,.06,0,.38,0,.14,0,.03,0,0,.37,0,.26,.09,.04,0,.18,.44,0,0,.9,.09,0,0,.78,.95,.33,.45,.13,.07,.96,.02,0,0,.51,0,0,0,.9,.49,.75,0,0,0,.14,.96,.45,.28,.07,0,.97,0,.08,.61,.64,.32,.01,0,0,.16,0,0,0,.01,.06,.78,.02,0,0,.02,.52,0,.18,0,0,.51,0,.01,0,.4,.22,0,.33,0,.3,0,.99,0,.22,.96,.49,.06,0,0,0,0,.1,.03,0,0,0,0,0,.02,.17,.18,0,0,.12,0,.16,0,0,0,0,.73,.71,.02,0,0,.44,.01,.76,.08,0,.91,.91,0,0,0,.05,.6,0,0,0,.42,0,0,.94,.9,0,.01,.12,.37,0,.91,.56,.24,0,.17,.11,0,.37,0,0,.16,.16,.12,0,.09,.98,0,0,.82,0,0,.05,0,.03,.59,0,0,.19,.61,0,.04,0,0,0,.08,0,.87,0,0,.66,.06,.29,.13,.72,0,0,.53,0,.03,0,0,.13,.38,.01,0,.03,.83,.27,.57,0,0,0,.01,0,.01,.23,0,0,.18,.97,.82,0,.57,.2,.2,.5,.01,.31,.65,.02,.22,.17,0,.76,.43,0,.08,.58,0,.02,0,0,.79,0,0,.99,0,0,0,0,.95,.04,.96,.18,.14,.28,0,.01,.46,0,0,0,0,.41,.15,.65,.18,.22,.02,.01,0,0,.01,.86,.16,.05,.02,.17,0,.04,0,0,0,0,0,.47,.96,0,.76,0,.03,0,0,0,.63,0,0,0,0,.35,.85,0,.32,.73,.32,0,.48,.52,0,.01,0,0,0,.01,.62,0,0,0,.05,0,.8,.02,0,.06,0,0,.31,.13,0,.01,.77,0,0,.6,.06,.02,.48,0,.08,0,0,.47,.28,0,0,0,0,.02,0,0,0,0,.45,.05,0,.55,0,.22,0,0,.98,.16,0,0,0,0,.17,0,0,0,0,.58,0,0,0,.68,0,0,0,0,.88,0,.43,.02,0,0,.03,.41,0,0,0,.01,.02,0,0,0,0,.41,.02,.21,0,.52,0,.24,.08,0,.96,0,0,0,0,0,.4,.93,0,0,0,0,.17,.02,0,.05,0,0,.01,0,.84,0,.09,0,.01,.45,.21,.19,.28,0,0,.09,0,.09,0,.1,.4,0,0,0,0,0,.58,0,.76,.02,.01,.76,.25,0,0,0,.8,0,.38,.51,0,.6,0,.58,.19,0,0,0,0,.67,0,0,0,0,0,0,0,0,0,.41,0,.93,0,0,.55,0,.2,.12,0,.01,.05,0,.07,.36,.86,.05,.23,.44,.32,0,0,0,.08,0,0,0,0,0,0,.38,.15,.97,0,.19,0,.4,0,0,.08,0,0,0,.29,0,0,.16,0,.8,0,0,0,0,.52,.56,.15,.75,.18,0,0,0,.11,0,.01,0,.89,.12,.04,.5,0,0,0,0,0,0,.94,0,0,0,.01,.01,.68,0,0,.33,.59,0,.6,.01,.84,.93,.07,.78,0,0,.21,0,0,.52,0,0,0,0,.29,0,0,0,0,.34,0,0,0,0,0,0,0,0,0,0,0,0,.02,0,0,0,.74,.01,.21,.81,0,.77,0,.19,0,0,0,0,0,0,0,.94,0,.42,.01,0,.52,.8,.98,0,0,0,0,.15,0,.02,0,.07,.58,.37,.52,.96,.51,0,0,.9,0,0,.29,0,0,.4,.06,.88,.06,.12,0,.99,.8,0,.08,.07,0,0,0,0,.43,0,.14,.6,0,0,.2,0,0,.81,0,.3,0,.69,0,0,.72,0,.11,.02,.56,0,.09,.48,0,0,0,0,.02,.74,0,0,0,.41,.94,.02,0,0,.88,0,0,0,.01,.42,0,0,.04,.33,0,0,0,.39,0,0,0,.94,.33,0,.01,.92,0,.65,.86,0,.59,.8,.21,0,0,0,.85,.84,.21,.74,0,.01,.36,.18,.14,.58,0,0,0,.22,0,0,0,0,0,.61,.19,0,0,.67,.2,.98,.37,.23,0,0,0,0,.1,.16,0,.08,.03,.79,.64,0,0,.36,.41,0,0,0,0,0,.78,0,.38,.1,.19,.73,.89,0,0,.26,.06,0,.03,0,.01,0,.06,0,.02,.85,0,0,0,0,0,.63,0,.74,0,0,.7,0,0,0,0,0,0,0,.22,0,.01,0,.66,0,0,0,0,0,.01,0,0,.69,0,0,.99,0,0,.73,0,0,0,0,.04,.94,.36,.34,0,.23,0,0,0,.15,.01,.49,.11,.34,.53,0,.61,.67,0,.78,.32,0];export{a as pvalData};
