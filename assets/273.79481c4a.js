const a=[0,0,0,.26,0,.9,.05,.54,0,.01,0,.79,.56,0,0,.88,0,.76,.02,.46,.97,.08,.64,0,0,0,.13,.67,.35,.71,0,.03,0,.39,.01,.36,0,0,.01,0,.69,0,0,.74,.61,0,.23,.69,.13,.62,.01,.95,0,0,.01,0,0,.93,.03,0,.01,0,0,.3,.05,.81,0,0,.9,.92,.66,0,.03,.03,0,.82,.41,.03,0,.71,0,0,.76,0,.09,.09,0,.81,0,0,.71,.77,.22,0,.17,.08,0,.59,.04,.01,.45,0,0,.33,0,.97,.28,.65,0,0,.72,.04,.84,0,.45,0,.42,.62,.01,0,.38,.27,0,.18,.74,0,0,0,.81,0,.05,0,.39,.57,0,.36,.5,.35,.93,.51,0,.73,0,0,.9,.13,.78,.04,0,.15,0,.89,.79,.2,.18,.55,.58,.32,.24,0,.13,0,.92,.22,.14,.12,0,.54,.08,0,.7,.95,.22,.01,0,.75,.79,.58,.39,0,.89,.95,.54,0,0,.38,.04,.03,.57,.08,.08,.56,.36,0,0,0,0,.03,.6,.04,0,0,0,.28,0,0,.26,.28,.15,.06,.07,0,.99,0,.91,.03,.27,.88,.73,.25,0,.02,0,0,0,0,.16,.91,.05,.86,.29,.27,0,0,.21,.39,0,0,.3,.33,.01,0,.1,.02,.21,.24,.42,.04,.11,.24,.83,.05,.01,.27,0,.26,.5,0,.68,0,.12,.19,0,0,.06,0,.18,0,.03,0,.69,.03,0,0,0,.29,.09,.06,0,.24,.85,.53,0,0,.68,0,.71,0,.41,.52,.37,.4,0,.73,.88,0,0,.01,.29,.64,.53,0,.4,.21,.53,0,.82,0,.16,0,0,.21,.06,.9,.03,.81,.49,.39,0,.04,0,.63,0,0,.24,.82,0,0,.75,.59,0,0,.23,.48,.02,.69,.96,.01,.95,.11,0,0,0,.96,0,0,.57,.63,0,.56,0,0,.04,.88,0,0,.01,.85,0,0,0,.1,.64,.27,.38,0,.38,0,.02,.24,.07,.02,.02,.03,.04,.45,.01,0,.94,.99,.23,.75,.18,.13,.96,0,.35,.94,0,0,0,.14,.46,.9,.93,0,.01,.03,.01,.74,.08,.63,0,0,.43,.45,0,0,0,0,0,0,.01,0,.99,.3,0,0,.78,0,.29,0,.31,.25,.04,0,0,.76,.46,0,.03,.01,0,.29,.12,0,.03,0,0,0,0,0,0,.54,.08,0,0,0,.85,0,0,0,0,.17,.36,.21,.49,0,.49,0,0,0,0,.15,.92,.25,0,.52,0,0,.86,0,0,.03,.87,0,0,.12,0,.43,0,0,0,.03,.05,.71,.01,0,0,0,.55,.69,.01,0,0,0,.27,.91,0,.02,.56,0,0,0,0,.05,.15,0,0,.01,0,.4,0,.82,.01,.42,.31,.68,.32,0,.48,0,.69,.48,0,.79,.01,0,.45,0,.98,.15,.16,.05,.91,.82,.84,0,0,.16,.36,.74,.09,.28,.58,.06,.97,.21,0,.31,.85,0,0,0,0,.18,0,.03,.01,.32,0,.87,.38,.22,.53,.05,.04,.37,.24,.61,0,0,.04,.01,0,0,.23,0,.38,.07,.57,.01,0,.98,0,0,0,0,.48,0,.25,.63,.7,0,.25,0,0,0,.01,.07,0,0,0,.1,0,.25,.68,.14,.03,.08,.66,0,.13,.49,.03,.99,0,.32,.41,.22,.05,.31,.85,.61,.09,.44,.01,.79,0,.03,.07,.01,.04,.67,0,0,0,.16,.1,.09,.59,0,.02,.68,.03,0,0,0,.62,0,.6,0,.67,0,0,.9,0,.58,.03,.46,0,0,0,1,0,.15,.3,.61,0,0,0,.58,.58,.48,.01,0,0,0,0,.39,.66,0,0,0,.21,.01,0,0,0,.04,.29,.01,.01,.02,.31,.01,0,.01,0,0,0,.85,0,0,.68,.91,.04,0,.96,.21,0,.22,.06,.28,.02,.07,.74,.37,.21,.12,.91,0,0,.41,0,0,0,.05,.14,0,0,.02,0,.73,0,.31,0,.05,.4,.23,0,0,0,.55,.62,0,0,0,.45,0,.7,.67,.14,.1,0,.55,.64,0,0,.78,.03,.49,0,.1,0,0,0,.03,.93,.37,0,.19,0,.44,.92,.01,.44,.92,0,.72,0,.77,.71,0,0,0,.04,.11,.68,.42,.02,.08,0,0,0,.48,0,0,0,.05,.37,.01,0,0,0,0,0,.2,.56,.86,1,.05,0,.04,0,.21,0,.63,.21,0,.16,.1,.15,0,.52,0,.83,.03,.66,.17,.19,0,.26,.02,.78,.35,.22,.53,.02,.1,0,0,.27,.04,.43,0,.61,.98,0,.4,.89,.78,0,.57,.38,.16,.72,.58,.42,.95,0,0,.38,0,0,.04,0,.23,.92,.02,0,.08,.24,.87,.01,.9,.9,.67,.59,.4,.55,0,.07,0,0,.89,.49,.01,0,.23,0,0,0,.03,0,.61,0,.02,0,0,.07,.45,.61,.64,.79,0,.05,.59,.2,.05,.32,.62,.77,.01,0,.01,.86,.35,.01,.82,.01,.47,0,0,0,0,.97,0,0,.96,.55,0,0,0,0,0,.07,.42,0,0,.11,.8,.54,0,.92,.99,.9,0,.24,.22,.33,.87,.28,.49,.63,0,0,.12,0,.75,0,.34,.5,.67,0,.26,.64,.45,0,.18,.83,.01,0,0,0,.79,.3,.76,.47,0,0,.01,.09,.91,.26,.13,0,.05,.19,.18,0,.07,.81,.15,.29,.22,.39,.44,.35,.71,.73,.52,.19,1,.07,.03,.83,.05,.1,.47,.61,0,.68,.53,.07,0,0,0,0,.2,0,.43,0,.01,.26,.52,0,.52,.05,.71,.08,.71,.03,.53,.21,0,0,.38,0,.86,.36,0,.13,.5,.54,.9,.1,.01,.27,0,.31,0,.06,.89,0,.29,0,.94,.01,0,.65,.5,.88,0,.42,.17,.6,0,0,.13,.25,.34,.02,0,.6,0,0,.16,0,0,.5,.08,.5,.98,.09,.06,.34,0,.11,0,.29,0,0,.08,0,0,.15,.6,0,0,.03,.01,0,0,0,0,0,.55,0,.9,.1,.05,.04,.67,.43,.17,.02,0,.5,0,.05,0,.56,.05,.01,.24,.67,0,.68,.13,.05,0,0,.01,.74,0,0,0,.47,0,0,.15,.65,0,0,.96,0,0,0,.83,.33,0,.22,0,.23,.34,.96,.44,.36,.91,0,0,.28,.8,0,0,0,0,0,0,.38,.01,0,.79,0,.14,0,.09,0,.82,.03,.18,.3,.01,0,.22,0,0,.85,0,.19,.15,0,.7,0,.54,.04,0,0,0,.54,0,.79,0,.97,0,0,0,0,.23,0,.09,0,.02,0,.39,.61,0,0,.69,.1,0,0,.95,.88,.39,.51,.88,.74,.68,.93,0,0,.19,0,0,0,.98,.9,.97,0,0,0,.33,.81,.55,.55,.13,0,.35,0,.27,.29,.77,.07,.68,.01,0,.07,0,0,0,.87,.05,.7,.15,.13,.58,.09,.38,0,.77,0,.02,.42,.02,0,.02,.23,.19,0,.65,0,.18,.03,.76,0,.12,.86,.1,.07,0,0,0,0,.64,.41,0,0,0,0,0,.63,.52,.11,0,.15,0,0,.69,.02,0,0,.05,.11,.89,.09,0,0,.81,.43,.02,0,.01,.29,.03,0,0,0,.53,.74,0,0,0,.05,.06,0,.62,.98,0,0,.01,.03,0,.09,.9,.18,0,.91,.26,.07,.65,0,0,.65,.21,.81,.08,.05,.53,0,0,.11,.18,0,.51,0,.36,.88,0,0,.59,.25,0,.91,.25,.01,0,.05,0,.87,.08,.22,.86,.62,0,.14,.71,0,0,.91,0,.39,.01,0,0,.05,.1,0,0,.34,.33,.02,0,0,0,.6,.02,0,.11,0,0,.18,.13,.29,0,.98,.9,.06,.68,0,.15,.49,.17,.46,.1,0,.53,.82,0,.69,.61,0,.19,0,0,.92,.14,.01,.9,.08,0,.01,0,.67,.03,.67,.08,.83,0,0,.09,.36,0,0,0,0,.55,.98,.84,.51,.44,0,.45,.01,0,.01,.51,.01,0,.93,.07,0,.69,0,.46,0,0,0,.16,.22,0,.31,0,.08,0,.1,.63,.45,.02,0,0,.04,.96,.59,0,.26,.45,.33,0,.95,.06,0,.48,0,0,0,.14,.48,0,0,.06,.17,.01,.08,.16,0,.07,0,0,.53,.63,0,.01,.81,.01,0,.63,.01,.39,.01,0,.62,0,0,.99,.95,0,0,0,0,.82,0,0,0,0,0,.9,0,.46,0,.61,0,0,.72,.73,0,0,0,0,.08,.18,0,0,.08,.93,0,0,0,.5,0,0,0,0,.6,0,.37,.32,0,0,.01,.64,0,0,0,.08,.01,0,0,0,0,.83,.99,.59,.06,.56,0,.87,.11,0,.15,0,0,.14,0,0,.08,.49,0,.05,0,0,.03,.8,0,0,.03,0,.05,0,.03,0,.02,0,.91,.54,.89,.14,.64,.01,0,.19,0,.06,.01,.58,.94,0,0,0,0,0,.03,.17,.81,.08,.01,.56,.08,0,0,0,.37,0,.02,.51,.01,.76,0,.03,.38,0,0,0,0,.75,0,.01,0,0,0,0,.01,0,0,.12,0,.37,0,0,.63,0,.04,.16,0,.2,.08,0,.14,.14,.51,.77,.88,.76,.77,0,0,0,.02,0,0,0,0,0,0,.84,.13,.25,0,.9,0,.3,.05,.04,.33,0,0,0,.08,0,0,.39,0,.34,0,0,0,.01,.93,.88,.35,.48,.28,0,0,0,.06,0,.06,0,.57,.89,.01,.7,0,.08,0,0,0,0,.98,0,0,0,.67,.04,.4,0,0,.09,.84,0,.22,0,.31,.93,.1,.16,0,0,.08,0,0,.02,0,.01,.15,0,.9,0,0,0,0,0,0,0,0,0,0,.42,0,0,0,0,0,0,.69,0,0,0,.47,.61,.81,.49,0,.45,0,.74,0,0,0,0,0,0,0,.94,0,.33,.12,0,.38,.17,.18,0,0,0,.01,.82,0,.11,0,.1,.66,.18,.38,.84,1,0,0,.23,.31,0,.06,0,.24,.09,.8,.65,.16,.07,0,.44,.29,0,.92,.18,0,.04,0,.49,.26,0,.02,.11,0,0,0,.35,0,.24,0,.8,0,.97,.04,.2,.34,0,.13,0,.78,0,0,.34,0,0,0,0,.02,.46,0,.1,.01,.22,.34,.36,0,0,.59,0,0,.03,.04,.86,0,0,.72,.11,.1,0,0,.32,.01,0,0,.46,.84,0,.01,.49,0,.22,.6,0,.82,.13,.07,0,0,0,.43,.39,.04,.51,0,0,.29,.96,.73,.27,0,0,0,.11,0,0,0,0,0,.29,.99,0,0,.24,0,.92,.07,.31,0,0,.02,0,.54,0,0,.23,.14,.46,.7,0,.27,.81,.28,0,0,0,0,0,.21,.01,.03,0,.66,.42,.07,0,0,.58,.94,0,.36,0,0,0,.16,0,.5,.72,0,0,0,0,0,.03,0,.11,0,0,.83,0,0,0,0,0,0,0,.2,0,0,.13,.68,0,0,0,0,0,.01,0,0,.14,0,0,.68,0,0,1,0,0,0,0,.21,.49,.18,.12,0,.62,0,0,0,0,.93,.37,.87,.95,.02,0,.58,.8,0,.39,.46,0];export{a as pvalData};
