const a=[0,.54,.85,.16,.52,0,.66,.01,.89,.61,.51,.02,0,.57,.88,.03,.04,.74,0,0,.77,.95,.87,.99,.82,.92,.72,.46,.2,.45,.48,.95,.87,0,.12,.01,.3,.8,.03,.89,.71,.9,.06,.07,0,.8,.36,0,.97,.26,.25,0,.18,.65,.22,.85,.33,0,.53,.66,.02,.73,.72,.36,.59,.89,.63,.41,.96,.49,.79,.64,.44,.05,.83,.01,.08,.02,.97,.04,.3,.81,.83,.86,.66,.07,.8,.06,.69,.43,.29,.08,.54,.27,.29,0,.56,0,.82,.01,.57,.47,.57,.95,.78,0,.36,.22,.45,.71,0,.25,.12,.02,.76,.95,.44,.54,.47,.89,.16,.09,0,.53,.1,.38,.72,.05,.24,.71,.32,.91,.82,.42,0,0,.33,.06,.79,0,.98,0,.99,.8,0,.16,.21,.03,.61,.82,.46,.35,.17,0,.1,.22,.23,0,.19,.86,.77,.61,.08,.2,.43,.17,.78,.43,.14,.91,0,.51,.18,.36,.6,.53,.87,.32,.01,.82,.95,.15,.38,.16,.35,0,0,0,.25,.01,.34,.02,0,.13,.56,.65,.82,.01,0,.97,.95,.78,.69,0,.9,.65,.51,.65,.31,0,.27,.93,.08,.74,0,.15,.33,.38,.4,.26,.59,.56,.69,.45,.15,.78,.1,.48,.05,.91,.72,.47,.39,.82,0,0,.51,.64,.62,.86,.75,.62,.96,.34,.16,.65,.66,.31,.05,.33,.18,.02,.79,.13,.88,.01,.01,.37,.99,.68,.57,.27,.45,.91,.16,.81,.72,.99,.37,0,.04,0,.96,.67,.26,.05,.59,.01,.65,.92,.66,.07,.63,.05,.57,.68,.01,.52,.03,.55,.88,.04,.73,.88,.33,.09,.89,0,.07,.79,.2,.54,.56,.18,.02,.14,.28,.52,.55,.51,.94,.1,0,0,.75,.79,.71,.45,.99,.05,.77,.5,.87,.8,.62,.55,.51,.66,.98,.48,.95,.92,.97,.01,.46,.05,.68,.38,.99,.79,.29,.84,.07,.18,.95,.71,.18,.2,.91,.41,.62,0,0,.45,.98,.85,.81,.95,.81,.82,.03,.24,.35,.02,.6,.08,0,.72,.09,.69,.64,.38,.96,0,.01,.02,.02,.9,.87,.04,.08,.99,.72,.54,.57,.82,.76,.33,.51,.56,.98,0,.43,.2,.05,.59,.79,.43,.92,.85,.2,.96,.85,.33,.82,.03,.87,.85,.86,.92,.24,.53,.14,.76,.13,0,.71,.91,.47,0,0,.02,.04,0,.43,.96,.45,.01,.66,.81,.18,.01,.59,0,.23,.78,.89,.93,.98,0,.79,.97,.99,0,.31,.51,.69,.28,0,.01,.49,.54,.38,.22,.73,.62,.16,.71,0,.11,.8,.69,.01,0,.43,.99,.38,.01,.08,.63,.44,.86,0,0,1,.83,.42,.51,.46,.13,.43,.86,.48,.4,.58,.59,.5,.82,.78,.87,.41,.02,.53,.45,.15,.99,.39,.09,.72,.67,.58,.22,.5,.58,.71,.57,0,.51,.45,.12,.7,.7,.87,.28,.42,.72,0,.47,.01,.67,.78,.87,.04,.11,.2,0,.47,0,.56,.26,.52,.31,.66,.34,0,0,.62,.32,.11,.27,.48,.13,0,.29,.26,.28,0,.19,.78,.46,.02,.84,.95,.49,.83,0,.42,.61,.73,.92,.67,.83,.25,.16,.73,.12,.98,.05,0,0,.92,.88,.3,.99,.72,.87,.08,.14,.15,.75,.07,0,.79,.39,.92,.71,.72,.3,.16,.57,.06,.41,.32,.93,.93,0,.54,.36,0,.98,.74,.7,.84,0,.96,.25,.73,.57,.01,.32,.87,.14,0,0,0,.12,.45,.35,.39,0,.59,.31,.4,.7,.16,0,.6,.68,.68,.93,0,.28,.03,.32,.51,.37,.61,.69,.01,.02,0,.82,.54,.04,.57,.93,.42,.92,0,.92,0,.01,.95,.92,.79,.48,.7,.59,.02,.41,.8,.71,.88,.1,.6,0,.2,.33,.38,.34,.93,.06,.89,.37,.22,.62,.82,.65,.72,0,.15,.15,.92,.05,0,0,.02,.68,.75,.04,0,.78,.6,0,0,.93,0,0,.72,.01,.82,.45,.07,.06,.53,.02,.02,.02,0,.56,.93,.43,.17,.57,.1,.88,.99,.74,.15,.65,.12,.82,.22,.01,.7,.01,.03,.75,0,.94,0,.66,.6,.31,.59,.98,.97,.15,.88,.01,.68,.69,.7,.18,.25,0,.84,.96,.24,.08,0,.27,.78,0,.83,.04,.12,.23,0,.59,.5,.59,.67,.64,.51,.77,.81,0,.36,0,.52,.32,.8,0,.99,0,.44,.12,.58,.89,.71,.07,.01,.71,.98,.66,.63,.01,.93,.07,.59,.27,.81,.68,.73,.68,.64,.71,.84,.94,.1,.01,.03,.42,.01,.29,.52,.29,.38,.15,.42,.45,.5,.55,.26,.56,.05,.41,.77,.98,0,0,.78,0,.01,.79,.3,.03,.91,.03,.56,.57,0,.5,.34,.83,.19,.01,0,.49,.15,.58,0,.65,.26,.71,.54,.43,.64,.07,.97,.33,.06,.1,.51,.04,.05,.13,.09,.27,.17,.8,.11,.43,.11,.88,.93,0,.6,.87,.92,.03,.13,.98,.1,.63,.24,.82,.77,0,.38,.12,.16,.83,.06,.37,.02,.39,.62,.75,.35,0,.02,.08,.45,0,.02,0,.98,.39,.62,.99,.53,.6,0,.92,0,.79,0,.61,0,.26,.17,.38,.93,.81,0,.77,.99,.14,.02,.04,.37,.59,.99,.92,0,.93,.76,.93,.02,.72,.13,.87,.25,.98,.17,.49,0,.91,0,.41,.48,.07,.54,.93,.38,.41,.61,.69,.86,.44,.05,.25,.36,.89,.99,.98,.74,.57,.58,.55,.57,.97,.98,.66,.9,.41,.08,.27,0,0,.94,.68,.98,.78,.67,.79,.58,.67,.89,.28,.37,.2,.68,.06,.84,0,0,0,.12,.93,.59,.92,.2,.5,.76,.02,.94,.02,.45,.16,.89,.03,0,.41,0,.03,.05,0,.74,0,.6,.08,.01,.11,.45,0,.15,.24,.9,.03,.2,.71,.13,.02,.67,.34,0,.11,.25,.01,.19,.33,.12,.15,.45,.63,.55,.34,.58,.87,0,.28,.04,.91,.03,.86,.3,.22,.31,.21,.84,.39,0,.03,.55,.03,.14,.88,.05,0,.15,.69,.48,.15,.29,.87,.53,.46,.37,0,0,.91,.96,.94,.79,.84,0,.86,0,.68,.24,.88,0,.62,.53,.01,.39,.87,.97,.59,.9,.52,.81,.69,.82,.05,.66,.93,.02,.49,0,.3,.7,.02,.4,.14,.6,.1,0,.24,.57,.03,.77,0,.06,.85,.06,.57,.38,.54,0,0,.38,0,.51,.38,.26,.86,.89,.68,.91,.01,0,.58,.82,.54,0,.27,.95,0,.02,.56,.58,0,.57,.16,.65,.42,0,.02,0,.91,.01,.7,0,.83,0,0,.75,.28,0,.67,.21,.85,.83,.44,.79,.51,.07,0,.09,.35,.67,.15,.49,.07,.59,.72,.78,.23,0,.99,.78,0,.55,.49,.77,.91,.41,.94,.42,.05,.93,0,.52,.57,.93,.62,.11,0,0,.69,.63,.71,.18,.37,.71,.2,.66,0,0,.78,.58,.94,0,.74,.73,.1,.01,.78,.54,0,0,.01,0,.06,.06,.23,.33,.26,1,.81,.79,.22,.12,.02,0,0,.7,.95,.73,.02,0,.69,0,.94,.94,0,.9,.26,0,.03,0,0,.5,.01,.2,.59,0,1,0,.94,0,0,.22,.6,.12,0,.79,.84,.37,.51,.44,.7,.61,0,.3,.46,.45,0,.47,.14,.29,0,.58,1,.01,0,.08,.11,.96,0,.9,.62,.24,.74,.56,.91,.9,.08,0,.46,.52,.22,0,.52,.84,.58,.84,.58,.29,.97,0,.71,.17,.5,.62,0,.4,.32,0,.8,.9,0,.88,.82,.63,.13,.36,.73,.67,.53,.46,.8,.12,.01,.28,.18,.77,0,.04,.33,.87,.11,.05,.29,0,.81,.04,.78,.32,.31,0,.48,.4,.53,.51,.93,.15,.31,0,.85,.95,.98,.19,.46,.09,.21,.48,.4,.24,.95,0,.34,.76,.88,.05,.49,.54,.71,.8,.43,.88,.94,0,.31,.14,.69,0,.71,.02,.64,.84,.37,.43,0,.8,.54,.88,.29,.43,.9,.71,.32,0,.55,.09,.02,.72,.71,0,.46,.23,.77,.37,.88,.07,.23,.73,0,.01,.16,.6,.24,.69,.76,.12,.43,0,.28,.93,.77,.69,.68,.1,0,.11,0,.67,.75,.54,.83,0,.71,.44,.45,.69,.33,0,.44,.63,.91,.89,.54,.77,.02,.62,0,.72,.21,.01,0,.12,.65,.54,.04,.44,.47,.32,.13,.71,.89,.79,.21,.71,.74,.68,.03,.61,.95,.04,.35,.77,.32,.92,.51,.33,.06,.91,.66,.54,.18,.46,.42,.04,.01,1,.24,1,.2,.39,.13,.46,.92,.65,.62,.01,0,.89,.71,.53,.59,.01,.01,.5,.7,.38,.17,.85,.55,.55,.03,.34,.5,.28,0,.08,.36,.12,.5,.67,.25,.44,.36,.66,.88,.17,.82,.57,.78,.71,.98,.88,.83,.02,0,.81,.96,.28,.59,.86,.64,0,.7,.51,.5,.62,.15,.15,.09,.18,.47,.3,.12,.05,.34,.63,.13,.84,.56,.61,.88,0,.68,.47,.88,1,.5,.97,.98,.93,.73,.5,.32,.94,.59,.62,.45,.94,.77,.79,.6,.41,.84,.8,.76,.16,.87,.38,.93,.36,.79,.89,.49,.52,.29,.61,.33,.6,.59,.02,.83,.88,.03,.21,.94,.51,.71,0,.87,.16,.02,.31,.24,.02,.05,.78,.53,.86,.46,.41,.01,.55,.02,.28,.82,.69,.5,.67,.92,.37,0,.88,.5,.86,.25,.57,.72,.21,.98,0,.59,.27,.09,.89,.02,.45,.44,.09,.88,.88,.73,.85,.98,.93,.82,.93,.46,.53,.35,.76,.71,.53,0,.64,0,.5,.44,.31,.92,.72,.12,.67,.78,.23,.47,.67,.98,.04,.94,.58,.78,.5,.97,.84,.95,.28,.78,.98,.62,.5,.9,.87,.2,.12,.04,.94,.56,.65,.55,.25,.08,.11,.96,.41,.56,.37,.79,.65,.51,.79,.85,.81,.12,.53,0,0,.9,.88,.16,.13,.53,.78,.56,.74,.6,.27,.57,0,.03,.77,0,.96,.52,.96,.69,.75,.92,.19,.88,.82,.76,.34,.33,.99,.96,.7,.1,.27,.97,.13,.24,.22,.33,.84,.03,.81,.73,.01,.88,.82,.01,.63,.93,.24,.59,.62,.98,.69,.89,.54,.41,.8,.75,.58,.62,.67,0,.77,.94,.54,.15,.53,.81,.12,.89,.8,.38,.22,.97,.52,.72,.99,.4,.25,0,.42,.55,.86,1,.64,.89,.55,.43,.74,.84,.84,.56,.95,.27,0,.69,.8,.52,.11,.06,.34,.4,.47,.02,.56,.61,.97,0,0,.84,.44,.92,.11,.92,0,.65,.17,.69,.22,.47,.79,.1,.6,.7,.78,.91,.13,.07,.85,.43,.94,0,.92,.48,0,.72,.71,.02,.66,.75,.98,.51,.89,.35,.75,.17,.16,.59,.54,.35,.35,.45,0,.27,0,.08,.36,.67,.43,.59,.76,.22,.79,.65,.33,0,.98,.01,.78,.51,0,.06,.99,.11,.13,0,.47,.87,.35,.78,.6,.07,.52,.05,.16,.41,.17,.29,.01,.76,0,.25,.51,.3,0,.72,.26,0,.45,.46,0,.32,.26,.37,.11,.99,.04,.35,0,0,.71,.17,.42,.88,.89,.09,.49,.48,.65,.87,.98,0,.61,.78,.51,.04,.04,0,.09,0,.99,.36,.54,.7,.86,.22,.3,.12,.95,0,.05,.41,0,.06,.15,.58,.83,.28,.45,.73,.04,.07,.47,.49,.5,.07,.55,.95,.99,.01,.08,.17,.8,.7,0,.64,.69,.87,.12,.01,.67,0,.98,.59,.92,0,.52,.04,.99,.26,.44,.47,.92,.63,.76,.69,.95,.29,.02,.88,.09,.95,.39,.86,.8,.81,.62,.42,.45,.59,.57,.53,.74,.69,0,.77,.84,.11,.58,.16,.36,.43,.68,.13,.58,.22,.52,.46,.45,.01,.83,.79,.36,.02,.16,0,0,.11,.36,.64,.93,0,.06,.46];export{a as pvalData};
