const a=[0,0,0,.69,0,.89,0,.67,0,.04,0,.43,.92,0,0,.98,.01,.4,.38,.61,.26,0,.78,0,0,0,0,.32,0,0,0,0,0,.2,.67,.14,0,0,0,0,.31,0,0,.61,.2,.01,.29,.03,.52,0,.01,.78,.07,0,0,0,0,.2,0,0,0,0,0,.95,.15,.01,0,0,.73,.87,.31,0,0,.02,0,.54,.15,0,0,.12,0,0,.69,0,.1,0,0,.45,0,0,.05,.2,0,0,.86,.48,0,0,.25,0,.65,0,0,.39,0,.27,.88,.43,0,0,.79,0,.28,0,.03,0,.47,0,0,0,.9,.25,.06,.71,.5,0,0,.12,.02,0,.55,0,.61,.34,.08,.22,.6,0,0,.6,0,.35,0,0,.95,.08,.49,.61,0,.13,0,.93,.81,.64,.63,.13,.18,.25,0,0,.5,0,.75,.01,0,0,0,0,.94,0,.99,.02,.76,.06,0,.01,.82,.24,0,0,.99,.71,.98,0,0,.55,.8,.92,.21,.03,.35,.12,.56,0,0,0,0,.01,.61,0,0,0,0,.89,0,0,.33,0,.01,.71,.48,0,.05,0,.28,0,.4,.32,0,.02,0,0,0,0,0,0,.81,0,.02,.01,.56,.35,0,0,.05,.51,0,.4,.23,.82,0,0,.98,.59,.02,.06,.36,.27,.33,.63,.43,.23,0,.06,0,.89,.93,0,.29,0,.66,.09,0,0,.82,0,.04,0,.53,0,.08,0,0,0,0,.24,.75,0,0,.42,.05,0,0,0,0,0,.02,0,.1,.02,.29,0,0,.28,.12,0,.28,0,.72,.34,.49,0,.01,.38,.74,0,.19,0,.05,.37,0,.42,.36,.96,.06,.39,.22,.04,0,.09,0,.15,0,0,.72,0,0,.21,.69,0,0,0,.21,.16,0,.55,.04,0,.01,0,0,0,.12,.73,0,0,.27,0,0,.01,0,.04,.44,0,0,0,0,.2,0,0,0,.29,.01,.78,.18,0,.1,0,0,.2,.29,.05,0,.93,0,.01,0,0,.55,.01,.69,.93,.8,.26,.67,.01,.03,.81,0,0,0,.56,.55,.03,.03,0,0,.07,.4,.98,.19,.01,0,0,.04,.77,0,0,0,0,0,0,.07,0,.41,.6,0,0,.03,.02,.81,0,.25,.96,0,0,0,.76,0,0,.72,.55,0,.89,.57,0,.01,0,0,0,0,0,0,.19,.02,0,0,0,.03,0,.01,0,0,.23,.53,.78,.01,0,.16,0,0,0,0,0,.05,.5,0,.25,0,0,.35,0,0,.77,.01,0,0,.2,0,0,0,0,0,0,.02,.14,0,0,0,0,.56,.38,.64,0,0,0,.43,.49,0,.26,.01,.79,0,0,0,.2,.27,0,0,0,0,.14,0,.63,.04,.01,.85,.31,0,0,.18,0,.55,.49,0,.73,.96,.03,.65,0,.08,.54,.44,.12,.95,.68,.02,.03,.35,.96,.88,.01,.92,.4,.14,.39,.6,.42,0,0,.01,0,0,0,0,.71,0,.52,.01,.49,0,.12,0,.63,.88,.2,.59,.83,.37,.26,0,0,.02,.01,0,0,.47,0,.01,.01,.07,.63,0,.02,0,0,0,0,.13,0,.54,.69,.93,0,.86,0,0,0,0,.47,0,0,0,.08,0,0,.22,.02,.57,.01,.78,0,.69,.14,.36,.76,0,.08,.89,.55,.87,.26,.13,.3,.2,0,0,.03,0,.01,.96,0,0,0,.1,0,0,.7,.07,0,.26,0,0,.86,0,0,.36,0,.88,0,.22,0,.35,0,0,.75,0,.63,.61,.5,0,0,0,.09,.01,.83,.23,.02,0,0,0,.45,.19,0,0,.06,0,0,0,.28,1,.92,0,0,.23,.08,0,0,0,.12,.32,.03,.48,.64,.8,.3,.14,.1,0,0,0,.09,0,0,.51,.51,.15,0,.11,.01,0,.25,.54,.59,.31,.82,.05,.89,.05,.43,.26,0,0,.3,0,0,0,0,0,0,0,.14,0,.48,0,.52,0,.33,.3,.33,0,.01,0,.32,.88,0,0,0,.13,0,.01,.13,.1,0,0,.8,.22,0,0,.7,.01,0,0,0,0,0,0,.43,.49,.02,.48,.24,0,.5,0,.01,.09,.89,0,0,0,.07,.03,0,0,0,0,.01,.68,.01,0,.33,0,0,0,0,0,0,.02,0,.26,0,0,0,0,0,0,0,.02,.76,.55,.01,0,0,0,.62,0,.34,.17,0,.73,0,.48,0,.67,0,.11,.13,.45,.38,.56,0,.34,.11,.73,.09,.69,.5,.17,0,0,0,.73,.88,0,0,.19,.02,0,.2,.69,.01,0,.24,.48,.02,.05,.06,.02,.07,0,0,.16,0,.82,.72,0,.92,.01,.22,.14,.75,.29,.01,.36,.03,0,.28,.11,.46,.01,0,.5,0,0,.64,.02,0,0,.49,0,0,0,0,0,.88,0,.1,0,0,.55,.2,.61,.49,.6,0,.05,.22,.89,.82,.7,.29,0,.09,0,0,.25,.82,.19,.42,.56,.91,0,0,0,0,.83,0,0,.01,.16,0,0,0,0,0,0,.74,0,0,.5,.62,.3,0,.91,.42,.73,0,.54,.13,.9,.94,.04,.08,.44,0,0,.27,0,.42,0,.58,.81,.39,0,.19,.77,.06,0,.47,.35,.25,0,0,0,.53,.61,.02,.03,0,0,.28,0,.22,.79,.91,.04,.98,.56,0,0,.04,.02,.13,.5,.08,.46,.87,.14,.38,.5,.8,.85,.27,.34,.3,.14,.1,.27,.37,.47,0,.05,.16,.84,.09,0,0,.77,.29,0,.78,0,0,.5,0,0,.64,.72,.68,.75,.44,.14,0,.63,0,0,.89,0,.77,.03,0,.26,.59,.18,.01,.77,.02,.02,0,.51,0,.01,.38,0,.01,0,.4,.46,0,.03,.33,.07,0,0,0,0,0,0,.88,0,0,0,0,.58,0,0,.38,0,0,.79,0,.63,.82,0,.54,.06,.03,0,0,.29,.06,0,0,0,0,.48,.01,0,0,.14,0,.04,0,0,0,0,.74,0,.16,.49,0,0,.67,0,.07,.46,0,.04,0,.02,0,0,.96,0,.75,.17,0,.05,.37,.94,0,0,.03,.24,0,0,.79,.32,.59,0,.12,.71,0,0,.98,0,.07,0,.03,.74,.04,0,0,.56,.05,.9,.49,.46,.79,0,0,.27,.01,0,.12,0,0,0,0,.82,.86,0,0,0,.15,0,.39,0,.53,.53,.08,.58,.19,0,.59,0,0,.08,0,0,.01,0,.81,0,.28,.07,0,0,0,.1,0,.11,0,0,0,.25,0,0,.92,0,.44,.03,.04,0,.01,.5,0,0,.92,.48,0,0,.95,.83,.02,.63,.02,0,.1,.07,.05,0,.37,0,0,0,.8,.48,.98,0,0,0,.34,.81,.22,.2,.04,0,.95,0,.22,.93,.09,.73,.02,0,0,.5,0,0,0,.02,.1,.59,0,0,0,0,.41,0,.52,0,.02,.31,.01,0,0,.33,.35,0,.53,0,.03,0,.97,0,.32,.45,.64,.3,0,0,0,.07,.04,.1,0,0,0,0,0,.06,.11,.23,0,0,.93,0,.07,0,0,0,0,.47,.44,.01,0,0,.37,0,.35,.25,0,.53,.47,0,0,0,.01,.94,0,.01,0,.01,.03,.02,.99,.92,0,0,.1,.48,0,.88,.84,.65,0,.15,.16,.01,.05,0,0,.04,.03,.12,0,.39,.58,0,0,.92,.03,0,.3,0,0,.17,0,0,.45,.66,0,0,0,0,0,.02,0,.88,0,.03,.47,.14,.35,.26,.98,0,0,.43,0,0,0,0,.63,.67,.02,0,.01,.63,.27,.73,0,0,0,.01,0,0,.31,0,0,.08,.24,.89,0,.4,.35,.03,.7,0,.49,.52,.03,.07,.19,0,.44,.43,0,.05,.24,0,0,0,0,.7,0,0,.49,0,0,0,0,.83,.3,.91,.91,.15,.34,0,.01,.4,0,0,0,0,.08,.2,.79,.13,.04,.03,.01,0,0,.03,.95,.41,.04,0,.12,0,.05,0,0,0,0,0,.35,.25,.01,.73,0,.31,0,0,0,.41,0,.01,0,0,.36,.32,0,.46,.84,.21,0,.44,.82,0,0,.03,.01,0,0,.04,0,0,0,.12,0,.84,.06,0,.05,0,0,.01,0,0,.04,.5,0,0,.65,.04,.01,.16,0,.02,0,0,.3,.01,0,0,0,0,.01,0,0,0,0,.87,.04,0,.6,0,.06,0,0,.83,0,0,0,0,0,.19,.01,0,0,0,.38,0,0,0,.97,0,0,0,0,.66,0,.16,.03,0,0,.01,.55,0,0,0,0,.04,0,0,0,0,.43,.01,.14,0,.28,0,.16,.2,0,.64,0,0,0,0,0,.16,.2,0,0,0,0,.21,.09,0,.07,0,0,0,0,.87,0,.09,0,.1,.19,.44,.59,.4,0,0,.1,0,.37,0,.22,.32,0,0,0,0,0,.1,.01,1,.06,0,.99,.16,0,0,0,.08,0,.18,.49,0,.22,0,.85,.39,0,0,0,0,.85,0,0,0,0,0,0,0,0,0,.41,0,.86,0,0,.44,0,.38,.09,.04,.03,.03,0,.03,.52,.92,.06,.11,.21,.73,0,0,0,.45,0,0,0,0,0,0,.57,.47,.09,0,.27,0,.36,.01,.01,.21,0,0,0,.4,0,0,.13,0,.97,0,0,0,0,.14,.87,.1,.46,.09,0,0,0,.23,0,.05,0,.99,.13,.07,.52,0,.01,0,0,0,0,.94,0,0,0,.01,.01,.93,0,0,.3,.16,0,.49,.03,.71,.77,.05,.54,0,0,.28,0,0,.76,0,0,0,0,.6,0,0,0,0,.73,0,0,0,0,0,0,0,0,0,0,0,0,.01,0,0,0,.04,.01,.3,.06,0,.95,0,.59,0,0,0,0,0,0,0,.65,0,.79,.03,0,.41,.54,.25,0,0,0,0,0,0,0,0,.12,.8,.47,.57,.81,.61,0,.01,.89,.02,0,.33,0,0,.65,.09,.33,.13,.16,0,.92,.24,0,0,0,0,0,0,0,.42,0,.22,.9,0,0,.31,.01,0,.13,0,.52,0,.99,0,0,.39,.01,.07,.17,.52,0,.23,.23,0,0,0,0,.01,.45,0,0,0,.28,.65,.03,0,0,.54,0,0,0,0,.77,0,0,.07,.54,0,0,0,.51,0,0,.01,.83,.14,0,.01,.54,0,.11,.55,0,.07,.91,.14,0,0,0,.05,.49,.39,.98,0,.01,.56,.44,0,.64,0,0,0,.21,0,0,0,0,0,.32,.46,0,0,.17,.78,.72,.55,.18,0,0,.01,0,.11,.28,0,.13,.01,.91,.31,0,.01,.42,.49,0,0,0,0,0,.87,0,.86,.07,.17,.78,.8,0,0,.04,0,0,0,0,.01,0,0,0,0,.96,0,0,0,0,0,.53,0,.66,0,0,.16,0,0,0,0,0,0,0,.31,0,.05,0,.15,0,0,0,0,0,.02,0,0,.86,0,0,.73,0,0,.86,0,0,0,0,.05,.8,.38,.56,0,.33,0,0,0,.78,.04,.42,.01,.57,.46,0,.98,.75,0,.43,.29,0];export{a as pvalData};
