const a=[0,0,0,.34,0,.4,.2,.07,0,.11,0,.93,.63,0,0,.87,0,.58,.04,.92,.87,.35,.58,0,0,0,.97,.18,.39,.15,0,.42,0,.87,.03,.35,0,0,.02,0,.31,0,.01,.59,.79,0,.02,.69,.01,1,0,.7,0,0,.67,0,0,.54,.14,0,.38,0,0,.18,0,.51,0,0,.43,.87,.45,0,.67,.15,0,.41,.63,.73,0,.19,0,0,.72,0,.13,.71,0,.23,0,0,.04,.8,.55,0,.05,.02,0,.71,.02,.52,.28,0,.05,.18,.03,.74,.81,.09,0,0,.46,.64,.63,0,.3,0,.26,.99,.02,0,.54,.95,0,.05,.12,.03,0,0,.98,0,0,0,.41,.28,0,.38,.01,.48,.37,.82,0,.63,0,0,.87,.18,.59,0,0,.07,0,.77,.72,.21,.02,0,.9,.63,.61,0,0,0,.78,.86,.34,.77,0,.78,0,0,.9,.95,0,0,0,.2,.89,.04,.34,0,.6,.68,.59,0,.04,.21,.15,.3,.05,.15,.33,.44,.18,0,0,0,0,.04,.46,.17,0,0,0,.5,0,.09,.12,.22,.49,.06,.01,0,.63,0,.66,.6,.76,.26,.2,.5,.01,.31,.04,0,0,0,0,.59,.62,.1,.6,.03,0,0,.19,.7,0,0,.07,.12,.58,0,.01,0,.57,.15,.1,.44,.09,.22,.04,.05,.68,.54,0,.78,.73,0,.82,0,.01,0,0,0,0,.07,.73,0,0,0,.45,.05,0,0,0,.61,0,.9,0,.02,.02,.17,0,0,.46,0,.02,0,.08,.88,.15,.29,0,.45,.11,.01,0,.05,.54,.87,.95,0,.85,.72,.31,0,.53,0,0,0,0,.15,.19,.84,.65,.95,.26,.03,0,.49,0,.7,0,0,.03,.28,0,.01,.57,.55,0,0,.33,.6,.05,.33,.34,.06,.57,.19,.03,.01,.01,.5,0,0,.69,.14,.02,.66,0,0,.08,.47,.1,0,.19,.52,0,0,0,.44,.09,.2,.43,0,.86,0,.75,.19,.01,.03,0,0,.86,.66,.02,0,.48,.06,.15,.56,.08,.34,.88,.15,.82,.81,0,0,0,.2,.26,.57,.83,0,.04,.3,.02,.16,.18,.2,0,0,.14,.38,0,0,0,0,0,0,0,0,.15,.61,0,0,.03,0,.96,0,.6,.41,.01,0,0,.91,.47,0,0,0,0,.34,0,0,.36,0,0,0,0,0,0,.03,.35,.24,0,0,.15,.04,0,.16,0,.06,.32,.01,.44,0,.04,0,0,0,0,.82,.32,.41,0,.85,0,0,.02,0,0,.09,.02,0,0,.08,0,.31,0,0,0,.08,.41,.31,.62,0,0,0,.17,.91,.52,0,0,0,.01,.47,0,0,.34,.02,0,0,0,0,0,0,0,.79,0,.13,0,.27,.16,.96,.27,.21,.54,0,.83,0,.53,.55,.1,.91,.17,.02,.31,0,.16,.01,.1,0,.83,.72,.23,.04,0,.25,.36,.05,.21,.01,.89,.02,.15,0,0,.22,.07,0,0,0,0,.19,.01,0,.06,.7,0,.53,.66,.07,.98,.24,.1,.16,.24,.99,0,0,0,0,0,0,.25,0,.52,.08,.95,.03,0,.53,.04,0,0,0,.86,0,.68,.15,.68,0,.07,0,0,0,.19,.73,0,0,0,.48,0,.88,.01,.07,.06,.06,.62,0,.03,.44,.02,.71,0,.17,.09,.43,0,.02,.13,.61,.01,.31,.01,.11,0,.04,.29,.37,.12,.36,.04,.01,0,0,.01,.65,.56,0,.02,.19,0,0,0,0,.79,.11,.95,0,.01,0,0,.42,0,.95,.12,.46,0,.01,0,.06,.02,.08,.18,.16,0,0,0,.5,.52,.3,.26,0,0,0,0,.52,.64,0,0,0,0,.19,0,0,0,.01,.4,0,0,.05,.29,.1,0,.19,0,0,0,.73,.04,0,.93,.92,.06,0,.81,.77,0,0,.63,.95,.06,.41,.6,.91,.78,.11,.67,0,0,1,0,0,.02,.32,.21,0,0,.34,0,.43,.21,0,0,.12,.6,.32,0,0,.04,.01,.97,0,0,0,.28,.09,.75,.66,.22,.56,0,.25,.5,0,0,.93,.13,.9,0,.1,0,0,0,.02,.1,.93,0,0,0,.7,.04,.04,.95,.47,0,.29,0,.97,.54,0,0,0,.43,.83,.84,.87,.11,.01,.01,0,0,.83,0,0,0,.79,.6,.02,.02,0,0,0,0,.01,.21,1,.88,.01,0,.09,0,.01,0,.08,.12,0,.12,0,.03,0,.61,0,.63,.6,1,.59,.02,0,.03,.05,.27,.6,.46,.78,.04,.5,.05,0,.27,0,.8,0,.01,.98,.02,.5,.35,.55,0,.63,.52,.79,.09,.03,.91,.7,0,0,.35,.01,0,0,.02,.59,.22,0,0,.05,.43,.04,0,.05,.89,.58,.63,.77,.43,0,.11,0,0,.68,.01,0,0,.21,0,0,0,.52,0,.58,0,.02,0,0,.24,.96,1,.37,.77,0,.01,0,.33,0,.51,.02,.45,0,0,.85,.31,0,0,.57,0,.59,0,0,0,0,.85,0,0,.09,.32,0,0,0,0,0,.96,.22,0,0,.1,.79,.1,0,.28,.09,.49,0,.06,.01,.05,.9,.21,.32,.02,0,0,0,0,.38,0,.34,.34,.54,0,.23,.4,.25,0,.41,.81,0,0,0,0,.11,.25,.01,.25,0,0,0,.28,.51,.84,.02,0,.16,.25,.97,.05,0,.07,.08,.85,0,.28,.96,.78,.29,.55,.83,.33,.31,.07,0,.85,.07,.14,.68,.11,.01,.04,.05,0,.01,0,0,0,.13,0,.03,0,.51,.24,.09,0,.96,.05,.66,0,.64,.05,.83,.31,0,0,.07,0,.53,.04,0,.33,.26,.7,.02,.5,.01,.15,0,.01,0,.05,.18,0,.51,.02,.56,0,0,.04,.6,.97,0,.39,.77,.71,0,0,.26,.46,.64,.41,0,.6,0,0,0,0,0,.55,.31,.76,.44,.87,.04,.12,.01,.36,0,.73,0,0,.14,0,0,.03,.39,0,0,.01,.08,0,0,0,0,0,.77,0,.46,.18,.65,.92,.82,.9,.95,.03,0,.46,0,.1,0,.73,.1,.06,.44,.85,0,.04,.77,0,0,0,.04,.28,0,0,0,.86,0,0,.33,.45,0,0,.66,0,0,0,.67,.62,.01,.94,0,.29,.01,.86,.23,.55,.92,0,0,.18,.39,0,.18,0,0,0,0,.01,.07,0,.3,0,.12,0,.14,0,.68,0,.16,.45,0,.01,.12,0,0,.27,0,.27,.02,0,.99,0,.59,.02,0,0,0,.9,0,.75,0,.37,0,0,0,0,.01,0,.08,.06,0,0,.01,.21,0,0,0,0,0,0,.7,.95,.3,.9,.12,.1,.03,.27,0,0,.26,0,0,0,.17,.9,.71,0,0,0,.27,.93,.42,.75,.08,0,.81,0,.08,.05,.14,.11,.09,.17,.01,.01,0,0,0,.17,0,.24,.72,.69,.89,.55,.36,0,.96,0,0,.27,.01,.01,.02,.01,.07,0,.14,0,.1,.01,.91,0,.04,.61,.28,.02,0,0,0,0,.08,.31,0,0,0,0,0,.07,.34,.07,0,.92,0,0,.17,.41,0,0,.88,.06,.12,.97,0,0,.63,.51,.03,.02,0,.03,0,0,0,0,.32,.44,0,0,0,.08,.19,0,.84,.85,0,0,.01,.62,0,.09,.75,.02,.02,.99,.09,.94,.4,0,0,.38,.82,.3,.94,0,.04,0,0,.14,.07,0,.25,0,.32,.59,.07,0,1,1,0,.4,.1,0,0,.31,0,.22,0,.01,.79,.06,0,.08,.38,.09,0,.07,0,.43,.53,0,0,0,.01,0,0,0,.27,0,0,0,0,.35,.94,.22,.06,0,0,.4,.03,.09,0,.41,.87,.63,.81,0,.81,.89,.87,.11,.09,0,.84,.86,0,.6,.29,0,.54,0,0,.63,.23,.65,.43,.84,0,0,0,.58,0,.82,.05,.78,0,0,.02,.07,0,0,0,0,.02,.91,.77,.83,0,0,.71,.47,0,.19,.15,0,.01,.03,.2,0,.88,0,.13,0,0,.13,.16,.02,0,.52,.01,0,0,.86,.63,.41,.41,0,0,.74,.56,.05,.01,.33,.48,.42,0,.54,.83,0,.14,0,.13,0,.47,.04,0,0,.01,.03,.56,.12,.28,0,.02,0,0,.02,.25,.28,.01,.18,.19,0,.89,.04,.99,0,0,.51,0,0,.83,.13,0,.05,0,0,.02,0,0,0,0,0,.55,0,.33,0,.32,0,0,.78,.17,0,0,0,0,.04,.35,0,0,.65,.05,0,.05,0,.91,0,0,0,0,.97,0,.03,.54,.02,0,0,.57,0,0,0,.64,.66,0,0,0,0,.61,.65,.31,0,.02,0,.2,.03,0,.49,.01,.03,.58,0,0,.64,.35,0,.17,.11,0,.03,.11,0,.05,.97,0,.56,0,.13,0,.23,.09,.09,.04,.89,.15,.27,.02,0,.61,0,.11,.44,.6,.13,0,0,0,0,0,0,.01,.2,.87,0,.86,.06,0,0,0,.01,0,0,.77,.29,.22,0,0,.27,0,0,0,0,.37,0,.42,0,.12,0,0,0,0,0,.64,0,.92,0,0,.81,0,.23,.77,0,.65,.6,0,.69,.03,.77,.83,.38,.95,.75,0,0,0,0,0,0,0,0,0,0,.39,.03,.01,0,.77,.01,.68,.38,.24,.57,0,0,0,.43,0,.01,.69,0,.04,0,0,0,.01,.86,.66,.42,.36,.83,0,0,0,0,.02,.81,0,.97,.5,0,.97,0,.31,0,0,0,0,.33,0,0,0,.3,.09,.86,0,0,.02,.34,0,.58,0,.99,.66,.01,.18,0,0,.07,0,0,.03,0,.01,.95,.09,.51,0,0,0,0,0,0,.03,0,.1,0,.75,0,0,0,.01,.27,.35,.57,0,0,0,.02,.19,.02,.43,0,.84,.18,.54,0,0,0,0,0,0,0,.17,0,.68,.05,0,0,.1,.01,0,0,0,.29,.08,0,.67,0,.21,.52,.51,.19,.91,.64,0,0,.64,.04,0,.11,0,.13,0,.04,.76,.19,.2,0,.88,0,0,.12,.31,0,0,0,.52,.27,0,.02,0,0,.13,0,.19,0,.07,0,.66,0,.36,.89,.52,.31,0,.45,.29,.99,0,.03,.31,0,0,0,0,.03,.11,0,.72,.05,.47,.98,.15,0,0,.26,0,0,.01,.64,.87,0,0,.17,0,.39,.12,0,.37,.25,0,0,.38,.83,0,.03,.06,0,0,.66,0,.07,.18,.03,0,.03,0,.01,.56,.02,.77,0,.38,.35,.89,.23,0,0,0,0,.29,0,0,0,0,0,.43,.44,.07,0,0,0,.8,.2,.19,0,0,0,0,.59,0,0,.01,.53,.67,.23,.04,.13,.09,.38,0,0,0,0,.13,.55,.15,.01,0,.56,.45,.1,0,0,.73,.46,0,.74,0,0,0,.76,0,.93,.28,0,0,0,0,0,.02,0,.81,0,0,.39,0,0,0,0,0,0,0,.53,0,0,.89,.98,0,0,0,0,0,0,0,0,.87,0,0,.91,0,0,.9,0,0,0,0,.67,.38,.06,0,0,.39,0,0,0,0,.31,.98,.87,.69,.03,0,.04,.11,0,.94,.2,0];export{a as pvalData};
