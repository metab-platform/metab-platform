const a=[0,0,0,.38,0,.87,.01,1,0,.01,0,.68,.85,0,0,.93,0,.62,.06,.84,.54,.02,.45,0,0,0,.02,.59,0,.1,0,0,0,.41,.37,.06,0,0,0,0,.88,0,0,.64,.24,0,.44,.16,.21,.05,.03,.99,0,0,0,0,0,.46,0,0,0,0,0,.73,0,.17,0,0,.88,.89,.49,0,0,.06,0,.91,.35,0,0,.97,0,0,.4,0,.04,.03,0,.33,0,0,.67,.44,.01,0,.5,.8,0,.05,.09,0,.45,0,0,.28,0,.42,.87,.59,0,0,.92,.01,.81,0,.19,0,.55,.1,0,0,.46,.32,0,.36,.54,0,0,.02,.15,0,.23,0,.26,.79,0,.97,.79,.03,.12,.64,0,.47,0,0,.83,.21,.91,.71,0,.07,0,.94,.89,.88,.87,.96,.17,.82,.02,0,.25,0,.56,.06,0,.01,0,.04,.36,0,.9,.23,.51,.01,0,.56,.91,.94,.05,0,.84,.52,.93,0,0,.81,.29,.26,.46,.02,.18,.3,.38,0,0,0,0,.01,.98,0,0,0,0,.63,0,0,.99,.01,.05,.51,.31,0,.22,0,.49,0,.98,.43,.44,.09,0,0,0,0,0,0,.5,.14,.03,.12,.32,.2,0,0,.07,.41,0,.02,.82,.55,.01,0,.36,.12,.02,.07,.31,.15,.02,.45,.79,.36,0,.11,0,.86,.3,0,.73,0,.25,.73,0,0,.5,0,.17,0,.16,0,.54,0,0,0,0,.98,.27,.01,0,.3,.34,.11,0,0,.04,0,.42,0,.72,.31,.33,.03,0,.28,.39,0,0,0,.62,.13,.99,0,.04,.15,.75,0,.67,0,1,0,0,.35,.1,.82,.03,.16,.85,.84,0,.06,0,.14,0,0,.43,.03,0,.1,.63,.01,0,0,.03,.34,0,.84,.5,0,.29,.01,0,0,.02,.88,0,0,.39,.06,0,.08,0,0,.15,.03,0,0,0,.8,0,0,0,.12,.07,.92,.36,0,.15,0,0,.23,.01,0,0,.26,.02,.06,0,0,.85,.25,.23,.7,.49,.16,.88,0,.18,.94,0,0,0,.78,.55,.6,.59,0,0,.08,.16,.39,.08,.25,0,0,.21,.4,0,0,0,0,0,0,0,0,.85,.87,0,0,.27,0,.34,0,.93,.63,0,0,0,.89,.03,0,.22,.11,0,.73,.62,0,.03,0,0,0,0,0,0,.13,.12,0,0,0,.12,0,0,0,0,.81,.18,.53,.21,0,.72,0,0,0,0,.01,.83,.33,0,.41,0,0,.31,0,0,.23,.32,0,0,.3,0,.09,0,0,0,0,.15,.41,0,0,0,0,.64,.6,.31,0,0,0,.53,.67,0,.03,.04,.32,0,0,0,.04,.96,0,0,0,0,.73,0,.61,.12,.3,.67,.68,.02,0,.42,0,.88,.26,0,.95,.11,.01,.4,0,.28,.41,.18,.09,.99,.61,.19,0,.02,.42,.5,.36,.39,.48,.63,.07,.7,.4,0,.09,.18,0,0,0,0,.28,0,.2,.01,.36,0,.56,0,.52,.78,.06,.13,.94,.44,.55,0,0,.02,0,0,0,.13,0,.15,.01,.56,.07,0,.14,0,0,0,0,.67,0,.21,.54,.94,0,.66,0,0,0,0,.42,0,0,0,.12,0,.04,.88,.03,.23,.24,.34,0,.65,.32,.07,.98,0,.1,.84,.83,.37,.32,.22,.27,.98,.02,0,.37,0,.01,.4,0,0,.14,0,0,0,.2,.07,.02,.69,0,0,.93,.01,0,.01,0,.57,0,.36,0,.59,0,0,.62,0,.55,.1,.86,0,0,0,.61,.02,.47,.35,.37,0,0,0,.94,.15,.05,0,0,0,0,0,.13,.88,.09,0,0,.89,.02,0,0,0,.06,.36,.02,.28,.11,.5,.12,0,.11,0,0,0,.19,0,0,.81,.96,.05,0,.53,.08,0,.1,.28,.81,.07,.33,.12,.84,.09,.22,.39,0,0,.44,0,0,0,0,.01,0,0,.11,0,.95,0,.71,0,.23,.44,.23,0,0,0,.75,.89,0,0,0,.55,0,.1,.9,.06,0,0,.27,.65,0,0,.59,.02,.03,0,.01,0,0,0,.08,.89,.11,.04,.93,0,.46,.2,0,.15,.97,0,.11,0,.4,.4,0,0,0,0,.04,.69,.07,.01,.97,0,0,0,.06,0,0,0,0,.46,0,0,0,0,0,0,0,.24,.99,.97,.05,0,.02,0,.79,0,.79,.19,0,.77,0,.38,0,.88,0,.35,.14,.47,.43,.98,0,.9,.04,.69,.29,.51,.5,.07,.02,0,0,.79,.21,.02,0,.16,.21,0,.87,.73,.27,0,.61,1,.08,.44,.83,.05,.58,0,0,.43,0,.12,.35,0,.49,.14,.07,.01,.33,.8,.22,.3,.55,0,.37,.31,.34,.15,0,.15,0,0,.88,.38,0,0,.5,0,0,0,0,0,.82,0,.02,0,0,.06,.22,.99,.79,.75,0,.02,.79,.54,.46,.42,.83,.32,.02,0,0,.46,.54,.04,.92,.26,.84,0,0,0,0,.97,0,0,.39,.37,0,0,0,0,0,.01,.53,0,0,.84,.82,.85,0,.71,.78,.83,0,.74,.07,.53,.65,.39,.35,.6,0,0,.8,0,1,0,.38,.78,.33,0,.11,.94,.7,0,.19,.75,.01,0,0,0,.45,.93,.27,.17,0,0,.2,.01,.25,.59,.45,0,.3,.77,.02,0,.03,.17,.12,.19,.69,.4,.67,.18,.29,.86,.63,.53,.42,.15,.15,.34,.09,.11,.87,.8,0,.36,.94,.47,.01,0,0,.03,.15,0,.7,0,0,.2,.08,0,.42,.14,.97,.21,.5,.03,.02,.94,0,0,.38,0,.84,.17,0,.21,.42,.28,.32,.6,.02,.11,0,.68,0,.02,.66,0,.03,0,.6,.35,0,.58,.79,.73,0,.15,.01,.08,0,0,.27,.03,.04,0,0,.53,0,0,.17,0,0,.46,.03,.5,.77,.02,.08,.18,.01,.03,0,.18,.01,0,.02,0,0,.39,.13,0,0,.05,.01,0,0,0,0,0,.63,0,.73,.21,0,0,.82,.25,.15,.06,0,.09,0,.02,0,.05,.4,0,.83,.4,0,.88,.39,.19,0,0,.02,.39,0,0,.33,.29,.06,0,.89,.81,0,0,.88,0,0,0,.21,.5,.01,.04,0,.3,.63,.87,1,.41,.91,0,0,.32,.2,0,.01,0,0,0,0,.29,.31,0,.04,0,.04,0,.23,0,.65,.09,.12,.63,.02,0,.35,0,0,.07,0,.11,.03,0,.6,0,.87,.01,0,0,0,.57,0,.45,0,.03,0,.01,0,0,.62,0,.32,0,.01,0,.43,.62,0,0,.62,.19,0,0,.84,.66,.23,.92,.28,.07,1,.34,0,0,.09,0,0,0,.46,.58,.94,0,0,0,.38,.67,.24,.6,0,0,.51,0,.12,.74,.58,.19,.07,0,0,.17,0,0,0,.12,.05,.95,.01,.01,.04,0,1,0,.71,0,.01,.05,.01,0,0,.14,.25,0,.59,0,.41,0,.98,0,.39,.87,.36,.04,0,0,0,.01,.32,.4,0,0,0,0,0,.14,.22,.25,0,.03,.22,0,.28,0,0,0,0,.81,.79,.04,0,0,.48,.02,.61,.03,0,.76,.44,0,0,0,.12,.74,0,0,0,.31,.05,0,.93,.62,0,0,.01,.49,0,.2,.89,.29,0,.57,.15,.02,.15,0,0,.26,.04,.52,0,.12,.96,0,0,.47,.1,0,.61,0,.04,.5,0,0,.77,.33,0,.07,.02,0,0,.01,0,.9,.01,.11,.76,.44,.03,.14,.91,0,0,.65,0,.01,0,0,.04,.13,.01,0,.01,.76,.34,.41,0,0,0,.01,.01,0,.19,0,0,.08,.53,.58,0,.95,.44,.06,.83,0,.31,.89,.06,.62,.14,0,.44,.52,0,.2,.22,0,.02,0,0,.92,.02,.01,.61,0,0,0,0,.74,.09,.58,.15,.27,0,0,.02,.23,0,0,0,0,.48,.63,.81,.25,.8,0,.18,0,0,.01,.46,.09,0,.16,.1,0,.33,0,0,0,0,0,.2,.44,0,.49,0,.09,0,0,.17,.53,0,0,0,0,.79,.85,0,.37,.91,.28,0,.75,.18,0,.01,0,0,0,0,1,0,0,0,.15,.01,.3,.06,0,.03,0,0,.74,.11,0,.02,.83,0,0,.68,.05,.16,.43,0,.17,0,0,.32,.4,0,0,0,0,.48,0,0,0,0,.11,.3,0,.97,0,.04,0,0,.78,.16,0,0,0,0,.28,.06,0,0,0,.71,0,.02,0,.88,0,0,0,0,.5,0,.81,.12,0,0,0,.97,0,0,0,0,.01,0,0,0,0,.99,.34,.39,0,.76,0,.51,.16,0,.28,0,0,.03,0,0,.05,.44,0,0,0,0,.05,.34,0,0,0,0,.01,0,.21,0,.02,0,.28,.95,.86,.41,.65,0,0,.05,0,.2,0,.6,.99,0,0,0,0,0,.67,.01,.48,.14,0,.66,.12,0,0,0,.64,0,.51,.67,0,.55,0,.15,.47,0,0,0,0,.44,0,0,0,0,0,0,0,0,0,.16,0,.59,0,0,.89,0,.37,.13,0,.19,.05,0,.05,.4,.95,.38,.2,.4,.77,0,0,0,.11,0,0,0,0,0,0,.54,.29,.6,0,.51,0,.24,.12,.08,.49,0,0,0,.31,0,0,.26,0,.24,0,0,0,0,.19,.95,.22,.72,.08,0,0,0,.06,0,.11,0,.77,.28,.02,.6,0,.04,0,0,0,0,.8,0,0,0,.12,.03,.49,0,0,.11,.26,0,.51,0,.66,.82,.04,.39,0,0,.1,0,0,.25,0,0,.02,0,.65,0,0,0,0,.12,0,0,0,0,0,.01,0,0,0,0,0,0,.23,0,0,0,.88,.47,.27,.61,0,.32,0,.72,0,0,0,0,0,0,0,.97,0,.75,.02,0,.89,.24,.76,0,0,0,0,.22,0,0,0,.16,.48,.36,.79,.74,.76,0,0,.49,.13,0,.08,0,.03,.24,.17,.63,.07,.09,0,.55,.95,0,.15,0,0,0,0,.02,.62,0,.1,.21,0,0,.01,.09,0,.8,0,.74,0,.98,0,0,.99,0,.07,.13,.45,0,.03,.1,0,0,0,0,.01,.29,0,0,0,.17,.58,.19,0,0,.88,0,0,0,0,.18,0,0,.5,.23,.01,0,0,.44,.01,0,0,.55,.52,0,0,.99,0,.77,.51,0,.43,.66,.06,0,0,0,.89,.82,.09,.75,0,0,.55,.72,.15,.51,0,0,0,.94,0,0,0,0,0,.98,.51,0,0,.96,.06,.65,.19,.3,0,0,.01,0,.43,.01,0,.07,.01,.76,.48,0,.08,.38,.41,0,0,0,0,0,.52,0,.18,0,.73,.74,.49,0,0,.08,.01,0,0,0,0,0,.02,0,.02,.73,0,0,0,0,0,.09,0,.22,0,0,.22,0,0,0,0,0,0,0,.85,0,0,0,.24,0,0,0,0,0,.01,0,0,.15,0,0,.67,0,0,.9,0,0,0,0,.29,.58,.56,.12,0,.53,0,0,0,.39,.22,.43,.18,.72,.12,0,.53,.36,0,.4,.27,0];export{a as pvalData};
