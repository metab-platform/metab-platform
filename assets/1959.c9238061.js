const a=[0,0,0,.33,0,.42,.01,.37,0,0,0,.57,.99,0,0,.98,0,.94,.02,.68,.61,0,.63,0,0,0,.01,.9,.01,.08,0,0,0,.12,.9,.21,0,0,0,0,.75,0,0,.55,.3,0,.22,.01,.62,.02,0,.53,0,0,0,0,0,.42,0,0,0,0,0,.5,.22,.03,0,0,.78,.91,.71,0,0,.05,0,.6,.37,.01,0,.22,0,0,.63,0,.04,0,0,.72,0,0,.59,.53,.08,0,.59,.11,0,.15,0,0,.46,0,0,.18,0,.68,.72,.24,0,0,.54,.01,.82,0,0,0,.22,0,0,0,.67,.16,0,.09,.7,0,0,0,.04,0,.02,0,.32,.29,0,.23,.47,.03,.02,.86,0,.25,0,0,.89,.2,.74,.04,0,.05,0,.68,.99,.83,.2,.44,.95,.84,.09,0,.06,0,.86,.1,.02,.01,0,0,.06,0,.89,.02,.13,0,0,.03,.86,.61,.04,0,.8,.54,.94,0,0,.43,.27,.3,.61,.02,.22,.63,.63,0,0,0,0,0,.87,0,0,0,0,.86,0,0,.69,.06,.08,.38,.1,0,.2,0,.44,.01,.77,.86,.03,.08,0,0,0,0,0,0,.17,.01,.1,.5,.72,.12,0,0,.06,.55,0,0,.8,.37,.01,0,.04,.02,.2,.05,.16,.07,.15,.61,.84,.01,0,.71,0,.58,.44,0,.45,0,.07,.53,0,0,.04,0,.13,0,.13,0,.2,0,0,0,0,.93,.83,.02,0,.51,.61,.17,0,0,.39,0,.65,0,.48,.01,.05,.07,0,.18,.84,0,0,0,.3,.03,.88,0,.01,.67,.33,0,.04,0,.36,0,0,.34,.1,1,.46,.04,.2,.93,0,0,0,.08,0,0,.61,.29,0,.04,.35,.14,0,0,.35,.29,0,.82,.12,0,.05,0,0,0,.04,.55,0,0,.22,.25,0,.48,0,0,.24,.37,0,0,.02,.91,0,0,0,.07,.79,.71,.22,0,.48,0,.01,.16,.51,.03,0,.04,.03,.2,.01,0,.89,.36,.5,.9,.5,.09,.3,.03,.28,.57,0,0,0,.69,.2,.72,.66,0,0,.29,.09,.8,.06,.69,0,0,.39,.54,0,0,0,0,0,0,0,0,.5,.86,0,0,.51,0,.65,0,.08,.94,0,0,0,.96,.15,0,.02,.01,0,.68,.93,0,.06,0,0,0,0,0,0,.17,0,0,0,0,.13,0,0,0,0,.25,.47,.09,.01,0,.55,0,0,0,0,.01,.45,.64,0,.16,0,0,.08,0,0,.14,.59,0,0,.06,0,.03,0,0,0,0,0,.46,0,0,0,0,.41,.51,.16,0,0,0,.9,.92,0,0,.42,.27,0,0,0,.01,.16,0,0,0,0,.34,0,.67,0,.01,.76,.86,.04,0,.39,0,.14,.28,0,.82,.19,0,.14,0,.68,.81,.36,.08,.74,.46,.26,.04,0,.54,.3,.47,.2,.91,.01,.01,.55,.8,0,.72,.45,0,0,0,0,.18,0,.01,.02,.38,0,.07,.13,.11,.88,.25,.34,.81,.61,.38,0,0,0,0,0,0,.18,0,.07,.06,.02,.07,0,.95,0,0,0,0,.02,0,.63,.31,.66,0,.15,0,0,0,0,.66,0,0,0,.09,0,.01,.53,0,.09,.95,.4,0,.69,.63,.08,.97,0,.05,.62,.83,.19,.03,.67,.4,.26,.03,0,.94,0,.01,.61,0,0,.09,.05,0,0,.17,.02,0,.55,0,0,.61,0,0,0,0,.94,0,.6,0,.47,0,0,.6,0,.68,.07,.83,0,0,0,.7,.04,.51,.3,.7,0,0,0,.78,.32,.05,0,0,0,0,0,.31,.82,0,0,0,.3,.05,0,0,0,0,.62,0,.01,.12,.99,.04,0,.12,0,0,0,.84,0,0,.44,.95,.07,0,.68,.04,0,.02,.1,.73,.1,.42,.54,.9,.16,.09,.95,0,0,.62,0,0,0,0,.01,0,0,.09,0,.94,0,.3,0,.1,.97,.36,0,0,0,.79,.76,0,0,0,.79,0,.18,.03,.07,.02,0,.24,.03,0,0,.91,0,0,0,0,0,0,0,.03,.64,.45,0,.38,0,.53,.42,0,.1,.58,0,.08,0,.02,.48,0,0,0,0,.06,.22,.01,0,.13,0,0,0,.01,0,0,0,0,.98,0,0,0,0,0,0,0,.27,.7,.54,.01,0,0,0,.26,0,.19,.22,0,.55,.01,.06,0,.56,0,.18,.12,.23,.88,.09,0,.91,.02,.54,.24,.66,.77,.02,0,0,0,.6,.03,.02,0,.04,.01,0,.88,.26,.02,0,.29,.79,.51,.59,.84,.2,.02,0,0,.02,0,0,.07,0,.84,.91,.01,0,.73,.97,.45,.05,.55,.12,.63,.32,.5,.07,0,.65,0,0,.72,.84,.01,0,.21,0,0,0,0,0,.84,0,.05,0,0,.3,.21,.8,.79,.67,0,.02,.62,.56,.3,.88,.69,.02,.02,0,.43,.44,.11,0,.92,.03,.58,0,0,0,0,.85,0,0,.42,.7,0,0,0,0,0,.01,.25,0,0,.8,.21,.75,0,.15,.69,.63,0,.55,.09,.11,.74,.4,.01,.57,0,0,.17,0,.31,0,.25,.37,.34,0,.3,.82,.3,0,.24,.54,0,0,0,0,.57,.38,.97,.15,0,0,.02,0,.86,.95,.07,0,.45,.76,.01,0,.01,.56,.08,.83,.84,.52,.98,.31,.25,.66,.5,.4,.61,.29,.04,.39,.08,.09,.54,.64,0,.91,.65,.1,.05,0,0,0,.27,0,.28,0,0,.09,.72,0,.96,.12,.54,.05,.71,.18,.27,.86,0,0,.26,0,.97,.01,0,.38,.41,.7,.64,.71,.01,.07,0,.73,0,.01,.45,0,.09,.01,.98,.09,0,.43,.57,.9,0,.01,.08,.01,0,0,.51,.14,.02,0,0,.07,0,0,.02,0,0,.54,0,.41,.49,.02,.58,.05,.01,0,0,.3,0,0,0,0,0,.06,.9,0,0,0,0,0,0,0,0,0,.94,0,.12,.14,.01,0,.72,.01,.06,.01,0,.3,0,.01,0,.1,.05,0,.95,.71,0,.84,.69,.05,0,0,.02,.55,0,0,.03,.52,0,0,.24,.8,0,0,.97,0,0,0,.24,.28,0,.02,0,.28,.91,.99,.59,.44,.98,0,0,.08,.07,0,.1,0,0,0,0,.65,.34,0,.36,0,.03,0,.25,0,.49,.01,.02,.55,.1,0,.25,0,0,.47,0,.67,0,0,.3,0,.61,.02,0,0,0,.01,0,.9,0,.37,0,0,0,0,.23,0,.13,.07,0,0,.93,.73,0,0,.32,.01,0,0,1,.74,.23,.92,.14,.38,.99,.17,0,0,.38,0,0,0,.57,.54,.99,0,0,0,.14,.8,.26,.86,.03,0,.96,0,.14,.2,.56,.35,.15,0,0,.01,0,0,0,.12,0,.98,.01,0,0,.01,.92,0,.69,0,0,0,.01,0,0,.02,.22,0,.14,0,.67,.04,.76,0,.14,.81,.38,.35,0,0,0,0,.55,.01,0,0,0,0,0,.08,.24,.21,0,.02,.01,0,.69,0,0,0,0,.05,.71,.04,0,0,.3,.04,.06,.01,0,.4,.06,0,0,0,.05,.87,0,0,0,.9,.2,0,.95,.85,0,.01,.02,.51,0,.15,.99,.28,0,.62,.03,.01,.46,0,0,.83,.21,.65,.03,.04,.54,0,0,.3,0,0,.07,0,.16,.76,.05,0,.49,.7,0,.13,0,0,0,.04,0,.76,0,0,.46,.2,0,.03,1,0,0,.7,0,.16,0,0,.25,.02,.01,0,0,.33,.17,.06,0,0,0,.17,.01,0,.02,0,0,.15,.31,.41,0,.79,.2,.26,.74,0,.7,.18,.13,.76,.15,0,.61,.27,0,.2,.87,0,.02,0,0,.44,.03,.02,.74,0,0,0,0,.68,.01,.88,.03,.26,.01,0,0,.22,0,0,0,0,.99,.14,.88,.18,.83,.02,.02,0,0,.01,.25,.01,0,.25,.06,0,.07,0,.01,0,0,0,.25,.46,0,.54,0,.02,0,0,.06,.54,0,0,0,.01,.41,.63,0,.27,.65,.18,0,.55,.67,0,.08,0,0,0,.01,.9,0,0,0,.41,0,.19,.11,0,.07,0,0,.54,.09,0,0,.77,.1,0,.68,.03,.01,.03,0,.19,0,0,.82,.28,0,0,0,0,.31,0,0,0,0,.03,.11,0,.19,0,.82,0,0,.59,.17,0,0,0,0,.07,.11,0,0,0,.75,0,0,0,.85,0,0,0,0,.65,0,.79,.01,0,0,0,.58,0,0,0,.02,.02,0,0,0,0,.06,.05,.44,0,.47,0,.24,.02,0,.4,0,0,.05,0,0,.33,.22,0,.01,0,0,.08,.13,0,.01,0,0,.01,0,.2,0,.12,0,.08,.64,.63,.17,.2,0,0,.38,0,.02,0,.25,.41,0,0,0,0,0,.07,.01,.21,.04,0,.92,.03,0,0,0,.43,0,.04,.51,0,.9,0,.17,.09,0,0,0,0,.96,0,0,0,0,0,0,0,0,0,.36,0,.73,0,0,.87,0,.16,.26,0,.01,.09,0,.09,.08,.84,.02,.89,.43,.9,0,0,0,.02,0,0,0,0,0,0,.83,.18,.17,0,.54,0,.44,0,0,.15,0,0,0,.16,0,0,.07,0,.77,0,0,0,0,.12,.67,.22,.6,.21,0,0,0,0,0,.01,0,.99,.79,.01,.91,0,.05,0,0,0,0,.36,0,0,0,.12,.03,.98,0,0,.14,.99,0,.66,0,.73,.54,.02,.78,0,0,.13,0,0,.02,0,0,.01,0,.47,0,0,0,0,.03,0,0,0,0,0,.01,0,0,0,0,0,0,.38,0,0,0,.96,.04,.06,.9,0,.86,0,.87,0,0,0,0,0,0,0,.59,0,.72,.02,0,.52,.21,.65,0,0,0,0,.32,0,.02,0,.07,.53,.41,.69,.77,.77,0,0,.92,.02,0,.15,0,0,.25,.2,.67,.07,.02,0,.89,.67,0,.18,.02,0,0,0,0,.39,0,.06,.27,0,0,0,.04,0,.11,0,.94,0,.66,0,.02,.9,0,.59,.04,.87,0,.01,.11,0,0,0,0,.02,.85,0,.01,0,.22,.99,.06,0,0,.93,0,0,0,.01,.42,0,0,.11,.04,.03,0,0,.41,0,0,.01,.48,.45,0,.01,.5,0,.71,.79,0,.86,.52,.08,0,0,0,.91,.78,.03,.64,0,.02,.46,.95,.12,.18,0,0,0,.12,0,0,0,0,0,.95,.23,0,0,.41,.46,.76,.26,.03,0,0,0,0,.14,0,0,.01,.07,.45,.89,0,.03,.1,.39,0,0,0,0,0,.49,0,.05,.02,.98,.16,.51,0,0,.36,.24,0,.03,0,0,0,.02,0,.05,.29,0,0,0,0,0,.05,0,.32,0,0,.98,0,0,0,0,0,0,0,.12,0,0,0,.46,0,0,0,0,0,0,0,0,.84,0,0,.84,0,0,.5,0,0,0,0,.21,.62,.44,.11,0,.9,0,0,0,.01,.05,.53,.11,.09,.11,0,.78,.57,0,.68,.42,0];export{a as pvalData};
